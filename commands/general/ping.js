const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class PingCommand extends commands.Command {
  constructor(){
    super({
      name: 'ping',
      aliases: [],
      args: [
        new commands.Argument({
          optional: true,
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'general',
      priority: 10,
      permLvl: 0
    });
  }
  execute(message, args){
    let ping = Math.floor(message.client.ping);
          
          message.channel.send('Comprobando ping...').then(msg => {
            setTimeout(() => {
              const embed = new Discord.MessageEmbed()
              .setTitle('Pong!')
              .setDescription('Ping mensajes: '+Math.floor(msg.createdTimestamp - Date.now())+'ms\nPing Bot: '+ping+'ms')
              msg.edit(embed)
            }, 1500)
          });
  }
}