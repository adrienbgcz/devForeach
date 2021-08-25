const readlineSync = require('readline-sync');

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
function exercice1() {

    // for (let i = 0; i < bibliotheque1.length; i++) {
    //     let ouvrage = bibliotheque1[i];
    //     console.log(ouvrage.titre);
    // }

    bibliotheque1.forEach((ouvrage) => { console.log(ouvrage.titre) });
}




// 2 - Lister les auteurs de la bibliothèque


function autorExist(listeAuteurs, auteur) {

    // Version JS 




    // Version longue
    let exist = false;
    for (let i = 0; i < listeAuteurs.length; i++) {
        const auteurDeLaListe = listeAuteurs[i];
        if (auteurDeLaListe.id == auteur.id) {
            exist = true;
        }
    }
    return exist;
}



function exercice2() {

    let listeAuteurs = [];

    // for (let i = 0; i < bibliotheque1.length; i++) {
    //     const ouvrage = bibliotheque1[i];
    //     const auteurs = ouvrage.auteurs;
    //     for (let j = 0; j < auteurs.length; j++) {
    //         const auteur = ouvrage.auteurs[j];

    //         if (!autorExist(listeAuteurs, auteur)) {
    //             listeAuteurs.push(auteur);
    //         }

    //     }

    // }

    bibliotheque1.forEach((ouvrage) => {
        const auteurs = ouvrage.auteurs
        auteurs.forEach((auteur) => {
            if (!autorExist(listeAuteurs, auteur)) {
                listeAuteurs.push(auteur);
            }
        })
    });



    for (let i = 0; i < listeAuteurs.length; i++) {
        const auteur = listeAuteurs[i];                                                     
        console.log(`${auteur.id} : ${auteur.nom} ${auteur.prenom || ''}`)
    }
}










// exercice1();
exercice2();