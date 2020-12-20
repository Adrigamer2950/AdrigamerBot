const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class CookieCommand extends commands.Command {
  constructor(){
    super({
      name: 'cookie',
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
    let user = message.mentions.users.first() || message.author;

    if(user.id === message.author.id)
      return message.channel.send("**" + message.author.username + "** Toma una galleta.. :cookie: de mi parte ♥ ");
    message.channel.send("**" + message.author.username + " ** le ha dado galleta \n(づ｡◕‿‿◕｡)づ:･ﾟ✧ :cookie: a  **" + user.username + "**");
  }
}