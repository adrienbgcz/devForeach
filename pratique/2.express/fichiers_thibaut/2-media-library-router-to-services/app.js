const { urlencoded } = require("express");
const express = require("express");
const app = express();
const PORT = 9000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express API");
});

// ----------------------------------------------
// ROUTER MIDDLEWARES
// ----------------------------------------------
app.use("/users", require("./router/users"));
app.use("/libraries", require("./router/libraries"));
app.use("/books", require("./router/books"));
app.use("/movies", require("./router/movies"));
app.use("/videogames", require("./router/videogames"));

// ----------------------------------------------
// LISTENER
// ----------------------------------------------

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
