const Discord = require("discord.js"); 

module.exports = class suggest {
    constructor() {
        this.name = "suggest",
        this.alias = [],
        this.usage = "a!suggest"
    }

    async run(client, message, args) {
        try{
          if(!args[1]){
            message.channel.send('Tienes que poner la sugerencia que quieres enviar!')
          }else{
          let canal = message.guild.channels.find(c => c.id === '718900693083357326')
          const embed = new Discord.RichEmbed()
          .setTitle('Nueva Sugerencia!')
          .setDescription(message.author.tag + ' ha hecho una sugerencia!')
          .addField('Sugerencia enviada: ', args.slice(1).join(" "))
          .setThumbnail(message.author.avatarURL);
          canal.send(embed);
          message.reply('Sugerencia enviada correctamente!');
          }
        }catch(e) {
            throw e;
        }
    }
}