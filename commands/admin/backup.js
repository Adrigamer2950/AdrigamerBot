const Discord = require('discord.js');
const db = require('discord-backup');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();
const megadb = require('megadb');
let prefix_db = new megadb.crearDB("prefix");
const backup = require('../../backups.js');

module.exports = class BackupCommand extends commands.Command {
  constructor(){
    super({
      name: 'backup',
      aliases: [],
      args: [
        new commands.Argument({
          optional: true,
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'admin',
      priority: 8,
      permLvl: 2
    });
  }
  async execute(message, args, client){
    //if(message.author.id !== '353104236491309056') return message.reply('Este comando esta en mantenimiento! ._.');
    let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : "a!";
    let guild = message.guild;
    let func = args[0];
    let backupID = args[1];
    if(func === 'create'){
      backup.createBackup(message, guild, Discord, prefix);
    }else if(func === 'remove'){
      backup.deleteBackup(message, backupID, Discord);
    }else if(func === 'load'){
      backup.loadBackup(message, backupID, Discord, client);
    }else if(func === 'info'){
      backup.infoBackup(message, backupID, Discord, client);
    }
  }
}