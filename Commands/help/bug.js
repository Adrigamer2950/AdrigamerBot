const Discord = require("discord.js"); 

module.exports = class bug {
    constructor() {
        this.name = "bug",
        this.alias = [],
        this.usage = "a!bug"
    }

    async run(client, message, args) {
        try{
          if(!args[1]){
            message.channel.send('Tienes que poner el bug que quieres reportar!')
          }else{
          let canal = message.guild.channels.find(c => c.id === '718485268780548126')
          const embed = new Discord.RichEmbed()
          .setTitle('Nuevo Bug Reportado!')
          .setDescription(message.author.tag + ' ha reportado un bug!')
          .addField('Bug Reportado: ', args.slice(1).join(" "))
          .setThumbnail(message.author.avatarURL);
          canal.send(embed);
          message.reply('Bug reportado correctamente!');
          }
        }catch(e) {
            throw e;
        }
    }
}