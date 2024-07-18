package com.News.User.user;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    private Integer Id;

    @Column(nullable = false, unique = true)
    private String keyCloakId;
    private List<String> preferences;

}
