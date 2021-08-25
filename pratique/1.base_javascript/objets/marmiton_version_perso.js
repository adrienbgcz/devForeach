const readlineSync = require('readline-sync');

const utilisateurs = [
    {
        id: 1,
        nom: 'Isa'
    },
    {
        id: 2,
        nom: 'hannah_14141987'
    },
    {
        id: 15,
        nom: 'max3202'
    },
    {
        id: 25,
        nom: 'cricri1359'
    },
    {
        id: 49,
        nom: 'Melloki'
    },
    {
        id: 55,
        nom: 'leprincedelanuit'
    },
    {
        id: 56,
        nom: 'EmelineL31'
    },
    {
        id: 65,
        nom: 'lyliemoi'
    },
    {
        id: 86,
        nom: 'Emlimi13'
    },
    {
        id: 111,
        nom: 'lina_13929293'
    },
    {
        id: 222,
        nom: 'Oscar_16503641'
    }
]

const recettes = [
    {
        id: 1,
        nom: 'Pate a crepes',
        niveau: {
            id: 1,
            libelle: 'Facile'
        },
        cout: {
            id: 1,
            libelle: 'Bon Marche'
        },
        nombre_part: 15,
        unite_part: 'crepes',
        temps_preparation: 10,
        temps_repos: 0,
        temps_cuisson: 20,
        auteur: {
            utilisateur: {
                id: 1,
                nom: 'Isa'
            },
            commentaire: 'Astuce Veggie Cool de GoodPlanet: remplacez le lait de vache par du lait végétal: le lait d\'avoine est l\'un des laits végétaux les plus responsables qui soient, et local: à privilégier sans hésiter ! Voici par exemple une recette de pâte à crêpes avec du lait d\'avoine, à tester.'
        },
        etapes: [
            {
                id: 1000,
                numero: 1,
                description: 'Mettre la farine dans une terrine et former un puits.'
            },
            {
                id: 1001,
                numero: 2,
                description: 'Y déposer les oeufs entiers, le sucre, l\'huile et le beurre.'
            },
            {
                id: 1002,
                numero: 3,
                description: 'Mélanger délicatement avec un fouet en ajoutant au fur et à mesure le lait. La pâte ainsi obtenue doit avoir une consistance d\'un liquide légèrement épais.'
            },
            {
                id: 1003,
                numero: 4,
                description: 'Parfumer de rhum.'
            },
            {
                id: 1004,
                numero: 5,
                description: 'Faire chauffer une poêle antiadhésive et la huiler très légèrement. Y verser une louche de pâte, la répartir dans la poêle puis attendre qu\'elle soit cuite d\'un côté avant de la retourner. Cuire ainsi toutes les crêpes à feu doux. de rhum.'
            }
        ],
        commentaires: [
            {
                note: 5,
                description: 'Parfait',
                date: new Date(),
                utilisateur: {
                    id: 55,
                    nom: 'leprincedelanuit'
                }
            },
            {
                note: 2,
                description: 'Pâte trop grumeuse à cause du beurre, elles sont bonnes mais à cause de ça sont trop épaisses',
                date: new Date(),
                utilisateur: {
                    id: 15,
                    nom: 'max3202'
                }
            }

        ],
        ingredients: [
            {
                ingredient: {
                    id: 1,
                    nom: 'rhum'
                },
                quantite: 5,
                unite: {
                    id: 1,
                    libelle: 'cl',
                    description: 'centilitre'
                }
            },
            {
                ingredient: {
                    id: 2,
                    nom: 'farine'
                },
                quantite: 300,
                unite: {
                    id: 2,
                    libelle: 'g',
                    description: 'gramme'
                }
            },
            {
                ingredient: {
                    id: 3,
                    nom: 'oeufs entiers'
                },
                quantite: 3,
                unite: {
                    id: 3,
                    libelle: '',
                    description: 'unite'
                }
            },
            {
                ingredient: {
                    id: 4,
                    nom: 'sucre'
                },
                quantite: 3,
                unite: {
                    id: 4,
                    libelle: 'càs',
                    description: 'cuillère à soupe'
                }
            },
            {
                ingredient: {
                    id: 5,
                    nom: 'huile'
                },
                quantite: 2,
                unite: {
                    id: 4,
                    libelle: 'càs',
                    description: 'cuillère à soupe'
                }
            }, {
                ingredient: {
                    id: 6,
                    nom: 'beurre fondu'
                },
                quantite: 50,
                unite: {
                    id: 2,
                    libelle: 'g',
                    description: 'gramme'
                }
            }
            , {
                ingredient: {
                    id: 7,
                    nom: 'lait'
                },
                quantite: 60,
                unite: {
                    id: 1,
                    libelle: 'cl',
                    description: 'centilitre'
                }
            }
        ]
    },
    {
        id: 2,
        nom: 'Gateau au chocolat fondant',
        niveau: {
            id: 1,
            libelle: 'Facile'
        },
        cout: {
            id: 1,
            libelle: 'Bon Marche'
        },
        nombre_part: 6,
        unite_part: "personnes",
        temps_preparation: 10,
        temps_repos: 0,
        temps_cuisson: 30,
        auteur: {
            utilisateur: {
                id: 2,
                nom: 'hannah_14141987'
            },
            commentaire: 'Pour aller plus vite, pour faire fondre le chocolat et le beurre, je mets le tout dans un bol coupé en carrés au micro-ondes.'
        },
        etapes: [
            {
                id: 1020,
                numero: 1,
                description: 'Préchauffez votre four à 180°C (thermostat 6). Dans une casserole, faites fondre le chocolat et le beurre coupé en morceaux à feu très doux..',
            },
            {
                id: 1021,
                numero: 2,
                description: 'Dans un saladier, ajoutez le sucre, les oeufs, la farine. Mélangez',
            },
            {
                id: 1022,
                numero: 3,
                description: 'Ajoutez le mélange chocolat/beurre. Mélangez bien.',
            },
            {
                id: 1023,
                numero: 4,
                description: 'Beurrez et farinez votre moule puis y versez la pâte à gâteau.',
            },
            {
                id: 1024,
                numero: 5,
                description: 'Faites cuire au four environ 20 minutes.',
            },
            {
                id: 1025,
                numero: 6,
                description: 'A la sortie du four le gâteau ne paraît pas assez cuit. C\'est normal, laissez-le refroidir puis démoulez- le.',
            }
        ],
        commentaires: [
            {
                note: 5,
                description: 'Facile, rapide, et bon! Juste parfait !',
                date: new Date(),
                utilisateur: {
                    id: 49,
                    nom: 'Melloki'
                }
            },
            {
                note: 4,
                description: 'Pâte trop grumeuse à cause du beurre, elles sont bonnes mais à cause de ça sont trop épaisses',
                date: new Date(),
                utilisateur: {
                    id: 86,
                    nom: 'Emlimi13'
                }
            }
        ],
        ingredients: [
            {
                ingredient: {
                    id: 2,
                    nom: 'farine'
                },
                quantite: 50,
                unite: {
                    id: 2,
                    libelle: 'g',
                    description: 'gramme'
                }
            },
            {
                ingredient: {
                    id: 3,
                    nom: 'oeufs entiers'
                },
                quantite: 3,
                unite: {
                    id: 3,
                    libelle: '',
                    description: 'unite'
                }
            },
            {
                ingredient: {
                    id: 4,
                    nom: 'sucre'
                },
                quantite: 100,
                unite: {
                    id: 2,
                    libelle: 'g',
                    description: 'gramme'
                }
            },
            {
                ingredient: {
                    id: 9,
                    nom: 'chocolat patissier'
                },
                quantite: 200,
                unite: {
                    id: 2,
                    libelle: 'g',
                    description: 'gramme'
                }
            }, {
                ingredient: {
                    id: 15,
                    nom: 'beurre'
                },
                quantite: 100,
                unite: {
                    id: 2,
                    libelle: 'g',
                    description: 'gramme'
                }
            },
        ]
    },
    {
        id: 3,
        nom: 'Welsh Rarebit',
        niveau: {
            id: 4,
            libelle: 'Très facile'
        },
        cout: {
            id: 2,
            libelle: 'Moyen'
        },
        nombre_part: 2,
        unite_part: "personnes",
        temps_preparation: 15,
        temps_repos: 0,
        temps_cuisson: 10,
        auteur: {
            utilisateur: {
                id: 222,
                nom: 'Oscar_16503641'
            },
            commentaire: 'Le pain complet a plus de goût, et tient mieux dans l\'assiette. Le fromage ne doit surtout pas bouillir... S\'il fait des petits grains, c\'est qu\'il a été chauffé trop fort. - Je déconseille de faire cette recette dans un plat à gratin : quand vous servirez dans les assiettes le fromage durcira d\'un seul coup et l\'ensemble ne sera pas très agréable.'
        },
        etapes: [
            {
                id: 2000,
                numero: 1,
                description: 'Préchauffez le four à 180°C (thermostat 6).'
            },
            {
                id: 2001,
                numero: 2,
                description: 'Disposez les tartines dans les assiettes qui vont au four, avec une tranche de jambon sur chaque tartine.'
            },
            {
                id: 2002,
                numero: 3,
                description: 'Coupez le cheddar en petit cubes.'
            },
            {
                id: 2003,
                numero: 4,
                description: 'Faire fondre le cheddar dans une casserole sur feu très doux, sans cesser de remuer avec une cuillère en bois.'
            },
            {
                id: 2004,
                numero: 5,
                description: 'Le fromage va d\'abord faire des fils, c\'est normal, continuez de remuer et de pétrir.'
            },
            {
                id: 2005,
                numero: 6,
                description: 'Quand la consistance est nappante sur la cuillère, ajoutez la bière.'
            },
        ],
        commentaires: [
            {
                note: 5,
                description: 'Parfait',
                date: new Date(),
                utilisateur: {
                    id: 65,
                    nom: 'lyliemoi'
                }
            },
            {
                note: 2,
                description: 'Ce plat servi individuellement permet de satisfaire tous les goûts : sans jambon pour les végétariens, sans oeuf pour alléger ou avec tout pour les gourmands.',
                date: new Date(),
                utilisateur: {
                    id: 25,
                    nom: 'cricri1359'
                }
            }
        ],
        ingredients: [
            {
                ingredient: {
                    id: 11,
                    nom: 'cheddar'
                },
                quantite: 400,
                unite: {
                    id: 2,
                    libelle: 'g',
                    description: 'gramme'
                }
            },
            {
                ingredient: {
                    id: 12,
                    nom: 'pain complet'
                },
                quantite: 2,
                unite: {
                    id: 15,
                    libelle: 'tranches',
                    description: 'tranches'
                }
            },
            {
                ingredient: {
                    id: 13,
                    nom: 'jambon blanc'
                },
                quantite: 2,
                unite: {
                    id: 13,
                    libelle: 'tranches',
                    description: 'tranches'
                }
            },
            {
                ingredient: {
                    id: 14,
                    nom: 'bière blonde'
                },
                quantite: 8,
                unite: {
                    id: 1,
                    libelle: 'cl',
                    description: 'centilitres'
                }
            },
            {
                ingredient: {
                    id: 3,
                    nom: 'oeufs'
                },
                quantite: 2,
                unite: {
                    id: 3,
                    libelle: '',
                    description: 'unité'
                }
            }
        ]
    },
    {
        id: 4,
        nom: 'Tiramisu aux speculos',
        niveau: {
            id: 1,
            libelle: 'Facile'
        },
        cout: {
            id: 1,
            libelle: 'Bon Marche'
        },
        nombre_part: 6,
        temps_preparation: 25,
        temps_repos: 0,
        temps_cuisson: 0,
        auteur: {
            utilisateur: {
                id: 111,
                nom: 'lina_13929293'
            },
            commentaire: 'L\'astuce Vegan pas banal de GoodPlanet : Profitez de cette recette pour cuisiner vos spéculoos maison : mille fois meilleur, et si facile'
        },
        etapes: [
            {
                id: 3000,
                numero: 1,
                description: 'Faire un ruban avec les jaunes d\'oeufs, le sucre et le sucre vanillé.'
            },
            {
                id: 3001,
                numero: 2,
                description: 'Y ajouter le mascarpone.'
            },
            {
                id: 3002,
                numero: 3,
                description: 'Battre les blancs en neige, les incorporer délicatement au mélange.'
            },
            {
                id: 3003,
                numero: 4,
                description: 'Ajouter l\'amaretto au café noir.'
            },
            {
                id: 3004,
                numero: 5,
                description: 'Monter le gâteau: tremper, au fur et à mesure, les speculoos dans le café (attention à ne pas les "détremper").'
            },
            {
                id: 3005,
                numero: 6,
                description: 'Dans un plat, mettre une couche de biscuits, ensuite une couche de crème au mascarpone. Ensuite une autre couche de biscuits, et terminer par une couche de crème.'
            }
        ],
        commentaires: [
            {
                note: 5,
                description: 'Sans faute, je le réussi à chaque fois et tout le monde adore!',
                date: new Date(),
                utilisateur: {
                    id: 55,
                    nom: 'EmelineL31',
                }
            },
            {
                note: 5,
                description: 'Excellente recette elle fait son effet à tous les coup !! Je remplace l’amarreto par du rhum :parfait::couleur_de_peau-3:',
                date: new Date(),
                utilisateur: {
                    id: 15,
                    nom: 'max3202'
                }
            }
        ],
        ingredients: [
            {
                ingredient: {
                    id: 1,
                    nom: 'Amaretto'
                },
                quantité: 1,
                unite: {
                    id: 4,
                    libelle: 'càs',
                    description: 'cuillère à soupe'
                }
            },
            {
                ingredient: {
                    id: 2,
                    nom: 'mascarpone'
                },
                quantite: 250,
                unite: {
                    id: 2,
                    libelle: 'g',
                    description: 'gramme'
                }
            },
            {
                ingredient: {
                    id: 3,
                    nom: 'sucre roux'
                },
                quantite: 80,
                unite: {
                    id: 3,
                    libelle: 'g',
                    description: 'gramme'
                }
            },

        ]
    }
]


