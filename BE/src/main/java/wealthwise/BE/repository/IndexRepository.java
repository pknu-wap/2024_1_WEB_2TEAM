package wealthwise.BE.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import wealthwise.BE.domain.entity.Index;

import java.util.List;

public interface IndexRepository extends JpaRepository<Index, Integer> {
    // 특정 대분류 카테고리에 해당하는 인덱스 목록을 찾기 위한 메서드
    List<Index> findByMajorCategory(String majorCategory);

    // 특정 대분류 카테고리에 해당하며, 인덱스 ID가 특정 범위 내에 있는 인덱스 목록을 찾기 위한 메서드
    List<Index> findByMajorCategoryAndIndexIdBetween(String majorCategory, Integer startId, Integer endId);
}
