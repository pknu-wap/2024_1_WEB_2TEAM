package wealthwise.BE.domain.dto;

import lombok.Builder;
import lombok.Data;
import wealthwise.BE.domain.entity.Board;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class BoardDto {
    private Long id;
    private String userLoginId;
    private String userNickname;
    private String title;
    private String body;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
    private Integer commentCnt;
    private List<CommentDto> comments;

    public static BoardDto of(Board board) {
        return BoardDto.builder()
                .id(board.getId())
                .userLoginId(board.getUser().getLoginId())
                .userNickname(board.getUser().getNickname())
                .title(board.getTitle())
                .body(board.getBody())
                .createdAt(board.getCreatedAt())
                .lastModifiedAt(board.getLastModifiedAt())
                .commentCnt(board.getCommentCnt())
                .build();
    }

    public static BoardDto of(Board board, List<CommentDto> comments) {
        return BoardDto.builder()
                .id(board.getId())
                .userLoginId(board.getUser().getLoginId())
                .userNickname(board.getUser().getNickname())
                .title(board.getTitle())
                .body(board.getBody())
                .createdAt(board.getCreatedAt())
                .lastModifiedAt(board.getLastModifiedAt())
                .commentCnt(board.getCommentCnt())
                .comments(comments)
                .build();
    }
}
