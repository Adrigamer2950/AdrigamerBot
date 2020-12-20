const Discord = require("discord.js"); 
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class BallCommand extends commands.Command {
  constructor(){
    super({
      name: '8ball',
      aliases: [],
      args: [
        new commands.Argument({
          optional: true,
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'test',
      priority: 9,
      permLvl: 0
    });
  }
  execute(message, args){
    var rpts = ["Si si si", "Tal vez", "No se", "Claro!", "Si <3", "No >:("]; 

    let pregunt = args.slice(1).join(' '); //Si falta la pregunta
    if(!pregunt) return message.channel.send(':x: | Falta la pregunta.');
  
	const embed = new Discord.MessageEmbed() //Creamos el embed
		.setTitle('Command | 8Ball')
		.setThumbnail(message.author.avatarURL)
		.addField('Su pregunta es:', pregunt, true)
		.addField('Mi respuesta es:', rpts[Math.floor(Math.random() * rpts.length)], true)
	message.channel.send(embed)
  }
}