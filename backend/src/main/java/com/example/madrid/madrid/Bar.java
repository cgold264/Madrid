package com.example.madrid.madrid;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Bar {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String drink;
    private String price;
    private Long litRating;
    @OneToMany(targetEntity=Establishment.class, mappedBy="id", fetch=FetchType.EAGER)
    private Establishment establishment;

    // Getters and setters
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Establishment getEstablishment() {
        return establishment;
    }

    public void setEstablishment(Establishment establishment) {
        this.establishment = establishment;
    }

    public String getDrink() {
        return drink;
    }

    public void setDrink(String drink) {
        this.drink = drink;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Long getLitRating() {
        return litRating;
    }

    public void setLitRating(Long litRating) {
        this.litRating = litRating;
    }
}

