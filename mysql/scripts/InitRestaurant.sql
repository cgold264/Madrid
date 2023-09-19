USE madrid_eats_db;

CREATE TABLE IF NOT EXISTS restaurant (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    item VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL
);

-- Insert sample data if needed
INSERT INTO restaurant (name, item, price)
VALUES
    ('Restaurant A', 'Item 1', "12.99"),
    ('Restaurant B', 'Item 2', "9.99"),
    ('Restaurant C', 'Item 3', "14.49");
