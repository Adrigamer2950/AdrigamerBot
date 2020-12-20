const Discord = require("discord.js"); 
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class UICommand extends commands.Command {
  constructor(){
    super({
      name: 'invite',
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
    const embed = new Discord.MessageEmbed()
          .setTitle("¿Quieres invitarme a tu servidor?")
          .setColor('RANDOM')
          .setDescription('Pues puedes hacerlo!')
          .addField('Puedes hacer click en el siguiente link para invitar al bot a tu servidor!', '🔗[Link](https://discord.com/api/oauth2/authorize?client_id=705793288719827004&permissions=8&scope=bot)🔗');
          message.channel.send(embed)
}
}