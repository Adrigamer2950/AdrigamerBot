const Discord = require("discord.js"); 
const db = require('megadb');
let prefix_db = new db.crearDB("prefix");

module.exports = class help {
    constructor() {
        this.name = "help",
        this.alias = [],
        this.usage = "a!help"
    }

    async run(client, message, args) {
        try{
          let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : "a!";
          const embed = new Discord.RichEmbed()
          .setAuthor('Panel de ayuda de AdriBot', client.user.avatarURL)
          .setColor('RANDOM')
          .setThumbnail(client.user.avatarURL)
          .setTitle('**AdriBot** es un bot de moderacion y fun.')
          .addField('**Owner:**', "<@353104236491309056>")
          .addField('Lista de comandos:', '`'+prefix+"commands`")
          .addField('Prefix:', "`"+prefix+"`")
          .addField('¿Hay algun bug en el bot?', '`'+prefix+"bug`")
          .addField('¿Quieres hacer una sugerencia para mi bot?', '`'+prefix+"suggest`")
          .addField('Enlaces:', "Soporte: https://discord.gg/RcjMPUC")
          .addField('Puedes usar:', '`'+prefix+'donate` si quieres donarme y apoyarme a que siga actualizando a mi bot, o puedes usar\n`'+prefix+'invite` si quieres invitar a mi bot a tu servidor!')
          .setFooter('Creado por **Adrigamer2950#8682**');
          message.channel.send(embed)
        }catch(e) {
            throw e;
        }
    }
}