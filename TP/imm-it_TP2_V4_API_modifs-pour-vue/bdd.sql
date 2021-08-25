CREATE TABLE centre_vacances (
	id serial PRIMARY KEY,
	nom character varying(50) NOT NULL,
	cp character varying(5) NOT NULL,
	ville character varying(50) NOT NULL,
	num_voie character varying(5),
	libelle_voie character varying(80)
);


CREATE TABLE logement (
	id serial PRIMARY KEY,
	titre character varying(50) NOT NULL,
	description character varying(1500) NOT NULL,
	nombre_pieces integer,
	nombre_chambres integer,
	surface_interieure integer,
	surface_exterieure integer, 
	animaux boolean DEFAULT false, 
	id_centre integer REFERENCES centre_vacances ON DELETE CASCADE NOT NULL 
);

CREATE TABLE photo (
	id serial PRIMARY KEY,
	url character varying(500) NOT NULL,
	id_logement integer REFERENCES logement ON DELETE CASCADE,
	id_centre integer REFERENCES centre_vacances ON DELETE CASCADE
);



CREATE TABLE equipement (
	id serial PRIMARY KEY,
	nom_equipement character varying(50) NOT NULL
);


CREATE TABLE logement_equipement (
	id serial PRIMARY KEY,
	quantite integer,
	id_equipement integer REFERENCES equipement ON DELETE CASCADE NOT NULL,
	id_logement integer REFERENCES logement ON DELETE CASCADE NOT NULL 
);


CREATE TABLE utilisateur (
	id serial PRIMARY KEY,
	nom character varying(50) NOT NULL,
	prenom character varying(50), 
	pseudo character varying(50),
	numero_salarie character varying(10) NOT NULL
);


CREATE TABLE reservation (
	id serial PRIMARY KEY,
	numero_reservation character varying(10) NOT NULL,
	date_arrivee date NOT NULL, 
	date_depart date NOT NULL, 
	id_logement integer REFERENCES logement ON DELETE CASCADE NOT NULL,
	id_utilisateur integer REFERENCES utilisateur NOT NULL
);



CREATE TABLE commentaire (
	id serial PRIMARY KEY,
	date_commentaire date NOT NULL,
	note integer NOT NULL, 
	contenu character varying(500)
);


CREATE TABLE avis (
	id serial PRIMARY KEY,
	id_logement integer REFERENCES logement ON DELETE CASCADE NOT NULL,
	id_utilisateur integer REFERENCES utilisateur NOT NULL,
	id_commentaire integer REFERENCES commentaire ON DELETE CASCADE NOT NULL
);




INSERT INTO centre_vacances (nom, cp, ville, num_voie, libelle_voie) VALUES ('Touquet Plage', '62520', 'Le Touquet', '25', 'rue des Coquelicots');
INSERT INTO centre_vacances (nom, cp, ville, num_voie, libelle_voie) VALUES ('Berck Plage', '62600', 'Berck', '34', 'rue des Dunes');
INSERT INTO centre_vacances (nom, cp, ville, num_voie, libelle_voie) VALUES ('Deauville Plage', '14800', 'Deauville', '156', 'avenue de la République');



INSERT INTO equipement (nom_equipement) VALUES ('Réfrigérateur');
INSERT INTO equipement (nom_equipement) VALUES ('Four');
INSERT INTO equipement (nom_equipement) VALUES ('Micro-ondes');
INSERT INTO equipement (nom_equipement) VALUES ('Bouilloire');
INSERT INTO equipement (nom_equipement) VALUES ('Machine à café');
INSERT INTO equipement (nom_equipement) VALUES ('Lave-vaisselle');
INSERT INTO equipement (nom_equipement) VALUES ('Télévision');
INSERT INTO equipement (nom_equipement) VALUES ('Lave-linge');


INSERT INTO logement (titre, description, nombre_pieces, nombre_chambres, surface_interieure, surface_exterieure, animaux, id_centre)
VALUES ('Villa Fergine', 
		'Offrant une vue sur la ville, l''Appartement - Villa FERGINE est situé au Touquet-Paris-Plage, à 600 mètres de la plage Sud. Vous bénéficierez gratuitement d''une connexion Wi-Fi et d''un parking privé.',
		6,
		2,
		80,
		20,
		true,
		1
		);

INSERT INTO logement (titre, description, nombre_pieces, nombre_chambres, surface_interieure, surface_exterieure, animaux, id_centre)
VALUES ('La porte du paradis', 
		'Situé au Touquet-Paris-Plage, à seulement 700 mètres de la plage Sud, l''établissement LA PORTE DU PARADIS propose un restaurant, un jardin et une réception ouverte 24h/24. Dans les environs, vous pourrez pratiquer des activités comme la randonnée, le vélo et le minigolf.',
		3,
		2,
		47,
		0,
		false,
		2
		);


