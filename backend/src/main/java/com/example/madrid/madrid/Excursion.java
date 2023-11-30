package com.example.madrid.madrid;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Excursion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String item;
    private Double price;
    private Long time_occupied;
    private Boolean reservation_needed;
    private Boolean day_activity;
    @OneToOne
    @JoinColumn(name = "establishment", referencedColumnName = "id")
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

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Long getTimeOccupied() {
        return time_occupied;
    }

    public void setTimeOccupied(Long time_occupied) {
        this.time_occupied = time_occupied;
    }

    public Boolean getReservationNeeded() {
        return reservation_needed;
    }

    public void set(Boolean reservation_needed) {
        this.reservation_needed = reservation_needed;
    }

    public Boolean getDayActivity() {
        return day_activity;
    }

    public void setDayActivity(Boolean day_activity) {
        this.day_activity = day_activity;
    }
}

