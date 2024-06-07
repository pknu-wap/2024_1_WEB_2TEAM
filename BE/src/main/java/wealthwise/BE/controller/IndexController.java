package wealthwise.BE.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import wealthwise.BE.domain.entity.Index;
import wealthwise.BE.service.BookmarkService;
import wealthwise.BE.service.IndexService;

import java.util.List;

@RestController
@RequestMapping("/index")
public class IndexController {

    @Autowired
    private BookmarkService bookmarkService;

    @Autowired
    private IndexService indexService;

    @GetMapping("/{id}")
    public List<Index> getIndexes(@PathVariable int id, Authentication auth) {
        if (id == 10) {
            // id가 10일 때는 사용자 북마크 정보를 반환
            if (auth == null || auth.getName() == null) {
                throw new IllegalStateException("로그인이 필요합니다.");
            }
            String loginId = auth.getName();
            return bookmarkService.getUserBookmarks(loginId);
        } else {
            // id가 10이 아닐 때는 카테고리에 따른 인덱스 반환
            String category = indexService.getCategoryById(id);
            return indexService.getIndexesByCategory(category);
        }
    }
}
