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

    public Mono<Void> sendAllSourceNames() {   // reactive single value or empty result


        return historyRepository.findAllSourceNames() // This method returns a ` Flux<String> ` containing source names {"Wierd", "CNET", "Business"}
                .collectList()        // this transforms ` Flux<String> ` to ` List<String> ` to ` Mono<List<String>> ` ( to a single value )
                .doOnNext(sourceNames -> System.out.println("Retrieved source names: " + sourceNames))
                .flatMap(sourceNames -> {
                    if (sourceNames.isEmpty()) {
                        System.out.println("No names found");
                        return Mono.empty();    // ends the chain if empty
                    }


                    System.out.println("Preparing to send source names: " + sourceNames);

                    return webClient.post()
                            .uri("/api/sources")
                            .bodyValue(sourceNames)        // sends the list {"Wierd", "CNET", "Business"}
                            .retrieve()
                            .bodyToMono(Void.class)
                            .doOnSuccess(result -> System.out.println("Successfully sent source names"))
                            .doOnError(error -> System.err.println("Error sending source names: " + error.getMessage()));
                })
                .doOnError(error -> System.err.println("Error in sendAllSourceNames: " + error.getMessage()))
                .doOnTerminate(() -> System.out.println("sendAllSourceNames method execution finished"))
                .then();   // Returns Mono<Void> indicating completion of the chain
    }

        /*
        Mono<Void> results = historyRepository.findAllSourceNames()
                .collectList()
                .flatMap(
                        Names ->{
                            System.out.println(Names);

                            return webClient.post()
                                    .uri("/api/sources")
                                    .bodyValue(Names)        // Sends the list
                                    .retrieve()
                                    .bodyToMono(Void.class)
                                    .doOnSuccess(result -> System.out.println("Successfully sent source names"))
                                    .doOnError(error -> System.err.println("Error sending source names: " + error.getMessage()));
                        }).then();

        results.subscribe(
                null,
                error -> System.err.println("Error sending source names: " + error.getMessage()),
                () -> System.out.println("Successfully sent source names")
        );

        return Mono.empty();
      }  */
}
