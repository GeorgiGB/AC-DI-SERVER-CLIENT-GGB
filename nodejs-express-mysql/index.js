const express = require("express");
const app = express();
//const cors = require("cors");

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
//require("./app/routes/tutorial.routes.js")(app);
//require("./app/routes/notes.routes.js")(app);
require("./app/routes/login.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server funciona en el puerto ${PORT}.`);
});
