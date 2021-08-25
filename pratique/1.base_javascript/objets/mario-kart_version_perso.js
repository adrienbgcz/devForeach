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
]

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
    },
];


function afficheMenu() {
    console.log("\n\nQue souhaitez-vous faire ? \n\n" +
        "\t1 - Afficher le tournoi\n" +
        "\t2 - Afficher la liste des courses \n" +
        "\t3 - Afficher les participants\n" +
        "\t4 - Lister les points des participants\n" +
        "\t5 - Renseigner les resultats d'une courses\n" +
        "\t6 - Afficher le classement\n" +
        "\t0 - Quitter\n")
}

console.log("\n\nBienvenue sur l'application de gestion de notre tournoi de mario kart \n\n");

let quitter = false;

const tournoi = {
    date: new Date(),
    courses: [],
    classement: {}
};
// {
//     course: {
//         id: 1,
//         nom: 'course A'
//     },
//     resultats: [
//         {
//             participant: {
//                 id: 1, 
//                 nom: 'Yoshi'
//             },
//             classement: {
//                 id: 2,
//                 position: 2,
//                 points: 4
//             }
//         },

//     ]
// }


// const pointsParticipants = [
//     {
//         participant : {
//             id: 1,
//             nom: 'Yoshi'
//         },
//         points: 0
//     },
//     ...
// ]

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
            listerPointsParticipants(tournoi);
            // Yoshi: 15 points
            break
        }
        case 5: {
            ajouterResultatCourse(courses);
            //Demander quel courses, demander pour chaque participant sa position
            break
        }
        case 6: {
            calculerClassementGeneral();
            //parcourir nos courses et calculer les scores
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


function afficherTournoi(tournoi, courses, participants) {
    console.log(`Tournoi du ${tournoi.date}\n`)
    console.log('Courses prévues : ');
    afficherCourses(courses);
    console.log('\nParticipants : ');
    afficherParticipants(participants);

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function afficherCourses(courses) {

    courses.forEach(course => {
        console.log(`${course.id} - ${course.nom}`)
    });
}


function afficherParticipants(participants) {
    participants.forEach(participant => console.log(`${participant.id} - ${participant.nom}`));
}



function ajouterResultatCourse(courses) {
    //Demander quelle course

    afficherCourses(courses)
    const choixCourse = readlineSync.questionInt('De quelle course souhaitez-vous renseigner les résultats ?')
    const courseChoisie = courses.find(course => {
        return choixCourse == course.id
    });


    let resultatCourse = {
        nom_course: courseChoisie.nom,
        classement_course: [

        ]
    }

    //Pour chaque participant, demander son classement
    participants.forEach(participant => {
        const position = readlineSync.questionInt(`Quelle est la place de ${participant.nom} ? \n`)
        const resultatParticipant = {
            id_participant: participant.id,
            nom_participant: participant.nom,
            position_participant: position
        }
        resultatCourse.classement_course.push(resultatParticipant)

    });


    //ajouter les resultat au tournoi
    tournoi.courses.push(resultatCourse);

    console.log(resultatCourse)
    // console.log(JSON.stringify(tournoi))
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






function listerPointsParticipants(tournoi) {



    // Pour chaque course, pour chaque participant, rechercher dans pointsClassement le nombre de points correspondants à sa position

    tournoi.courses.forEach(course => {

        course.classement_course.forEach(participant => {
            const positionCourseActuelle = participant.position_participant
            const correspondancePoints = pointsClassement.find(element => {
                return positionCourseActuelle == element.position
            });
            const pointsParticipant = correspondancePoints.points;
            const pointsToUpdate = pointsParParticipants(participant.id_participant, participant.nom_participant, pointsParticipant);
            const classement = classementTournoi(pointsToUpdate);
            console.log(classement)
        });

    });
}

function pointsParParticipants(id, nom, nbPoints) {

    let infosPointsParticipants = {
        id: id,
        nom: nom,
        points: nbPoints
    }
    //return infosPointsParticipants
    
    console.log(infosPointsParticipants);
}


function classementTournoi(id, nom, nbpoints) {
    let totalPoints = {
        id: id,
        nom: nom,
        points: 0
    }
    totalPoints.points += nbpoints
}








// function pointsParCourse(course, participant) {
//     con
// }












//     // calculer les points par participant
//     const resultatTournoi = calculerPointsParParticipant(tournoi.courses)

//     // afficher les résultats
//     afficherResultatTournoi(resultatTournoi)
// }



// function calculerPointsParParticipant(courses) {

// }


// function ajouterResultatCourse(tournoi, participants, pointsClassement, courses) {
//     //Demander quelle course
//     afficherCourses();
//     const numCourse = readlineSync.questionInt('Les résultats de quelle course ?')

//     const courseChoisie = course.find(courseCourante => courseCourante.id == numCourse);
//     console.log(courseChoisie);

//     const resultatTournoi = {
//         course: courseChoisie,
//         resultats: [

//         ]
//     }

//     //Pour chaque participant, demander son classement
//     participants.forEach(participants => {
//         const classementParticipant = readlineSync.questionInt(`Quelle est la position de ${participant.nom}`)
//         const resultatParticipant = {
//             participant: participant,
//             classement: classementParticipant
//         }
//         resultatTournoi.resultats.push(resultatParticipant)
//     })

//     //Ajouter les résultats au tournoi


// }