/*

Bonjour et bienvenue dans notre livre de cuisne interactif !

Que souhaitez-vous faire ?

1 - Lister les noms des recettes de cuisine
2 - Afficher la liste des ingredients d'une recette
3 - Afficher la liste des etapes d'une recette
4 - Afficher les commentaires d'une recette
5 - Ajouter un commentaire à une recette
6 - Afficher la note moyenne d'une recette, le nombre de commentaire et la liste des commentaires d'une recette.
7 - Afficher la liste des recettes : nom - note motenne / 5
8 - Afficher la liste des recettes qui utilise un ingredient particulier
0 - Quitter

*/

function afficheMenu() {

    console.log("\n\nQue souhaitez-vous faire ? \n\n" +
        "\t1 - Lister les noms des recettes de cuisine\n" +
        "\t2 - Afficher la liste des ingredients d'une recette\n" +
        "\t3 - Afficher la liste des etapes d'une recette\n" +
        "\t4 - Afficher les commentaires d'une recette\n" +
        "\t5 - Ajouter un commentaire à une recette\n" +
        "\t6 - Afficher la note moyenne d'une recette, le nombre de commentaire et la liste des commentaires d'une recette\n" +
        "\t7 - Afficher la liste des recettes : nom - note motenne / 5\n" +
        "\t8 - Afficher la liste des recettes qui utilise un ingredient particulier\n" +
        "\t9 - Afficher la liste des utilisateurs\n" +
        "\t0 - Quitter\n")
}

