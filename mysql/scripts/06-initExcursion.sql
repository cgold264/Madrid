USE madrid_eats_db;


CREATE TABLE IF NOT EXISTS excursion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    establishment int,
    item VARCHAR(255) NOT NULL,
    price FLOAT(5, 2) NOT NULL,
    time_occupied FLOAT(5, 2) NOT NULL,
    reservation_needed BOOL,
    day_activity BOOL,
    FOREIGN KEY (establishment) REFERENCES establishment(id)
);

