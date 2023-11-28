USE madrid_eats_db;

CREATE TABLE IF NOT EXISTS user(
    user_name NVARCHAR(255) NOT NULL PRIMARY KEY,
    password NVARCHAR(255) NOT NULL
);

INSERT INTO user(user_name, password) VALUES 
('default', 'default');