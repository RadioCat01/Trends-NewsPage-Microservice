package com.News.History.history;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;


@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@Table("userhistory")
@Builder
public class UserHistory {

    @Id
    private Integer id;

    @Column("key_cloak_Id")
    private String key_cloak_id;

    @Column("source_id")
    private String sourceID;
    @Column("source_name")
    private String sourceName;
    @Column("author")
    private String author;
    @Column("title")
    private String title;
    @Column("description")
    private String description;
    @Column("url")
    private String url;
    @Column("urltoimage")
    private String urlToImage;
    @Column("publishedat")
    private String publishedAt;
    @Column("content")
    private String content;

}
