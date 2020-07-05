const Discord = require("discord.js"); 

function doMikeAction() {
  var rand = [
    'https://cdn.discordapp.com/attachments/399448944889036801/609471651528310825/tenor.gif'
  ];
   return rand[Math.floor(Math.random() * rand.length)];
}  

module.exports = class punch {
    constructor() {
        this.name = "punch",
        this.alias = [],
        this.usage = "a!punch"
    }

    async run(client, message, args) {
        try{
          const personTagged = message.mentions.members.first();

                if(!args[1]) {
                    message.channel.send('Debes mencionar a un usuario !')
                }else{
                  const embed = new Discord.RichEmbed()
                  .setDescription(message.author.username+' a pegado a '+personTagged.displayName)
                  .setThumbnail(message.author.avatarURL)
                  .setImage(doMikeAction());
                    message.channel.send(embed)
                }
        }catch(e) {
            throw e;
        }
    }
}