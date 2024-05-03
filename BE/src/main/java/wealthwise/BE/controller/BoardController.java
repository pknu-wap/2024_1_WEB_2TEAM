package wealthwise.BE.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import wealthwise.BE.domain.dto.BoardCreateRequest;
import wealthwise.BE.domain.dto.BoardDto;
import wealthwise.BE.domain.dto.BoardSearchRequest;
import wealthwise.BE.domain.dto.CommentCreateRequest;
import wealthwise.BE.service.BoardService;
import wealthwise.BE.service.CommentService;
import wealthwise.BE.domain.dto.BoardCreateRequest;
import wealthwise.BE.domain.dto.BoardDto;
import wealthwise.BE.domain.dto.BoardSearchRequest;
import wealthwise.BE.domain.dto.CommentCreateRequest;
import wealthwise.BE.service.BoardService;
import wealthwise.BE.service.CommentService;

import java.io.IOException;

@Controller
@RequestMapping("/boards")
@RequiredArgsConstructor

//프론트와 게시판 상호작용
public class BoardController {
    private final BoardService boardService;
    private final CommentService commentService;

    @GetMapping
    public String boardListPage(Model model,
                                @RequestParam(required = false, defaultValue = "1") int page,
                                @RequestParam(required = false) String sortType,
                                @RequestParam(required = false) String searchType,
                                @RequestParam(required = false) String keyword) {
        PageRequest pageRequest = PageRequest.of(page - 1, 10, Sort.by("id").descending());

        // 요청된 정렬 유형
        if (sortType != null) {
            if (sortType.equals("date")) {
                pageRequest = PageRequest.of(page - 1, 10, Sort.by("createdAt").descending());
            } else if (sortType.equals("comment")) {
                pageRequest = PageRequest.of(page - 1, 10, Sort.by("commentCnt").descending());
            }
        }

        model.addAttribute("boards", boardService.getBoardList(pageRequest, searchType, keyword));
        model.addAttribute("boardSearchRequest", new BoardSearchRequest(sortType, searchType, keyword));

        return "boards/list";
    }
    @GetMapping("/write") // "/write" 경로로 GET 요청이 들어왔을 때
    public String boardWritePage(Model model) {
        model.addAttribute("boardCreateRequest", new BoardCreateRequest());
        return "boards/write"; // "boards/write" 뷰를 반환.
    }
    @PostMapping("/write") //게시글 작성하는 실제 폼 표시
    public String boardWrite(@ModelAttribute BoardCreateRequest req,
                             Authentication auth, Model model) throws IOException {
        // 게시글을 작성, 작성된 게시글의 ID를 반환
        Long savedBoardId = boardService.writeBoard(req, auth.getName(), auth);

        // 등록된 게시글의 ID 메시지로 모델에 추가
        model.addAttribute("message", savedBoardId + "번 글이 등록되었습니다.");
        // 다음으로 이동할 경로
        model.addAttribute("nextUrl", "/boards/" + savedBoardId);
        return "printMessage";
    }

    @GetMapping("/{boardId}")
    // "/{boardId}" 경로로 GET 요청이 들어왔을 때
    public String boardDetailPage(@PathVariable Long boardId, Model model, Authentication auth) {

        if (auth != null) {
            model.addAttribute("loginUserLoginId", auth.getName());
        }

        //해당 ID의 게시글
        BoardDto boardDto = boardService.getBoard(boardId);
        // 가져온 게시글이 없는 경우
        if (boardDto == null) {
            // 다음으로 이동할 경로
            model.addAttribute("message", "해당 게시글이 존재하지 않습니다");
            model.addAttribute("nextUrl", "/boards");
            return "printMessage";
        }

        // 게시글 정보와 댓글 작성 폼, 댓글 목록을
        model.addAttribute("boardDto", boardDto);
        model.addAttribute("commentCreateRequest", new CommentCreateRequest());
        model.addAttribute("commentList", commentService.findAll(boardId));
        // 게시글 상세 페이지
        return "boards/detail";
    }
    @PostMapping("/{boardId}/edit")
    public String boardEdit(@PathVariable Long boardId,
                            @ModelAttribute BoardDto dto, Model model) throws IOException {
        Long editedBoardId = boardService.editBoard(boardId, dto);

        if (editedBoardId == null) {
            model.addAttribute("message", "해당 게시글이 존재하지 않습니다.");
            model.addAttribute("nextUrl", "/boards");
        } else {
            model.addAttribute("message", editedBoardId + "번 글이 수정되었습니다.");
            model.addAttribute("nextUrl", "/boards/" + boardId);
        }
        return "printMessage";
    }
    @GetMapping("/{boardId}/delete")
    public String boardDelete(@PathVariable Long boardId, Model model) throws IOException {
        Long deletedBoardId = boardService.deleteBoard(boardId);

        // 삭제된 게시글에 해당하는 ID가 없으면 에러 메세지 출력
        // 게시글이 존재해 삭제했으면 삭제 완료 메세지 출력
        model.addAttribute("message", deletedBoardId == null ? "해당 게시글이 존재하지 않습니다." : deletedBoardId + "번 글이 삭제되었습니다.");
        model.addAttribute("nextUrl", "/boards");
        return "printMessage";
    }

}
