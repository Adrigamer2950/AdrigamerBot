const express = require("express");
const router = express.Router();
const auth = require("../auth.js");
const sqlite3 = require('sqlite3');
const base = new sqlite3.Database('./web.sqlite3')

router.get('/', auth, async(req, res) => {
  
  let datosServidores = req.user.guilds;
  let base = req.base;
  
  await base.run("CREATE TABLE IF NOT EXISTS Users (id_user TEXT, info_user TEXT)");
  
  let SQLSelect = `SELECT * FROM usuarios WHERE idusuario = '${req.user.id}'`;

    base.get(SQLSelect, (err, filas) => {
        if (err) return console.error(err.message)
        if (!filas){
          base.run(`INSERT INTO Users(id_user, info_user) VALUES(${req.user.id}, 'Sin info :(')`);
          console.log('USUARIO REGISTRADO')
        } else {
          
        }
    })
  
  res.render('perfil.ejs', {
    user: req.user,
    servidores: datosServidores
  });
});

module.exports = router;