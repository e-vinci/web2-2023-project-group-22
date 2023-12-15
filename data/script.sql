DROP SCHEMA IF EXISTS projetweb CASCADE ;
CREATE SCHEMA projetweb;

CREATE TABLE projetweb.trips(
    id_trip SERIAL PRIMARY KEY  ,
    start_date DATE NOT NULL ,
    end_date DATE NOT NULL ,
    country_code VARCHAR(3) NOT NULL,
    privacy BOOLEAN NOT NULL DEFAULT (TRUE)
);

CREATE TABLE projetweb.users(
    id_user SERIAL PRIMARY KEY  ,
    firstname VARCHAR(100) NOT NULL ,
    lastname VARCHAR(100) NOT NULL ,
    birthdate DATE NULL ,
    email VARCHAR(100) NOT NULL UNIQUE ,
    password VARCHAR(60) NOT NULL ,
    join_date DATE DEFAULT CURRENT_DATE NOT NULL,
    profile_picture VARCHAR(100) NULL
);

CREATE TABLE projetweb.trips_places(
    id_place TEXT NOT NULL,
    id_trip INTEGER REFERENCES projetweb.trips(id_trip),
    PRIMARY KEY (id_place, id_trip)
);

CREATE TABLE projetweb.trips_participations(
    id_user INTEGER REFERENCES projetweb.users(id_user),
    id_trip INTEGER REFERENCES projetweb.trips(id_trip),
    PRIMARY KEY (id_user, id_trip)
);

CREATE TABLE projetweb.trips_comments(
    id_trip_comment SERIAL UNIQUE ,
    id_user INTEGER REFERENCES projetweb.users(id_user),
    id_trip INTEGER REFERENCES projetweb.trips(id_trip),
    rating INTEGER CHECK ( rating IN (1, 2, 3, 4, 5) ),
    comment VARCHAR(140) NOT NULL,
    PRIMARY KEY (id_user, id_trip)
);

CREATE TABLE projetweb.images_trips(
    id_image SERIAL PRIMARY KEY  ,
    id_trip INTEGER REFERENCES projetweb.trips(id_trip),
    image VARCHAR(100) NOT NULL
);

CREATE TABLE projetweb.site_comments(
    id_comment SERIAL UNIQUE NOT NULL ,
    id_user INTEGER REFERENCES projetweb.users(id_user) NOT NULL ,
    rating INTEGER CHECK ( rating IN (1, 2, 3, 4, 5) ),
    comment VARCHAR(140),
    PRIMARY KEY (id_comment, id_user)
);