DROP SCHEMA IF EXISTS projetweb CASCADE ;
CREATE SCHEMA projetweb;

CREATE TABLE projetweb.countries(
    country_code VARCHAR(3) PRIMARY KEY,
    country_name VARCHAR(50) NOT NULL
);

CREATE TABLE projetweb.towns(
    id_town SERIAL PRIMARY KEY ,
    town_name VARCHAR NOT NULL,
    country_code VARCHAR(3) REFERENCES projetweb.countries(country_code) NOT NULL
);

CREATE TABLE projetweb.categories(
    id_category SERIAL PRIMARY KEY  ,
    category_name VARCHAR(20) NOT NULL
);

CREATE TABLE projetweb.places(
    id_place SERIAL PRIMARY KEY  ,
    place_name VARCHAR(100) NOT NULL,
    id_category INTEGER REFERENCES projetweb.categories(id_category),
    description VARCHAR(100) NULL,
    id_town INTEGER REFERENCES projetweb.towns(id_town) NOT NULL
);

CREATE TABLE projetweb.trips(
    id_trip SERIAL PRIMARY KEY  ,
    start_date DATE NOT NULL ,
    end_date DATE NOT NULL ,
    country_code VARCHAR(3) REFERENCES projetweb.countries(country_code),
    id_town INTEGER REFERENCES projetweb.towns(id_town)
);

CREATE TABLE projetweb.users(
    id_user SERIAL PRIMARY KEY  ,
    firstname VARCHAR(100) NOT NULL ,
    lastname VARCHAR(100) NOT NULL ,
    birthdate DATE NOT NULL ,
    email VARCHAR(100) NOT NULL UNIQUE ,
    password VARCHAR(60) NOT NULL ,
    join_date DATE DEFAULT CURRENT_DATE NOT NULL,
    profile_picture VARCHAR(100) NULL
);

CREATE TABLE projetweb.trips_places(
    id_place INTEGER REFERENCES projetweb.places(id_place),
    id_trip INTEGER REFERENCES projetweb.trips(id_trip),
    PRIMARY KEY (id_place, id_trip)
);

CREATE TABLE projetweb.trips_participations(
    id_user INTEGER REFERENCES projetweb.users(id_user),
    id_trip INTEGER REFERENCES projetweb.trips(id_trip),
    PRIMARY KEY (id_user, id_trip)
);

CREATE TABLE projetweb.places_comments(
    id_place_comment SERIAL UNIQUE ,
    id_user INTEGER REFERENCES projetweb.users(id_user),
    id_place INTEGER REFERENCES projetweb.places(id_place),
    note INTEGER CHECK ( note IN (1, 2, 3, 4, 5) ),
    comment VARCHAR(140) NOT NULL ,
    PRIMARY KEY (id_user, id_place)
);

CREATE TABLE projetweb.trips_comments(
    id_trip_comment SERIAL UNIQUE ,
    id_user INTEGER REFERENCES projetweb.users(id_user),
    id_trip INTEGER REFERENCES projetweb.trips(id_trip),
    note INTEGER CHECK ( note IN (1, 2, 3, 4, 5) ),
    comment VARCHAR(140) NOT NULL ,
    PRIMARY KEY (id_user, id_trip)
);

CREATE TABLE projetweb.images_comment(
    id_image SERIAL PRIMARY KEY  ,
    id_place_comment INTEGER REFERENCES projetweb.places_comments(id_place_comment),
    image VARCHAR(100) NOT NULL
);

CREATE TABLE projetweb.images_trips(
    id_image SERIAL PRIMARY KEY  ,
    id_trip INTEGER REFERENCES projetweb.trips(id_trip),
    image VARCHAR(100) NOT NULL
);

CREATE TABLE projetweb.site_comments(
    id_comment SERIAL UNIQUE NOT NULL ,
    id_user INTEGER REFERENCES projetweb.users(id_user) NOT NULL ,
    PRIMARY KEY (id_comment, id_user)
)