package com.News.NewsAPI.kafka;

import lombok.*;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class UserHistoryDTO {

    private String key_cloak_id;
    private Source source;
    private String author;
    private String title;
    private String description;
    private String url;
    private String urlToImage;
    private String publishedAt;
    private String content;

    @Data
    public static class Source {
        private String id;
        private String name;
    }
}
