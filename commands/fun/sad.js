function doSadAction() {
  var rand = [
    'https://cdn.discordapp.com/attachments/399448944889036801/644207146287890434/c74e01ed472bab60ac59f6b61185ca14.gif'
  ];
   return rand[Math.floor(Math.random() * rand.length)];
}  

const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class SadCommand extends commands.Command {
  constructor(){
    super({
      name: 'sad',
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
          .setDescription(message.author.username+' esta triste.')
          .setThumbnail(message.author.avatarURL)
          .setImage(doSadAction());
          message.channel.send(embed)
  }
}