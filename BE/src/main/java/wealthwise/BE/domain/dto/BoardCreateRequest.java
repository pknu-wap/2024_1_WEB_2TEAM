package wealthwise.BE.domain.dto;

import lombok.Data;
import wealthwise.BE.domain.entity.Board;
import wealthwise.BE.domain.entity.User;

@Data

public class BoardCreateRequest {
    private String title;
    private String body;

    public Board toEntity(User user) {
        return Board.builder()
                .user(user)
                .title(title)
                .body(body)
                .commentCnt(0)
                .build();
    }
}
