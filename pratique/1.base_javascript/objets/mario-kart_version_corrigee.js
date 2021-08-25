const readlineSync = require('readline-sync');

const courses = [
    {
        id: 1,
        nom: 'course A'
    },
    {
        id: 2,
        nom: 'course B'
    },
];

const participants = [
    {
        id: 1,
        nom: 'Yoshi'
    },
    {
        id: 2,
        nom: 'Peach'
    },
    {
        id: 3,
        nom: 'Mario'
    },
    {
        id: 4,
        nom: 'Luigi'
    }, {
        id: 5,
        nom: 'Toad'
    },
    {
        id: 6,
        nom: 'Bowser'
    },
];

const pointsClassement = [
    {
        id: 1,
        position: 1,
        points: 6
    },
    {
        id: 2,
        position: 2,
        points: 4
    },
    {
        id: 3,
        position: 3,
        points: 3
    },
    {
        id: 4,
        position: 4,
        points: 2
    },
    {
        id: 5,
        position: 5,
        points: 1
    },
    {
        id: 6,
        position: 6,
        points: 0
    }
];


function afficheMenu() {
    console.log("\n\nQue souhaitez-vous faire ? \n\n" +
        "\t1 - Afficher le tournoi\n" +
        "\t2 - Afficher la liste des courses \n" +
        "\t3 - Afficher les participants\n" +
        "\t4 - Lister les points des participants\n" +
        "\t5 - Renseigner les resultats d'une courses\n" +
        "\t6 - Afficher le classement\n" +
        "\t7 - Afficher le détail des résultats d'un participant choisi\n" +
        "\t0 - Quitter\n")
}

console.log("\n\nBienvenu sur l'application de gestion de notre tournoi de mario kart \n\n");

let quitter = false;

const tournoi = {
    date: new Date(),
    courses: [{ "course": { "id": 1, "nom": "course A" }, "classement": [{ "participant": { "id": 1, "nom": "Yoshi" }, "position": 2 }, { "participant": { "id": 2, "nom": "Peach" }, "position": 3 }, { "participant": { "id": 3, "nom": "Mario" }, "position": 4 }, { "participant": { "id": 4, "nom": "Luigi" }, "position": 5 }, { "participant": { "id": 5, "nom": "Toas" }, "position": 6 }, { "participant": { "id": 6, "nom": "Bowser" }, "position": 1 }] }, { "course": { "id": 2, "nom": "course B" }, "classement": [{ "participant": { "id": 1, "nom": "Yoshi" }, "position": 1 }, { "participant": { "id": 2, "nom": "Peach" }, "position": 5 }, { "participant": { "id": 3, "nom": "Mario" }, "position": 4 }, { "participant": { "id": 4, "nom": "Luigi" }, "position": 2 }, { "participant": { "id": 5, "nom": "Toas" }, "position": 3 }, { "participant": { "id": 6, "nom": "Bowser" }, "position": 6 }] }]
};



