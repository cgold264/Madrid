package com.example.madrid.madrid;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {
    // @Query("select u from User u where u.userName = ?1")
    // User findByUsername(String userName);
}

