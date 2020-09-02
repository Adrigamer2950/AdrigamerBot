const Discord = require("discord.js"); 

module.exports = class donate {
    constructor() {
        this.name = "donate",
        this.alias = [],
        this.usage = "a!donate"
    }

    async run(client, message, args) {
        try{
          const embed = new Discord.RichEmbed()
          .setTitle("¿Quieres apoyarme a seguir actualizando a mi bot?")
          .setColor('RANDOM')
          .setDescription('Pues puedes hacerlo!')
          .addField('Puedes hacer click en el siguiente link para hacerme una donación y apoyarme!', '🔗[**AQUI**](https://www.patreon.com/Adrigamer2950?fan_landing=true)🔗');
          message.channel.send(embed)
        }catch(e) {
            throw e;
        }
    }
}