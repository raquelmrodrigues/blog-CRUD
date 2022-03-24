const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
    res.send("rota de artigos")
});

router.get("/admin/srticles/new", (req, res) => {
    res.send("rota para criar novo artigo")
});

module.exports = router;