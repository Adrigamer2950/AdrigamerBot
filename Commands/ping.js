const Discord = require("discord.js"); 

module.exports = class ping {
    constructor() {
        this.name = "ping",
        this.alias = [],
        this.usage = "a!ping"
    }

    async run(client, message, args) {
        try{
        let ping = Math.floor(message.client.ping);
          
          message.channel.send('Comprobando ping...').then(msg => {
            setTimeout(() => {
              const embed = new Discord.RichEmbed()
              .setTitle('Pong!')
              .setDescription('Ping mensajes: '+Math.floor(msg.createdTimestamp - Date.now())+'ms\nPing Bot: '+ping+'ms')
              msg.edit(embed)
            }, 1500)
          });
        }catch(e) {
            throw e;
        }
    }
}