package com.News.History.history;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequiredArgsConstructor
@RequestMapping("/history")
public class HistoryController {

    private final HistoryService service;

    @PostMapping
    public Mono<UserHistory> saveHistory(
            @RequestBody UserHistory history
    ){
        return service.save(history);
    }

    @GetMapping
    public Flux<UserHistory> getAllHistories(){
        return service.findall();
    }


}
