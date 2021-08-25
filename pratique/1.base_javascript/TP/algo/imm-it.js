const readlineSync = require('readline-sync');

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
                    id: 4,
                    nom_equipement: 'Bouilloire'
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
                    numero_salarie: 15
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
                    numero_salarie: 24
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
                    id: 3,
                    pseudo: 'houda59'
                }
            },
            {
                id: 83,
                date: new Date(),
                note: 5,
                contenu: 'Parfait',
                utilisateur: {
                    id: 4,
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
            cp: 62520,
            ville: 'Le Touquet',
            numero_voie: 25,
            libelle_voie: 'rue des Coquelicots'
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
                    id: 5,
                    pseudo: 'adrien62400'
                }
            },
            {
                id: 67,
                date: new Date(),
                note: 4,
                contenu: 'Bon rapport qualité-prix',
                utilisateur: {
                    id: 6,
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
            cp: 62600,
            ville: 'Berck',
            numero_voie: 34,
            libelle_voie: 'rue des Dunes'
        }
    }
]





function afficheMenu() {
    console.log("\n\nQue souhaitez-vous faire ? \n\n" +
        "\t1 - Afficher la liste des logements\n" +
        "\t2 - Afficher le détail d'un logement \n" +
        "\t3 - Consulter les commentaires d'un logement\n" +
        "\t4 - Rechercher un logement\n" +
        "\t0 - Quitter\n")
}

console.log("\n\nBienvenue sur l'application de réservation de logement de votre CE ! \n\n");

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

            break
        }
        case 4: {

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



function afficherLogements(mesLogements) {
    mesLogements.forEach(logement => {
        console.log(`${logement.id} - ${logement.titre}`)
    });
}



function afficherDetails(mesLogements) {

const options = { 
    limitMessage: '\n\nMerci de saisir un nombre :)\n'
}
let choix = 0;
let choixIsOk = false;

while (!choixIsOk) {
    choix = 0;
    console.log('\n\nDe quel logement souhaitez-vous afficher les détails ?\n') 

    afficherLogements(mesLogements);

    choix = readlineSync.questionInt('\nVotre choix : \n', options)
    
    logements.forEach(logement => {
        if (choix == logement.id) {
            choixIsOk = true
        } 
    })
   
    if (!choixIsOk) {
        console.log('\nVeuillez saisir un des identifiants de la liste :)\n')
    }
} 


    const logementChoisi = logements.find(logement => choix == logement.id)

    console.log(`\nVous avez choisi ${logementChoisi.titre}.
    \n\nDescription : ${logementChoisi.description}
    \nNombre de personnes : ${logementChoisi.nombre_places}
    \nNombre de chambres : ${logementChoisi.nombre_chambres}
    \nSurface intérieure : ${logementChoisi.surface_interieur} m2`)
    if (logementChoisi.surface_exterieur !== 0){
        console.log(`\nSurface extérieure : ${logementChoisi.surface_exterieur} m2`)
    }
    if (logementChoisi.animauxIsOk == true) {
        console.log(`\nLes animaux sont autorisés.`)
    } else {
        console.log(`\nLes animaux sont interdits.`)
    }
    console.log(`\nListe des équipements disponibles :\n`)
    
        logementChoisi.equipements.forEach(element => {
            console.log(`- ${element.quantite} ${element.equipement.nom_equipement}`)
        });

}

