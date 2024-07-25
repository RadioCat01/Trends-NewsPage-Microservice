package com.News.History.websocket;

import com.News.History.history.HistoryRepository;
import com.News.History.history.Mapper;
import com.News.History.history.UserHistory;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class WebsocketService {

    private final NewsWebSocketHandler handler;
    private final HistoryRepository repository;
    private final Mapper mapper;

    private static final String KEYCLOAK_ID_KEY = "keycloakId";

    public Mono<Void> sendAllNews() {
        System.out.println("Send history called");

        return repository.findAll()
                .doOnNext(userHistory -> System.out.println("Fetched userHistory: " + userHistory))
                .map(mapper::toArticle)
                .collectList()
                .doOnNext(articles -> {
                    System.out.println("Sending articles: " + articles);
                    handler.broadcastNews(articles);
                })
                .then()
                .doOnError(error -> System.err.println("Error sending news: " + error.getMessage()));
    }

    public void getAllNews(String userid){


        System.out.println("getallnews triggered");
        repository.findAll()
                .map(mapper::toArticle)
                .collectList()
                .doOnNext(articles -> {
                    handler.broadcastNews(articles);
                    System.out.println(articles);
                })
                .subscribe();
    }


    public Flux<UserHistory> watchNews() {
        System.out.println("Watch news called");
        return repository.findAll()
                .doOnNext(userHistory -> System.out.println("Fetched userHistory in watchNews: " + userHistory))
                .doOnError(error -> System.err.println("Error watching news: " + error.getMessage()));
    }

}
