package wealthwise.BE.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import wealthwise.BE.domain.dto.UserDto;
import wealthwise.BE.domain.dto.UserJoinRequest;
import wealthwise.BE.domain.dto.UserLoginRequest;
import wealthwise.BE.domain.entity.Comment;
import wealthwise.BE.domain.entity.User;
import wealthwise.BE.repository.CommentRepository;
import wealthwise.BE.repository.UserRepository;
import wealthwise.BE.util.JwtUtil;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final CommentRepository commentRepository;
    private final BCryptPasswordEncoder encoder;
    private final JwtUtil jwtUtil;  // JWT 유틸리티 클래스 주입

    public void validateJoinRequest(UserJoinRequest req, BindingResult bindingResult) {
        if (userRepository.existsByLoginId(req.getLoginId())) {
            bindingResult.addError(new FieldError("req", "loginId", "아이디가 중복됩니다."));
        }
        if (!req.getPassword().equals(req.getPasswordCheck())) {
            bindingResult.addError(new FieldError("req", "passwordCheck", "비밀번호가 일치하지 않습니다."));
        }
        if (userRepository.existsByNickname(req.getNickname())) {
            bindingResult.addError(new FieldError("req", "nickname", "닉네임이 중복됩니다."));
        }
    }

    @Transactional
    public String join(UserJoinRequest req) {
        User user = User.builder()
                .loginId(req.getLoginId())
                .password(encoder.encode(req.getPassword()))
                .nickname(req.getNickname())
                .build();
        userRepository.save(user);

        // JWT 토큰 생성 후 반환
        return jwtUtil.generateToken(user);
    }

    public String login(UserLoginRequest req) {
        User user = userRepository.findByLoginId(req.getLoginId())
                .orElse(null);

        if (user != null && encoder.matches(req.getPassword(), user.getPassword())) {
            // JWT 토큰 생성 후 반환
            return jwtUtil.generateToken(user);
        } else {
            return null;
        }
    }

    public User myInfo(String loginId) {
        return userRepository.findByLoginId(loginId).orElse(null);
    }

    public void validateEditRequest(UserDto dto, BindingResult bindingResult, String loginId) {
        User loginUser = userRepository.findByLoginId(loginId).orElse(null);

        if (loginUser == null) {
            bindingResult.addError(new FieldError("dto", "loginId", "유효하지 않은 사용자입니다."));
            return;
        }

        // 현재 비밀번호 검증
        if (!encoder.matches(dto.getNowPassword(), loginUser.getPassword())) {
            bindingResult.addError(new FieldError("dto", "nowPassword", "현재 비밀번호가 틀렸습니다."));
        }

        // 새 비밀번호 검증
        if (!dto.getNewPassword().equals(dto.getNewPasswordCheck())) {
            bindingResult.addError(new FieldError("dto", "newPasswordCheck", "비밀번호가 일치하지 않습니다."));
        }

        // 닉네임 검증
        if (!dto.getNickname().equals(loginUser.getNickname()) && userRepository.existsByNickname(dto.getNickname())) {
            bindingResult.addError(new FieldError("dto", "nickname", "닉네임이 중복됩니다."));
        }
    }

    @Transactional
    public void edit(UserDto dto, String loginId) {
        User loginUser = userRepository.findByLoginId(loginId).orElse(null);

        if (loginUser == null) {
            return;
        }

        if (dto.getNewPassword().isEmpty()) {
            loginUser.edit(loginUser.getPassword(), dto.getNickname());
        } else {
            loginUser.edit(encoder.encode(dto.getNewPassword()), dto.getNickname());
        }
    }

    @Transactional
    public Boolean delete(String loginId, String nowPassword) {
        User loginUser = userRepository.findByLoginId(loginId).orElse(null);

        if (loginUser == null) {
            return false;
        }

        if (encoder.matches(nowPassword, loginUser.getPassword())) {
            List<Comment> comments = commentRepository.findAllByUserLoginId(loginId);
            for (Comment comment : comments) {
                comment.getBoard().commentChange(comment.getBoard().getCommentCnt() - 1);
            }

            userRepository.delete(loginUser);
            return true;
        } else {
            return false;
        }
    }
    // 사용자 정보 반환 메서드 추가
    public UserDto getUserInfo(String loginId) {
        User user = userRepository.findByLoginId(loginId).orElse(null);
        if (user != null) {
            return UserDto.of(user);
        }
        return null;
    }
}
