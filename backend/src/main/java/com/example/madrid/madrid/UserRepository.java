package com.example.madrid.madrid;

import com.example.madrid.madrid.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByUsername(String userName);
}

