USE madrid_eats_db;

CREATE TABLE IF NOT EXISTS establishment(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    description VARCHAR(255),
    latitude DECIMAL(18, 16),
    longitude DECIMAL(18, 16),
    website NVARCHAR(255),
    telephone VARCHAR(10),
    submitter NVARCHAR(255) NOT NULL,
    FOREIGN KEY(submitter) REFERENCES user(user_name)
);


-- Insert sample data if needed
INSERT INTO establishment (name, description, latitude, longitude, website, telephone, submitter)
VALUES
    ('El Tigre', 'Bar, Mediterranean, Spanish', 40.42055390191259, -3.6978751612124197, null, null, 'default'),
    ('100 montaditos', 'Fast Food, European, Spanish', 40.419818761461684, -3.701849516669926, null, null, 'default'),
    ('Tiki Taco', 'Mexican, Latin, International, Street Food', 40.42298696225003, -3.707600175221072, null, null, 'default'),
    ('NAP Malasaña', 'Italian, Pizza, Mediterranean', 40.425617913510195, -3.707549767274097, null, null, 'default'),
    ('Empanadas Malvón', 'Argentinean, South American', 40.429521920215834, -3.701672279038731, null, null, 'default'),
    ('Tierra Burrito Bar', 'Mexican, Latin, Fast Food, Central American', 40.441652709443225, -3.7129322440566632, null, null, 'default'),
    ('MAWEY Taco Bar', 'Mexican, Latin', 40.4318033965634, -3.7023920942601394, null, null, 'default'),
    ('Forno De Lugo', 'Spanish',40.4369424924637, -3.7130638249875587, null, null, 'default');