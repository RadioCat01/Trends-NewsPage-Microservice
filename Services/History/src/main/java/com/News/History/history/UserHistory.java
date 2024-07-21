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
public class UserHistory {

    @Id
    private Integer id;

    @Column("key_cloak_Id")
    private String key_cloak_id;

    @Column("clicked_article")
    private String clicked_article;
}
