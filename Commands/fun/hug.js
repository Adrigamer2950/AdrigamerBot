const Discord = require("discord.js"); 

function doHugAction() {
  var rand = [
    'https://cdn.discordapp.com/attachments/399448944889036801/586591986933301250/hug_11.gif',
    'https://cdn.discordapp.com/attachments/399448944889036801/650328951142612993/source.gif',
    'https://cdn.weeb.sh/images/S1qX2OJ_Z.gif'
  ];
   return rand[Math.floor(Math.random() * rand.length)];
} 

module.exports = class hug {
    constructor() {
        this.name = "hug",
        this.alias = [],
        this.usage = "a!hug"
    }

    async run(client, message, args) {
        try{
          const personTagged = message.mentions.members.first();

                if(!args[0] && args == 1) {
                    message.channel.send('Debes mencionar a un usuario para abrazar!')
                }else{
                  const embed = new Discord.RichEmbed()
                  .setDescription(message.author.username+' esta abrazando a '+personTagged.displayName)
                  .setThumbnail(message.author.avatarURL)
                  .setImage(doHugAction());
                  message.channel.send(embed)
                }
        }catch(e) {
            throw e;
        }
    }
}