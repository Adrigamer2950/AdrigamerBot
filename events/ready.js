const config = require('../util.js').getConfig()[1];
const db = require('discord-backup');
const commands = require('../commands.js');
const backup = require('../backups.js');

module.exports = async (client) => {
  console.log(`Soy ${client.user.tag}`)
  commands.registerCategories(config.categories);
  commands.registerCommands();
  backup.setStorageFolder();
  /*client.invites = {};
  for (const [id, guild] of client.guilds) {
    guild.fetchInvites()
      .then(invites => client.invites[id] = invites)
      .catch(console.error);
  }*/
  function presence(){
  var status = ["Usa a!help para ver la ayuda del bot", `en ${client.guilds.cache.size} servidores! y con ${client.users.cache.size} usuarios!`, 'v1.1.0'];
  var randomStatus = Math.floor(Math.random()*(status.length));
  client.user.setPresence({
       status: "online",
       activity: {
           name: status[randomStatus],
           type: "WATCHING"
       }
   });
}
presence();
  setInterval(function(){
    var status = ["Usa a!help para ver la ayuda del bot", `en ${client.guilds.cache.size} servidores! y con ${client.users.cache.size} usuarios!`, 'v1.1.0'];
  var randomStatus = Math.floor(Math.random()*(status.length));
  client.user.setPresence({
       status: "online",
       activity: {
           name: status[randomStatus],
           type: "WATCHING"
       }
   });
}, 5000);
}