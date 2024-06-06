package wealthwise.BE.domain.dto;

import lombok.Data;
import wealthwise.BE.domain.entity.User;

import java.time.LocalDateTime;

@Data
public class UserJoinRequest {

    private String loginId;
    private String password;
    private String passwordCheck;
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