const Discord = require("discord.js"); 

module.exports = class kick {
    constructor() {
        this.name = "kick",
        this.alias = [],
        this.usage = "a!kick"
    }

    async run(client, message, args) {
        try{
          var server = message.guild;
         let permsBot = message.guild.me.hasPermission("KICK_MEMBERS") 
         if (!permsBot) return message.channel.send("No tengo permisos!")
        

        var perms = message.member.hasPermission("KICK_MEMBERS");
        if(!perms) return message.channel.send("No tienes Permisos!");

        let user = message.mentions.members.first();
	      if(user){
        let razon = args.slice(2).join(" ");
        if(!razon) {
          razon = `Sin Razón` 
        }
    
          if(user.highestRole.comparePositionTo(message.member.highestRole) > 0){ //Si tiene el mismo rango o mayor (en Jerarquia)
            return message.channel.send("No puedes banear a ese usuario porque su rango es mayor que el tuyo!")
        }
          
        if(user.highestRole.comparePositionTo(message.guild.me.highestRole) > 0){ //Si tiene el mismo rango o mayor (en Jerarquia)
            return message.channel.send("No puedo banear a ese usuario porque su rango es mayor que el mio!")
        }
          
          if(user.id === '353104236491309056') return message.reply('Obviamente no puedes kickear al owner del bot -_-')
        if (!message.guild.member(user).kickable) return message.reply('Ese usuario no puede ser kickeado!');
     
        message.guild.member(user).kick(razon).catch(e => {
          return message.reply("A ocurrido un error desconocido!")
        }) //Si ocurre un error
        const embed = new Discord.RichEmbed()
        .setTitle(`${user.user.tag} Fue Kickeado!`)
        .setAuthor(server.name, server.iconURL)
        .addField(`Kickeado Por `, `${message.author.tag}!`)
        .addField(`Razón: `, `${razon}`)
        message.channel.send(embed) //Ultimo mensaje
          const embedUser = new Discord.RichEmbed()
        .setTitle(`${user.user.tag} Has Sido Kickeado!`)
        .setAuthor(server.name, server.iconURL)
        .addField(`Has Sido Kickeado De:`, `${server.name}`)
        .addField(`Kickeado Por `, `${message.author.tag}!`)
        .addField(`Razón: `, `${razon}`)
        user.send(embedUser) //Ultimo mensaje
        }else{
          message.channel.send('Debes mencionar a un usuario!')
        }
        }catch(e) {
            throw e;
        }
    }
}