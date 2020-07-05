const express = require("express");
const router = express.Router();
const passport = require('passport');

router
.get('/', function(req, res) {
  res.render('index.ejs', {})
})
.get('/login', passport.authenticate("discord", { failureRedirect: "/" }), function(req, res) {
  res.send('¡Gracias por añadir a mi bot a tu servidor! :3')
})
.get("/salir", async function(req, res) {
  await req.logout();
  await res.redirect("/");
})
.get('/bot', async function(req, res) {
  res.redirect('https://discord.com/api/oauth2/authorize?client_id=705793288719827004&permissions=8&redirect_uri=https%3A%2F%2Fadrigamer-bot.glitch.me%2Flogin&response_type=code&scope=bot%20identify%20guilds')
})

module.exports = router;