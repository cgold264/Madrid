USE madrid_eats_db;

CREATE TABLE IF NOT EXISTS restaurants_md (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    item VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Insert sample data if needed
INSERT INTO restaurants_md (name, item, price)
VALUES
    ('Restaurant A', 'Item 1', 12.99),
    ('Restaurant B', 'Item 2', 9.99),
    ('Restaurant C', 'Item 3', 14.49);
