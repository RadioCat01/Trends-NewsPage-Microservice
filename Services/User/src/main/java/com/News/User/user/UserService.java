package com.News.User.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepo repo;
    private final UserMapper mapper;

    public String saveUser(UserRequest request, String userId) {

       var user = repo.findByKCId(userId);

       if(user.isEmpty()){
           return repo.save(mapper.toUser(request,userId)).getKeyCloakId();
       }
       return null;
    }

    public List<User> findAll() {
        return repo.findAll();
    }

    public ResponseEntity<Boolean> checkUser(String userId) {
        Optional<User> user = repo.findByKCId(userId);
        return ResponseEntity.ok(user.isPresent());
    }

    public Mono<List<String>> getPref(String userId) {
        Optional<User> user = repo.findByKCId(userId);
        List<String> preferences = user.map(User::getPreferences).orElse(Collections.emptyList());
        return Mono.just(preferences);
    }
}
