const Discord = require("discord.js"); 

module.exports = class whois {
    constructor() {
        this.name = "whois",
        this.alias = [],
        this.usage = "a!whois"
    }

    async run(client, message, args) {
        try{
        if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("No tienes permisos  suficientes para este comando!");
            let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!args[0]) return message.channel.send('Invalid argument` No mencionaste a nadie o no pusiste ID');

            let roles = person.roles.map(r => `${r}`).join(' ').slice(10) || "None"
            if(!person) return message.channel.send("No se pudo encontrar al usuario.");

            var permissions = [];

            if(person.hasPermission('ADMINISTRATOR')) { 
            permissions.push('Administrator')
            }
            if(person.hasPermission('MANAGE_ROLES')) { 
            permissions.push('Manage Roles')
            }
            if(person.hasPermission('KICK_MEMBERS')) {
            permissions.push('Kick Members')
            }
            if(person.hasPermission('BAN_MEMBERS')) {
            permissions.push('Ban Members')
            }
            if(person.hasPermission('MANAGE_NICKNAMES')) {
            permissions.push('Manage Nicknames')
            }
            if(person.hasPermission('MANAGE_EMOJIS')) {
            permissions.push('Manage Emojis')
            }
            if(person.hasPermission('MANAGE_NICKNAMES')) {
            permissions.push('Manage Nicknames')
            }
            if(person.hasPermission('MANAGE_WEBHOOKS')) {
            permissions.push('Manage Webhooks')
            }
            if(person.hasPermission('MANAGE_MESSAGES')) { 
            permissions.push('Manage Messages')
            }
            if(person.hasPermission('MENTION_EVERYONE')) { 
            permissions.push('Mention Everyone')
            }
            if(person.hasPermission('MUTE_MEMBERS')) { 
            permissions.push('Mute Members')
            }
            if(person.hasPermission('DEAFEN_MEMBERS')) { 
            permissions.push('Deafen Members')
            }
            if(permissions.length == 0){
            permissions.push("None");
            
            } 
            
            const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(person.user.tag, person.user.avatarURL)
            .setThumbnail(person.user.avatarURL)
            .addField('Usuario', person.user)
            .addField('Se Registro', person.user.createdAt, true)
            .addField('Se unio', person.joinedAt, true)
            .addField(`Roles`, roles)
            .addField('Permisos', `${permissions.join(', ')}`)           
            .setFooter(`ID: ${person.id} | Jugando: ${person.presence.status}`)
            .setTimestamp()
            message.channel.send( {embed} );
        }catch(e) {
            throw e;
        }
    }
}