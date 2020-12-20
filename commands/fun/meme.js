const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class MemeCommand extends commands.Command {
  constructor(){
    super({
      name: 'meme',
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
    let server = message.guild;
          let memes = ['https://media.tenor.com/images/32a425a8f3e2ff1b6d3a8735c4cd0cd2/tenor.gif', 'https://media.tenor.com/images/0a4af7e8f1480f35ae60bfe7b2f19753/tenor.gif']
          const embed = new Discord.MessageEmbed()
          .setTitle('Toma un meme.')
          .setImage(memes[Math.floor(Math.random() * memes.length)]);
          message.channel.send(embed);
  }
}