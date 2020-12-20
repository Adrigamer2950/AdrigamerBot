const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class HappyCommand extends commands.Command {
  constructor(){
    super({
      name: 'happy',
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
    let imgs = ["https://media1.tenor.com/images/d12b6a2a1686aa3fd8ffe30c4e15be36/tenor.gif?itemid=16423152", "https://media.tenor.com/images/ef0682c31ec867636791918172e35f8d/tenor.gif"];
          let random = imgs[Math.floor(Math.random() * imgs.length)]
          const embed = new Discord.MessageEmbed()
          .setDescription("**" + message.author.username + "** esta feliz! :3") 
          .setImage(random)
          .setColor("RANDOM")
          message.channel.send(embed)
  }
}