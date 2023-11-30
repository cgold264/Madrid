package com.example.madrid.madrid;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {

    @Query("SELECT COUNT(u) > 0 FROM user u WHERE u.user_name = ?1 AND u.password = ?2")
    boolean validateUser(String user_name, String password);
}
