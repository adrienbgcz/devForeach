const readlineSync = require('readline-sync');



const equipements = [
    {
        id: 1,
        nom_equipement: 'Réfrigérateur'
    },
    {
        id: 2,
        nom_equipement: 'Four'
    },
    {
        id: 3,
        nom_equipement: 'Micro-ondes'
    },
    {
        id: 4,
        nom_equipement: 'Bouilloire'
    },
    {
        id: 5,
        nom_equipement: 'Machine à café'
    },
    {
        id: 6,
        nom_equipement: 'Lave-vaisselle'
    },
    {
        id: 7,
        nom_equipement: 'Télévision'
    },
    {
        id: 8,
        nom_equipement: 'Lave-linge'
    },
]

const logements = [
    {
        id: 1,
        titre: 'Villa Fergine',
        description: 'Offrant une vue sur la ville, l\'Appartement - Villa "FERGINE" est situé au Touquet-Paris-Plage, à 600 mètres de la plage Sud. Vous bénéficierez gratuitement d\'une connexion Wi-Fi et d\'un parking privé.',
        nombre_places: 6,
        nombre_chambres: 2,
        surface_interieur: 80,
        surface_exterieur: 20,
        animauxIsOk: true,
        equipements: [
            {
                equipement: {
                    id: 1,
                    nom_equipement: 'Réfrigérateur'
                },
                quantite: 1
            },
            {
                equipement: {
                    id: 2,
                    nom_equipement: 'Four'
                },
                quantite: 1
            },
            {
                equipement: {
                    id: 3,
                    nom_equipement: 'Micro-ondes'
                },
                quantite: 1
            },
            {
                equipement: {
                    id: 5,
                    nom_equipement: 'Machine à café'
                },
                quantite: 1
            },
            {
                equipement: {
                    id: 6,
                    nom_equipement: 'Lave-vaisselle'
                },
                quantite: 1
            },
            {
                equipement: {
                    id: 7,
                    nom_equipement: 'Télévision'
                },
                quantite: 1
            },
            {
                equipement: {
                    id: 8,
                    nom_equipement: 'Lave-linge'
                },
                quantite: 1
            },
        ],
        reservations: [
            {
                numero_reservation: 2000,
                date_arrivee: new Date('2021-04-23'),
                date_depart: new Date('2021-04-30'),
                utilisateur: {
                    id: 1,
                    nom: 'Mozdzierz',
                    prenom: 'Aurore',
                    pseudo: 'AuroreForeach',
                    numero_salarie: '15'
                }

            },
            {
                numero_reservation: 2001,
                date_arrivee: new Date('2021-05-06'),
                date_depart: new Date('2021-05-13'),
                utilisateur: {
                    id: 2,
                    nom: 'Vidal',
                    prenom: 'Jean-Philippe',
                    pseudo: 'JPForeach',
                    numero_salarie: '24'
                }
            },
        ],
        commentaires: [
            {
                id: 56,
                date: new Date(),
                note: 4,
                contenu: 'Super logement, conforme à la descritption.',
                utilisateur: {
                    id: 21,
                    pseudo: 'houda59'
                }
            },
            {
                id: 83,
                date: new Date(),
                note: 2,
                contenu: 'Parfait',
                utilisateur: {
                    id: 22,
                    pseudo: 'pierre59000'
                }
            }
        ],
        photos: [
            {
                id: 3500,
                url: 'lksjfcnamkjnc'
            },
            {
                id: 3501,
                url: 'mozfczjnefcz'
            },
            {
                id: 3502,
                url: 'lhbdjhbcd'
            },
            {
                id: 3503,
                url: 'kzjbkzjnc'
            }

        ],
        centre_vacances: {
            id: 1,
            nom: 'Touquet Plage',
            cp: '62520',
            ville: 'Le Touquet',
            numero_voie: 25,
            libelle_voie: 'rue des Coquelicots',
            photos: [
                {
                    id: 4500,
                    url: 'uhkfblehjl'
                }
            ]
        }
    },



    {
        id: 2,
        titre: 'La porte du Paradis',
        description: 'Situé au Touquet-Paris-Plage, à seulement 700 mètres de la plage Sud, l\'établissement LA PORTE DU PARADIS propose un restaurant, un jardin et une réception ouverte 24h/24. Dans les environs, vous pourrez pratiquer des activités comme la randonnée, le vélo et le minigolf.',
        nombre_places: 6,
        nombre_chambres: 2,
        surface_interieur: 47,
        surface_exterieur: 0,
        animauxIsOk: false,
        equipements: [
            {
                equipement: {
                    id: 1,
                    nom_equipement: 'Réfrigérateur'
                },
                quantite: 1
            },
            {
                equipement: {
                    id: 2,
                    nom_equipement: 'Four'
                },
                quantite: 1
            },
            {
                equipement: {
                    id: 3,
                    nom_equipement: 'Micro-ondes'
                },
                quantite: 1
            },

            {
                equipement: {
                    id: 5,
                    nom_equipement: 'Machine à café'
                },
                quantite: 1
            },
            {
                equipement: {
                    id: 7,
                    nom_equipement: 'Télévision'
                },
                quantite: 1
            },

        ],
        reservations: [],
        commentaires: [
            {
                id: 45,
                date: new Date(),
                note: 3,
                contenu: 'Un peu petit pour 6 personnes',
                utilisateur: {
                    id: 23,
                    pseudo: 'adrien62400'
                }
            },
            {
                id: 67,
                date: new Date(),
                note: 4,
                contenu: 'Bon rapport qualité-prix',
                utilisateur: {
                    id: 24,
                    pseudo: 'FabriceForeach'
                }
            }
        ],
        photos: [
            {
                id: 3611,
                url: 'klfk'
            },
            {
                id: 3612,
                url: 'zmjvnmozvl'
            },
            {
                id: 3613,
                url: 'iejrnzoc'
            },
            {
                id: 3614,
                url: 'izjcn'
            }

        ],
        centre_vacances: {
            id: 2,
            nom: 'Berck Plage',
            cp: '62600',
            ville: 'Berck',
            numero_voie: 34,
            libelle_voie: 'rue des Dunes',
            photos: [
                {
                    id: 4501,
                    url: 'kuhebljle'
                }
            ]

        }
    },

    {
        id: 3,
        titre: 'Résidence La Closerie',
        description: 'Installée près de la plage et de la promenade de Deauville, la Résidence La Closerie Deauville possède un espace de bien-être avec une piscine intérieure, un sauna et un jacuzzi. Cet établissement 4 étoiles propose également des séances de massage sur demande et un service de garde d\'enfants.',
        nombre_places: 2,
        nombre_chambres: 1,
        surface_interieur: 35,
        surface_exterieur: 0,
        animauxIsOk: false,
        equipements: [
            {
                equipement: {
                    id: 5,
                    nom_equipement: 'Machine à café'
                },
                quantite: 1
            },

            {
                equipement: {
                    id: 7,
                    nom_equipement: 'Télévision'
                },
                quantite: 1
            },
        ],
        reservations: [
            {
                numero_reservation: 3700,
                date_arrivee: new Date('2022-04-23'),
                date_depart: new Date('2022-04-30'),
                utilisateur: {
                    id: 3,
                    nom: 'Dupont',
                    prenom: 'Jean',
                    pseudo: 'JD',
                    numero_salarie: '123'
                }

            },
            {
                numero_reservation: 3720,
                date_arrivee: new Date('2021-04-23'),
                date_depart: new Date('2021-04-30'),
                utilisateur: {
                    id: 15,
                    nom: 'Durant',
                    prenom: 'Jacques',
                    pseudo: 'JDur',
                    numero_salarie: '12345'
                }

            }
        ],
        commentaires: [
            {
                id: 456,
                date: new Date(),
                note: 4,
                contenu: 'Super logement, conforme à la descritption.',
                utilisateur: {
                    id: 21,
                    pseudo: 'houda59'
                }
            },
            {
                id: 463,
                date: new Date(),
                note: 4,
                contenu: 'Parfait',
                utilisateur: {
                    id: 22,
                    pseudo: 'pierre59000'
                }
            },
            {
                id: 482,
                date: new Date(),
                note: 3,
                contenu: 'Bien mais un peu cher pour la région',
                utilisateur: {
                    id: 25,
                    pseudo: 'Guy_du95'
                }
            }
        ],
        photos: [
            {
                id: 3600,
                url: 'lblekjc'
            },
            {
                id: 3601,
                url: 'oelekr'
            },
            {
                id: 3602,
                url: 'ievkjevv'
            },
            {
                id: 3603,
                url: 'oipojkerev'
            }

        ],
        centre_vacances: {
            id: 1,
            nom: 'Deauville Plage',
            cp: '14800',
            ville: 'Deauville',
            numero_voie: 156,
            libelle_voie: 'Avenue de la République',
            photos: [
                {
                    id: 4600,
                    url: 'kejeknflnee'
                }
            ]
        }
    },
]

