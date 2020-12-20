const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class BotinfoCommand extends commands.Command {
  constructor(){
    super({
      name: 'botinfo',
      aliases: [],
      args: [
        new commands.Argument({
          optional: true,
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'help',
      priority: 10,
      permLvl: 0
    });
  }
  execute(message, args, client){
    const embed = new Discord.MessageEmbed()
.setAuthor('Información de AdriBot', 'https://cdn.discordapp.com/avatars/705793288719827004/deba7226ec27f6b62f15c23afa6d2b16.png?size=256')
.setColor("RANDOM")
.setThumbnail('https://cdn.discordapp.com/avatars/705793288719827004/deba7226ec27f6b62f15c23afa6d2b16.png?size=256')
.addField("Owner:", "<@353104236491309056>", true)
.addField("ID Bot:", "705793288719827004")
.addField("Librería:", "Discord ^12.3.1 (Js)", true)
.addField("Versión:", "1.1.0", true)
.addField("Node:", "v8.15.1")
.addField("Memoria:", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +"%", true)
.addField("Nombre:", "AdriBot")
.addField("Servidores:", client.guilds.cache.size.toLocaleString(), true)
.addField("Usuarios:", client.users.cache.size.toLocaleString(), true)
.addField("Canales:", client.channels.cache.size.toLocaleString(), true);
    message.channel.send(embed)
  }
}