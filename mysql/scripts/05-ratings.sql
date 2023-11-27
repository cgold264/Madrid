USE madrid_eats_db;

CREATE TABLE IF NOT EXISTS ratings(
    rating int NOT NULL,
    submitter NVARCHAR(255) NOT NULL,
    establishment int NOT NULL,
    FOREIGN KEY(submitter) REFERENCES user(userName),
    Foreign Key (establishment) REFERENCES establishment(id)
);