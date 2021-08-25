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

console.log(JSON.stringify(bibliotheque1));


const jsonBibliotheque = {
    "id": 6,
    "titre": "les fleurs du mal",
    "dateEmprunt": "15/02/2021",
    "dateRetour": "06/03/2021"
}

console.log('\nQue souhaitez-vous faire ?\n')

console.log('1 - Lister les titres des livres');
console.log('2 - Lister les auteurs de la bibliothèque');
console.log('3 - Lister les livres d\'un auteur');
console.log('4 - Lister les titres et auteurs des livres disponibles uniquement');
console.log('5 - Rechercher un livre par mots-clés');
console.log('6 - Lister les adhérents');
console.log('7 - Afficher le titre, auteurs et date d\'emprunt du livre d\'un adhérent');
console.log('0 - Quitter\n');



let quitter = false;

do {
    let choix = readlineSync.questionInt('Saisissez un chiffre : \n')

    switch (choix) {
        case 1: {
            listerTitresBibliotheque(bibliotheque1);
            break;
        }

        case 2: {
            listerAuteursBibliothequeSansDoublon(bibliotheque1);
            break;
        }

        case 3: {
            listerLivresDunAuteur(bibliotheque1);
            break;
        }

        case 4: {
            listerTitresEtAuteursDispos(bibliotheque1);
            break;
        }

        case 5: {
            exercice5();
            break;
        }

        case 6: {
            exercice6();
            break;
        }

        case 7: {
            exercice7();
            break;
        }

        case 0: {
            quitter = true
            break;
        }

        default: {
            console.log('Votre saisie ne correspond pas au menu !\n');
            break;
        }

    }
} while (quitter === false);






function listerTitresBibliotheque(uneBibliotheque) {

    // VERSION FOR

    // for (let i = 0; i < uneBibliotheque.length; i++) {
    //     const ouvrage = uneBibliotheque[i];
    //     console.log(ouvrage.titre);
    // }


    // VERSION JS
    uneBibliotheque.forEach(
        (ouvrage) => {
            console.log(ouvrage.titre);
        }
    );
}

















function listerAuteursBibliotheque(uneBibliotheque) {

    for (let i = 0; i < uneBibliotheque.length; i++) {
        const ouvrage = uneBibliotheque[i];
        const auteurs = ouvrage.auteurs;
        for (j = 0; j < auteurs.length; j++) {
            const auteur = auteurs[j];

            // AVEC IF
            // const prenom = '';
            // if (auteur.prenom) {
            //     prenom = auteur.prenom;
            // }
            // else {
            //     prenom = '';
            // }

            // AVEC OPERATION TERNAIRE
            // const prenom = auteur.prenom ? auteur.prenom : '';   si l'auteur a un prenom, on le met, sinon on met une chaine vide

            // AVEC UN OU
            // const prenom = auteur.prenom || '';

            console.log(`${auteur.nom} ${auteur.prenom || ''}`); // on affiche le nom et le prénon SI il y en a un
        }

    }

}


function auteurExist(listeAuteur, auteur) {
    return listeAuteur.find(
        (auteurDeLaListe) => { return auteurDeLaListe.id == auteur.id }  // qu'est-ce que la fonction doit chercher à chaque fois qu'elle tombe sur un élément
    );



    
    // VERSION LONGUE SANS FACILITATEUR  
    // let exist = false; 
    // for (let i = 0; i < listeAuteur.length; i++) {
    //     const auteurDeLaListe = listeAuteur[i];
    //     if(auteurDeLaListe.id == auteur.id) {
    //         exist = true;
    //     }
    // }
    // return exist;


}







function listerAuteursBibliothequeSansDoublon(uneBibliotheque) {

    // let listeAuteurs = [];

    // for (let i = 0; i < uneBibliotheque.length; i++) {
    //     const ouvrage = uneBibliotheque[i];
    //     const auteurs = ouvrage.auteurs;
    //     for (j = 0; j < auteurs.length; j++) {
    //         const auteur = auteurs[j];

    //         if (!auteurExist(listeAuteurs, auteur)) {
    //             // listeAuteurs[listeAuteurs.length] = auteur; VERSION LONGUE pour insérer un élément à la fin d'un tableau
    //             listeAuteurs.push(auteur); // VERSION JS
    //         }

    //     }

    // }

    // for (let i = 0; i < listeAuteurs.length; i++) {
    //     const auteur = listeAuteurs[i]
    //     console.log(`${auteur.id} : ${auteur.nom} ${auteur.prenom || ''}`);
    // }


    let listeAuteurs = [];

    uneBibliotheque.forEach((ouvrage) => {
        const auteurs = ouvrage.auteurs;

        auteurs.forEach((auteur) => {
            if (!auteurExist(listeAuteurs, auteur)) {
                listeAuteurs.push(auteur);
            }
        })
    })

    listeAuteurs.forEach((auteur) => {
        console.log(`${auteur.id} : ${auteur.nom} ${auteur.prenom || ''}`);
    })

}






function listerLivresDunAuteur(uneBibliotheque) {

    let tableauAuteurs = [];

    console.log(`De quel auteur souhaitez-vous voir les livres ?`)
    for (let i = 0; i < uneBibliotheque.length; i++) { // on parcourt la bibliothèque
        const ouvrage = uneBibliotheque[i];
        const auteurs = ouvrage.auteurs;
        for (j = 0; j < auteurs.length; j++) {
            let auteur = auteurs[j];
            tableauAuteurs[j] = auteur.id    // pour chaque ouvrage, on parcourt les auteurs
            // for (let k = 0; k < auteurs.length; k++){
            // tableauAuteurs[k] = auteur.id;
            // }

            // if (auteur[i] !== auteur[i - 1]) {
            //     console.log(`${auteur.id} : ${auteur.nom} ${auteur.prenom || ''}`);
            // }
        }

        console.log(tableauAuteurs)

    }
}


function listerTitresEtAuteursDispos(uneBibliotheque) {


}




