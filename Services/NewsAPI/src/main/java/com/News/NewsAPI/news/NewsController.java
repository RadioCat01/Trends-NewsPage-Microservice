package com.News.NewsAPI.news;

import com.News.NewsAPI.kafka.DTOMapper;
import com.News.NewsAPI.kafka.Producer;
import com.News.NewsAPI.kafka.UserHistoryDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


@RestController
@RequestMapping("/news")
@RequiredArgsConstructor
@Slf4j
public class NewsController {

    private final NewsService newsService;
    private final Producer producer;
    private final DTOMapper mapper;

    @GetMapping
    public Flux<Article> getNews(
            @RequestParam(value = "pageSize", defaultValue = "5") int pageSize,
            @RequestHeader("User-ID") String userId
            ) {

        log.info("getting news on preferences");
        newsService.fetchAndBroadcastNews();
        return newsService.getNews(pageSize, userId);
    }

    @GetMapping("/search")
    public Flux<Article> getSearch(
            @RequestParam(value = "pageSize", defaultValue = "5") int pageSize,
            @RequestParam(value = "keyword") String keyword
    ) {
        log.info("getting news on search");
        return newsService.search(pageSize, keyword);
    }

    @PostMapping("/kafka")
    public String sendNews(
            @RequestBody Article article,
            @RequestHeader("User-ID") String userId
    ){
        UserHistoryDTO message = mapper.toUserDto(article,userId);
        producer.sendMessage(message);
        return null;
    }

    @GetMapping("/pref")
    public Mono<String> getPref(@RequestParam("id") String id){
        return newsService.getPreferences(id);
    }


}





























