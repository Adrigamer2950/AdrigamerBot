const Discord = require("discord.js"); 

function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };

module.exports = class serverinfo {
    constructor() {
        this.name = "serverinfo",
        this.alias = [],
        this.usage = "a!serverinfo"
    }

    async run(client, message, args) {
        try{
          let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
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
    const embed = new Discord.RichEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("Nombre", message.guild.name, true)
    .addField("ID", message.guild.id, true)
    .addField("Owner del Servidor", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
    .addField('Usuarios', server.memberCount, true)
    .addField("Region", region[message.guild.region], true)
    .addField("Nivel de Verificación", verifLevels[message.guild.verificationLevel], true)
    .addField("Canales", message.guild.channels.size, true)
    .addField("Roles", message.guild.roles.size, true)
    .addField("Fecha Creacion", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
    .setThumbnail(message.guild.iconURL)
    .setColor('RANDOM')
   message.channel.send(embed);
        }catch(e) {
            throw e;
        }
    }
}