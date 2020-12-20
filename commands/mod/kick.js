const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class KickCommand extends commands.Command {
  constructor(){
    super({
      name: 'kick',
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
    
          if(user.highestRole > message.member.highestRole){ //Si tiene el mismo rango o mayor (en Jerarquia)
            return message.channel.send("No puedes expulsar a ese usuario porque su rol es mayor que el tuyo!")
        }
          
        if(user.highestRole > message.guild.me.highestRole){ //Si tiene el mismo rango o mayor (en Jerarquia)
            return message.channel.send("No puedo expulsar a ese usuario porque su rol es mayor que el mio!")
        }
          
          if(user.id === '353104236491309056') return message.reply('Obviamente no puedes kickear al owner del bot -_-')
        if (!message.guild.member(user).kickable) return message.reply('Ese usuario no puede ser kickeado!');
     
        message.guild.member(user).kick(razon).catch(e => {
          console.log(e)
        }) //Si ocurre un error
        const embed = new Discord.MessageEmbed()
        .setTitle(`${user.user.tag} Fue Kickeado!`)
        .setAuthor(server.name, server.iconURL)
        .addField(`Kickeado Por `, `${message.author.tag}!`)
        .addField(`Razón: `, `${razon}`)
        message.channel.send(embed) //Ultimo mensaje
          const embedUser = new Discord.MessageEmbed()
        .setTitle(`${user.user.tag} Has Sido Kickeado!`)
        .setAuthor(server.name, server.iconURL)
        .addField(`Has Sido Kickeado De:`, `${server.name}`)
        .addField(`Kickeado Por `, `${message.author.tag}!`)
        .addField(`Razón: `, `${razon}`)
        user.send(embedUser) //Ultimo mensaje
        }else{
          message.channel.send('Debes mencionar a un usuario!')
        }
}
}