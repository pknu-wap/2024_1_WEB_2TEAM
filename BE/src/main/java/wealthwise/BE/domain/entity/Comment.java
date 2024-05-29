package wealthwise.BE.domain.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import wealthwise.BE.domain.BaseEntity;
import wealthwise.BE.domain.BaseEntity;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class Comment extends BaseEntity {
    // 댓글의 고유 식별자를 나타내는 필드입니다.

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 댓글의 내용을 나타내는 필드입니다.
    private String body;

    // 댓글을 작성한 사용자를 나타내는 필드입니다. 다대일(N:1) 관계입니다.
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;      // 작성자

    // 댓글이 달린 게시글을 나타내는 필드입니다. 다대일(N:1) 관계입니다.
    @ManyToOne(fetch = FetchType.LAZY)
    private Board board;    // 댓글이 달린 게시판

    // 댓글의 내용을 수정하는 메서드입니다.
    public void update(String newBody) {
        this.body = newBody;
    }
}
