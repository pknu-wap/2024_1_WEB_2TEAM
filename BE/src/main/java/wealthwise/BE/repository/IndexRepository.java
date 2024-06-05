package wealthwise.BE.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import wealthwise.BE.domain.entity.Index;

import java.util.List;

public interface IndexRepository extends JpaRepository<Index, Integer> {
    List<Index> findByMajorCategory(String majorCategory);

}
