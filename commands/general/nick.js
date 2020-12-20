const Discord = require("discord.js"); 
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class NickCommand extends commands.Command {
  constructor(){
    super({
      name: 'nick',
      aliases: [],
      args: [
        new commands.Argument({
          optional: true,
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'general',
      priority: 10,
      permLvl: 0
    });
  }
  execute(message, args){
    // ESTE COMANDO DE APODOS ESTA HECHO PARA CAMBIAR SU PROPIO APODO Y EL DE OTRA PERSONA!!!
      if (!message.member.hasPermission("CHANGE_NICKNAME")) {
        return message.reply("No tienes permisos")
    }
    let permsBot = message.guild.me.hasPermission("MANAGE_NICKNAMES") 
    //Verificamos permisos del bot
    if (!permsBot) return message.channel.send("No tengo permisos!")
    // Declaramos variables principales:
    let mencion = message.guild.member(message.mentions.users.first());
    let texto = args.slice(1).join(""+" ");
    let contador = 3; //Esta variable nos ayudara a controlar los permisos del usuario

        if(mencion.highestRole > message.guild.me.highestRole){ //Si tiene el mismo rango o mayor (en Jerarquia)
            return message.channel.send("No puedo cambiarle el apodo a ese usuario porque su rol es mayor que el mio!")
        }

    // Revisamos que no hay ningun fallo
    if (!mencion) return message.reply(lang.error.args.user_mention);
    if (message.member.hasPermission("MANAGE_NICKNAMES") && mencion.id !== message.member.id) contador = 2;

    let antibugs = mencion.id !== message.member.id;
  
    if (antibugs && contador === 2 && mencion && !texto) {
        return message.reply("No has escrito el nuevo apodo")
    }
  
    if (antibugs && contador === 3 && mencion) {
        return message.reply("Solo puedes cambiarte **TU** apodo")
    } 
    
    if (!texto && contador === 3 && mencion && mencion.id === message.member.id) return message.reply("No has escrito un nick");
    if (!texto && contador === 2 && mencion && mencion.id === message.member.id) return message.reply("No has escrito un nick");
    // Y lo ejecutamos ejecutamos:
    if (contador === 2 && antibugs && mencion) {
        if (texto === "default") { // Si queremos restablecer su nombre
            mencion.setNickname(" ")
            return message.reply(`Nuevo nick: **${mencion.displayName}**`)
        }

        mencion.setNickname(texto)
        return message.reply(`Nuevo nick es: **${texto}**`)
    }
  
    if (mencion.id === message.author.id && mencion) {
        if (texto === "default") {
          message.member.setNickname(" ")
          return message.reply(`Nuevo nick: **${mencion.displayName}**`)
        }

        message.member.setNickname(texto)
        return message.reply(`Listo, tu nuevo apodo es: **${texto}**`)
    }
}
}