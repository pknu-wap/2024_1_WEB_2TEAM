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

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final CommentRepository commentRepository;
    private final BCryptPasswordEncoder encoder;

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

    public void join(UserJoinRequest req) {
        userRepository.save(req.toEntity(encoder.encode(req.getPassword())));
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

    public boolean login(UserLoginRequest req) {
        User user = userRepository.findByLoginId(req.getLoginId()).orElse(null);
        return user != null && encoder.matches(req.getPassword(), user.getPassword());
    }
}
