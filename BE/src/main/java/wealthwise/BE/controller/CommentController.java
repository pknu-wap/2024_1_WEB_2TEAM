package wealthwise.BE.controller;

import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import wealthwise.BE.domain.dto.CommentCreateRequest;
import wealthwise.BE.service.BoardService;
import wealthwise.BE.service.CommentService;
import wealthwise.BE.domain.dto.CommentCreateRequest;
import wealthwise.BE.service.BoardService;
import wealthwise.BE.service.CommentService;

@Controller
@RequestMapping("/comments")
@RequiredArgsConstructor

//프론트와 댓글 상호작용

public class CommentController {
    private final CommentService commentService;
    private final BoardService boardService;

    @PostMapping("/{boardId}/comments") // "/{boardId}/comments" POST
    public String addComment(@PathVariable Long boardId, // 게시글 ID
                             @ModelAttribute CommentCreateRequest req, // 댓글 생성 요청 정보
                             Authentication auth, // 사용자 인증 정보
                             Model model) {

        commentService.writeComment(boardId, req, auth.getName());

        model.addAttribute("message", "댓글이 추가되었습니다.");
        model.addAttribute("nextUrl", "/boards/" + boardId); // 
        return "printMessage";
    }

    //댓글 수정
    @PostMapping("/{commentId}/edit")
    public String editComment(@PathVariable Long commentId, @ModelAttribute CommentCreateRequest req,
                              Authentication auth, Model model) {
        Long boardId = commentService.editComment(commentId, req.getBody(), auth.getName());
        if (boardId == null) {
            model.addAttribute("message", "잘못된 요청입니다.");
        } else {
            model.addAttribute("message", "댓글이 수정 되었습니다.");
        }
        model.addAttribute("nextUrl", "/boards");
        return "printMessage";
    }

    //댓글 삭제
    @GetMapping("/{commentId}/delete")
    public String deleteComment(@PathVariable Long commentId, Authentication auth, Model model) {
        Long boardId = commentService.deleteComment(commentId, auth.getName());
        if (boardId == null) {
            model.addAttribute("message", "작성자만 삭제 가능합니다.");
        } else {
            model.addAttribute("message", "댓글이 삭제 되었습니다.");
        }
        model.addAttribute("nextUrl", "/boards");
        return "printMessage";
    }


}
