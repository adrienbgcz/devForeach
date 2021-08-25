// const disques = {
//     id: 1234,
//     titre: 'adcnaocd',
//     artiste: 'idsjnjzdjn',
//     label:'dklsockz',
//     annee : 2007
// }


// const artistes = {
//     id: 3435,
//     nom: 'ksjnc'
// }


// const disques = {
//     id: 1234,
//     titre: 'adcnaocd',
//     artistes: [
//         {
//             id: 3435,
//             nom: 'ksjnc'
//         },
//         {
//             id: 4494,

//         }
//     ],
//     label: 'dklsockz',
//     annee: 2007
// }





const ouvrage = [
    {
        id: 1234,
        titre: 'Le Javascript pour les nuls',
        date_emprunt: '20/02/2021',
        date_retour: '25/02/2021',
        rayon: {
            id: 456,
            categorie: 'Tutoriel'
        },
        auteurs: [
            {
                id: 789,
                nom: 'Mozdzierz',
                prenom: 'Aurore'
            },
        ],
        motCles: [
            {
                id: 353,
                libelle: 'javascript'
            },
            {
                id: 354,
                libelle: 'numérique'
            }
        ],
        adherents: {
            id: 553,
            nom: 'Bogacz',
            prenom: 'Adrien'

        }
    },
    {
        id: 1235,
        titre: 'Le mur des humeurs',
        date_emprunt: '20/02/2021',
        date_retour: '25/02/2021',
        rayon: {
            id: 457,
            categorie: 'Psychologie'
        },
        auteurs: [
            {
                id: 790,
                nom: 'Vidal',
                prenom: 'Jean-Philippe'
            },
        ],
        motCles: [
            {
                id: 355,
                libelle: 'humeur'
            },
            {
                id: 356,
                libelle: 'développement personnel'
            }
        ],
        adherent: {
            id: 554,
            nom: 'Errachidi',
            prenom: 'Houda'

        }
    },
]


console.log(ouvrage);