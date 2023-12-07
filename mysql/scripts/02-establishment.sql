USE madrid_eats_db;


CREATE TABLE IF NOT EXISTS establishment(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    latitude DECIMAL(18, 16),
    longitude DECIMAL(18, 16),
    website NVARCHAR(255),
    telephone VARCHAR(10),
    submitter NVARCHAR(255) NOT NULL,
    FOREIGN KEY(submitter) REFERENCES user(user_name)
);


-- Default Bar Data
INSERT INTO establishment (name, description, latitude, longitude, website, telephone, submitter)
VALUES
    ('El Tigre', 'Bar, Mediterranean, Spanish', 40.42055390191259, -3.6978751612124197, null, null, 'default'),
    ('100 montaditos', 'Fast Food, European, Spanish', 40.419818761461684, -3.701849516669926, null, null, 'default'),
    ('360 Sky Bar', 'Bar and Grill', 40.42453497478415, -3.7104807980079584, "https://www.riu360rooftopbar.com/?utm_source=google&utm_medium=organic&utm_campaign=my_business&utm_content=SKB", "919193393", "default"),
    ('El Chapandaz', 'Bar and Disco Club', 40.43439149158128, -3.7172049070697915, "http://www.elchapandaz.com/", "915492968", 'default'),
    ('Espit Chupitos', "Pub", 40.4296938807986, -3.705435588781452, "http://www.espitchupitos.com/", null, "default"),
    ('Dubliners', 'Irish Pub', 40.41599754119695, -3.7022518747152993, null, "915327956", "default"),
    ("Pool and Beer", 'Irish Pub', 40.437666841892735, -3.7108474089411385, "http://www.poolandbeer.com/", "915932847", "default"),
    ("Beer Pong Madrid", "Bar", 40.42877846713672, -3.7050717359807557, "http://www.beerpongmadrid.es/", "651344470", "default");


-- Default Restaurant Data
INSERT INTO establishment (name, description, latitude, longitude, website, telephone, submitter)
VALUES
    ('Tiki Taco', 'Mexican, Latin, International, Street Food', 40.42298696225003, -3.707600175221072, null, null, 'default'),
    ('NAP Malasana', 'Italian, Pizza, Mediterranean', 40.425617913510195, -3.707549767274097, null, null, 'default'),
    ('Empanadas Malvon', 'Argentinean, South American', 40.429521920215834, -3.701672279038731, null, null, 'default'),
    ('Tierra Burrito Bar', 'Mexican, Latin, Fast Food, Central American', 40.441652709443225, -3.7129322440566632, null, null, 'default'),
    ('MAWEY Taco Bar', 'Mexican, Latin', 40.4318033965634, -3.7023920942601394, null, null, 'default'),
    ('Forno De Lugo', 'Spanish',40.4369424924637, -3.7130638249875587, null, null, 'default');

-- Default Excursion Data
INSERT INTO establishment (name, description, latitude, longitude, website, telephone, submitter)
VALUES
    ('Madrid Royal Palace', 'Home of the royal family.', 40.418155093022406, -3.714193986316139, "https://www.patrimonionacional.es/real-sitio/palacio-real-de-madrid", "914548700", "default"),
    ('TU Tuk Tuk', "Tuk Tuk Guided tours", 40.419089442975, -3.7097839999999995, "https://www.tutuktuk.com/", "608531791", "default"),
    ("Real Jardin Botanico", "Madrid Botanical Gardens", 40.41329567553358, -3.6905258852204077, "http://www.rjb.csic.es/", "914203017", "default"),
    ("Catedral de la Almudena", "The cathedral of Madrid", 40.41585518412882, -3.7145305458799474, "https://catedraldelaalmudena.es/", "915422200", "default"),
    ("El Retiro Park", "Expansive, 19th-century park with boating lake & rose garden, plus numerous fountains & statues.", 40.41543203750957, -3.684542437783538, "https://www.esmadrid.com/informacion-turistica/parque-del-retiro", null, "default"),
    ("Teatro Kapital", "Opulent, 7-story nightclub with multiple bars & a rooftop, for live music, karaoke & dance parties.", 40.409899948293486, -3.6931726765630217, "http://www.teatrokapital.com/", "914202906", "default");
