package com.News.History.history;

import com.News.History.kafka.UserHistoryDTO;
import com.News.History.websocket.Article;
import org.springframework.stereotype.Component;

@Component
public class Mapper {

    public UserHistory toUserHistory(UserHistoryDTO dto){
        return UserHistory.builder()
                .key_cloak_id(dto.getKey_cloak_id())
                .sourceID(dto.getSource().getId())
                .sourceName(dto.getSource().getName())
                .author(dto.getAuthor())
                .title(dto.getTitle())
                .description(dto.getDescription())
                .url(dto.getUrl())
                .urlToImage(dto.getUrlToImage())
                .publishedAt(dto.getPublishedAt())
                .content(dto.getContent())
                .build();
    }

    public Article toArticle(UserHistory userHistory) {
        Article.Source source = new Article.Source();
        source.setId(userHistory.getSourceID());
        source.setName(userHistory.getSourceName());

        return Article.builder()
                .source(source)
                .author(userHistory.getAuthor())
                .title(userHistory.getTitle())
                .description(userHistory.getDescription())
                .url(userHistory.getUrl())
                .urlToImage(userHistory.getUrlToImage())
                .publishedAt(userHistory.getPublishedAt())
                .content(userHistory.getContent())
                .build();
    }

}
