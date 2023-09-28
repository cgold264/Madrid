USE madrid_eats_db;

CREATE TABLE IF NOT EXISTS restaurant (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    item VARCHAR(255) NOT NULL,
    price FLOAT(5, 2) NOT NULL,
    description VARCHAR(255),
    latitude DECIMAL(8, 6),
    longitude DECIMAL(9, 6)
);

-- Insert sample data if needed
INSERT INTO restaurant (name, item, price, description, latitude, longitude)
VALUES
    ('Restaurant A', 'Item 1', 12.99, 'This is a description of Restaurant 1 it is very yummy', 87.123432, 54.23412),
    ('Restaurant B', 'Item 2', 9.99, 'This is a description of Restaurant 2 it is totally lit.', 43.1245243, 65.32245),
    ('Restaurant C', 'Item 3', 10.99, 'This is a description of Restaurant 3 it is freaking crazy bro', 57.34252, 54.32245),
    ('Restaurant D', 'Item 3', 11.99, 'This is a description of Restaurant 4 it is freaking crazy bro', 45.34252, 32.32245),
    ('Restaurant E', 'Item 3', 12.99, 'This is a description of Restaurant 5 it is freaking crazy bro', 23.34252, 54.32245),
    ('Restaurant F', 'Item 3', 13.99, 'This is a description of Restaurant 6 it is freaking crazy bro', 87.34252, 34.32245),
    ('Restaurant G', 'Item 3', 14.99, 'This is a description of Restaurant 7 it is freaking crazy bro', 45.34252, 67.32245),
    ('Restaurant H', 'Item 3', 15.99, 'This is a description of Restaurant 8 it is freaking crazy bro', 23.34252, 54.32245);
