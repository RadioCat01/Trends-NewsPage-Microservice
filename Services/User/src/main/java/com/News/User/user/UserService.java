package com.News.User.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepo repo;
    private final UserMapper mapper;

    public Mono<User> saveUser(UserRequest request, String userId) {

        var user = mapper.toUser(request, userId);
        return repo.save(user);
    }

    public Flux<User> findAll() {
        return repo.findAll();
    }
}
