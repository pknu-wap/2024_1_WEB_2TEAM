package wealthwise.BE.domain.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import wealthwise.BE.domain.BaseEntity;
import wealthwise.BE.domain.dto.BoardDto;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter

public class Board extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)  // 데이터베이스에서 자동으로 생성되는 ID 필드를 나타내는 애너테이션
    private Long id;

    private String title;   // 게시글의 제목을 나타내는 필드
    private String body;    // 게시글의 내용을 나타내는 필드

    @ManyToOne(fetch = FetchType.LAZY)  // 다대일(N:1) 관계를 나타내는 애너테이션
    private User user;      // 게시글을 작성한 사용자를 나타내는 필드

    @OneToMany(mappedBy = "board", orphanRemoval = true)  // 일대다(1:N) 관계를 나타내는 애너테이션
    private List<Comment> comments; // 게시글에 달린 댓글 리스트를 나타내는 필드
    private Integer commentCnt;     // 게시글에 달린 댓글 수를 나타내는 필드


    // 게시글 정보를 업데이트하는 메서드
    public void update(BoardDto dto) {
        this.title = dto.getTitle();  // 제목 업데이트
        this.body = dto.getBody();    // 본문 업데이트
    }

    // 댓글 수를 변경하는 메서드
    public void commentChange(Integer commentCnt) {
        this.commentCnt = commentCnt;  // 댓글 수 업데이트
    }

}
