const db = require('megadb');
const commands = require('../commands.js');

let prefix_db = new db.crearDB("prefix");
let backups_db = new db.crearDB("backups");

module.exports = async (client, message) => {
  if(message.author.type === 'bot') return;
  let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : "a!";
  let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`); //Este es el RegExp que utilizaremos
if (message.content.match(RegMention)) { //Creamos la condicional
 message.channel.send(`El prefix actual del bot es: **${prefix}**`)
}
    /*const CH = new CommandHandler({
    folder: __dirname + "/Commands/",
    prefix: prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : "a!"
    });*/
  
  let cmd = message.content.slice(prefix.length);
  
  if(cmd != undefined){
    cmd = cmd.split(' ');
  }
 
  let result = await commands.checkValidCmd(message, cmd, prefix);
  
  if(result){
    commands.executeCmd(message, cmd, client);
  }
  
    /*
    
  
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) {
      //nivelesFunc(message)
      if(message.content.startsWith('Hola')) return;
      return;
    }

    try{
        cmd.run(client,message,args)
    }catch(e){
        console.log(e)
    }
*/
}