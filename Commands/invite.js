const Discord = require("discord.js"); 

module.exports = class invite {
    constructor() {
        this.name = "invite",
        this.alias = [],
        this.usage = "a!invite"
    }

    async run(client, message, args) {
        try{
          const embed = new Discord.RichEmbed()
          .setTitle("¿Quieres invitarme a tu servidor?")
          .setColor('RANDOM')
          .setDescription('Pues puedes hacerlo!')
          .addField('Puedes hacer click en el siguiente link para invitar al bot a tu servidor!', '🔗[Link](https://discord.com/api/oauth2/authorize?client_id=705793288719827004&permissions=8&scope=bot)🔗');
          message.channel.send(embed)
        }catch(e) {
            throw e;
        }
    }
}