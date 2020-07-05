const Discord = require("discord.js"); 

function doSaiyanAction() {
  var rand = [
    'https://i.pinimg.com/originals/8e/8e/95/8e8e9543536a95cc020e966ae602ffca.gif',
    'https://i.imgur.com/3nriysq.gif', 
    'https://media.tenor.com/images/2fa21eb7db812730dd949ca529cfa6a5/tenor.gif',
    'https://media.tenor.com/images/c025f4b50fe6be12ce7ecbc8747f6e99/tenor.gif',
    'https://www.romstation.fr/uploads/monthly_2017_10/small.6a82cca54c9e9f61cc4fa1687fc0d002dba3012a_hq.gif.8755720b4783fc5ac1ce3921ff4a7481.gif',
    'https://giffiles.alphacoders.com/131/13142.gif',
    'https://giffiles.alphacoders.com/339/33944.gif'
  ];
   return rand[Math.floor(Math.random() * rand.length)];
} 

module.exports = class saiyan {
    constructor() {
        this.name = "saiyan",
        this.alias = [],
        this.usage = "a!saiyan"
    }

    async run(client, message, args) {
        try{
          message.delete({timeout: 0})
          const embed = new Discord.RichEmbed()
          .setDescription("**" + message.author.username + "** SE HA CONVERTIDO EN UN SUPER SAIYAN!!") 
          .setImage(doSaiyanAction())
          .setColor("RANDOM")
          .setFooter('**Comando Secreto 7u7**')
          message.channel.send(embed);
        }catch(e) {
            throw e;
        }
    }
}