package com.News.History.analytics;

import com.News.History.history.HistoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class AnalyticService {

    private final HistoryRepository historyRepository;
    private final WebClient webClient;

    private String externalServiceUrl = "http://localhost:8082";

    public AnalyticService(HistoryRepository historyRepository, WebClient.Builder webClientBuilder) {
        this.historyRepository = historyRepository;
        this.webClient = webClientBuilder.baseUrl(externalServiceUrl).build();
    }

    public Mono<Void> sendAllSourceNames() {
        System.out.println("sendAllSourceNames called");

        return historyRepository.findAllSourceNames()
                .doOnSubscribe(subscription -> System.out.println("Subscription started"))
                .doOnNext(name -> System.out.println("Source name: " + name))
                .collectList()
                .doOnNext(names -> System.out.println("Source names collected: " + names))
                .flatMap(sourceNames -> {
                    System.out.println("Preparing to send source names: " + sourceNames);

                    return webClient.post()
                            .uri("/api/sources")
                            .bodyValue(sourceNames)
                            .retrieve()
                            .bodyToMono(Void.class)
                            .doOnSuccess(result -> System.out.println("Successfully sent source names"))
                            .doOnError(error -> System.err.println("Error sending source names: " + error.getMessage()));
                })
                .doOnError(error -> System.err.println("Error in sendAllSourceNames: " + error.getMessage()))
                .then(); // Ensure completion
    }









}
