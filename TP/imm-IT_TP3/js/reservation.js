const logements = [
    {
        id: 1,
        titre: 'Villa Fergine',
        description: "Offrant une vue sur la ville, l'Appartement - Villa FERGINE est situé au Touquet-Paris-Plage, à 600 mètres de la plage Sud. Vous bénéficierez gratuitement d'une connexion Wi-Fi et d'un parking privé.",
        nombre_pieces: 6,
        nombre_chambres: 2,
        surface_interieure: 80,
        surface_exterieure: 20,
        animaux: true,
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/126095480.jpg?k=b3a8f2a44a5e6e7c04bf6eff9931e1ffe59dd1ca1bf9a464887ceb664ef6c060&o=&hp=1",
        id_centre: "Le Touquet",
        reservations: [
            {
                numero_reservation: 2000,
                date_arrivee: new Date('2021-04-23'),
                date_depart: new Date('2021-04-30'),
                utilisateur: {
                    id: 1,
                    nom: 'Mozdzierz',
                    prenom: 'Aurore',
                    pseudo: 'AuroreForeach',
                    numero_salarie: '15'
                }

            },
            {
                numero_reservation: 2001,
                date_arrivee: new Date('2021-05-06'),
                date_depart: new Date('2021-05-13'),
                utilisateur: {
                    id: 2,
                    nom: 'Vidal',
                    prenom: 'Jean-Philippe',
                    pseudo: 'JPForeach',
                    numero_salarie: '24'
                }
            },

        ]
    },
    {
        id: 2,
        titre: "La porte du paradis",
        description: "Situé au Touquet-Paris-Plage, à seulement 700 mètres de la plage Sud, l'établissement LA PORTE DU PARADIS propose un restaurant, un jardin et une réception ouverte 24h/24. Dans les environs, vous pourrez pratiquer des activités comme la randonnée, le vélo et le minigolf.",
        nombre_pieces: 3,
        nombre_chambres: 2,
        surface_interieure: 47,
        surface_exterieure: 0,
        animaux: false,
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/178409568.jpg?k=a9adf5321a7704d36ac086ef24d7c9d2d86c40202a1b956fdbea736b53c98bf1&o=&hp=1",
        id_centre: "Le Touquet",
        reservations: [

        ]
    },
    {
        id: 3,
        titre: "Résidence la Closerie",
        description: "Installée près de la plage et de la promenade de Deauville, la Résidence La Closerie Deauville possède un espace de bien-être avec une piscine intérieure, un sauna et un jacuzzi. Cet établissement 4 étoiles propose également des séances de massage sur demande et un service de garde d’enfants. Ses chambres et appartements modernes comprennent une télévision par câble ainsi qu’une kitchenette entièrement équipée munie d’un micro-ondes et d’un réfrigérateur. Certains logements bénéficient d’un balcon. Une connexion Wi-Fi gratuite est accessible dans l'ensemble des locaux. Cet appart’hôtel vous servira un petit-déjeuner express dans votre hébergement tous les matins. En journée, vous pourrez vous détendre en savourant un verre sur la terrasse ou dans le jardin. Dotée d’un parking privé sur place, la Résidence La Closerie Deauville se trouve à seulement 350 mètres du casino de Deauville et à 600 mètres du marché local. La gare de Trouville-Deauville est située à 1 km. C'est le quartier préféré des voyageurs visitant Deauville, selon les commentaires clients indépendants. Les couples apprécient particulièrement l'emplacement de cet établissement. Ils lui donnent la note de 8,6 pour un séjour à deux. Nous parlons votre langue !",
        nombre_pieces: 2,
        nombre_chambres: 1,
        surface_interieure: 35,
        surface_exterieure: 0,
        animaux: false,
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/96999366.jpg?k=84a2d2c5c6d56a9b8bcab951dcf517afe47a953996ccd2a36bb7329bf4df3f1f&o=&hp=1",
        id_centre: "Deauville",
        reservations: [
            {
                numero_reservation: 3700,
                date_arrivee: new Date('2022-04-23'),
                date_depart: new Date('2022-04-30'),
                utilisateur: {
                    id: 3,
                    nom: 'Dupont',
                    prenom: 'Jean',
                    pseudo: 'JD',
                    numero_salarie: '123'
                }

            },
            {
                numero_reservation: 3720,
                date_arrivee: new Date('2021-04-23'),
                date_depart: new Date('2021-04-30'),
                utilisateur: {
                    id: 15,
                    nom: 'Durant',
                    prenom: 'Jacques',
                    pseudo: 'JDur',
                    numero_salarie: '12345'
                }

            }
        ]
    },
    {
        id: 4,
        titre: "Chez Mado",
        description: "Doté d’un jardin et d’un barbecue, le Chez Mado est situé en bord de mer à Deauville, à 2,4 km de la polyclinique et à 2,8 km de la plage de la commune.",
        nombre_pieces: 5,
        nombre_chambres: 2,
        surface_interieure: 45,
        surface_exterieure: 50,
        animaux: true,
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/274018517.jpg?k=8c0326d49b8daa34561c4573ddbe6c4b5ab4f604c3d34f523a971e28cfe02c78&o=&hp=1",
        id_centre: "Deauville",
        reservations: [

        ]
    },
    {
        id: 5,
        titre: "Les Jumeaux",
        description: "Offrant une vue sur le jardin, l'hébergement Les Jumeaux - Le Touquet propose un jardin et une terrasse, à environ 2,3 km de la plage sud. Le parking privé sur place est gratuit.",
        nombre_pieces: 5,
        nombre_chambres: 2,
        surface_interieure: 150,
        surface_exterieure: 250,
        animaux: true,
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/222671985.jpg?k=d2830aaaba2f6ba9f810235a7b80340fa407a44c2b06213916bb24f2302ec396&o=&hp=1",
        id_centre: "Le Touquet",
        reservations: [

        ]
    },
    {
        id: 6,
        titre: "Résidence Impératrice",
        description: "Offrant une vue sur la ville, la Residence Imperatrice propose des hébergements avec un jardin et une terrasse, à environ 1 km de la plage de Sternes.",
        nombre_pieces: 6,
        nombre_chambres: 4,
        surface_interieure: 150,
        surface_exterieure: 30,
        animaux: false,
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/246710451.jpg?k=16ba987b63b6a2630804e3412719ceda6c8c760b8663bb037ebe41598b6ddd76&o=&hp=1",
        id_centre: "Berck",
        reservations: [

        ]
    }
]

