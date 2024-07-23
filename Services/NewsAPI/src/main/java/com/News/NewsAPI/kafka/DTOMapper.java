package com.News.NewsAPI.kafka;

import com.News.NewsAPI.news.Article;
import org.springframework.stereotype.Component;

@Component
public class DTOMapper {

    public UserHistoryDTO toUserDto(Article article, String userId) {

        UserHistoryDTO.Source source = new UserHistoryDTO.Source();
        source.setId(article.getSource().getId());
        source.setName(article.getSource().getName());

        return UserHistoryDTO.builder()
                .key_cloak_id(userId)
                .source(source)
                .author(article.getAuthor())
                .title(article.getTitle())
                .description(article.getDescription())
                .url(article.getUrl())
                .urlToImage(article.getUrlToImage())
                .publishedAt(article.getPublishedAt())
                .content(article.getContent())
                .build();
    }
}
