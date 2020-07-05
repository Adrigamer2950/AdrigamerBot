const Discord = require("discord.js"); 
const db = require('megadb');
let warns_db = new db.crearDB('warns');

module.exports = class warn {
    constructor() {
        this.name = "warn",
        this.alias = [],
        this.usage = "a!warn"
    }

    async run(client, message, args) {
        try{
          var server = message.guild;
          let user = message.mentions.users.first();
          
        let perms = message.member.hasPermission("MANAGE_MESSAGES") //Verificamos permisos del user
        if (!perms) return message.channel.send("No tienes Permisos!")

        let persona = message.mentions.members.first() //Si no menciono a naadie
        if(!persona) return message.channel.send('Debes mencionar a un usuario!')
		
        if(persona.highestRole.comparePositionTo(message.member.highestRole) > 0){ //Si tiene el mismo rango o mayor (en Jerarquia)
            return message.channel.send("No puedes warnear a ese usuario porque su rango es mayor que el tuyo!")
        }
          
        if(persona.highestRole.comparePositionTo(message.guild.me.highestRole) > 0){ //Si tiene el mismo rango o mayor (en Jerarquia)
            return message.channel.send("No puedo warnear a ese usuario porque su rango es mayor que el mio!")
        }
        
        var razon = args.slice(2).join(' ') //Una razon ("Sin Razon" por Default)
        if(!razon) {
          razon = `Sin Razón` 
        }
          
        if(!warns_db.tiene(`${message.guild.id}.${user.id}.warns`)){
          warns_db.establecer(`${message.guild.id}.${user.id}`, {"warns": 0})
        }
          warns_db.sumar(`${message.guild.id}.${user.id}.warns`, 1) 
          const embed = new Discord.RichEmbed()
          .setTitle(user.username+' a sido warneado!')
          .setColor('RANDOM')
          .setThumbnail(client.user.avatarURL)
          .addField(user.username+' fue warneado por \n'+message.author.username, '\nRazón:\n'+razon);
          message.channel.send(embed)
        }catch(e) {
            throw e;
        }
    }
}