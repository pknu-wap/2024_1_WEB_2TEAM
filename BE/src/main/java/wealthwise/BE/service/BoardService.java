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
import wealthwise.BE.repository.UserRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
    private final CommentRepository commentRepository;

    /**
     * 게시글 목록 조회
     *
     * @param pageRequest 페이지 요청 정보
     * @param searchType 검색 유형
     * @param keyword 검색 키워드
     * @return 페이지네이션된 게시글 목록
     */

    public Page<BoardDto> getBoardList(PageRequest pageRequest, String searchType, String keyword) {
        Page<Board> boards;
        if (searchType != null && keyword != null) {
            if (searchType.equals("title")) {
                boards = boardRepository.findAllByTitleContaining(keyword, pageRequest);
            } else {
                boards = boardRepository.findAllByUserNickname(keyword, pageRequest);
            }
        } else {
            boards = boardRepository.findAll(pageRequest);
        }
        return boards.map(BoardDto::of);
    }

    /**
     * 특정 게시글 조회
     *
     * @param boardId 조회할 게시글의 ID
     * @return 게시글 DTO
     */
    public BoardDto getBoard(Long boardId) {
        Optional<Board> optBoard = boardRepository.findById(boardId);

        if (optBoard.isPresent()) {
            return BoardDto.of(optBoard.get());
        } else {
            return null;
        }
    }

    /**
     * 게시글 작성
     *
     * @param req 게시글 생성 요청 데이터
     * @param loginId 사용자 로그인 ID
     * @return 생성된 게시글의 ID
     */
    @Transactional
    public Long writeBoard(BoardCreateRequest req, String loginId) {
        Optional<User> loginUserOpt = userRepository.findByLoginId(loginId);
        if (loginUserOpt.isPresent()) {
            User loginUser = loginUserOpt.get();
            Board savedBoard = boardRepository.save(req.toEntity(loginUser));
            return savedBoard.getId();
        } else {
            return null;
        }
    }

    /**
     * 게시글 수정
     *
     * @param boardId 수정할 게시글의 ID
     * @param dto 게시글 수정 데이터
     * @return 수정된 게시글의 ID
     */
    @Transactional
    public Long editBoard(Long boardId, BoardDto dto) {
        Optional<Board> boardOpt = boardRepository.findById(boardId);
        if (boardOpt.isPresent()) {
            Board board = boardOpt.get();
            board.update(dto);
            return board.getId();
        } else {
            return null;
        }
    }

    /**
     * 게시글 삭제
     *
     * @param boardId 삭제할 게시글의 ID
     * @return 삭제된 게시글의 ID
     */
    @Transactional
    public Long deleteBoard(Long boardId) {
        Optional<Board> boardOpt = boardRepository.findById(boardId);
        if (boardOpt.isPresent()) {
            boardRepository.deleteById(boardId);
            return boardId;
        } else {
            return null;
        }
    }
}
