USE madrid_eats_db;

CREATE TABLE IF NOT EXISTS ratings(
    rating int NOT NULL,
    submitter NVARCHAR(255) NOT NULL,
    establishment int NOT NULL,
    review NVARCHAR(255),
    FOREIGN KEY(submitter) REFERENCES user(user_name),
    Foreign Key (establishment) REFERENCES establishment(id)
);