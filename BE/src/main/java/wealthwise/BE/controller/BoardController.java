package wealthwise.BE.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import wealthwise.BE.domain.dto.BoardCreateRequest;
import wealthwise.BE.domain.dto.BoardDto;
import wealthwise.BE.service.BoardService;
import wealthwise.BE.service.CommentService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/boards")
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;
    private final CommentService commentService;

    @GetMapping
    public List<BoardDto> getBoardList(@RequestParam(required = false, defaultValue = "1") int page,
                                       @RequestParam(required = false) String sortType,
                                       @RequestParam(required = false) String searchType,
                                       @RequestParam(required = false) String keyword) {
        PageRequest pageRequest = PageRequest.of(page - 1, 10, Sort.by("id").descending());

        if (sortType != null) {
            if (sortType.equals("date")) {
                pageRequest = PageRequest.of(page - 1, 10, Sort.by("createdAt").descending());
            } else if (sortType.equals("comment")) {
                pageRequest = PageRequest.of(page - 1, 10, Sort.by("commentCnt").descending());
            }
        }

        return boardService.getBoardList(pageRequest, searchType, keyword).getContent();
    }

    @GetMapping("/write")
    public BoardCreateRequest getBoardWritePage() {
        return new BoardCreateRequest();
    }

    @PostMapping("/write")
    public Long createBoard(@RequestBody BoardCreateRequest req, Authentication auth) throws IOException {
        if (auth == null || auth.getName() == null) {
            throw new IllegalStateException("로그인이 필요합니다.");
        }
        return boardService.writeBoard(req, auth.getName());
    }

    @GetMapping("/{boardId}")
    public BoardDto getBoardDetail(@PathVariable Long boardId) {
        return boardService.getBoard(boardId);
    }

    @PostMapping("/{boardId}/edit")
    public Long editBoard(@PathVariable Long boardId, @RequestBody BoardDto dto, Authentication auth) throws IOException {
        if (auth == null || auth.getName() == null) {
            throw new IllegalStateException("로그인이 필요합니다.");
        }
        return boardService.editBoard(boardId, dto, auth.getName());
    }

    @DeleteMapping("/{boardId}/delete")
    public Long deleteBoard(@PathVariable Long boardId, Authentication auth) throws IOException {
        if (auth == null || auth.getName() == null) {
            throw new IllegalStateException("로그인이 필요합니다.");
        }
        return boardService.deleteBoard(boardId, auth.getName());
    }
}
