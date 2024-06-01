package wealthwise.BE.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import wealthwise.BE.domain.dto.BoardCreateRequest;
import wealthwise.BE.domain.dto.BoardDto;
import wealthwise.BE.domain.entity.Board;
import wealthwise.BE.domain.entity.User;
import wealthwise.BE.repository.BoardRepository;
import wealthwise.BE.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;

    @Transactional
    public Long writeBoard(BoardCreateRequest req, String loginId) {
        User user = userRepository.findByLoginId(loginId).orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다."));
        Board board = Board.builder()
                .title(req.getTitle())
                .body(req.getBody())
                .user(user)
                .build();
        boardRepository.save(board);
        return board.getId();
    }

    public Page<BoardDto> getBoardList(PageRequest pageRequest, String searchType, String keyword) {
        return boardRepository.findAll(pageRequest).map(BoardDto::of);
    }

    public BoardDto getBoard(Long boardId) {
        Board board = boardRepository.findById(boardId).orElseThrow(() -> new RuntimeException("게시글을 찾을 수 없습니다."));
        return BoardDto.of(board);
    }

    @Transactional
    public Long editBoard(Long boardId, BoardDto dto, String loginId) {
        Board board = boardRepository.findById(boardId).orElseThrow(() -> new RuntimeException("게시글을 찾을 수 없습니다."));
        if (!board.getUser().getLoginId().equals(loginId)) {
            throw new RuntimeException("수정 권한이 없습니다.");
        }
        board.update(dto);
        return board.getId();
    }

    @Transactional
    public Long deleteBoard(Long boardId, String loginId) {
        Board board = boardRepository.findById(boardId).orElseThrow(() -> new RuntimeException("게시글을 찾을 수 없습니다."));
        if (!board.getUser().getLoginId().equals(loginId)) {
            throw new RuntimeException("삭제 권한이 없습니다.");
        }
        boardRepository.delete(board);
        return board.getId();
    }
}
