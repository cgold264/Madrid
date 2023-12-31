package com.example.madrid.madrid;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@Controller // This means that this class is a Controller
@RequestMapping(path="/users") // This means URL's start with /demo (after Application path)
public class UserController {
  
  @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

  @PostMapping(path="/add", consumes ="application/json") // Map ONLY POST Requests
  public @ResponseBody String addNewRestaurant(@RequestBody User user) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request
    try{
      userRepository.save(user);
      return "Saved";
    } catch (Exception e){
      return "Failed to save restaurant: " + e.getMessage();
    }
  }

@PostMapping(path = "/validUser", consumes = "application/json")
    public ResponseEntity<Void> checkValidUser(@RequestBody User user) {
        if (userService.isValidUser(user.getUserName(), user.getPassword())) {
            // User is valid, return OK status
            return ResponseEntity.ok().build();
        } else {
            // User not found, return 404 status
            return ResponseEntity.notFound().build();
        }
    }
}



