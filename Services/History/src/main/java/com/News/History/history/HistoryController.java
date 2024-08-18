package com.News.History.history;

import com.News.History.analytics.AnalyticService;
import com.News.History.kafka.UserHistoryDTO;
import com.News.History.websocket.WebsocketService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequiredArgsConstructor
@RequestMapping("/history")
public class HistoryController {

    private final HistoryService service;
    private final WebsocketService websocketService;

    @GetMapping
    public Flux<UserHistory> getAllHistories(){
        return service.findall();
    }

    @GetMapping("/get")
    public void callHistory(
            @RequestHeader("User-ID") String userId
    ){
        websocketService.getAllNews(userId);
    }



    private final AnalyticService analyticService;


    @GetMapping("/pref")
    public Mono<Void> send() {    // with `public void send(){} ` the reactive chain is not subscribed!
        return analyticService.sendAllSourceNames()
                .doOnSubscribe(subscription -> System.out.println("Subscribed"))
                .doOnTerminate(() -> System.out.println("Terminated"));
    }
/*
   @GetMapping("/pref")
    public void send(){
        analyticService.sendAllSourceNames().subscribe();
    }
*/













}
