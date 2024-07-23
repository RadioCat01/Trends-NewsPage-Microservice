package com.News.History.history;

import com.News.History.kafka.UserHistoryDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class HistoryService {

    private final HistoryRepository historyRepository;
    private final Mapper mapper;

    public Mono<UserHistory> save(UserHistoryDTO history) {

        return historyRepository.existsByTitle(history.getTitle())
                .flatMap(exists -> {
                    if (exists) {
                        return Mono.error(new IllegalStateException("Record with this title already exists"));
                    } else {
                        UserHistory newHistory = mapper.toUserHistory(history);
                        return historyRepository.save(newHistory);
                    }
                });
    }

    public Flux<UserHistory> findall() {
        return historyRepository.findAll();
    }













































}
