function doConfuseAction() {
  var rand = [
    'https://media.giphy.com/media/oFK7w3la4zQY0/giphy.gif',
    ''
  ];
   return rand[Math.floor(Math.random() * rand.length)]; 
}

const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class IdkCommand extends commands.Command {
  constructor(){
    super({
      name: 'idk',
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
                  .setDescription(message.author.username+' esta confuso')
                  .setThumbnail(message.author.avatarURL)
                  .setImage(doConfuseAction());
                  message.channel.send(embed)
  }
}