package com.News.History.history;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class HistoryService {

    private final HistoryRepository historyRepository;

    public Mono<UserHistory> save(UserHistory history) {
        return historyRepository.save(history);
    }

    public Flux<UserHistory> findall() {
        return historyRepository.findAll();
    }


}
