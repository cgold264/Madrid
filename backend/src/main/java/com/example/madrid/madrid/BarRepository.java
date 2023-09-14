package com.example.madrid.madrid;



import com.example.madrid.madrid.Bar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BarRepository extends JpaRepository<Bar, Long> {
    // You can define custom query methods here if needed
}

