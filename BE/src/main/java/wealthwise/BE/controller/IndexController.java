package wealthwise.BE.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import wealthwise.BE.domain.entity.Index;
import wealthwise.BE.service.IndexService;

import java.util.List;

@RestController
@RequestMapping("/index")
public class IndexController {

    @Autowired
    private IndexService indexService;

    @GetMapping("/{id}")
    public List<Index> getIndex(@PathVariable int id) {
        String category = indexService.getCategoryById(id);
        return indexService.getIndexesByCategory(category);
    }
}
