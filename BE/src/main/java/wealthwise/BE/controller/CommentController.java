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

    @PostMapping("/{boardId}/comments") // "/{boardId}/comments" 경로로 POST 요청이 들어왔을 때 해당 메서드가 실행됩니다.
    public String addComment(@PathVariable Long boardId, // 게시글 ID를 받습니다.
                             @ModelAttribute CommentCreateRequest req, // 댓글 생성 요청 정보를 받습니다.
                             Authentication auth, // 사용자 인증 정보를 받습니다.
                             Model model) { // 모델 객체를 받습니다. 모델 객체는 뷰로 데이터를 전달하는 데 사용됩니다.
        // 댓글 작성 서비스를 호출하여 댓글을 추가합니다.
        commentService.writeComment(boardId, req, auth.getName());

        // 댓글 추가 완료 메시지와 다음에 이동할 경로를 모델에 추가합니다.
        model.addAttribute("message", "댓글이 추가되었습니다.");
        model.addAttribute("nextUrl", "/boards/" + boardId); // 해당 게시글 상세 페이지로 이동합니다.
        return "printMessage"; // 결과를 출력할 printMessage 뷰를 반환합니다.
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
