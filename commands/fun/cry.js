function doCryAction() {
  var rand = [
    'https://cdn.weeb.sh/images/Hk6EmLmDZ.gif'
  ];
   return rand[Math.floor(Math.random() * rand.length)]; 
}

const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class CryCommand extends commands.Command {
  constructor(){
    super({
      name: 'cry',
      aliases: [],
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
    const embed = new Discord.MessageEmbed()
          .setDescription(message.author.username+' esta llorando.')
          .setThumbnail(message.author.avatarURL)
          .setImage(doCryAction());
          message.channel.send(embed)
  }
}