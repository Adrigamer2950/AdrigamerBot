const Discord = require("discord.js"); 

function doCryAction() {
  var rand = [
    'https://cdn.weeb.sh/images/Hk6EmLmDZ.gif'
  ];
   return rand[Math.floor(Math.random() * rand.length)]; 
}

module.exports = class cry {
    constructor() {
        this.name = "cry",
        this.alias = [],
        this.usage = "a!cry"
    }

    async run(client, message, args) {
        try{
          const embed = new Discord.RichEmbed()
          .setDescription(message.author.username+' esta llorando.')
          .setThumbnail(message.author.avatarURL)
          .setImage(doCryAction());
          message.channel.send(embed)
        }catch(e) {
            throw e;
        }
    }
}