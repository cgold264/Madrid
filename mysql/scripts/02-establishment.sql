USE madrid_eats_db;

CREATE TABLE IF NOT EXISTS establishment(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    description VARCHAR(255),
    latitude DECIMAL(18, 16),
    longitude DECIMAL(18, 16),
    website NVARCHAR(255),
    telephone VARCHAR(10),
    submitter NVARCHAR(255),
    FOREIGN KEY(submitter) REFERENCES users(userName)
);

-- -- Insert sample data if needed
-- INSERT INTO establishment (name, item, price, description, latitude, longitude)
-- VALUES
--     ('El Tigre', 'Tapas', 14.00, 'Bar, Mediterranean, Spanish', 40.42055390191259, -3.6978751612124197, 'default'),
--     ('100 montaditos', 'Tapas', 14.00, 'Fast Food, European, Spanish', 40.419818761461684, -3.701849516669926, 'default'),
--     ('Tiki Taco', 'Tacos', 1.00, 'Mexican, Latin, International, Street Food', 40.42298696225003, -3.707600175221072, 'default'),
--     ('NAP Malasaña', 'Pizza', 12.00, 'Italian, Pizza, Mediterranean', 40.425617913510195, -3.707549767274097, 'default'),
--     ('Empanadas Malvón', 'Empanadas', 2.00, 'Argentinean, South American', 40.429521920215834, -3.701672279038731, 'default'),
--     ('Tierra Burrito Bar', 'Burritos', 9.00, 'Mexican, Latin, Fast Food, Central American', 40.441652709443225, -3.7129322440566632, 'default'),
--     ('MAWEY Taco Bar', 'Street Tacos', 5.00, 'Mexican, Latin', 40.4318033965634, -3.7023920942601394, 'default'),
--     ('Forno De Lugo', 'Empanadas', 2.50, 'Spanish',40.4369424924637, -3.7130638249875587, 'default');