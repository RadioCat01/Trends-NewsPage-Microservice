package com.News.User.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @PostMapping("/save")
    public String saveUserPref(
            @RequestBody UserRequest request,
            @RequestHeader("User-ID") String UserId
    ){
        return service.saveUser(request,UserId);
    }

    @GetMapping("/checkUser")
    public ResponseEntity<Boolean> checkUser(
            @RequestHeader("User-ID") String UserId
    ){
        return service.checkUser(UserId);
    }

    @GetMapping
    public List<User> getUsers(){
        return service.findAll();
    }
}
