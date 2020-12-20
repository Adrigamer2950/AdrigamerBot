const Discord = require("discord.js"); 

function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class ServerInfoCommand extends commands.Command {
  constructor(){
    super({
      name: 'serverinfo',
      aliases: [],
      args: [
        new commands.Argument({
          optional: true,
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'help',
      priority: 10,
      permLvl: 0
    });
  }
  execute(message, args, client){
    let verifLevels = {
      "NONE": "Ninguno",
      "LOW": "Bajo",
      "MEDIUM": "Medio",
      "HIGH": "Alto",
      "VERY_HIGH": "Muy Alto"
    }

    let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa",
        "europe": ":flag_eu: Europe"
    };
    
    var server = message.guild;
    const embed = new Discord.MessageEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("Nombre", message.guild.name, true)
    .addField("ID", message.guild.id, true)
    .addField("Owner del Servidor", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
    .addField('Usuarios', server.memberCount, true)
    .addField("Region", region[message.guild.region], true)
    .addField("Nivel de Verificación", verifLevels[message.guild.verificationLevel], true)
    .addField("Canales", message.guild.channels.cache.size, true)
    .addField("Roles", message.guild.roles.cache.size, true)
    .addField("Fecha Creacion", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
    .setThumbnail(message.guild.iconURL)
    .setColor('RANDOM')
   message.channel.send(embed);
}
}