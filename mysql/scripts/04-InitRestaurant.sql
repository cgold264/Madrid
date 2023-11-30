USE madrid_eats_db;

CREATE TABLE IF NOT EXISTS restaurant (
    id INT AUTO_INCREMENT PRIMARY KEY,
    establishment int,
    item NVARCHAR(255) NOT NULL,
    price FLOAT(5, 2) NOT NULL,
    FOREIGN KEY (establishment) REFERENCES establishment(id)
);
INSERT INTO restaurant (establishment, item, price) VALUES 
(3, "Tacos", 1.00),
(4, "Pizza", 12.00),
(5, "Empanada's", 2.00),
(6, "Burritos", 8.00),
(7, "Burritos", 9.00),
(8, "Spanish", 10.00);



