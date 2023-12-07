package com.example.madrid.madrid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    

    public boolean isValidUser(String userName, String password) {
        return userRepository.existsByUserNameAndPassword(userName, password);
    }

    // Other service methods...
}
