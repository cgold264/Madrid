package com.example.madrid.madrid;

import org.springframework.data.repository.CrudRepository;

public interface EstablishmentRepository extends CrudRepository<Establishment, Long> {
    Establishment findByName(String name);
}

