package wealthwise.BE.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import wealthwise.BE.domain.entity.Comment;
import wealthwise.BE.repository.CommentRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    //private final LikeRepository likeRepository;
    private final CommentRepository commentRepository;
    private final BCryptPasswordEncoder encoder;

    public BindingResult joinValid(UserJoinRequest req, BindingResult bindingResult)
    {   // 아이디 검증
        if (req.getLoginId().isEmpty()) {
            bindingResult.addError(new FieldError("req", "loginId", "아이디가 비어있습니다."));
        } else if (req.getLoginId().length() > 10) {
            bindingResult.addError(new FieldError("req", "loginId", "아이디가 10자가 넘습니다."));
        } else if (userRepository.existsByLoginId(req.getLoginId())) {
            bindingResult.addError(new FieldError("req", "loginId", "아이디가 중복됩니다."));
        }
        // 비밀먼호 검증
        if (req.getPassword().isEmpty()) {
            bindingResult.addError(new FieldError("req", "password", "비밀번호가 비어있습니다."));
        }

        if (!req.getPassword().equals(req.getPasswordCheck())) {
            bindingResult.addError(new FieldError("req", "passwordCheck", "비밀번호가 일치하지 않습니다."));
        }
        // 닉네임 검증
        if (req.getNickname().isEmpty()) {
            bindingResult.addError(new FieldError("req", "nickname", "닉네임이 비어있습니다."));
        } else if (req.getNickname().length() > 10) {
            bindingResult.addError(new FieldError("req", "nickname", "닉네임이 10자가 넘습니다."));
        } else if (userRepository.existsByNickname(req.getNickname())) {
            bindingResult.addError(new FieldError("req", "nickname", "닉네임이 중복됩니다."));
        }

        return bindingResult;
    }
    // 새 사용자 데이터베이스에 저장
    public void join(UserJoinRequest req) {
        userRepository.save(req.toEntity( encoder.encode(req.getPassword()) ));
    }
    // 로그인 ID로 사용자의 정보를 조회
    public User myInfo(String loginId) {
        return userRepository.findByLoginId(loginId).get();
    }

    public BindingResult editValid(UserDto dto, BindingResult bindingResult, String loginId)
    {
        User loginUser = userRepository.findByLoginId(loginId).get();

        // 현재 비밀번호 검증
        if (dto.getNowPassword().isEmpty()) {
            bindingResult.addError(new FieldError("dto", "nowPassword", "현재 비밀번호가 비어있습니다."));
        } else if (!encoder.matches(dto.getNowPassword(), loginUser.getPassword())) {
            bindingResult.addError(new FieldError("dto", "nowPassword", "현재 비밀번호가 틀렸습니다."));
        }

        // 새 비밀번호 검증
        if (!dto.getNewPassword().equals(dto.getNewPasswordCheck())) {
            bindingResult.addError(new FieldError("dto", "newPasswordCheck", "비밀번호가 일치하지 않습니다."));
        }

        // 닉네임 검증
        if (dto.getNickname().isEmpty()) {
            bindingResult.addError(new FieldError("dto", "nickname", "닉네임이 비어있습니다."));
        } else if (dto.getNickname().length() > 10) {
            bindingResult.addError(new FieldError("dto", "nickname", "닉네임이 10자가 넘습니다."));
        } else if (!dto.getNickname().equals(loginUser.getNickname()) && userRepository.existsByNickname(dto.getNickname())) {
            bindingResult.addError(new FieldError("dto", "nickname", "닉네임이 중복됩니다."));
        }

        return bindingResult;
    }

    // 사용자 정보 수정, 비밀번호 & 닉네임 업데이트
    @Transactional
    public void edit(UserDto dto, String loginId) {
        User loginUser = userRepository.findByLoginId(loginId).get();

        if (dto.getNewPassword().equals("")) {
            loginUser.edit(loginUser.getPassword(), dto.getNickname());
        } else {
            loginUser.edit(encoder.encode(dto.getNewPassword()), dto.getNickname());
        }
    }
    // 사용자 계정 삭제시 댓글도 삭제
    @Transactional
    public Boolean delete(String loginId, String nowPassword) {
        User loginUser = userRepository.findByLoginId(loginId).orElse(null);

        if (loginUser == null) {
            return false;
        }

        if (encoder.matches(nowPassword, loginUser.getPassword())) {
            // 좋아요 삭제 로직 제거

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
    // 닉네임에 특정 키워드를 포함하는 사용자들을 페이징 처리하여 검색
    public Page<User> findAllByNickname(String keyword, PageRequest pageRequest) {
        return userRepository.findAllByNicknameContains(keyword, pageRequest);
    }

}