const readlineSync = require('readline-sync');

const motsclesDisponibles = [
    {
        id: 1,
        libelle: 'candide',
    },
    {
        id: 2,
        libelle: 'javascript'
    },
    {
        id: 3,
        libelle: 'numérique'
    },
    {
        id: 4,
        libelle: 'humeur'
    },
    {
        id: 5,
        libelle: 'développement personnel'
    },
    {
        id: 6,
        libelle: 'humour'
    },
    {
        id: 7,
        libelle: 'Science-fiction'
    },
    {
        id: 8,
        libelle: 'Drame'
    },
    {
        id: 9,
        libelle: 'Drogue'
    },
    {
        id: 10,
        libelle: 'spleen',
    },
    {
        id: 11,
        libelle: 'Mélancolie',
    },
    {
        id: 12,
        libelle: 'Voyage',
    },
    {
        id: 13,
        libelle: 'Animaux',
    }
];

const bibliotheque1 = [
    {
        id: 1,
        titre: 'Candide',
        dateEmprunt: '02/02/2021',
        dateRetour: '01/03/2021',
        auteurs: [
            {
                id: 1,
                nom: 'Voltaire',
                prenom: '',
            },
        ],
        rayon: {
            id: 1,
            categorie: 'Litterature',
        },
        motcles: [
            {
                id: 1,
                libelle: 'candide',
            }
        ],
        adherent: {
            id: 1,
            nom: 'Herlemont',
            Prenom: 'Pierre',
        },
    },
    {
        id: 2,
        titre: 'Le Javascript pour les nuls',
        date_emprunt: '20/02/2021',
        date_retour: '25/01/2021',
        rayon: {
            id: 2,
            categorie: 'Tutoriel'
        },
        auteurs: [
            {
                id: 2,
                nom: 'Mozdzierz',
                prenom: 'Aurore'
            },
        ],
        motcles: [
            {
                id: 2,
                libelle: 'javascript'
            },
            {
                id: 3,
                libelle: 'numérique'
            }
        ],
        adherent: {
            id: 2,
            nom: 'Bogacz',
            prenom: 'Adrien'
        }
    },
    {
        id: 3,
        titre: 'Le mur des humeurs',
        date_emprunt: '20/20/2021',
        date_retour: '25/25/2021',
        rayon: {
            id: 3,
            categorie: 'Psychologie'
        },
        auteurs: [
            {
                id: 3,
                nom: 'Vidal',
                prenom: 'Jean-Philippe'
            },
            {
                id: 1,
                nom: 'Voltaire'
            },

        ],
        motcles: [
            {
                id: 4,
                libelle: 'humeur'
            },
            {
                id: 5,
                libelle: 'développement personnel'
            },
            {
                id: 6,
                libelle: 'humour'
            },
        ],
        adherent: {
            id: 3,
            nom: 'Errachidi',
            prenom: 'Houda'
        }
    },
    {
        id: 4,
        titre: 'L\'ecume des jours',
        date_emprunt: '26/11/2020',
        date_retour: '25/12/2020',
        rayon: {
            id: 4,
            categorie: 'SF'
        },
        auteurs: [
            {
                id: 4,
                nom: 'Vian',
                prenom: 'Boris'
            }
        ],
        motcles: [
            {
                id: 7,
                libelle: 'Science-fiction'
            },
            {
                id: 6,
                libelle: 'Humour'
            },
            {
                id: 8,
                libelle: 'Drame'
            }
        ],
        adherent: {
            id: 4,
            nom: 'Mozdzierz',
            prenom: 'Aurore'
        }
    },
    {
        id: 5,
        titre: 'L\'arrache-coeur',
        date_emprunt: '26/01/2021',
        rayon: {
            id: 4,
            categorie: 'SF'
        },
        auteurs: [
            {
                id: 4,
                nom: 'Vian',
                prenom: 'Boris'
            }
        ],
        motcles: [
            {
                id: 7,
                libelle: 'Science-fiction'
            },
            {
                id: 9,
                libelle: 'Drogue'
            },
            {
                id: 8,
                libelle: 'Drame'
            }
        ],
        adherent: {
            id: 1,
            nom: 'Herlemont',
            prenom: 'Pierre'
        }
    },
    {
        id: 6,
        titre: 'les fleurs du mal',
        dateEmprunt: '15/02/2021',
        dateRetour: '06/03/2021',
        auteurs: [
            {
                id: 5,
                nom: 'Baudelaire',
                prenom: 'Charles',
            },
        ],
        rayon: {
            id: 5,
            categorie: 'poète',
        },
        motcles: [
            {
                id: 10,
                libelle: 'spleen',
            },
            {
                id: 8,
                libelle: 'Drame',
            },
            {
                id: 11,
                libelle: 'Mélancolie',
            }
        ],
        adherent: {
            id: 3,
            nom: 'Errachidi',
            prenom: 'Houda',
        },
    }
]

