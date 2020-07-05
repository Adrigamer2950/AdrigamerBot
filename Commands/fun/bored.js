const Discord = require("discord.js"); 

module.exports = class bored {
    constructor() {
        this.name = "bored",
        this.alias = [],
        this.usage = "a!bored"
    }

    async run(client, message, args) {
        try{
          let imgs = ["https://66.media.tumblr.com/a0dde89e5336c725c04e2ebf63361253/60f8804d08b811db-e1/s540x810/65e90a3a50621bd8f20aeb30fb127f784dfeed4d.gifv", "https://media3.giphy.com/media/ZA4Uoimcx9zqpubBki/giphy.gif", "https://media1.tenor.com/images/fe53957c4617ec48bcda934bdadc613f/tenor.gif?itemid=14995652", "https://i.pinimg.com/originals/d4/2c/9d/d42c9d9a088b95a352e5d8150d776be6.gif", "https://i.pinimg.com/originals/9a/8f/9a/9a8f9a326e98f7aa2cd1a0ee38fbcada.gif", "https://i.pinimg.com/originals/aa/98/a7/aa98a7df22f0a1bf34247da657d0b7d4.gif"];
          let random = imgs[Math.floor(Math.random() * imgs.length)]
          const embed = new Discord.RichEmbed()
          .setDescription("**" + message.author.username + "** esta aburrido ") 
          .setImage(random)
          .setColor("RANDOM")
          message.channel.send(embed)
        }catch(e) {
            throw e;
        }
    }
}