const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const init = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/health", (_req, res) => {
    res.json({ message: "OK" });
  });

  app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
  });
};

init();
