const express = require("express");
const app = express();
const PORT = 9002;

app.use(express.json()); //middleware pour lire le corsp d'une requete

app.get("/", (req, res) => {
  res.send("Hello from Express API");
});

app.use("/centresVacances", require("./router/centreVacancesRouter"));
app.use("/logements", require("./router/logementRouter"));
app.use("/commentaires", require("./router/commentaireRouter"));
app.use("/reservations", require("./router/reservationRouter"));






app.listen(PORT, () => console.log(`app listening on port ${PORT}`));