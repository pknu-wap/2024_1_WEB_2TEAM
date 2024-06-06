package wealthwise.BE.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import wealthwise.BE.domain.entity.Bookmark;
import wealthwise.BE.domain.entity.Index;
import wealthwise.BE.domain.entity.User;

import java.util.Optional;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    boolean existsByUserLoginIdAndIndexId(String loginId, Long indexId);
    Optional<Bookmark> findByUserAndIndex(User user, Index index);
}
