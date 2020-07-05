const Discord = require("discord.js"); 

module.exports = class cookie {
    constructor() {
        this.name = "cookie",
        this.alias = [],
        this.usage = "a!cookie"
    }

    async run(client, message, args) {
        try{
          let user = message.mentions.users.first() || message.author;

    if(user.id === message.author.id)
      return message.channel.send("**" + message.author.username + "** Toma una galleta.. :cookie: de mi parte ♥ ");
    message.channel.send("**" + message.author.username + " ** le ha dado galleta \n(づ｡◕‿‿◕｡)づ:･ﾟ✧ :cookie: a  **" + user.username + "**");
        }catch(e) {
            throw e;
        }
    }
}