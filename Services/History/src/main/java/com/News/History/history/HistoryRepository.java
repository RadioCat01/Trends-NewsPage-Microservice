package com.News.History.history;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface HistoryRepository extends ReactiveCrudRepository<UserHistory, Integer> {
}
