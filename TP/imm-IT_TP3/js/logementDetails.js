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
        id_centre: "Le Touquet"
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
        id_centre: "Le Touquet"
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
        id_centre: "Deauville"
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
        id_centre: "Deauville"
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
        id_centre: "Le Touquet"
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
        id_centre: "Berck"
    }
]


const urlParams = new URLSearchParams(window.location.search);
const logementId = urlParams.get('id')


const logementDetails = document.querySelector("section")


const logementToDisplay = logements.filter(logement => logement.id == logementId)

let logementDetailsTemplate = '';


logementDetailsTemplate = `

    <h1>${logementToDisplay[0].titre}</h1>
    <div class="mapPositionLogoAndText">
        <img class="mapPositionLogo" src="logos/map-position.png">
        <h2>${logementToDisplay[0].id_centre}</h2>
    </div>
    
    <div class="mainPicture">
    <img src=${logementToDisplay[0].photo}>
    </div>

    <div class="allLogos">
       
        <div class="logoWithText">
            <img src="logos/maison-silhouette-noire-sans-porte.png">
            <p>Surface intérieure</p>
            <p>${logementToDisplay[0].surface_interieure} m²</p>
        </div>
        
        <div class="logoWithText">
            <img src="logos/umbrella.png">
            <p>Surface extérieure</p>
            <p>${logementToDisplay[0].surface_exterieure} m²</p>
        </div>

        <div class="logoWithText">
            <img src="logos/living-room.png">
            <p>Nombre de pièces</p>
            <p>${logementToDisplay[0].nombre_pieces}</p>
        </div>

        <div class="logoWithText">
            <img src="logos/bed.png">
            <p>Nombre de chambres</p>
            <p>${logementToDisplay[0].nombre_chambres}</p>
        </div>
        `

if (logementToDisplay[0].animaux == false) {
    logementDetailsTemplate += `
        <div class="logoWithText">
            <img src="logos/pawprint.png">
            <p>Animaux</p>
            <p>interdits</p>
        </div>
        `
}

else if (logementToDisplay[0].animaux == true) {
    logementDetailsTemplate += `
        <div class="logoWithText">
            <img src="logos/pawprint.png">
            <p>Animaux</p>
            <p>aurorisés</p>
        </div>
        `
}

logementDetailsTemplate += `
    </div>

    <div>
        <h3>Description</h3>
        <p class="description">${logementToDisplay[0].description}</p>
    </div>

    <div class="reservationButtonPosition">
       <a href="reservation.html?id=${logementToDisplay[0].id}"><button class="reservationButton">Réserver maintenant</button></a>
    </div>
`


logementDetails.innerHTML = logementDetailsTemplate