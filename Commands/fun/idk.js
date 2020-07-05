const Discord = require("discord.js"); 

function doConfuseAction() {
  var rand = [
    'https://media.giphy.com/media/oFK7w3la4zQY0/giphy.gif',
    ''
  ];
   return rand[Math.floor(Math.random() * rand.length)]; 
}

module.exports = class idk {
    constructor() {
        this.name = "idk",
        this.alias = [],
        this.usage = "a!idk"
    }

    async run(client, message, args) {
        try{
                  const embed = new Discord.RichEmbed()
                  .setDescription(message.author.username+' esta confuso')
                  .setThumbnail(message.author.avatarURL)
                  .setImage(doConfuseAction());
                  message.channel.send(embed)
        }catch(e) {
            throw e;
        }
    }
}