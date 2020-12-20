const Discord = require("discord.js"); 
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class OpenCommand extends commands.Command {
  constructor(){
    super({
      name: 'open',
      aliases: [],
      args: [
        new commands.Argument({
          optional: true,
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'tickets',
      priority: 10,
      permLvl: 0
    });
  }
  execute(message, args){
    message.delete();
          if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("Falta de permisos.").then(m => m.delete(60000)); //Si el bot no tiene permisos devuelva False
    if (!args.slice(1).join(" "))
      return message.channel.send(
        "Error |Ingrese Una Razon Para Abrir El Ticket"
      ).then(m => m.delete(60000));
    let everyone = message.guild.roles.find(m => m.name == "@everyone"); //Hace que el bot busque un rol llmado everyone

    let ticketsupport = message.guild.roles.find(
      r => r.name == "Ticket Support"
    ); //Busca el rol Ticket Support
    if (!ticketsupport)
      return message.channel.send(
        "Error | **Necesita Crear El Rango** ``Ticket Support``"
      ).then(m => m.delete(900000)); //Devuelva false si no existe l rol ticket support

    let nombrech = message.author.tag
      .replace(/[^a-zA-z0-9 ]/g, "")
      .trim()
      .toLowerCase(); //Hace que cree el canal junto al # de el nombre del usuario
    if (message.guild.channels.find(m => m.name.replace(/-/g, " ") == nombrech))
      return message.channel.send("Ya existe un ticket tuyo!");
    //Usando medios de categorias mucho mas avanzados
    let cate = message.guild.channels.find(
      c => c.name == "tickets" && c.type == "category"
    ); //Que busque una categoria llamada Tickets
    if (!cate)
      return  message.guild.createChannel("tickets", {
        type: "category"
      }); //Que si la categoria no existe devuelva False y cree la categoria
        var mensaje = ":notebook: | Nuevo ticket | :notebook:\nAqui recibiras ayuda de un staff lo más pronto posible.\nTicket creado por: \n"+message.author+"\nRazón: \n"+args.slice(1).join(" ")+"\n"+ticketsupport+" Un usuario a creado un ticket!";
        return message.guild
      .createChannel(nombrech, {
        type: "text",
        permissionOverwrites: [
          //Que cree el ticket cuando se ejecute el cmd
          //Eligiendo el name y el tipo que sea el canal en este caso "texto"
          {
            id: everyone.id, //Hacemos que l rol everyone le deniege los permisos:
            deny: ["VIEW_CHANNEL", "SEND_MESSAGES"] //Ver canal mandar mensajes
          },
          {
            id: ticketsupport.id, //Que al rol Bot Support le agregue los permisos
            allow: ["VIEW_CHANNEL", , "SEND_MESSAGES"] //Ver canal mandar mensajes
          },
          {
            id: message.author.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }
        ],
        parent: cate.id //Eligue una categoria.
      })
      .then(m => {
        message.channel.send(
          ""
        ),
          message.guild.channels
            .find(m => m.name.replace(/-/g, " ") == nombrech)
            .send(mensaje);
      })
      .catch(e => {message.channel.send(`Parece que hubo un error`), console.log(e);
      }); //Si hay un error que mande este mensaje y un error a la consola.
}
}