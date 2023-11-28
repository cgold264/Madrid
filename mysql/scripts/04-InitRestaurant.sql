USE madrid_eats_db;

CREATE TABLE IF NOT EXISTS restaurant (
    id INT AUTO_INCREMENT PRIMARY KEY,
    establishment int,
    item NVARCHAR(255) NOT NULL,
    price FLOAT(5, 2) NOT NULL,
    FOREIGN KEY (establishment) REFERENCES establishment(id)
);


