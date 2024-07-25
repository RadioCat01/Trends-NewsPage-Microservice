package com.News.History.kafka;

import com.News.History.history.HistoryService;
import com.News.History.websocket.WebsocketService;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class Consumer {

    private final HistoryService service;
    private final WebsocketService websocketService;


    @KafkaListener(topics = "news")
    public void consumeMessage(UserHistoryDTO userHistory){

        System.out.println("Received message from Kafka: " + userHistory);
        service.save(userHistory)
                .doOnSuccess(saved -> {
                    System.out.println("UserHistory saved: " + saved);
                    websocketService.sendAllNews()
                            .doOnError(error -> System.err.println("Error in sendAllNews: " + error.getMessage()))
                            .subscribe();
                })
                .doOnError(error -> System.err.println("Error saving UserHistory: " + error.getMessage()))
                .subscribe();
    }

}
