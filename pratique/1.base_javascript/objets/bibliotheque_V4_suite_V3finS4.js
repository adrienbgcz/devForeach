const readlineSync = require('readline-sync');
const moment = require('moment');
moment.locale('fr')


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
        dateEmprunt: new Date('2020-03-03'),
        dateRetour: new Date('2021-02-02'),
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
            prenom: 'Pierre',
        },
    },
    {
        id: 2,
        titre: 'Le Javascript pour les nuls',
        dateEmprunt: new Date('2021-02-20'),
        dateRetour: new Date('2021-01-25'),
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
        dateEmprunt: new Date('2021-02-20'),
        dateRetour: new Date('2021-01-25'),
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
        dateEmprunt: new Date('2021-02-20'),
        dateRetour: new Date('2021-01-25'),
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
        dateEmprunt: new Date('2021-01-26'),
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
        dateEmprunt: new Date('2021-02-02'),
        dateRetour: new Date('2020-03-03'),
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
    // si bibliothèque vide.... sinon parcourir la bibliothèque
    if (maBibliotheque.length === 0) {
        console.log('Votre demande ne correspond à aucun titre.');
    }
    else {
        //Parcourir notre bibliothèque et donc acceder à chaque ouvrage
        for (let i = 0; i < maBibliotheque.length; i++) {
            //On accede au i-ème element de notre bibliothèque -> un ouvrage        
            const ouvrage = maBibliotheque[i];
            // On affiche les titres de l'ouvrage
            console.log(ouvrage.titre);
        }
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
    const ouvrageAuteur = [];

    //Parcourir notre bibliotheque
    for (let i = 0; i < maBibliotheque.length; i++) {
        //Pour chaque ouvrage, parcourir les auteurs et regarder si l'un des auteur à le meme identifiant que celui passé en parametre (idAuteur)
        const ouvrage = maBibliotheque[i];
        const auteurs = ouvrage.auteurs;
        for (let j = 0; j < auteurs.length; j++) {
            const auteur = auteurs[j];
            //Si l'ouvrage possède cet auteur, on va l'ajouter a une liste d'ouvrage
            if (auteur.id == idAuteur) {
                ouvrageAuteur.push(ouvrage);
            }

        }
    }

    //retourner la nouvelle liste d'ouvrage
    return ouvrageAuteur;
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


function listerMotCleDisponible(listeMotsCles) {

    for (let i = 0; i < listeMotsCles.length; i++) {
        const motsCles = listeMotsCles[i];
        console.log(`${motsCles.id} : ${motsCles.libelle}`)
    }
}


function bibliothequeParMotcle(maBibliotheque, idMotCle) {

    let ouvrageMotsCles = [];

    for (let i = 0; i < maBibliotheque.length; i++) {
        const ouvrage = maBibliotheque[i];
        const motsCles = ouvrage.motcles
        for (let j = 0; j < motsCles.length; j++) {
            const motcle = motsCles[j]
            if (motcle.id === idMotCle) {
                ouvrageMotsCles.push(ouvrage)
            }
        }
    }
    return ouvrageMotsCles;

}


function listerLivresParMotscles(maBibliotheque) {

    //Lister et afficher les mots clés de la iste de mots clés disponibles
    listerMotCleDisponible(motsclesDisponibles);

    //demander a l'utilisateur de saisir le numéro du mot clé dont il souhaite obtenir la liste des titres
    const numMotcle = readlineSync.questionInt('\nVeuillez saisir le numéro du mot clé dont vous souhaitez obtenir la liste des titres\n');

    //Rechercher dans notre bibliothèque uniquement les livres possédant ce mot clé
    const bibliothequeMotcle = bibliothequeParMotcle(maBibliotheque, numMotcle);


    //Afficher les titres de ces livres
    listerTitresBibliotheque(bibliothequeMotcle);

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function listerLivresDisponibles(maBibliotheque) {  // ex : 3 - 'Le mur des humeurs' par Jean-Philippe Vidal, Voltaire

    //initialiser une nouvelle bibliotheque
    let ouvragesDisponibles = [];

    //Parcourir la bibliotheque actuelle
    for (let i = 0; i < maBibliotheque.length; i++) {
        const ouvrage = maBibliotheque[i];
        const dateEmprunt = ouvrage.dateEmprunt;
        const dateRetour = ouvrage.dateRetour;
        // Regarder si les ouvrages sont disponibles : 
        // disponible si l'ouvrage a été rendu (i.e s'il y a abien une date de retour postérieure à la date d'emprunt)
        const isDispo = disponibilite(dateEmprunt, dateRetour);

        // si il est disponible, on l'ajoute a notre liste 
        if (isDispo) {
            ouvragesDisponibles.push(ouvrage);
            //On affiche le titre de l'ouvrage avec les auteurs for (let j = 0; j < ouvragesDisponibles.length; j++) {
            // affichage sans le tableau au fur et à mesure ou tableau à l'extérieur
        }
    }
    // listerOuvrageTitreComplet(ouvragesDisponibles);

    for (let j = 0; j < ouvragesDisponibles.length; j++) {
        let idAndTitle = `${ouvragesDisponibles[j].id} - ${ouvragesDisponibles[j].titre} par `;
        const ouvrageDispo = ouvragesDisponibles[j];
        const auteursOuvragesDispo = ouvrageDispo.auteurs;

        for (let k = 0; k < auteursOuvragesDispo.length; k++) {
            const auteur = auteursOuvragesDispo[k];
            if ((k == auteursOuvragesDispo.length - 1 && k == 0) || (k == auteursOuvragesDispo.length - 1)) {          // pour gérer le lien entre les artistes s'il y en a plusieurs
                const prenomNom = `${auteur.prenom || ''} ${auteur.nom}`;
                idAndTitle += prenomNom;
            }
            else {
                const prenomNom = `${auteur.prenom || ''} ${auteur.nom},`;
                idAndTitle += prenomNom;
            }
        }
        console.log(`${idAndTitle}`);


    }
}

function disponibilite(dateEmprunt, dateRetour) {
    let isDispo = true;
    if (dateEmprunt && (dateEmprunt < dateRetour || !dateRetour)) {
        isDispo = true;
    } else if (!dateRetour || (dateEmprunt && dateEmprunt > dateRetour)) {
        isDispo = false;
    }
    return isDispo;
}



function listerOuvrageTitreComplet(maBibliotheque) {
    // Parcourir la bibliothque
    for (let i = 0; i < maBibliotheque.length; i++) {
        const ouvrage = maBibliotheque[i];
        //commence le titre avec les element disponible directement sur l'ouvrage
        let titre = `${ouvrage.id} - '${ouvrage.titre}' par `;
        const auteurs = ouvrage.auteurs;
        // Parcourir les auteur pour les ajouter dans le titre un à un
        for (let j = 0; j < auteurs.length; j++) {
            const auteur = auteurs[j];
            titre += `${j > 0 ? ', ' : ''} ${auteur.prenom || ''} ${auteur.nom}`
            //pour gérer la virgule apartir du 2eme auteur
            //titre += `${j>0?', ':''} ${auteur.prenom || ''} ${auteur.nom}`
        }
        // J'ai terminé d'ajouter tous les auteurs, je peux afficher mon titre
        console.log(titre);
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function listerAdherents(maBibliotheque) {

    let listeAdherents = [];
    for (let i = 0; i < maBibliotheque.length; i++) {
        const ouvrage = maBibliotheque[i];
        const adherent = ouvrage.adherent;

        let exist = true;
        if (adherent.id) {
            exist = adherent.id && adherentExist(listeAdherents, adherent);
        }

       //let exist = adherent.id && adherentExist(listeAdherents, adherent);
        

        if (!exist) { // vérifier le undefined
            listeAdherents.push(adherent);
        }
    }

    for (let j = 0; j < listeAdherents.length; j++) {
        console.log(`${listeAdherents[j].id} - ${listeAdherents[j].prenom || ''} ${listeAdherents[j].nom}`)
    }
}


function adherentExist(mesAdherents, unAdherent) {
    let exist = false;

    for (let i = 0; i < mesAdherents.length; i++) {
        if (unAdherent.id === mesAdherents[i].id) {
            exist = true;
        }
    }
    return exist;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function afficherInfosOuvrageParAdherent(maBibliotheque) {

    let stockageInfos = [];

    listerAdherents(bibliotheque);

    // choisir un adherent
    const choix = readlineSync.questionInt('\nChoisissez un adhérent : \n')


    // parcourir la bibliotheque
    for (let i = 0; i < bibliotheque.length; i++) {
        const ouvrage = bibliotheque[i];
        const adherent = ouvrage.adherent;
        // mettre l'adherent dans un tableau
        if (adherent.id === choix) {
            stockageInfos.push(ouvrage);
        }
    }


    // parcourir le tableau 1, déclarer les variables à afficher et les enregistrer dans une chaine de caracteres 
    for (let j = 0; j < stockageInfos.length; j++) {
        let affichageResult = '';
        const ouvrage = stockageInfos[j];

        // parcourir le tableau auteurs
        affichageResult += `${ouvrage.titre} par `;
        for (let k = 0; k < ouvrage.auteurs.length; k++) {
            affichageResult += `${k > 0 ? ', ' : ''}${ouvrage.auteurs[k].prenom || ''} ${ouvrage.auteurs[k].nom}`

        }

        dateFormatee = moment(ouvrage.dateEmprunt, "YYYY-MM-DD").format('dddd DD MMMM YYYY')
        affichageResult += `, emprunté le ${dateFormatee}`
        console.log(affichageResult);
    }




    // afficher la chaine de caracteres

}

// for (let i = 0; i < maBibliotheque.length; i++) {
//     const ouvrage = maBibliotheque[i];
//     const adherent = ouvrage.adherent;
//     const titre = ouvrage.titre
//     const dateEmprunt = ouvrage.dateEmprunt

//     for (let k = 0; k < ouvrage.auteurs; k++ ){
//     const auteur = ouvrage.auteurs[k];
// }

//console.log(`${adherent.id} - ${ouvrage}, écrit par  )
























function afficheMenu() {
    console.log("\n\nQue souhaitez-vous faire ? \n\n" +
        "\t1 - Lister les titres des livres\n" +
        "\t2 - Lister les auteurs de la bibliothèque\n" +
        "\t3 - Lister les livres d'un auteur\n" +
        "\t4 - Lister les titres et auteurs des livres disponibles uniquement\n" +
        "\t5 - Rechercher un livre par mots clés\n" +
        "\t6 - Lister les adhérents\n" +
        "\t7 - Afficher le titre, auteurs et date d'emprunt du livre d'un adhérent\n" +
        "\t0 - Quitter\n")
}

let quitter = false;

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

        case 4: {
            listerLivresDisponibles(bibliotheque);
            break
        }
        case 5: {
            listerLivresParMotscles(bibliotheque);
            break
        }
        case 6: {
            listerAdherents(bibliotheque);
            break
        }
        case 7: {
            afficherInfosOuvrageParAdherent(bibliotheque);
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