package com.News.User.user;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @PostMapping
    public Mono<User> saveUser(
            @RequestBody UserRequest request,
            @RequestHeader("User-ID") String UserId
    ){
        return service.saveUser(request,UserId);
    }

    @GetMapping
    public Flux<User> getUsers(){
        return service.findAll();
    }
}
