const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class ClearCommand extends commands.Command {
  constructor(){
    super({
      name: 'clear',
      aliases: [],
      args: [
        new commands.Argument({
          optional: true,
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'mod',
      priority: 9,
      permLvl: 1
    });
  }
  execute(message, args){
    message.delete(10);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tengo los permisos necesarios.")
  if(!args[0]) return message.channel.send("Necesitas colocar el numero de mensajes que quieres eliminar, debe ser menor a 100")
  let number = args[1]
  if(isNaN(number)) return message.channel.send("Necesitas colocar un numero , no letras ni simbolos.")
  number = parseInt(number)
  if(number >= 100 || number <= 0) return message.channel.send("El valor es invalido.")
  message.channel.bulkDelete(number + 1 ).then( () => {
    message.delete(10);
    message.channel.send(`Se han eliminado ${number} mensajes.`)
  }).catch(error => {
    message.channel.send(`Ocurrio un error: ${error.message}`)
  })
}
}