const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class RaidCommand extends commands.Command {
  constructor(){
    super({
      name: 'raid',
      aliases: [],
      args: [
        new commands.Argument({
          optional: true,
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'general',
      priority: 10,
      permLvl: 0
    });
  }
  execute(message, args){
    message.channel.send('Generando raid...').then(msg => {
           setTimeout(() => {
             msg.edit('Raid completado').then(msg2 => {
               setTimeout(() => {
                 msg2.edit('Iniciando destrozo del servidor...').then(msg3 => {
               setTimeout(() => {
                 msg3.edit('Completado').then(msg4 => {
               setTimeout(() => {
                 msg4.edit('PICASTES XD')
                  }, 4000)
                   
                 })
                 
                 }, 2000)
                   
                 })
                 
               }, 2000)
                 
           })
           }, 2000)
          }) 
  }
}