package wealthwise.BE.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import wealthwise.BE.domain.dto.CommentCreateRequest;
import wealthwise.BE.domain.entity.Board;
import wealthwise.BE.domain.entity.Comment;
import wealthwise.BE.domain.entity.User;
import wealthwise.BE.repository.BoardRepository;
import wealthwise.BE.repository.CommentRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

//데이터베이스와 댓글 관련 상호작용
public class CommentService {

    private final CommentRepository commentRepository;
    private final BoardRepository boardRepository;
    private final UserRepository userRepository;

    // 댓글 작성
    public void writeComment(Long boardId, CommentCreateRequest req, String loginId) {
        // 게시글과 사용자 찾아서 댓글 작성하고 저장
        Board board = boardRepository.findById(boardId).get();
        User user = userRepository.findByLoginId(loginId).get();
        board.commentChange(board.getCommentCnt() + 1);
        commentRepository.save(req.toEntity(board, user));
    }

    // 특정 게시글의 모든 댓글 조회
    public List<Comment> findAll(Long boardId) {
        return commentRepository.findAllByBoardId(boardId);
    }

    // 댓글 수정
    @Transactional
    public Long editComment(Long commentId, String newBody, String loginId) {
        Optional<Comment> optComment = commentRepository.findById(commentId);
        Optional<User> optUser = userRepository.findByLoginId(loginId);
        if (optComment.isEmpty() || optUser.isEmpty() || !optComment.get().getUser().equals(optUser.get())) {
            return null;
        }

        Comment comment = optComment.get();
        comment.update(newBody);

        return comment.getBoard().getId();
    }

    // 댓글 삭제
    public Long deleteComment(Long commentId, String loginId) {
        Optional<Comment> optComment = commentRepository.findById(commentId);
        Optional<User> optUser = userRepository.findByLoginId(loginId);
        if (optComment.isEmpty() || optUser.isEmpty() ||
                (!optComment.get().getUser().equals(optUser.get()) && !optUser.get().getUserRole().equals(UserRole.ADMIN))) {
            return null;
        }

        Board board = optComment.get().getBoard();
        board.commentChange(board.getCommentCnt() + 1);

        commentRepository.delete(optComment.get());
        return board.getId();
    }
}