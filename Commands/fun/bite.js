const Discord = require("discord.js"); 

function doBiteAction() {
  var rand = [
    'https://i.pinimg.com/originals/94/18/53/9418530d3cd42cd768baad6a4bcb32ac.gif'
  ];
   return rand[Math.floor(Math.random() * rand.length)];
}  

module.exports = class bite {
    constructor() {
        this.name = "bite",
        this.alias = [],
        this.usage = "a!bite"
    }

    async run(client, message, args) {
        try{
          const personTagged = message.mentions.members.first();

                if(!args[1]) {
                    message.channel.send('Debes mencionar a un usuario !')
                }else{
                  
                    message.channel.send('`' + message.author.username + '`' + ' a mordido a: ' + personTagged.displayName + ' ' + doBiteAction())
                }
        }catch(e) {
            throw e;
        }
    }
}