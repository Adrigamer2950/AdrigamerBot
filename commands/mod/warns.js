const Discord = require('discord.js');
const db = require('megadb');
let warns_db = new db.crearDB('warns');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class WarnsCommand extends commands.Command {
  constructor(){
    super({
      name: 'warns',
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
          const warns = await warns_db.obtener(`${message.guild.id}.${user.id}.warns`);
            const embed = new Discord.MessageEmbed()
          .setTitle('Warns de '+user.username)
          .setThumbnail(user.avatarURL);
          if(warns_db.tiene(`${message.guild.id}.${user.id}`)){
            embed.setDescription(user.username+' tiene actualmente: '+warns+' warns');
          }else{
            embed.setDescription(user.username+' tiene actualmente: 0 warns');
          }
          message.channel.send(embed);
}
}