while (!quitter) {

    afficheMenu()

    const reponse = readlineSync.questionInt();
    console.log('\n');

    switch (reponse) {
        case 1: {
            afficherTournoi(tournoi, courses, participants);
            break;
        }
        case 2: {
            afficherCourses(courses);
            break
        }
        case 3: {
            afficherParticipants(participants);
            break
        }
        case 4: {
            listerPointsParticipants(tournoi, pointsClassement, participants);
            // Yoshi: 15 points
            break
        }
        case 5: {
            ajouterResultatCourse(tournoi, participants, pointsClassement, courses);
            //Demander quel courses, demander pour chaque participant sa position
            break
        }
        case 6: {
            listerClassementGeneral();
            //lister point mais ordonné !
            //parcourir nos courses et calculer les scores
            break
        }
        case 7: {
            afficherDetailParticipant();
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











///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1
function afficherTournoi(tournoi, courses, participants) {
    console.log(`Tournoi du ${tournoi.date}`);
    console.log('\nCourses prévues:');
    afficherCourses(courses);
    console.log('\nParticipants:');
    afficherParticipants(participants);
}



// 2
function afficherCourses(courses) {
    courses.forEach((course) => {
        console.log(`${course.id} - ${course.nom}`);
    });
}

// 3
function afficherParticipants(participants) {
    participants.forEach((participant) => {
        console.log(`${participant.id} - ${participant.nom}`);
    });
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5
function ajouterResultatCourse(tournoi, participants, pointsClassement, courses) {
    //Demander quelle course
    afficherCourses(courses);
    const numCourse = readlineSync.questionInt('Les résultat de quelle course ?');

    const courseChoisie = courses.find((courseCourante) => courseCourante.id == numCourse);

    const resultatCourse = {
        course: courseChoisie,
        classement: []
    }

    //Pour chaque participant, demander son classement
    participants.forEach((participant) => {
        const classementParticipant = readlineSync.questionInt(`Quelle est la position de ${participant.nom}?   `);
        const resultatParticipant = {
            participant: participant,
            position: classementParticipant
        }
        console.log(resultatParticipant)
        resultatCourse.classement.push(resultatParticipant)
    });

    //ajouer les resultat au tournoi.
    tournoi.courses.push(resultatCourse);
    // console.log(JSON.stringify(tournoi))
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function listerPointsParticipants(tournoi, pointsClassement, participants) {

    //calculer les points par participant
    const resultatTournoi = calculerPointParParticipant(tournoi.courses, pointsClassement, participants);

    //Afficher les points par participant
    afficherResultatTournoi(resultatTournoi);

}



function calculerPointParParticipant(courses, pointsClassement, participants) {

    //initialiser les points à 0 de tout le monde
    // const resultats = []
    // participants.forEach((participantCourant) => {
    //     const resultatParticipant = {
    //         participant: participantCourant,
    //         pointsTotal: 0
    //     }
    //     resultats.push(resultatParticipant)
    // })

    // la map permet de faire le meme travail qu'un forEach, c'est a dire parcourir le tableau et faire qqch pour chaque element. 
    // Mias a la différence du foreach, on peut lui demande de mettre le resultat de ce qu'il fait dans un tableau.
    // Du coup le map construit un tableau avec le résultat de chaque itération de la boucle 
    const resultats = participants.map((participantCourant) => {
        return {
            participant: participantCourant,
            pointsTotal: 0
        }
    });
    console.log(resultats)

    


    courses.forEach((courseCourante) => {
        const classementCourse = courseCourante.classement;
        classementCourse.forEach((positionParticipantCourant) => {
            const leClassementDuParticipant = pointsClassement.find((pointsClassementCourant) => pointsClassementCourant.position == positionParticipantCourant.position)
            const pointsParticipant = leClassementDuParticipant.points;

            //retrouver le participant dans resultats
           

            const participantToUpdate = resultats.find(element => element.participant.id == leClassementDuParticipant.id) // probleme ici 
            participantToUpdate.pointsTotal += pointsParticipant
            
            console.log(participantToUpdate);
            
        });

        

       
        // lui ajouter ses points dans pointsTotal

    })

    return resultats;
}


function afficherResultatTournoi(resultats) {

    resultats.forEach((resultatCourant) => {
        console.log(`${resultatCourant.participant.nom}: ${resultatCourant.pointsTotal} points`)
    })

    // 
    // resultat attendu :
    // Yoshi: 15 points
    // Toad: 6 points
    // ....
}


// {
//     "date": "2021-03-19T09:14:10.958Z",
//         "courses": [
//             {
//                 "course": {
//                     "id": 1,
//                     "nom": "course A"
//                 },
//                 "classement": [
//                     {
//                         "participant": {
//                             "id": 1,
//                             "nom": "Yoshi"
//                         },
//                         "position": 2
//                     }, {
//                         "participant": {
//                             "id": 2,
//                             "nom": "Peach"
//                         },
//                         "position": 3
//                     },
//                     {
//                         "participant": {
//                             "id": 3,
//                             "nom": "Mario"
//                         },
//                         "position": 4
//                     }, {
//                         "participant": {
//                             "id": 4,
//                             "nom": "Luigi"
//                         },
//                         "position": 5
//                     }, {
//                         "participant": {
//                             "id": 5,
//                             "nom": "Toas"
//                         },
//                         "position": 6
//                     }, {
//                         "participant": {
//                             "id": 6,
//                             "nom": "Bowser"
//                         },
//                         "position": 1
//                     }
//                 ]
//             }
//         ]
// }
