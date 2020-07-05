const Discord = require("discord.js"); 

module.exports = class ban {
    constructor() {
        this.name = "ban",
        this.alias = [],
        this.usage = "a!ban"
    }

    async run(client, message, args) {
        try{
          var server = message.guild;
         let permsBot = message.guild.me.hasPermission("BAN_MEMBERS") 
        //Verificamos permisos del bot
        if (!permsBot) return message.channel.send("No tengo permisos!")
          
        let perms = message.member.hasPermission("BAN_MEMBERS") //Verificamos permisos del user
        if (!perms) return message.channel.send("No tienes Permisos!")

        let persona = message.mentions.members.first() //Si no menciono a naadie
        if(!persona) return message.channel.send('Debes mencionar a un usuario!')
		
        if(persona.highestRole.comparePositionTo(message.member.highestRole) > 0){ //Si tiene el mismo rango o mayor (en Jerarquia)
            return message.channel.send("No puedes banear a ese usuario porque su rango es mayor que el tuyo!")
        }
          
        if(persona.highestRole.comparePositionTo(message.guild.me.highestRole) > 0){ //Si tiene el mismo rango o mayor (en Jerarquia)
            return message.channel.send("No puedo banear a ese usuario porque su rango es mayor que el mio!")
        }
        
        var razon = args.slice(2).join(' ') //Una razon ("Sin Razon" por Default)
        if(!razon) {
          razon = `Sin Razón` 
        }
				
        razon = razon
            
          if(persona.id === '353104236491309056') return message.reply('Obviamente no puedes banear al owner del bot -_-')
        if(!message.guild.member(persona).bannable) return message.reply('Ese usuario no es baneable!')
          
        message.guild.member(persona).ban(razon).catch(e => {
          return message.reply("A ocurrido un error desconocido!")
        }) //Si ocurre un error
        const embed = new Discord.RichEmbed()
        .setTitle(`${persona.user.tag} Fue Baneado!`)
        .setAuthor(server.name, server.iconURL)
        .addField(`Baneado Por `, `${message.author.tag}!`)
        .addField(`Razón: `, `${razon}`)
        message.channel.send(embed) //Ultimo mensaje
          const embedUser = new Discord.RichEmbed()
        .setTitle(`${persona.user.tag} Has Sido Kickeado!`)
        .setAuthor(server.name, server.iconURL)
        .addField(`Has Sido Kickeado De:`, `${server.name}`)
        .addField(`Kickeado Por `, `${message.author.tag}!`)
        .addField(`Razón: `, `${razon}`)
        persona.send(embedUser) //Ultimo mensaje
        }catch(e) {
            throw e;
        }
    }
}