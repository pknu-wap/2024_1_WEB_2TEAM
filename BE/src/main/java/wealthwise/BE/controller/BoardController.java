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

    /**
     * 게시글 목록 조회
     *
     * @param page 페이지 번호 (기본값 1)
     * @param sortType 정렬 유형 (옵션)
     * @param searchType 검색 유형 (옵션)
     * @param keyword 검색 키워드 (옵션)
     * @return 게시글 목록
     */
    @GetMapping
    public List<BoardDto> getBoardList(@RequestParam(required = false, defaultValue = "1") int page,
                                       @RequestParam(required = false) String sortType,
                                       @RequestParam(required = false) String searchType,
                                       @RequestParam(required = false) String keyword) {
        // 페이지 요청 생성, 기본 정렬은 ID 내림차순
        PageRequest pageRequest = PageRequest.of(page - 1, 10, Sort.by("id").descending());

        // 정렬 유형에 따라 페이지 요청 설정 변경
        if (sortType != null) {
            if (sortType.equals("date")) {
                pageRequest = PageRequest.of(page - 1, 10, Sort.by("createdAt").descending());
            } else if (sortType.equals("comment")) {
                pageRequest = PageRequest.of(page - 1, 10, Sort.by("commentCnt").descending());
            }
        }

        // 게시글 목록을 서비스 계층에서 가져와 반환
        return boardService.getBoardList(pageRequest, searchType, keyword).getContent();
    }

    /**
     * 게시글 작성 페이지 데이터 제공
     *
     * @return 게시글 작성 요청 객체
     */
    @GetMapping("/write")
    public BoardCreateRequest getBoardWritePage() {
        return new BoardCreateRequest();
    }

    /**
     * 게시글 작성
     *
     * @param req 게시글 생성 요청 데이터
     * @param auth 인증 정보
     * @return 생성된 게시글의 ID
     * @throws IOException 입출력 예외 발생 시
     */
    @PostMapping("/write")
    public Long createBoard(@RequestBody BoardCreateRequest req, Authentication auth) throws IOException {
        // 서비스 계층을 호출하여 게시글 작성
        return boardService.writeBoard(req, auth.getName());
    }

    /**
     * 특정 게시글 조회
     *
     * @param boardId 조회할 게시글의 ID
     * @param auth 인증 정보
     * @return 게시글 데이터
     */
    @GetMapping("/{boardId}")
    public BoardDto getBoardDetail(@PathVariable Long boardId, Authentication auth) {
        // 서비스 계층을 통해 게시글 조회
        BoardDto boardDto = boardService.getBoard(boardId);
        return boardDto;
    }

    /**
     * 게시글 수정
     *
     * @param boardId 수정할 게시글의 ID
     * @param dto 게시글 수정 데이터
     * @return 수정된 게시글의 ID
     * @throws IOException 입출력 예외 발생 시
     */
    @PostMapping("/{boardId}/edit")
    public Long editBoard(@PathVariable Long boardId, @RequestBody BoardDto dto) throws IOException {
        // 서비스 계층을 통해 게시글 수정
        Long editedBoardId = boardService.editBoard(boardId, dto);
        return editedBoardId;
    }

    /**
     * 게시글 삭제
     *
     * @param boardId 삭제할 게시글의 ID
     * @return 삭제된 게시글의 ID
     * @throws IOException 입출력 예외 발생 시
     */
    @DeleteMapping("/{boardId}/delete")
    public Long deleteBoard(@PathVariable Long boardId) throws IOException {
        // 서비스 계층을 통해 게시글 삭제
        Long deletedBoardId = boardService.deleteBoard(boardId);
        return deletedBoardId;
    }
}
