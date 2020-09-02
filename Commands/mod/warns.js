const Discord = require("discord.js"); 
const db = require('megadb');
let warns_db = new db.crearDB('warns');

module.exports = class warns {
    constructor() {
        this.name = "warns",
        this.alias = [],
        this.usage = "a!warns"
    }

    async run(client, message, args) {
        try{
          var server = message.guild;
          let user = message.mentions.users.first();
          
        let perms = message.member.hasPermission("MANAGE_MESSAGES") //Verificamos permisos del user
        if (!perms) return message.channel.send("No tienes Permisos!")

        let persona = message.mentions.members.first() //Si no menciono a naadie
        if(!persona) return message.channel.send('Debes mencionar a un usuario!')
          
          if(warns_db.tiene(`${message.guild.id}.${user.id}`)){
            const warns = warns_db.obtener(`${message.guild.id}.${user.id}.warns`);
            const embed = new Discord.RichEmbed()
          .setTitle('Warns de '+user.username)
          .setThumbnail(user.avatarURL)
          .setDescription(user.username+' tiene actualmente: '+warns);
          message.channel.send(embed)
          } 
        }catch(e) {
            throw e;
        }
    }
}