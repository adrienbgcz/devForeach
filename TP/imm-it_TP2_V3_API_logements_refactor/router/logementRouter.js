const express = require("express");
const router = express.Router();

const logementService = require('../service/logementService');

const logementRules = require('../utils/middleware/validation/logementRules')
const validate = require('../utils/middleware/validation/validate')



router.post("/", logementRules(), validate,
    async (req, res) => {
        const { logement } = req.body;

        let logements = [];
        try {
            logements = await logementService.createLogement(logement)
        } catch (error) {
            console.error(error)
            res.status(500).send('Internal server error')
        }
        res.json(logements);
    });

router.put("/:id", logementRules(), validate,
    async (req, res) => {
        const { logement } = req.body;
        const paramsId = parseInt(req.params.id);
        let logements = []
        try {
            logements = await logementService.updateLogement(paramsId, logement)
        } catch (error) {
            console.error(error)
            res.status(500).send('Internal server error')
        }
        res.json(logements);
    });

router.delete("/:id", async (req, res) => {
    let logements = [];
    const paramsId = parseInt(req.params.id);

    try {
        logements = await logementService.deleteLogement(paramsId)
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error')
    }
    res.json(logements);
});


router.get("/", async (req, res) => {

    const order = req.query.order;
    const limit = req.query.limit;
    let listeEquipements = []
    const equipement1 = req.query.equipement1
    const equipement2 = req.query.equipement2
    const equipement3 = req.query.equipement3
    const equipement4 = req.query.equipement4
    const equipement5 = req.query.equipement5
    const equipement6 = req.query.equipement6
    const equipement7 = req.query.equipement7
    const equipement8 = req.query.equipement8

    if (equipement1 === '1') {
        listeEquipements.push(equipement1);
    }
    if (equipement2 === '2') {
        listeEquipements.push(equipement2);
    }
    if (equipement3 === '3') {
        listeEquipements.push(equipement3);
    }
    if (equipement4 === '4') {
        listeEquipements.push(equipement4);
    }
    if (equipement5 === '5') {
        listeEquipements.push(equipement5);
    }
    if (equipement6 === '6') {
        listeEquipements.push(equipement6);
    }
    if (equipement7 === '7') {
        listeEquipements.push(equipement7);
    }
    if (equipement8 === '8') {
        listeEquipements.push(equipement8);
    }
    if (listeEquipements.length > 0) {
        let logements = []

        try {
            logements = await logementService.getLogementsByEquipement(listeEquipements)

        } catch (error) {
            console.error(error)
            res.status(500).send('Internal server error')
        }
        res.json(logements)
    }

    else {
        let logements = []

        switch (order) {
            case 'alphabetique': //logements?order=alphabetique&limit=6
                try {
                    logements = await logementService.getLogementsAlphabetique(limit)
                } catch (error) {
                    console.error(error)
                    res.status(500).send('Internal server error')
                }
                res.json(logements)
                break;
                
            case 'id': //logements?order=id&start=1&limit=6
                const idLogement = req.query.start
                try {
                    logements = await logementService.getLogementsOrderedById(idLogement, limit)
                } catch (error) {
                    console.error(error)
                    res.status(500).send('Internal server error')
                }
                res.json(logements);
                break;

            case 'note': //order=note&limit=6
                try {
                    logements = await logementService.getLogementsOrderedByNote(limit)
                } catch (error) {
                    console.error(error)
                    res.status(500).send('Internal server error')
                }
                res.json(logements);
                break;

            case 'reservation': //order=reservation&limit=6
                try {
                    logements = await logementService.getLogementsOrderedByReservations(limit)
                } catch (error) {
                    console.error(error)
                    res.status(500).send('Internal server error')
                }
                res.json(logements);
                break;

            default:
                let allLogements = []
                try {
                    allLogements = await logementService.getLogements();

                } catch (error) {
                    console.error(error)
                    res.status(500).send('Internal server error')
                }
                res.json(allLogements);
                break;
        }
    }
});





// http://localhost:9001/logements/dates?beginning=2021-04-24&end=2021-04-30
router.get("/dates", async (req, res) => {
    let logements = []
    // on déclare une date d'arrivée et une date de départ 
    const beginning = req.query.beginning
    const end = req.query.end

    try {
        // on appelle la fonction qui permet d'obtenir les logements sans réservation aux dates choisies et on passes les dates en paramètre
        logements = await logementService.getLogementsByDates(beginning, end)
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error')
    }

    res.json(logements)
})


router.get("/:id", async (req, res) => {
    let logement = [];
    let paramsId = req.params.id
    try {
        logement = await logementService.getLogement(paramsId);

    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error')
    }
    res.json(logement);
});



router.get("/centresVacances/:idCentre", async (req, res) => {
    let logements = []
    const idCentre = req.params.idCentre;
    try {
        logements = await logementService.getLogementsByCentre(idCentre)

    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error')
    }
    res.json(logements)
})



router.get("/regions/:id", async (req, res) => {
    let logements = []
    const idRegion = req.params.id

    try {
        logements = await logementService.getLogementsParRegion(idRegion)

    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error')
    }
    res.json(logements)

});




module.exports = router;