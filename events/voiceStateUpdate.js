const config = require('../util.js').getConfig()[1];

module.exports = async (client, oldMember, newMember) => {
  if(oldMember.guild&&newMember.guild) {
    let ccs = config.canalesCreados;
    let cc = ccs.get(newMember.guild.id);
    if(!cc){
    if(newMember.channelID != '772155722028941313') {
      if(newMember.channelID != '746355385622986882') return;
    }
    if(!newMember.guild.me.hasPermission('MANAGE_CHANNELS')) return console.log('canales')
    if(!newMember.guild.me.hasPermission('MOVE_MEMBERS')) return console.log('mover')
    let categoria = newMember.channel.parent;
    newMember.channel.guild.channels.create(`Canal de ${newMember.member.nickname}`, {
      type: 'voice',
      parent: categoria
    }).then(vc => {
      let canalCreado = {
        channel: vc,
        name: vc.name,
        id: vc.id,
        parent: vc.parent,
        isPrivate: false,
        owner: newMember.member,
        ownerID: newMember.member.id
      };
      ccs.set(newMember.guild.id, canalCreado);
      newMember.setChannel(vc);
    });
    }else{
      if(!oldMember.guild.me.hasPermission('MANAGE_CHANNELS')) return;
      if(oldMember.channelID === cc.id) {
        if(newMember.channelID != cc.id){
          if(!oldMember.channel.members)
          console.log('hola xd')
          ccs.delete(oldMember.guild.id)
          cc.channel.delete();
          return;
        }
    }
    }
  }
}