INSERT INTO logement (titre, description, nombre_pieces, nombre_chambres, surface_interieure, surface_exterieure, animaux, id_centre)
VALUES ('Résidence la Closerie', 
		'Installée près de la plage et de la promenade de Deauville, la Résidence La Closerie Deauville possède un espace de bien-être avec une piscine intérieure, un sauna et un jacuzzi. Cet établissement 4 étoiles propose également des séances de massage sur demande et un service de garde d''enfants.',
		2,
		1,
		35,
		0,
		false,
		2
		);

INSERT INTO logement (titre, description, nombre_pieces, nombre_chambres, surface_interieure, surface_exterieure, animaux, id_centre)
VALUES ('Chez Mado', 
		'Doté d’un jardin et d’un barbecue, le Chez Mado est situé en bord de mer à Deauville, à 2,4 km de la polyclinique et à 2,8 km de la plage de la commune.',
		5,
		2,
		45,
		50,
		true,
		2
		);

INSERT INTO logement (titre, description, nombre_pieces, nombre_chambres, surface_interieure, surface_exterieure, animaux, id_centre)
VALUES ('Les Jumeaux', 
		'Offrant une vue sur le jardin, l''hébergement Les Jumeaux - Le Touquet propose un jardin et une terrasse, à environ 2,3 km de la plage sud. Le parking privé sur place est gratuit.',
		5,
		2,
		150,
		250,
		true,
		1
		);

INSERT INTO logement (titre, description, nombre_pieces, nombre_chambres, surface_interieure, surface_exterieure, animaux, id_centre)
VALUES ('Résidence Impératrice', 
		'Offrant une vue sur la ville, la Residence Imperatrice propose des hébergements avec un jardin et une terrasse, à environ 1 km de la plage de Sternes.',
		6,
		4,
		150,
		30,
		false,
		2
		);


INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 1, 1);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 2, 1);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 3, 1);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 5, 1);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 6, 1);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 7, 1);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 8, 1);

INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 1, 2);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 2, 2);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 3, 2);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 5, 2);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 7, 2);

INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 5, 3);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 7, 3);

INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 1, 4);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 4, 4);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 8, 4);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 5, 4);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 3, 4);

INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 3, 5);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 6, 5);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 8, 5);

INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 1, 6);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 4, 6);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 5, 6);
INSERT INTO logement_equipement (quantite, id_equipement, id_logement) VALUES (1, 7, 6);



INSERT INTO utilisateur (nom, prenom, pseudo, numero_salarie) VALUES ('Mozdzierz', 'Aurore', 'AuroreForeach', '15');
INSERT INTO utilisateur (nom, prenom, pseudo, numero_salarie) VALUES ('Vidal', 'Jean-Philippe', 'JPForeach', '24');
INSERT INTO utilisateur (nom, prenom, pseudo, numero_salarie) VALUES ('Bogacz', 'Adrien', 'Adrien62400', '35');
INSERT INTO utilisateur (nom, prenom, pseudo, numero_salarie) VALUES ('Claeys', 'Fabrice', 'JPForeach', '37');
INSERT INTO utilisateur (nom, prenom, pseudo, numero_salarie) VALUES ('Dupont', 'Jean', 'JD', '123');
INSERT INTO utilisateur (nom, prenom, pseudo, numero_salarie) VALUES ('Durant', 'Jacques', 'JDur', '12345');
INSERT INTO utilisateur (nom, prenom, pseudo, numero_salarie) VALUES ('Errachidi', 'Houda', 'Houda59', '5678');
INSERT INTO utilisateur (nom, prenom, pseudo, numero_salarie) VALUES ('Erlemont', 'Pierre', 'pierre5900', '9876');
INSERT INTO utilisateur (nom, prenom, pseudo, numero_salarie) VALUES ('Autine', 'Guy', 'guy_du_95', '7443');





INSERT INTO reservation (numero_reservation, date_arrivee, date_depart, id_logement, id_utilisateur) VALUES (2000, '2021-04-23', '2021-04-30', 2, 1);
INSERT INTO reservation (numero_reservation, date_arrivee, date_depart, id_logement, id_utilisateur) VALUES (2001, '2021-05-06', '2021-05-13', 2, 2);
INSERT INTO reservation (numero_reservation, date_arrivee, date_depart, id_logement, id_utilisateur) VALUES (3700, '2022-04-23', '2022-04-30', 4, 5);
INSERT INTO reservation (numero_reservation, date_arrivee, date_depart, id_logement, id_utilisateur) VALUES (3720, '2021-04-23', '2021-04-30', 4, 6);



INSERT INTO commentaire (date_commentaire, note, contenu) VALUES (now(), 4, 'Super logement, conforme à la description.');
INSERT INTO commentaire (date_commentaire, note, contenu) VALUES (now(), 2, 'Bof');
INSERT INTO commentaire (date_commentaire, note, contenu) VALUES (now(), 3, 'Un peu petit pour 6 personnes');
INSERT INTO commentaire (date_commentaire, note, contenu) VALUES (now(), 4, 'Bon rapport qualité-prix');
INSERT INTO commentaire (date_commentaire, note, contenu) VALUES (now(), 4, 'Super logement');
INSERT INTO commentaire (date_commentaire, note, contenu) VALUES (now(), 5, 'Parfait');
INSERT INTO commentaire (date_commentaire, note, contenu) VALUES (now(), 3, 'Bien mais un peu cher pour la région');

