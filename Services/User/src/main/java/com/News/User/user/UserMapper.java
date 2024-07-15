package com.News.User.user;

import org.springframework.stereotype.Service;

@Service
public class UserMapper {

    public User toUser(UserRequest request, String userId) {
        return new User().builder()
                .keyCloakId(userId)
                .preferences(request.preferences())
                .build();
    }
}
