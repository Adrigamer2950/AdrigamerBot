const Discord = require("discord.js"); 
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