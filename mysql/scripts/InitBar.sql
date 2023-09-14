USE madrid_eats_db;

CREATE TABLE IF NOT EXISTS bars_md (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    drink VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Insert sample data if needed
INSERT INTO bars_md (name, drink, price)
VALUES
    ('Bar A', 'Beer', 12.99),
    ('Bar B', 'Wine', 9.99),
    ('Bar C', 'Red Bull', 14.49);
