package com.News.User.user;

import java.util.List;

public record UserRequest(
        List<String> preferences
) {
}
