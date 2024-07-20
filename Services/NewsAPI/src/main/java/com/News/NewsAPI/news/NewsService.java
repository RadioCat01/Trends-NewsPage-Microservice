package com.News.NewsAPI.news;

import com.News.NewsAPI.finance.AlphaVantageResponse;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;

@Service
@Getter
@Slf4j
public class NewsService {

    private final WebClient webClient;
    private final WebClient userClient;
    private final WebClient financeClient;
    private final ObjectMapper objectMapper;
    private final List<Article> articles = new ArrayList<>();

    public NewsService(WebClient.Builder webClient, ObjectMapper objectMapper){
        this.webClient = webClient.baseUrl("https://newsapi.org/v2").build();
        this.userClient = webClient.baseUrl("http://localhost:8082/user").build();
        this.financeClient = webClient.baseUrl("https://www.alphavantage.co").build();
        this.objectMapper = objectMapper;
    }

    public Flux<Article> getNews(int pageSize,String id) {

        return getPreferences(id)
                .flatMapMany(key -> webClient.get()
                        .uri(uriBuilder -> uriBuilder
                                .path("/Everything")
                                .queryParam("q", key)
                                .queryParam("apikey", "f23c4fe55e434b2b94313c43cdcf44aa")
                                .queryParam("pageSize", pageSize)
                                .build()
                        )
                        .retrieve()
                        .bodyToFlux(String.class)
                        .flatMap(this::parseArticles)
                );
    }


    public Mono<String> getPreferences(String id) {
        return this.userClient.get()
                .uri("/getPref?id={id}", id)
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<String>>() {})
                .map(keywords-> String.join(" AND ", keywords))
                .doOnNext(k -> log.info(k));
    }


    public Flux<Article> search(int pageSize, String search) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/Everything")
                        .queryParam("q", search)
                        .queryParam("apikey", "f23c4fe55e434b2b94313c43cdcf44aa")
                        .queryParam("pageSize", pageSize)
                        .build()
                )
                .retrieve()
                .bodyToFlux(String.class)
                .flatMap(this::parseArticles)
                .doOnNext(article -> log.info("parsed article: {}", article));
    }




    private Flux<Article> parseArticles(String response) {
        try {
            JSONObject jsonResponse = new JSONObject(response);
            JSONArray articlesArray = jsonResponse.getJSONArray("articles");
            List<Article> articleList = objectMapper.readValue(articlesArray.toString(), new TypeReference<List<Article>>() {});
            return Flux.fromIterable(articleList);
        } catch (Exception e) {
            log.error("Error parsing articles", e);
            return Flux.empty();
        }
    }



    public Mono<AlphaVantageResponse> getIntradayData(String symbol) {
        return financeClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/query")
                        .queryParam("function", "TIME_SERIES_INTRADAY")
                        .queryParam("symbol", symbol)
                        .queryParam("interval", "1min")
                        .queryParam("apikey", "DMN8YVHBK5DBHGHZ")
                        .build())
                .retrieve()
                .bodyToMono(String.class)
                .flatMap(this::parseJson);
    }

    private Mono<AlphaVantageResponse> parseJson(String json) {
        try {
            AlphaVantageResponse response = objectMapper.readValue(json, AlphaVantageResponse.class);
            return Mono.just(response);
        } catch (Exception e) {
            return Mono.error(e);
        }
    }


}















