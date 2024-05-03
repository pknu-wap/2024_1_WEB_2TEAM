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
import wealthwise.BE.repository.CommentRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor

//데이터베이스와 게시판 관련 상호작용
public class BoardService {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
    private final CommentRepository commentRepository;
    //게시글 불러오기
    public Page<Board> getBoardList(PageRequest pageRequest, String searchType, String keyword) {
        if (searchType != null && keyword != null) {
            if (searchType.equals("title")) {
                return BoardRepository.findAllByTitleContaining(keyword, pageRequest);
            } else {
                return boardRepository.findAllByUserNickname(keyword, pageRequest);
            }
        }
        return boardRepository.findAll(pageRequest);
    }
    public BoardDto getBoard(Long boardId) {
        Optional<Board> optBoard = boardRepository.findById(boardId);

        // ID에 해당하는 게시글이 없으면 null 반환
        if (optBoard.isEmpty()) {
            return null;
        }

        return BoardDto.of(optBoard.get());
    }
    //게시글 작성
    @Transactional
    public Long writeBoard(BoardCreateRequest req, String loginId) {
        User loginUser = userRepository.findByLoginId(loginId).orElseThrow(() -> new RuntimeException("User not found with loginId: " + loginId));
        Board savedBoard = boardRepository.save(req.toEntity(loginUser));
        return savedBoard.getId();
    }
    //게시글 수정
    @Transactional
    public Long editBoard(Long boardId, BoardDto dto) {
        Optional<Board> optBoard = boardRepository.findById(boardId);

        // ID에 해당하는 게시글 존재 확인
        if (optBoard.isEmpty()) {
            return null; // 게시글 없으면 null 반환
        }

        Board board = optBoard.get();
        // 게시글 내용 업데이트
        board.update(dto);

        return board.getId(); // 수정된 게시글 ID 반환
    }
    //게시글 삭제
    public Long deleteBoard(Long boardId) {
        Optional<Board> optBoard = boardRepository.findById(boardId);

        // id에 해당하는 게시글이 없으면 null 반환
        if (optBoard.isEmpty()) {
            return null;
        }

        // 게시글 삭제
        boardRepository.deleteById(boardId);
        return boardId;
    }

}
