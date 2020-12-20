const Discord = require("discord.js"); 
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();
const db = require('megadb');
let levels_db = new db.crearDB("levels");

module.exports = class level {
    constructor() {
        this.name = "level",
        this.alias = [],
        this.usage = "a!aalevel"
    }

    async run(client, message, args) {
        try{
          if(!levels_db.tiene(`${message.guild.id}`)) return message.channel.send('Este servidor no tiene a ningun usuario en el ranklist, se el primero');
          let usuario = message.mentions.members.first() || message.guild.members.get(args[1]) || message.member;
          if(!levels_db.tiene(`${message.guild.id}.${usuario.id}`)) return message.channel.send('Ese usuario no tiene ni xp ni nivel.')
          let { xp, level } = await levels_db.obtener(`${message.guild.id}.${usuario.id}`);
          let levelup = 5 * (level ** 2) + 50 * level + 100;
          let embed = new Discord.RichEmbed()
          .setTitle('Nivel de '+usuario.displayName)
          .setDescription(usuario+' tiene:')
          .setColor('RANDOM')
          .setThumbnail(usuario.avatarURL)
          .addField('XP:', `${xp}/${levelup}`)
          .addField('Nivel:', `${level}`);
          return message.channel.send(embed);
        }catch(e) {
            throw e;
        }
    }
}

module.exports = class UICommand extends commands.Command {
  constructor(){
    super({
      name: 'ultrainstint',
      aliases: ['ui'],
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
    message.delete({timeout: 0})
          const embed = new Discord.RichEmbed()
          .setDescription("**" + message.author.username + "** SE HA CONVERTIDO EN ULTRA INSTINTO!!!!!!!") 
          .setImage(doUIAction())
          .setColor("RANDOM")
          .setFooter('**Comando Secreto 7u7**')
          message.channel.send(embed);
}
}