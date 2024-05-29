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
import wealthwise.BE.repository.UserRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final BoardRepository boardRepository;
    private final UserRepository userRepository;

    // 댓글 작성
    @Transactional
    public Long writeComment(Long boardId, CommentCreateRequest req, String loginId) {
        Board board = boardRepository.findById(boardId).orElse(null);
        User user = userRepository.findByLoginId(loginId).orElse(null);

        if (board != null && user != null) {
            Comment comment = req.toEntity(board, user);
            commentRepository.save(comment);
            board.commentChange(board.getCommentCnt() + 1);
            return comment.getId();
        }
        return null;
    }

    // 특정 게시글의 모든 댓글 조회
    public List<Comment> findAll(Long boardId) {
        return commentRepository.findAllByBoardId(boardId);
    }

    // 댓글 수정
    @Transactional
    public Long editComment(Long commentId, String newBody, String loginId) {
        Comment comment = commentRepository.findById(commentId).orElse(null);
        User user = userRepository.findByLoginId(loginId).orElse(null);

        if (comment != null && user != null && comment.getUser().getLoginId().equals(loginId)) {
            comment.update(newBody);
            return comment.getBoard().getId();
        }
        return null;
    }

    // 댓글 삭제
    @Transactional
    public Long deleteComment(Long commentId, String loginId) {
        Comment comment = commentRepository.findById(commentId).orElse(null);
        User user = userRepository.findByLoginId(loginId).orElse(null);

        if (comment != null && user != null && comment.getUser().getLoginId().equals(loginId)) {
            Board board = comment.getBoard();
            commentRepository.delete(comment);
            board.commentChange(board.getCommentCnt() - 1);
            return board.getId();
        }
        return null;
    }
}