// console.log(JSON.stringify(bibliotheque1));


const jsonBibliotheque = {
    "id": 6,
    "titre": "les fleurs du mal",
    "dateEmprunt": "15/02/2021",
    "dateRetour": "06/03/2021"
}





// 1 - Lister les titres des livres
function listerTitresBibliotheque(maBibliotheque) {
    for (let i = 0; i < maBibliotheque.length; i++) {
        const ouvrage = maBibliotheque[i];
        console.log(ouvrage.titre);
    }


}




// 2 - Lister les auteurs de la bibliothèque


function autorExist(listeAuteurs, auteur) {


}


function listerAuteursBibliothequeSansDoublon(maBibliotheque) {
    let listeAuteurs = [];


    for (let i = 0; i < maBibliotheque.length; i++) {
        const ouvrage = bibliotheque1[i];
        const auteurs = ouvrage.auteurs;
        for (let j = 0; j < auteurs.length; j++) {
            const auteur = auteurs[j]

            let exist = false;
            for (let k = 0; k < listeAuteurs.length; k++) {
                // const auteurDeLaListe = listeAuteurs[k];
                if (auteur.id === listeAuteurs[k].id) {
                    exist = true;
                }
            }
            if (!exist) {
                listeAuteurs.push(auteur);
            }
        }
    }

    for (let i = 0; i < listeAuteurs.length; i++) {
        console.log(`${listeAuteurs[i].id} - ${listeAuteurs[i].nom} ${listeAuteurs[i].prenom}`)
    }
}



// 3 - Lister les livres d'un auteur
function listerLivresDunAuteur(maBibliotheque) {


    // Afficher les auteurs et en choisir 1

    listerAuteursBibliothequeSansDoublon(bibliotheque1)
    const choixAuteur = readlineSync.questionInt('\nChoisissez un auteur : \n')

    let ouvrageAuteur = [];

    // Parcourir les ouvrages la bibliothèque
    for (let i = 0; i < maBibliotheque.length; i++) {
        const ouvrage = maBibliotheque[i];
        const auteurs = ouvrage.auteurs;
        // Parcourir la liste d'auteurs de chaque ouvrage
        for (let j = 0; j < auteurs.length; j++) {
            const auteur = auteurs[j];
            // Si un des auteurs de l'ouvrage est égal à l'auteur choisi, le mettre dans un tableau
            if (auteur.id === choixAuteur) {
                ouvrageAuteur.push(ouvrage);
            }
        }
    }
    // Afficher le tableau
    for (let i = 0; i < ouvrageAuteur.length; i++) {
        console.log(`${ouvrageAuteur[i].titre}`)
    }
}



// 5 - Rechercher un livre par mot-clé

function listerLivresParMotsCles(maBibliotheque, mesMotsCles) {

    let ouvrageMotsCles = [];

    // Afficher les mots-clés disponibles et en choisir un
    
    for (let i = 0; i < mesMotsCles.length; i++) {
        console.log(`${mesMotsCles[i].id} - ${mesMotsCles[i].libelle}`)
    }

    const choixMotCle = readlineSync.questionInt('\nVeuillez choisir un mot-clé : \n')

    // Parcourir les ouvrages de la bibliotheque
    for (let i = 0; i < maBibliotheque.length; i++) {
        const ouvrage = maBibliotheque[i];
        const motsCles = ouvrage.motcles;

        // Parcourir les mots-clés de chaque ouvrage
        for (let j = 0; j < motsCles.length; j++) {
            const motcle = motsCles[j];
            // Si un des mots-clés est similaire à celui choisi, mettre l'ouvrage dans un tableau
            if (motcle.id === choixMotCle) {
                ouvrageMotsCles.push(ouvrage);
            }
        }
    }

    for (let i = 0; i < ouvrageMotsCles.length; i++) {
        console.log(`${ouvrageMotsCles[i].titre}`);
    }
    if (ouvrageMotsCles.length === 0) {
        console.log('Aucun ouvrage disponible');
    }  
}

















//listerTitresBibliotheque(bibliotheque1);
//listerAuteursBibliothequeSansDoublon(bibliotheque1);
//listerLivresDunAuteur(bibliotheque1);
listerLivresParMotsCles(bibliotheque1, motsclesDisponibles);

//exercice2();