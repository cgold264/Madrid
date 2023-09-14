package com.example.madrid.madrid;

import com.example.madrid.madrid.Bar;
import com.example.madrid.madrid.BarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/bars")
public class BarController {
    private final BarService barService;

    @Autowired
    public BarController(BarService barService) {
        this.barService = barService;
    }

    @GetMapping("/")
    public List<Bar> getAllBars() {
        return barService.getAllBars();
    }

    @GetMapping("/{id}")
    public Bar getBarById(@PathVariable Long id) {
        return barService.getBarById(id);
    }
}

