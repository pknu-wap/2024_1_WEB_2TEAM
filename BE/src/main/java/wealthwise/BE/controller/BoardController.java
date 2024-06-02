package wealthwise.BE.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import wealthwise.BE.domain.dto.BoardCreateRequest;
import wealthwise.BE.domain.dto.BoardDto;
import wealthwise.BE.service.BoardService;
import wealthwise.BE.service.CommentService;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/boards")
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;
    private final CommentService commentService;

    @GetMapping
    public Map<String, Object> getBoardList(@RequestParam(required = false, defaultValue = "1") int page,
                                            @RequestParam(required = false) String sortType,
                                            @RequestParam(required = false) String searchType,
                                            @RequestParam(required = false) String keyword) {
        // 페이지 요청 생성
        PageRequest pageRequest = PageRequest.of(page - 1, 15, Sort.by("id").descending());

        // 정렬 유형에 따라 페이지 요청 설정 변경
        if (sortType != null) {
            if (sortType.equals("date")) {
                pageRequest = PageRequest.of(page - 1, 15, Sort.by("createdAt").descending());
            } else if (sortType.equals("comment")) {
                pageRequest = PageRequest.of(page - 1, 15, Sort.by("commentCnt").descending());
            }
        }

        // 게시글 목록을 서비스 계층에서 가져와 반환
        Page<BoardDto> boardPage = boardService.getBoardList(pageRequest, searchType, keyword);

        // 페이지 정보와 게시글 목록을 포함한 Map 생성
        Map<String, Object> response = new HashMap<>();
        response.put("totalPages", boardPage.getTotalPages()); // 총 페이지 수
        response.put("totalElements", boardPage.getTotalElements()); // 총 게시글 수
        response.put("currentPage", boardPage.getNumber() + 1); // 현재 페이지 (0부터 시작하므로 1을 더함)
        response.put("pageSize", boardPage.getSize()); // 페이지 크기
        response.put("boards", boardPage.getContent()); // 게시글 목록
        return response;
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
        BoardDto boardDto = boardService.getBoardWithComments(boardId);
        return boardDto;
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
