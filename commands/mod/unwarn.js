const Discord = require('discord.js');
const db = require('megadb');
let warns_db = new db.crearDB('warns');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class UnwarnCommand extends commands.Command {
  constructor(){
    super({
      name: 'unwarn',
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
  async execute(message, args, client){
    var server = message.guild;
          let user = message.mentions.users.first();
          
        let perms = message.member.hasPermission("MANAGE_MESSAGES") //Verificamos permisos del user
        if (!perms) return message.channel.send("No tienes Permisos!")

        let persona = message.mentions.members.first() //Si no menciono a naadie
        if(!persona) return message.channel.send('Debes mencionar a un usuario!')
		
        if(persona.highestRole > message.member.highestRole){ //Si tiene el mismo rango o mayor (en Jerarquia)
            return message.channel.send("No puedes warnear a ese usuario porque su rango es mayor que el tuyo!")
        }
          
        if(persona.highestRole > message.guild.me.highestRole
        ){ //Si tiene el mismo rango o mayor (en Jerarquia)
            return message.channel.send("No puedo warnear a ese usuario porque su rango es mayor que el mio!")
        }
        
        var razon = args.slice(2).join(' ') //Una razon ("Sin Razon" por Default)
        if(!razon) {
          razon = `Sin Razón` 
        }
          
        if(!warns_db.tiene(`${message.guild.id}.${user.id}.warns`)){
          warns_db.establecer(`${message.guild.id}.${user.id}`, {"warns": 0})
        }
          let obtener = await warns_db.obtener(`${message.guild.id}.${user.id}.warns`)
          if(obtener = 0){
            return message.channel.send('Ese usuario no tiene ningún warneo!')
          }
          warns_db.restar(`${message.guild.id}.${user.id}.warns`, 1) 
          const embed = new Discord.MessageEmbed()
          .setTitle(user.username+' a sido deswarneado!')
          .setColor('RANDOM')
          .setThumbnail(client.user.avatarURL)
          .addField(user.username+' fue deswarneado por ', message.author.username);
          message.channel.send(embed)
}
}