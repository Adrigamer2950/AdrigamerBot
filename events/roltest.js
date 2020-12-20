module.exports = async (client, oldRole, newRole) => {
  let server = client.guilds.cache.get(newRole.guild.id);

  if(server){
    if(oldRole.name != newRole.name){
      client.guilds.cache.get(newRole.guild.id).channels.cache.get('772546617668272159').send(`El rol **${oldRole.name}** a sido cambiado de nombre a **${newRole.name}**`)
    }else if(oldRole.hexColor != newRole.hexColor){
      client.guilds.cache.get(newRole.guild.id).channels.cache.get('772546617668272159').send(`El rol **${oldRole.hexColor}** a sido cambiado de color a **${newRole.hexColor}**`)
    }
  }
}