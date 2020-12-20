const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class BanCommand extends commands.Command {
  constructor(){
    super({
      name: 'ban',
      aliases: [],
      args: [
        new commands.Argument({
          optional: true,
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'mod',
      priority: 9,
      permLvl: 1
    });
  }
  execute(message, args){
    var server = message.guild;
         let permsBot = message.guild.me.hasPermission("BAN_MEMBERS") 
        //Verificamos permisos del bot
        if (!permsBot) return message.channel.send("No tengo permisos!")
          
        let perms = message.member.hasPermission("BAN_MEMBERS") //Verificamos permisos del user
        if (!perms) return message.channel.send(lang.error.noPerms.user_no_perms)

        let persona = message.mentions.members.first() //Si no menciono a naadie
        if(!persona) return message.channel.send(lang.error.noArgs.user_mention)
		
        if(persona.highestRole > message.member.highestRole){ //Si tiene el mismo rango o mayor (en Jerarquia)
            return message.channel.send("No puedes banear a ese usuario porque su rol es mayor que el tuyo!")
        }
          
        if(persona.highestRole > message.guild.me.highestRole){ //Si tiene el mismo rango o mayor (en Jerarquia)
            return message.channel.send("No puedo banear a ese usuario porque su rol es mayor que el mio!")
        }
        
        var razon = args.slice(2).join(' ') //Una razon ("Sin Razon" por Default)
        if(!razon) {
          razon = `Sin Razón` 
        }
				
        razon = razon
            
          if(persona.id === '353104236491309056') return message.reply('Obviamente no puedes banear al owner del bot -_-')
        if(!message.guild.member(persona).bannable) return message.reply('Ese usuario no es baneable!')
          
        message.guild.member(persona).ban(razon).catch(e => {
          console.log(e)
          return message.reply("A ocurrido un error desconocido!")
        }) //Si ocurre un error
        const embed = new Discord.MessageEmbed()
        .setTitle(`${persona.user.tag} Fue Baneado!`)
        .setAuthor(server.name, server.iconURL)
        .addField(`Baneado Por `, `${message.author.tag}!`)
        .addField(`Razón: `, `${razon}`)
        message.channel.send(embed) //Ultimo mensaje
          const embedUser = new Discord.MessageEmbed()
        .setTitle(`${persona.user.tag} Has Sido Kickeado!`)
        .setAuthor(server.name, server.iconURL)
        .addField(`Has Sido Kickeado De:`, `${server.name}`)
        .addField(`Kickeado Por `, `${message.author.tag}!`)
        .addField(`Razón: `, `${razon}`)
        persona.send(embedUser) //Ultimo mensaje
}
}