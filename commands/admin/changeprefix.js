const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();
const db = require('megadb');
let prefix_db = new db.crearDB("prefix");

module.exports = class ChangePrefixCommand extends commands.Command {
  constructor(){
    super({
      name: 'changeprefix',
      aliases: ['cp'],
      args: [
        new commands.Argument({
          optional: true,
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'admin',
      priority: 8,
      permLvl: 2
    });
  }
  async execute(message, args){
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('No tienes permisos! Debes tener el permiso `"Gestionar Servidor` para poder cambiar mi prefix!');
    if(!args[0]) return message.channel.send("Necesitas colocar mi nuevo prefix!");
    prefix_db.establecer(`${message.guild.id}`, args[1]);
          return message.channel.send("Mi prefix a sido cambiado a "+args[1]);
  }
}