INSERT INTO commentaire (date_commentaire, note, contenu) VALUES (now(), 3, 'Cool');
INSERT INTO commentaire (date_commentaire, note, contenu) VALUES (now(), 4, 'Super');
INSERT INTO commentaire (date_commentaire, note, contenu) VALUES (now(), 5, 'Génial');




INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (1, 7, 1);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (1, 8, 2);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (1, 3, 3);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (1, 4, 4);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (2, 7, 5);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (2, 8, 6);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (2, 9, 7);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (3, 2, 9);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (3, 4, 4);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (3, 5, 10);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (3, 9, 10);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (3, 1, 3);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (4, 8, 5);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (5, 7, 9);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (5, 8, 7);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (5, 3, 4);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (5, 4, 2);
INSERT INTO avis (id_logement, id_utilisateur, id_commentaire) VALUES (5, 7, 10);





CREATE TABLE region (
	id serial PRIMARY KEY,
	nom_region character varying(50) NOT NULL
);



INSERT INTO region (nom_region) VALUES ('Auvergne-Rhône-Alpes');
INSERT INTO region (nom_region) VALUES ('Bourgogne-Franche-Comté');
INSERT INTO region (nom_region) VALUES ('Bretagne');
INSERT INTO region (nom_region) VALUES ('Centre-Val-de-Loire');
INSERT INTO region (nom_region) VALUES ('Corse');
INSERT INTO region (nom_region) VALUES ('Grand-Est');
INSERT INTO region (nom_region) VALUES ('Hauts-de-France');
INSERT INTO region (nom_region) VALUES ('Île-de-France');
INSERT INTO region (nom_region) VALUES ('Normandie');
INSERT INTO region (nom_region) VALUES ('Nouvelle-Aquitaine');
INSERT INTO region (nom_region) VALUES ('Occitanie');
INSERT INTO region (nom_region) VALUES ('Pays-de-la-Loire');
INSERT INTO region (nom_region) VALUES ('Provence-Alpes-Côte-d''Azur');


ALTER TABLE centre_vacances ADD COLUMN id_region integer REFERENCES region;


UPDATE centre_vacances SET id_region = 7 WHERE centre_vacances.id IN (1,2);
UPDATE centre_vacances SET id_region = 9 WHERE centre_vacances.id = 3;









------------------------------------------------------------------------

-- ● Rechercher les logements
-- ○ par dates de séjour (début et fin)

SELECT logement.id, logement.titre, reservation.date_arrivee, reservation.date_depart FROM logement 
JOIN reservation ON logement.id = reservation.id_logement
WHERE (reservation.date_arrivee >= '2021-04-23' AND reservation.date_arrivee >= '2021-04-30');



-- ○ par centre de vacance
SELECT * FROM logement 
JOIN centre_vacances ON logement.id_centre = centre_vacances.id
WHERE centre_vacances.id = 1
--WHERE lower(centre_vacances.nom) LIKE '%touquet%'





-- ○ par équipement
SELECT logement.titre, equipement.nom_equipement FROM logement 
JOIN logement_equipement ON logement.id = logement_equipement.id_logement
JOIN equipement ON logement_equipement.id_equipement = equipement.id
WHERE equipement.id = 1
WHERE equipement.id IN (1,2)
WHERE lower(equipement.nom_equipement) LIKE '%réfrigérateur%' OR lower(equipement.nom_equipement) LIKE '%refrigerateur%'


-- ○ par région
SELECT logement.titre, centre_vacances.nom, region.nom_region FROM logement 
JOIN centre_vacances ON logement.id_centre = centre_vacances.id
JOIN region ON region.id = centre_vacances.id_region


-- ● Ordonner les logements
-- ○ par note (meilleur logement)
SELECT logement.titre, round(avg(commentaire.note),1) as note_moyenne FROM logement 
JOIN avis ON logement.id = avis.id_logement
JOIN commentaire ON avis.id_commentaire = commentaire.id
GROUP BY logement.titre
ORDER BY note_moyenne DESC


-- ○ par nombre de réservation (popularité)
SELECT logement.titre, count(reservation.id) as nombre_reservations FROM logement
LEFT JOIN reservation ON logement.id = reservation.id_logement
GROUP BY logement.titre
ORDER BY nombre_reservations DESC



-- ○ par ordre alphabétique (alphabétique)
SELECT logement.titre FROM logement
ORDER BY logement.titre 



-- ○ par défaut, i.e par identifiant
SELECT logement.id, logement.titre FROM logement
ORDER BY logement.id




















