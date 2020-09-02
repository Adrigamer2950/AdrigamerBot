module.exports = async (client) => {
  console.log(`Soy ${client.user.tag}`)
  /*client.invites = {};
  for (const [id, guild] of client.guilds) {
    guild.fetchInvites()
      .then(invites => client.invites[id] = invites)
      .catch(console.error);
  }*/
  function presence(){
  var status = ['usa t!help para recibir la ayuda del bot', 'v1.0.0'];
  var randomStatus = Math.floor(Math.random()*(status.length));
  client.user.setPresence({
       status: "online",
       game: {
           name: status[randomStatus],
           type: "WATCHING"
       }
   });
}
  setInterval(function(){
    var status = ["Usa a!help para ver la ayuda del bot", `en ${client.guilds.size} servidores! y con ${client.users.size} usuarios!`, 'v1.0.4'];
  var randomStatus = Math.floor(Math.random()*(status.length));
  client.user.setPresence({
       status: "online",
       game: {
           name: status[randomStatus],
           type: "WATCHING"
       }
   });
}, 5000);
}