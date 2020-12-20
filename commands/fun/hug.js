function doHugAction() {
  var rand = [
    'https://cdn.discordapp.com/attachments/399448944889036801/586591986933301250/hug_11.gif',
    'https://cdn.discordapp.com/attachments/399448944889036801/650328951142612993/source.gif',
    'https://cdn.weeb.sh/images/S1qX2OJ_Z.gif'
  ];
   return rand[Math.floor(Math.random() * rand.length)];
} 

const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class HugCommand extends commands.Command {
  constructor(){
    super({
      name: 'hug',
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

                if(!args[0] && args == 1) {
                    message.channel.send('Debes mencionar a un usuario para abrazar!')
                }else{
                  const embed = new Discord.MessageEmbed()
                  .setDescription(message.author.username+' esta abrazando a '+personTagged.displayName)
                  .setThumbnail(message.author.avatarURL)
                  .setImage(doHugAction());
                  message.channel.send(embed)
                }
  }
}