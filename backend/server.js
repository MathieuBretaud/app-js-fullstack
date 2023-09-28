const express = require("express");
const port = 5000;

const app = express();

app.get("/post", (req, res) => {
  res.json({ message: "Voici les données" });
});

app.listen(port, () => console.log("le serveur a démarré au port " + port));
