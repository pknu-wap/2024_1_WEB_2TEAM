package wealthwise.BE.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import wealthwise.BE.domain.entity.Board;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor

public class BoardDto {
    // 게시글의 고유 식별자
    private Long id;

    // 게시글을 작성한 사용자의 로그인 ID
    private String userLoginId;

    // 게시글을 작성한 사용자의 닉네임
    private String userNickname;

    // 게시글 제목
    private String title;

    // 게시글 내용
    private String body;

    // 게시글 작성 시간
    private LocalDateTime createdAt;

    // 게시글 마지막 수정된 시간
    private LocalDateTime lastModifiedAt;

    //  Board 객체 BoardDto 변환
    public static BoardDto of(Board board) {
        return BoardDto.builder()
                .id(board.getId()) //게시글 고유 식별자
                .userLoginId(board.getUser().getLoginId()) //게시글 작성자 로그인 ID
                .userNickname(board.getUser().getNickname()) //게시글 작성자 닉네임
                .title(board.getTitle()) //제목
                .body(board.getBody()) //내용
                .createdAt(board.getCreatedAt()) //작성 시간
                .lastModifiedAt(board.getLastModifiedAt()) //마지막 수정된 시간
                .build();
    }
}