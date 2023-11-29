USE madrid_eats_db;


CREATE TABLE IF NOT EXISTS bar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    establishment int,
    drink VARCHAR(255) NOT NULL,
    price FLOAT(5, 2) NOT NULL,
    lit_rating int,
    FOREIGN KEY (establishment) REFERENCES establishment(id)
);

-- Insert sample data if needed
INSERT INTO bar (establishment, drink, price, lit_rating)
VALUES
    (1, 'Beer', '2', 4),
    (2, 'Wine', '4', 5);