const departements = [
    {
        id: 1,
        code: '01',
        region: 'Auvergne-Rhône-Alpes'
    },
    {
        id: 2,
        code: '02',
        region: 'Hauts-de-France'
    },
    {
        id: 62,
        code: '62',
        region: 'Hauts-de-France'
    },
]

const regions = [
    {
        id: 1,
        nom: 'Auvergne-Rhône-Alpes',
        liste_departements: ['01', '03', '07', '15', '26', '38', '42', '43', '63', '69', '73', '74']
    },
    {
        id: 2,
        nom: 'Bourgogne-Franche-Comté',
        liste_departements: ['21', '25', '39', '58', '70', '71', '89', '90']
    },
    {
        id: 3,
        nom: 'Bretagne',
        liste_departements: ['22', '29', '35', '56']
    },
    {
        id: 4,
        nom: 'Centre-Val de Loire',
        liste_departements: ['18', '28', '36', '37', '41', '45']
    },
    {
        id: 5,
        nom: 'Corse',
        liste_departements: ['2A', '2B']
    },
    {
        id: 6,
        nom: 'Grand Est',
        liste_departements: ['08', '10', '51', '52', '54', '55', '57', '67', '68', '88']
    },
    {
        id: 7,
        nom: 'Hauts-de-France',
        liste_departements: ['02', '59', '60', '62', '80']
    },
    {
        id: 8,
        nom: 'Île-de-France',
        liste_departements: ['75', '77', '78', '91', '92', '93', '94', '95']
    },
    {
        id: 9,
        nom: 'Normandie',
        liste_departements: ['14', '27', '50', '61', '76']
    },
    {
        id: 10,
        nom: 'Nouvelle-Aquitaine',
        liste_departements: ['16', '17', '19', '23', '24', '33', '40', '47', '64', '79', '86', '87']
    },
    {
        id: 11,
        nom: 'Occitanie',
        liste_departements: ['09', '11', '12', '30', '31', '32', '34', '46', '48', '65', '66', '81', '82']
    },
    {
        id: 12,
        nom: 'Pays de la Loire',
        liste_departements: ['44', '49', '53', '72', '85']
    },
    {
        id: 13,
        nom: 'Provence-Alpes-Côte d\'Azur',
        liste_departements: ['04', '05', '06', '13', '83', '84']
    }
]



