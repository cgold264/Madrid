package com.example.madrid.madrid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@Controller // This means that this class is a Controller
@RequestMapping(path="/bars") // This means URL's start with /demo (after Application path)
public class BarController {
  @Autowired // This means to get the bean called userRepository
         // Which is auto-generated by Spring, we will use it to handle the data
  private BarRepository barRepository;

  @PostMapping(path="/add") // Map ONLY POST Requests
  public @ResponseBody String addNewBar (@RequestParam String name
      , @RequestParam String drink, @RequestParam String price) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request

    Bar n = new Bar();
    n.setName(name);
    n.setDrink(drink);
    n.setPrice(price);
    barRepository.save(n);
    return "Saved";
  }

  @GetMapping(path="/all")
  public @ResponseBody Iterable<Bar> getAllBars() {
    // This returns a JSON or XML with the users
    return barRepository.findAll();
  }
}

