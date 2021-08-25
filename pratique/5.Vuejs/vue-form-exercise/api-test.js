const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 9004;

app.use(express.json()); //middleware pour lire le corps d'une requete
app.use(cors()); // permet à l'app d'être joignable par toutes les sources (ou les osurces choisies si on lui passe des options)

app.get("/", (req, res) => {
  res.send("Hello from Express API");
});

app.post('/test', (req, res) => {
    console.log(req.body);
    // data.push(req.body.data); // mettre le newBook dans postman body/raw/json
    // res.json(data);
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));