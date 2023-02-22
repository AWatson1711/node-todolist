const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./src/db/db");
const port = 3001;
const User = require("./src/models/User");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-type", "Authorization"],
  }),
);
app.use(bodyParser.json());

require("./src/routes/login")(app, User);
require("./src/routes/test")(app, User);

// GET
require("./src/routes/get/getAll")(app, User);

// POST
require("./src/routes/post/addUser")(app, User);

// PUT
require("./src/routes/put/putUser")(app, User);

// DELETE
require("./src/routes/delete/deleteUser")(app, User);

app.listen(port, () => {
  console.log(`le serveur est lancé sur le port ${port}`);
});
