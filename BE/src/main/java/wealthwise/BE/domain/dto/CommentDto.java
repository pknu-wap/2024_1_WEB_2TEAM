package wealthwise.BE.domain.dto;

import lombok.Builder;
import lombok.Data;
import wealthwise.BE.domain.entity.Comment;

import java.time.LocalDateTime;

@Data
@Builder
public class CommentDto {
    private Long id;
    private String userLoginId;
    private String userNickname;
    private String body;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;

    public static CommentDto of(Comment comment) {
        return CommentDto.builder()
                .id(comment.getId())
                .userLoginId(comment.getUser().getLoginId())
                .userNickname(comment.getUser().getNickname())
                .body(comment.getBody())
                .createdAt(comment.getCreatedAt())
                .lastModifiedAt(comment.getLastModifiedAt())
                .build();
    }
}
