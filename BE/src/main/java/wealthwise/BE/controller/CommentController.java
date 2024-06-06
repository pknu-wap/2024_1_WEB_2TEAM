package wealthwise.BE.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import wealthwise.BE.domain.dto.CommentCreateRequest;
import wealthwise.BE.service.BoardService;
import wealthwise.BE.service.CommentService;

@RestController
@RequestMapping("/comments")
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;
    private final BoardService boardService;

    /**
     * 댓글 추가
     *
     * @param boardId 게시글 ID
     * @param req 댓글 생성 요청 정보
     * @param auth 사용자 인증 정보
     * @return 생성된 댓글의 ID
     */
    @PostMapping("/{boardId}")
    public Long addComment(@PathVariable Long boardId,
                           @RequestBody CommentCreateRequest req,
                           Authentication auth) {
        if (auth == null) {
            throw new RuntimeException("로그인이 필요합니다.");
        }
        return commentService.writeComment(boardId, req, auth.getName());
    }

    /**
     * 댓글 수정
     *
     * @param commentId 댓글 ID
     * @param req 댓글 수정 요청 정보
     * @param auth 사용자 인증 정보
     * @return 수정된 댓글이 속한 게시글의 ID
     */
    @PostMapping("/{commentId}/edit")
    public Long editComment(@PathVariable Long commentId,
                            @RequestBody CommentCreateRequest req,
                            Authentication auth) {
        if (auth == null) {
            throw new RuntimeException("로그인이 필요합니다.");
        }
        Long boardId = commentService.editComment(commentId, req.getBody(), auth.getName());
        return boardId;
    }

    /**
     * 댓글 삭제
     *
     * @param commentId 댓글 ID
     * @param auth 사용자 인증 정보
     * @return 삭제된 댓글이 속한 게시글의 ID
     */
    @DeleteMapping("/{commentId}")
    public Long deleteComment(@PathVariable Long commentId, Authentication auth) {
        if (auth == null) {
            throw new RuntimeException("로그인이 필요합니다.");
        }
        Long boardId = commentService.deleteComment(commentId, auth.getName());
        return boardId;
    }
}
