package com.News.User.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserService service;

    @PostMapping("/save")
    public String saveUserPref(
            @RequestBody UserRequest request,
            @RequestHeader("User-ID") String UserId
    ){
        log.info("Saving user");
        return service.saveUser(request,UserId);
    }

    @GetMapping("/checkUser")
    public ResponseEntity<Boolean> checkUser(
            @RequestHeader("User-ID") String UserId
    ){
        log.info("checking user called");
        return service.checkUser(UserId);
    }

    @GetMapping("/getPref")
    public Mono<List<String>> getPrefById(
            @RequestParam("id") String id
    ){
        log.info("get preferences called");
        return service.getPref(id);
    }

    @GetMapping
    public List<User> getUsers(){
        log.info("get user called");
        return service.findAll();
    }
}
