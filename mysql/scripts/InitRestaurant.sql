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
    ('El Tigre', 'Tapas', 14.00, 'Bar, Mediterranean, Spanish', 40.42579381875137, -3.699196990377309),
    ('100 montaditos', 'Tapas', 14.00, 'Fast Food, European, Spanish', 40.42903162809771, -3.6753790585008477),
    ('Tiki Taco', 'Tacos', 1.00, 'Mexican, Latin, International, Street Food', 40.42719760942729, -3.7081351903039677),
    ('NAP Malasaña', 'Pizza', 12.00, 'Italian, Pizza, Mediterranean', 40.43039000558894, -3.706968321844503),
    ('Empanadas Malvón', 'Empanadas', 2.00, 'Argentinean, South American', 40.43519326282041, -3.702906035432887),
    ('Tierra Burrito Bar', 'Burritos', 9.00, 'Mexican, Latin, Fast Food, Central American', 40.441652709443225, -3.7129322440566632),
    ('MAWEY Taco Bar', 'Street Tacos', 5.00, 'Mexican, Latin', 40.43709063889334, -3.7009864532290204),
    ('Forno De Lugo', 'Empanadas', 2.50, 'Spanish', 40.433933325152665, -3.6688130216184183);
