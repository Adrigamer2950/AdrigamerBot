const Discord = require("discord.js"); 
const db = require('megadb');
let prefix_db = new db.crearDB("prefix");

module.exports = class commands {
    constructor() {
        this.name = "commands",
        this.alias = [],
        this.usage = "a!commands"
    }

    async run(client, message, args) {
        try{
          let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : "a!";
          if(!args[1]){
            const embed = new Discord.RichEmbed()
            .setAuthor('Panel de ayuda de AdriBot', client.user.avatarURL)
            .setColor('RANDOM')
            .setThumbnail(client.user.avatarURL)
            .setTitle('**Adrigamer Bot** es un bot de moderacion y fun.')
            .addField('**Owner:**', "<@353104236491309056>")
            .addField('Comandos:\n\n', 'Moderación:\n`'+prefix+'ban`\n`'+prefix+'kick`\n`'+prefix+'unban`\n`'+prefix+'warn`\n`'+prefix+'unwarn`\nPronto añadire más comandos de moderación!\n\nFun:\n`'+prefix+'nick`\n`'+prefix+'hug`\n`'+prefix+'cry`\n`'+prefix+'sad`\n`'+prefix+'punch`\n`'+prefix+'cookie`\n`'+prefix+'8ball`\n`'+prefix+'bite`\n`'+prefix+'bored`\n`'+prefix+'happy`\n`'+prefix+'idk`\n`'+prefix+'kiss`\n\nComandos de tickets:\n`'+prefix+'open <la razón>`\n`'+prefix+'close`\n\nComandos para admins:\n`'+prefix+'changeprefix`\n`'+prefix+'clear`\n\nComandos utiles:\n`'+prefix+'botinfo`\n`'+prefix+'serverinfo`')
            .addField('Enlaces:', "Soporte: https://discord.gg/RcjMPUC")
            .addField('Puedes usar:', '`'+prefix+'donate` si quieres donarme y apoyarme a que siga actualizando a mi bot, o puedes usar:\n`'+prefix+'invite` si quieres invitar a mi bot a tu servidor!')
            .setFooter('Creado por **Adrigamer2950#8682**');
          message.channel.send(embed)
        }
        }catch(e) {
            throw e;
        }
    }
}