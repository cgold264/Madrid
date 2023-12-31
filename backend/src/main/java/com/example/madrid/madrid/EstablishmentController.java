package com.example.madrid.madrid;

import java.math.BigDecimal;

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
@RequestMapping(path="/establishment") // This means URL's start with /demo (after Application path)
public class EstablishmentController {
  @Autowired 
  private EstablishmentRepository establishmentRepository;
  @Autowired
  private UserRepository userRepository;


  @PostMapping(path="/add") // Map ONLY POST Requests
  public @ResponseBody String addNewBar (@RequestParam String name
      , @RequestParam String description, @RequestParam BigDecimal latitude, 
      @RequestParam BigDecimal longitude, @RequestParam String website,
      @RequestParam String telephone, @RequestParam String userName
      ) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request

    Establishment n = new Establishment();
    User submitter = new User();
    n.setName(name);
    n.setDescription(description);
    n.setLatitude(latitude);
    n.setLongitude(longitude);
    n.setWebsite(website);
    n.setTelephone(telephone);
    n.setSubmitter(submitter);
    establishmentRepository.save(n);
    return "Saved";
  }

  @GetMapping(path="/all")
  public @ResponseBody Iterable<Establishment> getAllBars() {
    // This returns a JSON or XML with the users
    return establishmentRepository.findAll();
  }

  @PostMapping(path="/delete", consumes ="application/json")
  public @ResponseBody String deleteEstablishment(@RequestBody Establishment establishment) {
    // This returns a JSON or XML with the users
    try{
      establishmentRepository.deleteById(establishment.getId());
      return "Deleted";
    } catch (Exception e){
      return "Failed to delete establishment: " + e.getMessage();
    }
  }

}

