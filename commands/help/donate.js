const Discord = require("discord.js"); 
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class DonateCommand extends commands.Command {
  constructor(){
    super({
      name: 'donate',
      aliases: [],
      args: [
        new commands.Argument({
          optional: true,
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'fun',
      priority: 10,
      permLvl: 0
    });
  }
  execute(message, args){
    const embed = new Discord.MessageEmbed()
          .setTitle("¿Quieres apoyarme a seguir actualizando a mi bot?")
          .setColor('RANDOM')
          .setDescription('Pues puedes hacerlo!')
          .addField('Puedes hacer click en el siguiente link para hacerme una donación y apoyarme!', '🔗[**AQUI**](https://www.patreon.com/Adrigamer2950?fan_landing=true)🔗');
          message.channel.send(embed)
}
}