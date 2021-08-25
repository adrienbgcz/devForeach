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
            listerAuteurs(bibliotheque);
            break;
        }
        case 3: {
            listerLivresParAuteur(bibliotheque);
            break;
        }
        case 4: {
            listerLivresDispos(bibliotheque);
            break;
        }
        case 5: {
            livresParMotCle(bibliotheque);
            break;
        }
        case 6: {
            listerAdherents(bibliotheque);
            break;
        }
    }
}


function listerTitresBibliotheque(maBibliotheque) {
    bibliotheque.forEach(ouvrage => console.log(ouvrage.titre))
}

function listerAuteurs(maBibliotheque) {

    let tabAuteurs = [];

    bibliotheque.forEach(ouvrage => {
        ouvrage.auteurs.forEach(auteur => {
            if (!auteurExist(auteur.id, tabAuteurs)) {
                tabAuteurs.push(auteur.id);
                console.log(`${auteur.id} - ${auteur.prenom || ''} ${auteur.nom}`);
            }
        })
    })
}

function auteurExist(idAuteur, tableau) {
    isExist = false;

    isExist = tableau.find(element => {
        return element == idAuteur;
    })
    return isExist;
}


function listerLivresParAuteur(maBibliotheque) {

    console.log('De quel auteur souhaitez-vous afficher les livres ?\n');

    listerAuteurs(bibliotheque);

    const choix = readlineSync.questionInt('\nVotre choix : \n');

    bibliotheque.forEach(ouvrage => {
        const tabAuteur = ouvrage.auteurs.filter(auteur => auteur.id == choix);
        if (tabAuteur.length !== 0) {
            console.log(ouvrage.titre);
        }
    })
}


function listerLivresDispos(maBibliotheque) {
    let livresDispos = [];
    bibliotheque.forEach(ouvrage => {
        if (ouvrage.dateEmprunt < ouvrage.dateRetour || !ouvrage.dateEmprunt) {
            livresDispos.push(ouvrage);
        }
    })
    titreComplet(livresDispos);
}

function titreComplet(tableauOuvrage) {
    tableauOuvrage.forEach(ouvrage => {
        ouvrage.auteurs.forEach(auteur => {
            console.log(`${ouvrage.titre} par ${auteur.prenom || ''} ${auteur.nom}`);
        })
    })
}


function livresParMotCle(maBibliotheque) {
    choixMotsCles(motsclesDisponibles);


}


function choixMotsCles(listeMots) {
    console.log('\nChoisissez un ou plusieurs mots-clés : \n');
    listeMots.forEach(mot => console.log(`${mot.id} - ${mot.libelle}`))
    console.log('0 - Valider');

    let choixEnCours = [];
    let choix = 0;

    do {
        choix = readlineSync.questionInt('\nSaisir un nombre : \n');
        if (choixEnCours.includes(choix)) {
            choix = readlineSync.questionInt('Vous avez déjà choisi ce mot, faites un autre choix : \n');
        } else {
            choixEnCours.push(choix);
            console.log(`Vos choix actuels : ${choixEnCours}`);
        }
    } while (choix !== 0)

    bibliotheque.forEach(ouvrage => {
        let ouvrageIsOk = false;
        ouvrage.motcles.forEach(mot => {
            if (choixEnCours.includes(mot.id)) {
                ouvrageIsOk = true
            }
        })
        if (ouvrageIsOk) {
            console.log(`${ouvrage.titre}`);
        }
    })
}

function listerAdherents(maBibliotheque) {
    maBibliotheque.forEach(ouvrage => {
        // if (ouvrage.adherent.prenom !== 'undefined') {
        //     console.log(`${ouvrage.adherent.prenom || ''}`)
        // }
        // if (ouvrage.adherent.nom !== 'undefined') {
        //     console.log(`${ouvrage.adherent.nom || ''}`)
        // }

        if (!ouvrage.adherent.hasOwnProperty('undefined')) {
            console.log(`${ouvrage.adherent.prenom || ''} ${ouvrage.adherent.nom || ''}`)
        }
        

    })

}