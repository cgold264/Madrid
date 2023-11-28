USE madrid_eats_db;

CREATE TABLE IF NOT EXISTS user(
    userName NVARCHAR(255) NOT NULL PRIMARY KEY,
    password NVARCHAR(255) NOT NULL
);

INSERT INTO user(userName, password) VALUES 
('default', 'default');