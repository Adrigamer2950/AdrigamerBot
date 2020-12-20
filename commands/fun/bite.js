function doBiteAction() {
  var rand = [
    'https://i.pinimg.com/originals/94/18/53/9418530d3cd42cd768baad6a4bcb32ac.gif'
  ];
   return rand[Math.floor(Math.random() * rand.length)];
}  

const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class BiteCommand extends commands.Command {
  constructor(){
    super({
      name: 'bite',
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
    const personTagged = message.mentions.members.first();

                if(!args[1]) {
                    message.channel.send('Debes mencionar a un usuario !')
                }else{
                  
                    message.channel.send('`' + message.author.username + '`' + ' a mordido a: ' + personTagged.displayName + ' ' + doBiteAction())
                }
  }
}