const Discord = require("discord.js"); 

function doMikeAction() {
  var rand = [
    'https://cdn.discordapp.com/attachments/399448944889036801/609471651528310825/tenor.gif'
  ];
   return rand[Math.floor(Math.random() * rand.length)];
}  

const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class PunchCommand extends commands.Command {
  constructor(){
    super({
      name: 'punch',
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
    const personTagged = message.mentions.members.first();

                if(!args[1]) {
                    message.channel.send('Debes mencionar a un usuario !')
                }else{
                  const embed = new Discord.MessageEmbed()
                  .setDescription(message.author.username+' a pegado a '+personTagged.displayName)
                  .setThumbnail(message.author.avatarURL)
                  .setImage(doMikeAction());
                    message.channel.send(embed)
                }
  }
}