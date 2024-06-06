package wealthwise.BE.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import wealthwise.BE.domain.entity.Bookmark;
import wealthwise.BE.domain.entity.Index;
import wealthwise.BE.domain.entity.User;

import java.util.List;
import java.util.Optional;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    boolean existsByUserLoginIdAndIndexIndexId(String loginId, Integer indexId); // 수정된 메서드
    Optional<Bookmark> findByUserAndIndex(User user, Index index);
    List<Bookmark> findByUser(User user);
}
