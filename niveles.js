const Discord = require('discord.js');
const db = require('megadb');
let levels_db = new db.crearDB("levels");

module.exports = {
  nivelesFunc: async (message) => {
    if(!levels_db.tiene(message.guild.id)) levels_db.establecer(message.guild.id, {})
    if(!levels_db.tiene(`${message.guild.id}.${message.author.id}`)) levels_db.establecer(`${message.guild.id}.${message.author.id}`, {xp: 0, level: 1})
    let { xp, level } = await levels_db.obtener(`${message.guild.id}.${message.author.id}`);
    let randomxp = Math.floor(Math.random() * 30) + 1;
    let levelup = 5 * (level ** 2) + 50 * level + 100;
    
    if((xp + randomxp) >= levelup) {
      levels_db.establecer(`${message.guild.id}.${message.author.id}`, {xp: 0, nivel: parseInt(level+1)})
      const embed = new Discord.RichEmbed()
      .setTitle(message.author.username+' a subido de nivel!')
      .setDescription(message.author.username+' a subido al nivel: '+parseInt(level+1)+'!\nFelicidades!')
      .setColor('GREEN')
      .setThumbnail(message.author.avatarURL)
      .setImage('https://media.tenor.com/images/7ed918fc11bdc4b1dbf9a24e5f13a08d/tenor.gif');
      return message.channel.send(embed);
    }else{
      levels_db.sumar(`${message.guild.id}.${message.author.id}.xp`, randomxp);
      console.log(`${message.author.tag}, gano ${randomxp}, ahora tiene ${xp}`);
      return;
    }
  }
}