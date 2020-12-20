const Discord = require('discord.js');
const db = require('megadb');
let prefix_db = new db.crearDB("prefix");
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class CommandsCommand extends commands.Command {
  constructor(){
    super({
      name: 'commands',
      aliases: [],
      args: [
        new commands.Argument({
          optional: true,
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'help',
      priority: 10,
      permLvl: 0
    });
  }
  async execute(message, args, client){
    let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : "a!";
          if(!args[1]){
            const embed = new Discord.MessageEmbed()
            .setAuthor('Panel de ayuda de AdriBot', 'https://cdn.discordapp.com/avatars/705793288719827004/deba7226ec27f6b62f15c23afa6d2b16.png?size=256')
            .setColor('RANDOM')
            .setThumbnail('https://cdn.discordapp.com/avatars/705793288719827004/deba7226ec27f6b62f15c23afa6d2b16.png?size=256')
            .setTitle('**AdriBot** es un bot de moderacion y fun.')
            .addField('**Owner:**', "<@353104236491309056>")
            .addField('Comandos:\n\n', 'Moderación:\n`'+prefix+'ban`\n`'+prefix+'kick`\n`'+prefix+'unban`\n`'+prefix+'warn`\n`'+prefix+'unwarn`\n`'+prefix+'clear`\nPronto añadire más comandos de moderación!\n\nFun:\n`'+prefix+'nick`\n`'+prefix+'hug`\n`'+prefix+'cry`\n`'+prefix+'sad`\n`'+prefix+'punch`\n`'+prefix+'cookie`\n`'+prefix+'8ball`\n`'+prefix+'bite`\n`'+prefix+'bored`\n`'+prefix+'happy`\n`'+prefix+'idk`\n`'+prefix+'kiss`\n\nComandos de tickets:\n`'+prefix+'open <la razón>`\n`'+prefix+'close`\n\nComandos para admins:\n`'+prefix+'changeprefix`\n\nComandos utiles:\n`'+prefix+'botinfo`\n`'+prefix+'serverinfo`')
            .addField('Enlaces:', "Soporte: https://discord.gg/RcjMPUC")
            .addField('Puedes usar:', '`'+prefix+'donate` si quieres donarme y apoyarme a que siga actualizando a mi bot, o puedes usar:\n`'+prefix+'invite` si quieres invitar a mi bot a tu servidor!')
            .setFooter('Creado por **Adrigamer2950#7107**');
          message.channel.send(embed)
  }
}
}