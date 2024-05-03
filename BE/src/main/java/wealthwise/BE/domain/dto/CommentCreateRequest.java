package wealthwise.BE.domain.dto;

import lombok.Data;
import wealthwise.BE.domain.entity.Board;
import wealthwise.BE.domain.entity.Comment;
import wealthwise.BE.domain.entity.User;

@Data
public class CommentCreateRequest {

    private String body;

    public Comment toEntity(Board board, User user) {
        return Comment.builder()
                .user(user)
                .board(board)
                .body(body)
                .build();
    }
}