function afficheMenu() {
    console.log("\n\nQue souhaitez-vous faire ? \n\n" +
        "\t1 - Afficher la liste des logements\n" +
        "\t2 - Afficher le détail d'un logement \n" +
        "\t3 - Afficher les commentaires d'un logement\n" +
        "\t4 - Rechercher un logement par équipement\n" +
        "\t5 - Rechercher un logement géographiquement\n" +
        "\t6 - Animaux acceptés ?\n" +
        "\t7 - Classement des logements par note moyenne\n" +
        "\t8 - Classement des logements par nombre de réservations\n" +
        "\t9 - Effectuer une réservation\n" +
        "\t10 - Effectuer une recherche par date\n" +
        "\t11 - Afficher les réservations\n" +


        "\t0 - Quitter\n")
}

console.log("\n\nBienvenue sur l'application de réservation de logement de votre CE ! \n");

let quitter = false;


while (!quitter) {

    afficheMenu()

    const reponse = readlineSync.questionInt();
    console.log('\n');

    switch (reponse) {
        case 1: {
            afficherLogements(logements);
            break;
        }
        case 2: {
            afficherDetails(logements);
            break
        }
        case 3: {
            afficherCommentaires(logements);
            break
        }
        case 4: {
            rechercheParEquipement(logements, equipements);
            break
        }
        case 5: {
            rechercheGeographique(logements);
            break
        }
        case 6: {
            isAnimauxAcceptes(logements);
            break
        }
        case 7: {
            classementParNote(logements);
            break
        }
        case 8: {
            classementParReservations(logements);
            break
        }
        case 9: {
            effectuerReservation(logements);
            break
        }
        case 10: {
            rechercheParDate(logements);
            break
        }
        case 11: {
            afficherReservations(logements);
            break
        }
        case 0: {
            quitter = true;
            break;
        }
        default: {
            console.log('Ce menu n\'existe pas')
            break;
        }
    }
}


