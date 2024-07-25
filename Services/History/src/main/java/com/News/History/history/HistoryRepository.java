package com.News.History.history;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface HistoryRepository extends ReactiveCrudRepository<UserHistory, Integer> {

    Mono<Boolean> existsByTitle(String title);

    @Query("SELECT DISTINCT source_name FROM userhistory")
    Flux<String> findAllSourceNames();
}
