const Discord = require("discord.js"); 

module.exports = class botinfo {
    constructor() {
        this.name = "botinfo",
        this.alias = [],
        this.usage = "a!botinfo"
    }

    async run(client, message, args) {
        try{
    const embed = new Discord.RichEmbed()
.setAuthor('Información de Adrigamer Bot')
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL)
.addField("Owner:", "<@353104236491309056>", true)
.addField("ID Bot:", "705793288719827004")
.addField("Librería:", "Discord ^11.6.4 (Js)", true)
.addField("Versión:", " 1.0.3", true)
.addField("Node:", "v8.15.1")
.addField("Memoria:", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +"%", true)
.addField("Nombre:", "Adrigamer Bot")
.addField("Servidores:", client.guilds.size.toLocaleString(), true)
.addField("Usuarios:", client.users.size.toLocaleString(), true)
.addField("Canales:", client.channels.size.toLocaleString(), true);
    message.channel.send(embed)
        }catch(e) {
            throw e;
        }
    }
}