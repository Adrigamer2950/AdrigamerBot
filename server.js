require('http').createServer((req, res) => res.end(`¡El bot esta online como: AdriBot`)).listen(3000);
const Discord = require('discord.js');
const client = new Discord.Client();
const util = require('./util.js');
const db = require('megadb');
const commands = require('./commands.js');
const fs = require('fs');

let prefix_db = new db.crearDB("prefix");
let backups_db = new db.crearDB("backups");

for(let file of fs.readdirSync('./events')){
  if(file.endsWith('.js')){
    let fileName = file.substring(0, file.length - 3);

    let fileContents = require(`./events/${file}`);

    client.on(fileName, fileContents.bind(null, client));

    delete require.cache[require.resolve(`./events/${file}`)]
  }
}

client.on('guildMemberAdd', member => {
  let server = member.guild.id;
  if(server.id === '534047450399244322'){
  member.guild.fetchInvites()
    .then(invites => {
      const existing = client.invites[member.guild.id];

      client.invites[member.guild.id] = invites;

      const inviteUsed = invites.find(invite => !existing.get(invite.code) || existing.get(invite.code).uses < invite.uses); 

      const channels = member.guild.channels.filter(channel => channel.type === 'text');
      const channel = channels.get('714421076758888508');

      if (!channel) return console.error('Unable to find specified welcome channel!');

      let message = member+" se a unido a la comunidad, fue invitado por "+inviteUsed.inviter+" que ahora tiene "+inviteUsed.uses+" invites!";
      channel.send(message);
  })
  .catch(console.error);
  }
    if(server.id === '534047450399244322'){
      var canal = client.channels.cache.find(channel => channel.id === "714420714119233556");
          var message = "Bienvenido "+member+" a esta comunidad, recuerda ver y cumplir las reglas del servidor que se presentan en <#534767957541126145>.\nDiviertete! :3";
            canal.send(message);
    }
});

/*client.on('guildCreate', guild => {
  for (const [id, guild] of client.guilds) {
    guild.fetchInvites()
      .then(invites => client.invites[id] = invites)
      .catch(console.error);
  }
});*/

client.login(process.env.TOKEN);