function dateDepartIsOk(dateArrivee) {
    let dateDepartIsOk = false;
    let dateDepart = new Date();

    while (!dateDepartIsOk) {

        const dateDepartSaisie = readlineSync.question('\nRenseignez votre date de départ au format jj/mm/aaaa : \n');
        const dateDepartToEn = datesFrToEn(dateDepartSaisie);
        const dateDepartToEnToDate = new Date(dateDepartToEn)
        if (dateDepartToEnToDate > dateArrivee) {
            dateDepart = dateDepartToEnToDate;
            dateDepartIsOk = true;
        } else {
            console.log('\nVeuillez renseigner une date de départ ultérieure à la date d\'arrivée : ');
        }
    }
    return dateDepart;
}

function dateArriveeIsOk() {
    let dateArriveeIsOk = false;
    let dateArrivee = '';

    while (!dateArriveeIsOk) {

        const dateArriveeSaisie = readlineSync.question('\nRenseignez votre date d\'arrivée au format jj/mm/aaaa : \n');
        const dateArriveeToEn = new Date(datesFrToEn(dateArriveeSaisie));

        if (dateArriveeToEn > Date.now()) {
            dateArrivee = datesFrToEn(dateArriveeSaisie);
            dateArriveeIsOk = true;
        } else {
            console.log('\nVeuillez renseigner une date d\'arrivée ultérieure');
        }
    }
    return new Date(dateArrivee)

}

function datesFrToEn(dateFrString) {
    let tableauDates = []

    tableauDates = dateFrString.split('/');
    const dateEn = (`${tableauDates[2]}-${tableauDates[1]}-${tableauDates[0]}`);
    return dateEn;
}


function rechercheParDate(mesLogements) {

    const dateArrivee = dateArriveeIsOk();
    const dateDepart = dateDepartIsOk(dateArrivee);
    let logementsCorrespondants = [];

    mesLogements.forEach(logement => {
        const tableauReservations = logement.reservations.filter(reservation => {
            return !((dateArrivee < reservation.date_arrivee && dateDepart < reservation.date_arrivee) || dateArrivee > reservation.date_depart)
        })
        if (tableauReservations.length == 0) {
            logementsCorrespondants.push(logement)
        }
    });


    if (logementsCorrespondants.length != 0) {
    console.log('Voici les logements disponibles aux dates choisies :\n')
    logementsCorrespondants.forEach(logement => console.log(`${logement.id} - ${logement.titre}`))
    } else {
        console.log('Aucun logement ne correspond à vos critères.\n')
    }


}




