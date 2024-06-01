package wealthwise.BE.domain.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import wealthwise.BE.domain.entity.User;

import java.time.LocalDateTime;

@Data
public class UserJoinRequest {

    @NotBlank(message = "아이디가 비어있습니다.")
    @Size(max = 10, message = "아이디가 10자를 넘습니다.")
    private String loginId;

    @NotBlank(message = "비밀번호가 비어있습니다.")
    private String password;

    @NotBlank(message = "비밀번호 확인이 비어있습니다.")
    private String passwordCheck;

    @NotBlank(message = "닉네임이 비어있습니다.")
    @Size(max = 10, message = "닉네임이 10자를 넘습니다.")
    private String nickname;

    public User toEntity(String encodedPassword) {
        return User.builder()
                .loginId(loginId)
                .password(encodedPassword)
                .nickname(nickname)
                .createdAt(LocalDateTime.now())
                .build();
    }
}
