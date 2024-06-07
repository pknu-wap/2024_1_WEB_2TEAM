package wealthwise.BE.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import wealthwise.BE.service.BookmarkService;

@RestController
@RequestMapping("/bookmarks")
public class BookmarkController {

    @Autowired
    private BookmarkService bookmarkService;

    @GetMapping("/{indexId}")
    public boolean isBookmarked(@PathVariable Long indexId, Authentication auth) {
        if (auth == null || auth.getName() == null) {
            throw new IllegalStateException("로그인이 필요합니다.");
        }
        String loginId = auth.getName(); // auth.getName()이 loginId를 반환하는 것으로 가정
        return bookmarkService.isBookmarked(indexId, loginId);
    }

    @PutMapping("/{indexId}")
    public void toggleBookmark(@PathVariable Long indexId, Authentication auth) {
        if (auth == null || auth.getName() == null) {
            throw new IllegalStateException("로그인이 필요합니다.");
        }
        String loginId = auth.getName();
        bookmarkService.toggleBookmark(indexId, loginId);
    }
}
