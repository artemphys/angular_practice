const express = require("express");
const router = express.Router();

module.exports = (server) => {
  router.get("/authors", (req, res) => {
    let authors = server.db.getState().authors;

    res.json(authors);
  });

  return router;
};
