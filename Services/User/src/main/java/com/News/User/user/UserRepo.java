package com.News.User.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;


public interface UserRepo extends JpaRepository<User, Integer> {

    @Query("SELECT c FROM User c WHERE c.keyCloakId = :userId")
    Optional<User> findByKCId(@Param("userId") String userId);
}
