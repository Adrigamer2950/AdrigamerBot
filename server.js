//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE

const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 100000);


//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./util.js').getConfig()[1];
const { CommandHandler } = require("djs-commands");
const util = require('./util.js');
const request = require('request');
const search = require('youtube-search');
const db = require('megadb');

const ms = require("ms");
const { nivelesFunc } = require('./niveles.js');

let RainbowRoles_db = new db.crearDB("rainbowRoles");
let prefix_db = new db.crearDB("prefix");
let welcome_db = new db.crearDB("welcome");
let leave = new db.crearDB("leave");
let levels_db = new db.crearDB("levels");
let warns_db = new db.crearDB('warns');
let afk_db = new db.crearDB('afk');


const guildInvites = new Map();

const queue = new Map();

function presence(){
  var status = ["Prefix a!", `en ${client.guilds.size} servidores! y con ${client.users.size} usuarios!`, 'v1.0.4'];
  var randomStatus = Math.floor(Math.random()*(status.length));
  client.user.setPresence({
       status: "online",
       game: {
           name: status[randomStatus],
           type: "WATCHING"
       }
   });
}

function presenceDirecto(){
  client.user.setPresence({
       status: "online",
       activity: {
           name: "En Directo",
           url: "https://www.twitch.tv/adrigamer2950",
           type: "STREAMING"
       }
   });
}

client.on('ready', () => {
  console.log(`Soy ${client.user.tag}`)
  /*client.invites = {};
  for (const [id, guild] of client.guilds) {
    guild.fetchInvites()
      .then(invites => client.invites[id] = invites)
      .catch(console.error);
  }*/
  presence();
  setInterval(presence, 5000);
  /*setInterval(function(){
      client.destroy().then(() => {
          process.exit();
        })
  }, 800000);*/
  //rainbowRole();
  //setInterval(rainbowRole, 7000);
  
})

client.on("message", async (message) => {
  if(message.author.type === 'bot') return;
    const CH = new CommandHandler({
    folder: __dirname + "/Commands/",
    prefix: prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : "a!"
    });
  
  /*function rainbowRole(){
  let server = message.guild.id;
  let obtener = RainbowRoles_db.obtener(`${server.id}.role`)
  let obtenerTrue = RainbowRoles_db.obtener(`${server.id}.true`)
  let role = message.guild.roles.find(r => r.id == obtener)
  if(!role){
    if(message.author.type === 'bot') return;
  }else{
        var colors = ['#FF0202', '#FFA502', '#FBFF02', '#2EFF02', '#02F2FF', '#0220FF', '#4c2882'];
        var colores = Math.floor(Math.random() * colors.length);
        role.setColor('RANDOM');
  }
}*/
  //rainbowRole();
  //setInterval(rainbowRole, 7000);
  
    let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : "a!";
    
  let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`); //Este es el RegExp que utilizaremos
if (message.content.match(RegMention)) { //Creamos la condicional
 message.channel.send(`El prefix actual del bot es: **${prefix}**`)
}
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

});

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
      var Canal = client.channels.find(channel => channel.id === "714420714119233556");
        let rol = member.guild.roles.find(r => r.id == "552133256695250954");
          member.addRole(rol)
          var message = "Bienvenido "+member+" a esta comunidad, recuerda ver y cumplir las reglas del servidor que se presentan en <#534767957541126145>.\nDiviertete! :3";
            Canal.send(message);
    }
});

client.on('guildCreate', guild => {
  for (const [id, guild] of client.guilds) {
    guild.fetchInvites()
      .then(invites => client.invites[id] = invites)
      .catch(console.error);
  }
});

client.login(process.env.TOKEN);