package wealthwise.BE.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wealthwise.BE.domain.entity.Bookmark;
import wealthwise.BE.domain.entity.Index;
import wealthwise.BE.domain.entity.User;
import wealthwise.BE.repository.BookmarkRepository;
import wealthwise.BE.repository.IndexRepository;
import wealthwise.BE.repository.UserRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookmarkService {

    @Autowired
    private BookmarkRepository bookmarkRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private IndexRepository indexRepository;

    public boolean isBookmarked(Long indexId, String loginId) {
        Integer intIndexId = Math.toIntExact(indexId);
        return bookmarkRepository.existsByUserLoginIdAndIndexIndexId(loginId, intIndexId);
    }

    @Transactional
    public void toggleBookmark(Long indexId, String loginId) {
        User user = userRepository.findByLoginId(loginId)
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다."));

        Integer intIndexId = Math.toIntExact(indexId);

        Index index = indexRepository.findById(intIndexId)
                .orElseThrow(() -> new RuntimeException("지수를 찾을 수 없습니다."));

        Bookmark bookmark = bookmarkRepository.findByUserAndIndex(user, index)
                .orElse(null);

        if (bookmark != null) {
            bookmarkRepository.delete(bookmark);
        } else {
            bookmark = new Bookmark();
            bookmark.setUser(user);
            bookmark.setIndex(index);
            bookmarkRepository.save(bookmark);
        }
    }

    public List<Index> getUserBookmarks(String loginId) {
        User user = userRepository.findByLoginId(loginId)
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다."));
        return bookmarkRepository.findByUser(user)
                .stream()
                .map(Bookmark::getIndex)
                .collect(Collectors.toList());
    }
}
