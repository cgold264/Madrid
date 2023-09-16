USE madrid_eats_db;

CREATE TABLE IF NOT EXISTS bar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    drink VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL
);

-- Insert sample data if needed
INSERT INTO bar (name, drink, price)
VALUES
    ('Bar A', 'Beer', '12'),
    ('Bar B', 'Wine', '12'),
    ('Bar C', 'Red Bull', '12');
