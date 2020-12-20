const Discord = require('discord.js');
const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();
const config = require('../../util.js').getConfig()[1];
let ccs = config.canalesCreados;

module.exports = class PrivateCommand extends commands.Command {
  constructor(){
    super({
      name: 'private',
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
  async execute(message, args, client){
    let cc = ccs.get(message.guild.id);
    if(!cc){return message.reply('No estas en un canal de voz mio!')}else{
      if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply('No tengo permisos!');
      let owner = cc.owner;
      let ownerID = cc.ownerID;
      let channel = cc.channel;
      let isPrivate = cc.isPrivate;
      let everyone = message.guild.roles.everyone;
      if(message.member.voice.channelID != cc.channel.id) return message.reply('No estas en un canal de voz mio!');
      if(isPrivate === false){
      channel.overwritePermissions([
        {
          id: everyone.id,
          deny: ['CONNECT']
        }
      ]);
      isPrivate = true;
      return message.channel.send('Canal privatizado :)');
      }else{
        channel.overwritePermissions([
        {
          id: everyone.id,
          allow: ['CONNECT']
        }
      ]);
      isPrivate = false;
      return message.channel.send('Canal desprivatizado :)');
      }
    }
  }
}