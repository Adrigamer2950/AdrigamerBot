const Discord = require("discord.js"); 

module.exports = class meme {
    constructor() {
        this.name = "meme",
        this.alias = [],
        this.usage = "a!meme"
    }

    async run(client, message, args) {
        try{
          let server = message.guild;
          let memes = ['https://media.tenor.com/images/32a425a8f3e2ff1b6d3a8735c4cd0cd2/tenor.gif', 'https://media.tenor.com/images/0a4af7e8f1480f35ae60bfe7b2f19753/tenor.gif']
          const embed = new Discord.RichEmbed()
          .setTitle('Toma un meme.')
          .setImage(memes[Math.floor(Math.random() * memes.length)]);
          message.channel.send(embed);
        }catch(e) {
            throw e;
        }
    }
}