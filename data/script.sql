CREATE TABLE pays(
    code_pays VARCHAR(3) PRIMARY KEY,
    nom_pays VARCHAR(50) NOT NULL
);

CREATE TABLE villes(
    id_ville SERIAL PRIMARY KEY ,
    nom_ville VARCHAR NOT NULL,
    pays VARCHAR(3) REFERENCES pays(code_pays) NOT NULL
);

CREATE TABLE categories_lieux(
    id_categorie SERIAL PRIMARY KEY  ,
    nom_categorie VARCHAR(20) NOT NULL
);

CREATE TABLE lieux(
    id_lieux SERIAL PRIMARY KEY  ,
    nom_lieu VARCHAR(100) NOT NULL,
    categorie INTEGER REFERENCES categories_lieux(id_categorie),
    description VARCHAR(100) NULL,
    ville INTEGER REFERENCES villes(id_ville) NOT NULL
);

CREATE TABLE voyages(
    id_voyage SERIAL PRIMARY KEY  ,
    date_debut DATE NOT NULL ,
    date_fin DATE NOT NULL ,
    pays VARCHAR(3) REFERENCES pays(code_pays),
    ville INTEGER REFERENCES villes(id_ville)
);

CREATE TABLE utilisateurs(
    id_utilisateur SERIAL PRIMARY KEY  ,
    prenom VARCHAR(100) NOT NULL ,
    nom VARCHAR(100) NOT NULL ,
    date_naissance DATE NOT NULL ,
    email VARCHAR(100) NOT NULL UNIQUE ,
    mot_de_passe VARCHAR(60) NOT NULL ,
    date_inscription DATE DEFAULT CURRENT_DATE NOT NULL,
    photo_de_profil VARCHAR(100) NULL
);

CREATE TABLE lieux_voyages(
    id_lieu_voyage SERIAL PRIMARY KEY  ,
    lieu INTEGER REFERENCES lieux(id_lieux),
    voyage INTEGER REFERENCES voyages(id_voyage)
);

CREATE TABLE participations_voyages(
    id_participation SERIAL PRIMARY KEY  ,
    utilisateur INTEGER REFERENCES utilisateurs(id_utilisateur),
    voyage INTEGER REFERENCES voyages(id_voyage)
);

CREATE TABLE avis_lieux(
    id_avis_lieux SERIAL ,
    utilisateur INTEGER REFERENCES utilisateurs(id_utilisateur),
    lieu INTEGER REFERENCES lieux(id_lieux),
    note INTEGER CHECK ( note = 1 OR note = 2 OR note = 3 OR note = 4 OR note = 5 ),
    avis VARCHAR(140) NOT NULL ,
    PRIMARY KEY (id_avis_lieux, utilisateur, lieu)
);

CREATE TABLE avis_voyage(
    id_avis_voyage SERIAL PRIMARY KEY ,
    utilisateur INTEGER REFERENCES utilisateurs(id_utilisateur),
    voyage INTEGER REFERENCES voyages(id_voyage),
    note INTEGER CHECK ( note = 1 OR note = 2 OR note = 3 OR note = 4 OR note = 5 ),
    avis VARCHAR(140) NOT NULL ,
    PRIMARY KEY (id_avis_voyage, utilisateur, voyage)
);

CREATE TABLE photos_avis(
    id_photo SERIAL PRIMARY KEY  ,
    avis INTEGER REFERENCES avis_lieux(id_avis_lieux),
    photo VARCHAR(100) NOT NULL
);