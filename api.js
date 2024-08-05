const express = require("express");
const router = express.Router();
const { increment } = require("./function.js");

router.get("/", (req, res) => {
  increment("/", (count) => {
    res.send(`
<h1>Главная страница</h1>
<p>Просмотрено: ${count ? count : "ошибка"}</p>
<a href="/about">Страница About</a>`);
  });
});

router.get("/about", (req, res) => {
  increment("/about", (count) => {
    res.send(`
<h1>Страница About</h1>
<p>Просмотрено: ${count ? count : "ошибка"}</p>
<a href="/">Главная страница</a>`);
  });
});

module.exports = router;
