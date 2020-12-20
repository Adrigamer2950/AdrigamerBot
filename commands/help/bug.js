const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class BugCommand extends commands.Command {
  constructor(){
    super({
      name: 'bug',
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
  execute(message, args){
    if(!args[1]){
            message.channel.send('Tienes que poner el bug que quieres reportar!')
          }else{
          let canal = message.guild.channels.find(c => c.id === '718485268780548126')
          const embed = new Discord.MessageEmbed()
          .setTitle('Nuevo Bug Reportado!')
          .setDescription(message.author.tag + ' ha reportado un bug!')
          .addField('Bug Reportado: ', args.slice(1).join(" "))
          .setThumbnail(message.author.avatarURL);
          canal.send(embed);
          message.reply('Bug reportado correctamente!');
          }
  }
}