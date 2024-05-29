package wealthwise.BE.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wealthwise.BE.domain.entity.Board;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {

    // 닉네임으로 사용자가 작성한 게시글을 조회하는 메소드
    Page<Board> findAllByUserNickname(String nickname, Pageable pageable);

    // 제목에 특정 단어가 포함된 게시글을 조회하는 메소드
    Page<Board> findAllByTitleContaining(String title, Pageable pageable);

    // 게시글을 그냥 조회하는 메소드
    Page<Board> findAll(Pageable pageable);
}
