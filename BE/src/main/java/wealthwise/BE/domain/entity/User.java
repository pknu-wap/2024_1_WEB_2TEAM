package wealthwise.BE.domain.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String loginId;     // 로그인할 때 사용하는 아이디
    private String password;    // 비밀번호
    private String nickname;    // 닉네임
    private LocalDateTime createdAt;    // 가입 시간

    @OneToMany(mappedBy = "user", orphanRemoval = true)
    private List<Board> boards;     // 작성글

    @OneToMany(mappedBy = "user", orphanRemoval = true)
    private List<Comment> comments; // 댓글

    public void edit(String newPassword, String newNickname) {
        this.password = newPassword;
        this.nickname = newNickname;
    }
}
