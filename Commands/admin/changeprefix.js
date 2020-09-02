const Discord = require("discord.js");
const db = require('megadb');
let prefix_db = new db.crearDB("prefix");

module.exports = class help {
    constructor() {
        this.name = "changeprefix",
        this.alias = [],
        this.usage = "a!changeprefix"
    }

    async run(client, message, args) {
        try{
          if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('No tienes permisos! Debes tener el permiso `"Gestionar Servidor` para poder cambiar mi prefix!');
          if(!args[0]) return message.channel.send("Necesitas colocar mi nuevo prefix!");
          prefix_db.establecer(`${message.guild.id}`, args[1]);
          return message.channel.send("Mi prefix a sido cambiado a "+args[1]);
        }catch(e) {
            throw e;
        }
    }
}