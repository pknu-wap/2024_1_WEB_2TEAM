package wealthwise.BE.service;

import wealthwise.BE.domain.entity.Index;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wealthwise.BE.repository.IndexRepository;

import java.util.List;

@Service
public class IndexService {

    @Autowired
    private IndexRepository indexRepository;

    public List<Index> getIndexesByCategory(String category) {
        return indexRepository.findByMajorCategory(category);
    }

    public List<Index> getIndexesByCategoryAndIdRange(String category, Integer startId, Integer endId) {
        return indexRepository.findByMajorCategoryAndIndexIdBetween(category, startId, endId);
    }

    public String getCategoryById(int id) {
        switch (id) {
            case 1:
                return "stock";
            case 2:
                return "bond";
            case 3:
                return "crypto";
            case 4:
                return "exchange_rate";
            case 5:
                return "raw_materials";
            case 6:
                return "korea";
            case 7:
                return "america";
            case 8:
                return "china";
            case 9:
                return "eurozone";
            default:
                throw new IllegalArgumentException("Invalid id: " + id);
        }
    }
}
