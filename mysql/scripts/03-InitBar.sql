USE madrid_eats_db;

CREATE TABLE IF NOT EXISTS bar (
    establishment int,
    drink VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL,
    litRating int,
    FOREIGN KEY (establishment) REFERENCES establishment(id)
);

-- -- Insert sample data if needed
-- INSERT INTO bar (establishment, drink, price, litRating)
-- VALUES
--     ('Bar A', 'Beer', '12', 4),
--     ('Bar B', 'Wine', '12', 5),
--     ('Bar C', 'Red Bull', '12', );
