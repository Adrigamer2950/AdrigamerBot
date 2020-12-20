const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class SuggestCommand extends commands.Command {
  constructor(){
    super({
      name: 'suggest',
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
            message.channel.send('Tienes que poner la sugerencia que quieres enviar!')
          }else{
          let canal = message.guild.channels.find(c => c.id === '718900693083357326')
          const embed = new Discord.MessageEmbed()
          .setTitle('Nueva Sugerencia!')
          .setDescription(message.author.tag + ' ha hecho una sugerencia!')
          .addField('Sugerencia enviada: ', args.slice(1).join(" "))
          .setThumbnail(message.author.avatarURL);
          canal.send(embed).then(msg => {
            msg.react('✅');
            msg.react('❎');
          });
          message.reply('Sugerencia enviada correctamente!');
          }
}
}