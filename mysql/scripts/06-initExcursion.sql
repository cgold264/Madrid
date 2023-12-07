USE madrid_eats_db;


CREATE TABLE IF NOT EXISTS excursion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    establishment int,
    item VARCHAR(255) NOT NULL,
    price FLOAT(5, 2) NOT NULL,
    time_occupied FLOAT(5, 2) NOT NULL,
    reservation_needed BOOL,
    day_activity BOOL,
    FOREIGN KEY (establishment) REFERENCES establishment(id) ON DELETE CASCADE
);

INSERT INTO excursion (establishment, item, price, time_occupied, reservation_needed, day_activity) VALUES 
(9, "Entrance", 6.00, 3.00, false, true),
(10, "Tour", 45.00, 0.50, true, true),
(11, "Entrance", 1.00, 2.00, false, true),
(12, "Entrance", 0.00, 1.00, false, true),
(13, "Entrance", 0.00, 2.00, false, true),
(14, "Entrance", 25.00, 3.00, false, false);

