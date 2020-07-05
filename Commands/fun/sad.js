const Discord = require("discord.js"); 

function doSadAction() {
  var rand = [
    'https://cdn.discordapp.com/attachments/399448944889036801/644207146287890434/c74e01ed472bab60ac59f6b61185ca14.gif'
  ];
   return rand[Math.floor(Math.random() * rand.length)];
}  

module.exports = class sad {
    constructor() {
        this.name = "sad",
        this.alias = [],
        this.usage = "a!sad"
    }

    async run(client, message, args) {
        try{
          const embed = new Discord.RichEmbed()
          .setDescription(message.author.username+' esta triste.')
          .setThumbnail(message.author.avatarURL)
          .setImage(doSadAction());
          message.channel.send(embed)

        }catch(e) {
            throw e;
        }
    }
}