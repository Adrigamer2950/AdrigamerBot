const Discord = require("discord.js"); 
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class CloseCommand extends commands.Command {
  constructor(){
    super({
      name: 'close',
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
    message.delete();
          if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("No tengo permisos.");
    let ticketsupport = message.guild.roles.find(
      r => r.name == "Ticket Support"
    );//buscamos el rol
    if (!ticketsupport)
      return message.channel.send("No existe el rol Ticket Support");
    //Sí no existe hacemos una respuesta
    if (!message.member.roles.has(ticketsupport.id))
      return message.channel.send(
        ":x: Error | No Tienes Permisos Para Eliminar El Ticket :x:."
      );//si no lo tienes elaboramos otra respuesta
    let cate = message.guild.channels.find(
      c => c.name == "tickets" && c.type == "category"
    ); //Que busque una categoria llamada Tickets
    if (!cate)
      message.channel.send(
        ":x: Error | No Hay Ningun Ticket Abierto :x:."
      ); // Así mismo pero puedes agregarle que necesitan permisos X para eliminar ticket
    if (!message.channel.parent || message.channel.parent.id != cate.id)
      return message.channel.send(
        ":x: Error | Este Canal No Es Un Ticket :x:."
      );//Si el canal no es un ticket que no pase nada y que mande esa respuesta
      message.channel.send('Este ticket se auto-destruira en 5 segundos!').then(message.channel.delete({timeout: 5000}));
}
}