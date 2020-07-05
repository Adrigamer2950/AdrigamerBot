const Discord = require("discord.js"); 

module.exports = class lenguage {
    constructor() {
        this.name = "happy",
        this.alias = [],
        this.usage = "a!happy"
    }

    async run(client, message, args) {
        try{
          let imgs = ["https://media1.tenor.com/images/d12b6a2a1686aa3fd8ffe30c4e15be36/tenor.gif?itemid=16423152", "https://media.tenor.com/images/ef0682c31ec867636791918172e35f8d/tenor.gif"];
          let random = imgs[Math.floor(Math.random() * imgs.length)]
          const embed = new Discord.RichEmbed()
          .setDescription("**" + message.author.username + "** esta feliz! :3") 
          .setImage(random)
          .setColor("RANDOM")
          message.channel.send(embed)
        }catch(e) {
            throw e;
        }
    }
}