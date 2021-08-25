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



const bibliotheque = [
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
    },
    {
        id: 7,
        titre: 'La chasse au météore',
        auteurs: [
            {
                id: 6,
                nom: 'Verne',
                prenom: 'Jules',
            },
        ],
        rayon: {
            id: 5,
            categorie: 'poète',
        },
        motcles: [
            {
                id: 12,
                libelle: 'Voyage',
            }
        ],
        adherent: {}
    }
]

const bibliotheque2 = [
    {
        id: 1,
        titre: 'Candide 2',
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
        titre: 'Le Javascript pour les encore plus nuls',
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

]






function listerTitresBibliotheque(maBibliotheque) {
    //Parcourir notre bibliothèque et donc acceder à chaque ouvrage
    for (let i = 0; i < maBibliotheque.length; i++) {
        //On accede au i-ème element de notre bibliothèque -> un ouvrage        
        const ouvrage = maBibliotheque[i];
        // On affiche les titres de l'ouvrage
        console.log(ouvrage.titre);

    }

}






function listerAuteursBibliotheque(maBibliotheque) {

    //Parcourir notre bibliothèque et donc acceder à chaque ouvrage
    for (let i = 0; i < maBibliotheque.length; i++) {
        //On accede au i-ème element de notre bibliothèque -> un ouvrage
        const ouvrage = maBibliotheque[i];
        // on met un raccourci sur les auteurs grâce à une variable
        const auteurs = ouvrage.auteurs
        for (let j = 0; j < auteurs.length; j++) {
            //On accede au j-ème element de notre liste d'auteur -> un auteur
            const auteur = auteurs[j];

            //Avec IF
            // let prenom;
            // if(auteur.prenom){
            //     prenom = auteur.prenom;
            // }
            // else {
            //     prenom = '';
            // }

            // Avec expression ternaire
            // const prenom = auteur.prenom ? auteur.prenom : ''; 

            // Avec operateur logique
            // const prenom = auteur.prenom || ''

            //On affiche l'identifiant, le nom et le prenom si il existe sinon une chaine de caractere vide.
            console.log(`${auteur.id} - ${auteur.nom} ${auteur.prenom || ''}`);
        }
    }
}








function auteurExist(listeAuteurs, auteur) {
    let exist = false;
    //Parcourir la liste d'auteur unique qu'on est en train de creer et donc acceder aux auteurs de cette liste
    for (let k = 0; k < listeAuteurs.length && !exist; k++) {
        //On accede au k-ème element de notre liste d'auteur -> un auteur
        const auteurDeLaListe = listeAuteurs[k];
        // est ce que l'auteur de ma liste et le meme que celui de mon ouvrage
        if (auteurDeLaListe.id == auteur.id) {
            //L'auteur de mon ouvrage est le meme que l'auteur de mon tableau -> j'ai déjà ajouté cet auteur dans ma liste
            exist = true;
        }
    }
    return exist;
}







function listerAuteursBibliothequeSansDoublon(maBibliotheque) {
    const listeAuteurs = [];
    //Parcourir notre bibliothèque et donc acceder à chaque ouvrage
    for (let i = 0; i < maBibliotheque.length; i++) {
        //On accede au i-ème element de notre bibliothèque -> un ouvrage
        const ouvrage = maBibliotheque[i];
        // on met un raccourci sur les auteurs grâce à une variable
        const auteurs = ouvrage.auteurs
        for (let j = 0; j < auteurs.length; j++) {
            //On accede au j-ème element de notre liste d'auteur -> un auteur
            const auteur = auteurs[j];
            // appelle la fonction pour vérifier si l'auteur de l'ouvrage existe déjà dans notre liste d'auteur
            const exist = auteurExist(listeAuteurs, auteur)
            // si il n'existe pas, on l'ajoute à la liste
            if (!exist) {
                // on l'ajoute
                listeAuteurs.push(auteur);
            }
        }
    }
    //Parcourir notre nouvelle liste d'auteur unique et donc acceder à chaque auteur
    for (let i = 0; i < listeAuteurs.length; i++) {
        //On accede au i-ème element de notre liste d'auteur -> un auteur
        const auteur = listeAuteurs[i];
        //On affiche l'identifiant, le nom et le prenom si il existe sinon une chaine de caractere vide.
        console.log(`${auteur.id} - ${auteur.nom} ${auteur.prenom || ''}`);
    }
}







function bibliothequeParAuteur(maBibliotheque, idAuteur) {

    //initialiser une liste d'ouvrage qui contiendra unique les ouvrages avec l'auteur voulu (idAuteur)
    let listeOuvragesParAuteur = [];
    //Parcourir notre bibliotheque
    for (let i = 0; i < maBibliotheque.length; i++) {
        //Pour chaque ouvrage, parcourir les auteurs et regarder si l'un des auteur à le meme identifiant que celui passé en parametre (idAuteur)
        const ouvrage = maBibliotheque[i];
        const auteurs = ouvrage.auteurs;
        for (let j = 0; j < auteurs.length; j++) {
            const auteur = auteurs[j];
            //Si l'ouvrage possède cet auteur, on nva l'ajouter a une liste d'ouvrage
            if (auteur.id === idAuteur) {
                listeOuvragesParAuteur.push(ouvrage);
            }
        }
    }
    //retourner la nouvelle liste d'ouvrage
    return listeOuvragesParAuteur;
}






function listerLivresParAuteurs(maBibliotheque) {

    //Lister et afficher les auteurs présent dans ma bibliotheque
    listerAuteursBibliothequeSansDoublon(maBibliotheque);

    //demander a l'utilisateur de saisir le numéro de l'auteur dont il souhaite obtenir la liste des titres
    const numAuteur = readlineSync.questionInt('\nVeuillez saisir le numéro de l\'auteur dont vous souhaitez obtenir la liste des titres\n');

    //Rechercher dans notre bibliothèque unique les livres de cet auteur
    const bibliothequeAuteur = bibliothequeParAuteur(bibliotheque, numAuteur);

    //Afficher les titres de ces livres
    listerTitresBibliotheque(bibliothequeAuteur);

}
















function afficheMenu() {
    console.log("Que souhaitez-vous faire ? \n\n" +
        "\t1 - Lister les titres des livres\n" +
        "\t2 - Lister les auteurs de la bibliothèque\n" +
        "\t3 - Lister les livres d'un auteur\n" +
        "\t4 - Lister les titres et auteurs des livres disponibles uniquement\n" +
        "\t5 - Rechercher un livre par mots clés\n" +
        "\t6 - Lister les adhérents\n" +
        "\t7 - Afficher le titre, auteurs et date d'emprunt du livre d'un adhérent\n" +
        "\t0 - Quitter\n")
}

const quitter = false;

while (!quitter) {
    afficheMenu()

    const reponse = readlineSync.questionInt();
    console.log('\n');

    switch (reponse) {
        case 1: {
            listerTitresBibliotheque(bibliotheque);
            break;
        }
        case 2: {
            listerAuteursBibliothequeSansDoublon(bibliotheque);
            break
        }
        case 3: {
            listerLivresParAuteurs(bibliotheque);
            break
        }

        case 5: {
            listerLivresParMotsCles(bibliotheque);
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

/*

Bonjour et bienvenue sur notre bibliothèque !

Que souhaitez-vous faire ?

1 - Lister les titres des livres
2 - Lister les auteurs de la bibliothèque
3 - Lister les livres d'un auteur
4 - Lister les titres et auteurs des livres disponibles uniquement
5 - Rechercher un livre par mots clés
6 - Lister les adhérents
7 - Afficher le titre, auteurs et date d'emprunt du livre d'un adhérent
0 - Quitter

*/





// console.log(JSON.stringify(bibliotheque);


// const jsonBibliotheque = {
//     "id": 6,
//     "titre": "les fleurs du mal",
//     "dateEmprunt": "15/02/2021",
//     "dateRetour": "06/03/2021"
// }

// const toto;
// if(condition) {
//     toto = 1
// }
// else {
//     toto = 2
// }

// const toto = condition ? 1 : 2