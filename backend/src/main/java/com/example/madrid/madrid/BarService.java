package com.example.madrid.madrid;

import com.example.madrid.madrid.Bar;
import com.example.madrid.madrid.BarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BarService {
    private final BarRepository barRepository;

    @Autowired
    public BarService(BarRepository barRepository) {
        this.barRepository = barRepository;
    }

    public List<Bar> getAllBars() {
        return barRepository.findAll();
    }

    public Bar getBarById(Long id) {
        return barRepository.findById(id).orElse(null);
    }

    // Add more methods as needed for your application's requirements
}

