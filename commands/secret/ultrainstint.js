const Discord = require("discord.js"); 
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

function doUIAction() {
  var rand = [
    'https://i.pinimg.com/originals/8f/a2/f7/8fa2f754af6fbef13b82b7619a6cd29c.gif',
    'https://static.vix.com/es/sites/default/files/d/dragon-ball-super-ultra-kefla-vers7.gif',
    'https://i.pinimg.com/originals/5a/28/32/5a28327eecee5ed3d5254b3b952cdc34.gif',
    'https://i.makeagif.com/media/3-04-2018/85-_K_.gif',
    'https://i.pinimg.com/originals/5a/21/6e/5a216eae8b134c7a5e90e804db7aef6a.gif',
    'https://static.vix.com/es/sites/default/files/r/rostro-mastered-ultra-goku.gif'
  ];
   return rand[Math.floor(Math.random() * rand.length)];
} 

module.exports = class UICommand extends commands.Command {
  constructor(){
    super({
      name: 'ultrainstint',
      aliases: ['ui'],
      args: [
        new commands.Argument({
          optional: true,
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'fun',
      priority: 10,
      permLvl: 0
    });
  }
  execute(message, args){
    message.delete({timeout: 0})
          const embed = new Discord.MessageEmbed()
          .setDescription("**" + message.author.username + "** SE HA CONVERTIDO EN ULTRA INSTINTO!!!!!!!") 
          .setImage(doUIAction())
          .setColor("RANDOM")
          .setFooter('**Comando Secreto 7u7**')
          message.channel.send(embed);
}
}