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

    public String getCategoryById(int id) {
        switch (id) {
            case 1:
                return "주식";
            case 2:
                return "채권";
            case 3:
                return "암호화폐";
            case 4:
                return "환율";
            case 5:
                return "원자재";
            case 6:
                return "한국";
            case 7:
                return "미국";
            case 8:
                return "중국";
            case 9:
                return "유로존";
            default:
                throw new IllegalArgumentException("Invalid id: " + id);
        }
    }
}
