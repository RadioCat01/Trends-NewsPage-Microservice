package com.News.User.user;

import java.util.List;

public record UserRequest(
        String keyCloakId,
        List<String> preferences
) {
}
