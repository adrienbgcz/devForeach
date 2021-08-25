const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 9005;

app.use(express.json()); 
app.use(cors()); 

app.get("/", (req, res) => {
  res.send("Hello from Express API");
});

app.use("/todos", require("./router/todoRouter"));
app.use("/etiquettes", require("./router/etiquetteRouter"));


app.listen(PORT, () => console.log(`app listening on port ${PORT}`));






































// app.use(express.json()); //middleware pour lire le corps d'une requete
// app.use(cors()); // permet à l'app d'être joignable par toutes les sources (ou les osurces choisies si on lui passe des options)