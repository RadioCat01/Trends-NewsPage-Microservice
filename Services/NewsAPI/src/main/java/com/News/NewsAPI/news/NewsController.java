package com.News.NewsAPI.news;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;


@RestController
@RequestMapping("/news")
@RequiredArgsConstructor
public class NewsController {

    private final NewsService newsService;

    @GetMapping
    public Flux<Article> getNews(
            @RequestParam(value = "pageSize", defaultValue = "5") int pageSize,
            @RequestHeader("User-ID") String userId
            ) {
        return newsService.getNews(pageSize, userId);
    }

    @GetMapping("/search")
    public Flux<Article> getSearch(
            @RequestParam(value = "pageSize", defaultValue = "5") int pageSize,
            @RequestParam(value = "keyword") String keyword
    ) {
        return newsService.search(pageSize, keyword);
    }

}





