const quitter = false;

while (!quitter) {
    afficheMenu()

    const reponse = readlineSync.questionInt();
    console.log('\n');

    switch (reponse) {
        case 1: {
            listerRecettes(recettes);
            break;
        }
        case 2: {
            listerIngredients(recettes);
            break
        }
        case 3: {
            listerEtapesParRecette(recettes);
            break
        }
        case 4: {
            afficherCommentairesParRecette(recettes);
            break
        }
        case 5: {
            ajouterCommentaire(recettes);
            break
        }
        case 6: {
            avisRecette(recettes);
            break
        }
        case 7: {
            nomNoteMoyenne(recettes);
            break
        }
        case 8: {
            listeRecettesParIngredient(recettes);
            break
        }
        case 9: {
            console.log(utilisateurs);
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




function listerRecettes(mesRecettes) {

    //let nomsRecettes = [];

    for (let i = 0; i < mesRecettes.length; i++) {
        const recette = recettes[i];
        console.log(`${recette.id} - ${recette.nom}`);
        //nomsRecettes.push(recette.nom)
    }


}


function listerIngredients(mesRecettes) {

    listerRecettes(mesRecettes);

    let choix = readlineSync.questionInt('\nDe quelle recette souhaitez-vous lister les ingrédients ?\n')

    // Parcourir les recettes 
    for (let i = 0; i < mesRecettes.length; i++) {
        const recette = mesRecettes[i];
        const ingredients = recette.ingredients;
        if (choix == recette.id) {
            console.log(`\nIngrédients de ${recette.nom} :`)
            for (let j = 0; j < ingredients.length; j++) {
                console.log(`- ${ingredients[j].ingredient.nom}`);
            }
        }
    }
}




function listerEtapesParRecette(mesRecettes) {

    listerRecettes(mesRecettes);

    let choix = readlineSync.questionInt('\nDe quelle recette souhaitez-vous lister les étapes ?\n')

    mesRecettes.forEach(recette => {
        if (choix == recette.id) {
            console.log(`\nEtapes pour prérarer ${recette.nom} : \n`)
            recette.etapes.forEach(etape => {
                console.log(`- ${etape.description}\n`)
            });
        }
    });

}


function afficherCommentairesParRecette(mesRecettes) {

    listerRecettes(mesRecettes);

    let choix = readlineSync.questionInt('\nDe quelle recette souhaitez-vous afficher les commentaires ?\n')

    mesRecettes.forEach(recette => {
        if (choix == recette.id) {
            recette.commentaires.forEach(commentaire => {
                console.log(`\n${commentaire.utilisateur.nom} a dit :`)
                console.log(`${commentaire.description}\n`)

            });
        }

    });
}

function ajouterCommentaire(mesRecettes) {

    listerRecettes(mesRecettes);

    let choix = readlineSync.questionInt('\nA quelle recette souhaitez-vous ajouter un commentaire ?\n');

    let pseudo = readlineSync.question('\nSaisissez votre pseudo : \n');

    let newUser = {}


    let newId = 0;

    let newComment = {};

    // Parcourir la liste des utilisateurs
    utilisateurs.forEach(utilisateur => {
        // récupérer l'id le plus grand
        if (utilisateur.id > newId) {
            newId = utilisateur.id + 1;
            //insérer l'id dans newUser
            newUser.id = newId;
        }

        if (utilisateur.nom != pseudo) { // verifier si l'utilisateur n'existe pas
            // insérer le nom dans newUser
            newUser.nom = pseudo;
        }
    });

    // inserer un nouvel utlisateur dans les utilisateurs
    utilisateurs.push(newUser);


    let note = readlineSync.questionInt('\nSaisissez une note de 1 à 5 : \n');
    if (note < 1 || note > 5) {
        console.log('Veuillez saisir une note comprise entre 1 et 5')
    } else {
        newComment.note = note;
    }

    let description = readlineSync.question('\nSaisissez votre commentaire : \n');
    newComment.description = description;

    newComment.utilisateur = newUser;

    mesRecettes.forEach(recette => {
        if (recette.id == choix) {
            recette.commentaires.push(newComment);
        }
    });
}
// console.log(newComment);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function avisRecette(mesRecettes) {
    
    listerRecettes(mesRecettes);

    let choix = readlineSync.questionInt('\nDe quelle recette souhaitez-vous obtenir l\'avis ?\n');

    let nbCommentaires = 0;
    let sommeNotes = 0;
    let noteMoyenneArrondie = 0

    mesRecettes.forEach(recette => {
        if (choix == recette.id) {
            recette.commentaires.forEach(commentaire => {
                nbCommentaires += 1;  
                sommeNotes += commentaire.note;
            });
        
        noteMoyenneArrondie = Math.round(moyenneRecette(nbCommentaires, sommeNotes) * 10) / 10 // mettre commentaires.length au lieu de nbCommentaires
        console.log(`\nAvis sur ${recette.nom} :\n`)
        console.log(`Note moyenne : ${noteMoyenneArrondie}`)
        console.log(`Nombre de commentaires : ${nbCommentaires}`)
        afficherCommentaires(recette);
        }
    });

}



function moyenneRecette(nbCommentaires, somme) {
    let moyenne = somme / nbCommentaires;           // mettre l'arrondi ici
    return moyenne;
}


function afficherCommentaires(maRecette) {

    maRecette.commentaires.forEach(commentaire => {
        console.log(`\n${commentaire.utilisateur.nom} a dit :`)
        console.log(`${commentaire.description}\n`)
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function nomNoteMoyenne(mesRecettes) {

    let nbCommentaires = 0;
    let sommeNotes = 0;
    let noteMoyenneArrondie = 0;

    mesRecettes.forEach(recette => {
        recette.commentaires.forEach(commentaire => {
            nbCommentaires += 1;
            sommeNotes += commentaire.note;
        });
        noteMoyenneArrondie = Math.round(moyenneRecette(nbCommentaires, sommeNotes) * 10) / 10
        console.log(`${recette.nom} :`)
        console.log(`Note moyenne : ${noteMoyenneArrondie}\n`);
    });

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function listeRecettesParIngredient(mesRecettes) {

    // On met chaque ingredient avec son id dans un tableau

    let listeIngredients = [];

    for (let i = 0; i < mesRecettes.length; i++) {
        const recette = mesRecettes[i];
        const tableauObjetsIngredients = recette.ingredients;
        for (let j = 0; j < tableauObjetsIngredients.length; j++) {
            const infosIngredients = tableauObjetsIngredients[j];
            const ingredient = infosIngredients.ingredient;

            let exist = false;
            exist = ingredientExist(listeIngredients, ingredient);
            if (!exist) {
                listeIngredients.push(ingredient);
            }
        }
    }

    // on ordonne les ingrédients selon leur id
    listeIngredients.sort(function (a, b) {
        return a.id - b.id;
    });


    // on affiche la liste à l'utilisateur et on lui demande de choisir un ingrédient

    console.log('Choisissez un ingrédient pour afficher les recettes dans lesquelles il est contenu : \n')

    listeIngredients.forEach(ingredient => {
        console.log(`${ingredient.id} - ${ingredient.nom}`);
    });

    let choix = readlineSync.questionInt('\nVotre choix : ');


    // on parcours les recettes et si un ingrédient est similaire au choix de l'utilisateur, on affiche la recette

    for (let i = 0; i < mesRecettes.length; i++) {
        const recette = mesRecettes[i];
        const tableauObjetsIngredients = recette.ingredients;
        for (let j = 0; j < tableauObjetsIngredients.length; j++) {
            const infosIngredients = tableauObjetsIngredients[j];
            const ingredient = infosIngredients.ingredient;

            if (ingredient.id == choix) {
                console.log(recette.nom) // comment faire si je veux appeler la foncion nomNoteMoyenne ?
            }
        }
    }
}





function ingredientExist(uneListe, unIngredient) {
    let exist = false;
    for (let k = 0; k < uneListe.length; k++) {
        if (uneListe[k].id == unIngredient.id) { // si egale => true
            exist = true;
        }
    }
    return exist
}





























function rechercherRecettesPlusieursCommentaires(mesRecettes) {
    // a la difference du find qui renvoie uniquement le premier element, le filter renvoie un tableau contenant tous les elelements répondant à la condition
    return mesRecettes.filter((laRecetteCourante) => laRecetteCourante.commentaires.length > 1);
}
function rechercherRecetteParId(mesRecettes, idRecette) {
    // on parcours mesRecettes pour retrouver celle qui repond a cette condition ( laRecetteCourante.id == idRecette )
    return mesRecettes.find((laRecetteCourante) => laRecetteCourante.id == idRecette);
}