// const reservation =  {
//     user : {
//         username : ""
//     },
//     logelent : {

//         logementId : logementId,
//         date_arrivee : 
//         date_depart :
//     }
// }



const urlParams = new URLSearchParams(window.location.search);
const logementId = urlParams.get('id')
const logementToBook = logements.filter(logement => logement.id == logementId)
const bannerButton = document.querySelector(".banner")
const logementToDisplay = document.querySelector("h1")
const form = document.querySelector("form")
const displayReservation = document.querySelector("section")


const inputPrenom = document.querySelector("#input-prenom")
const inputNom = document.querySelector("#input-nom")
const inputNumeroSalarie = document.querySelector("#input-numero")
const inputDateArrivee = document.querySelector("#input-date-arrivee")
const inputDateDepart = document.querySelector("#input-date-depart")



let reservation = {
    numero_reservation: 0000,
    date_arrivee: '',
    date_depart: '',
    utilisateur: {
        id: 3,
        nom: 'Dupont',
        prenom: 'Jean',
        pseudo: 'JD',
        numero_salarie: '123'
    }

}






const sendData = (event) => {
    event.preventDefault()
    
    reservation = {
        numero_reservation: 9999,
        date_arrivee: new Date(`${inputDateArrivee.value}`),
        date_depart: new Date(`${inputDateDepart.value}`),
        utilisateur: {
            id: 3,
            nom: `${inputNom.value}`,
            prenom: `${inputPrenom.value}`,
            pseudo: `${inputNom.value}`,
            numero_salarie: `${inputNumeroSalarie.value}`
        }

    }
    console.log(`Réservation effectuée par : ${reservation.utilisateur.prenom} ${reservation.utilisateur.nom}`)
    console.log(`Vous avez réservé '${logementToBook[0].titre}' du ${reservation.date_arrivee} au ${reservation.date_depart}`)
    console.log(`Votre numero de reservation est le ${reservation.numero_reservation}`)

    let reservationIsOkTemplate = ''
    
    reservationIsOkTemplate += `
    <div class="reservation">
    <p>Réservation effectuée par : ${reservation.utilisateur.prenom} ${reservation.utilisateur.nom}</p>
    <p>Vous avez réservé '${logementToBook[0].titre}' du ${reservation.date_arrivee} au ${reservation.date_depart}</p>
    <p>Votre numero de reservation est le ${reservation.numero_reservation}</p>
    </div>
    `
    displayReservation.innerHTML = reservationIsOkTemplate

}



bannerButton.innerHTML = `
<div class="bannerTitle">Réservez vos vacances grâce au CE</div>
<a href="logementDetails.html?id=${logementId}"><button class="returnButton">Retour au logement →</button></a>
`

logementToDisplay.innerHTML = `
Formulaire de réservation pour <span>${logementToBook[0].titre}<span>
`


form.addEventListener("submit", sendData)


