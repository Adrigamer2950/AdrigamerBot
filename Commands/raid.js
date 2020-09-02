const Discord = require("discord.js");

module.exports = class raid {
    constructor() {
        this.name = "raid",
        this.alias = [],
        this.usage = "a!raid"
    }

    async run(client, message, args) {
        try{
           message.channel.send('Generando raid...').then(msg => {
           setTimeout(() => {
             msg.edit('Raid completado').then(msg2 => {
               setTimeout(() => {
                 msg2.edit('Iniciando destrozo del servidor...').then(msg3 => {
               setTimeout(() => {
                 msg3.edit('Completado').then(msg4 => {
               setTimeout(() => {
                 msg4.edit('PICASTES XD')
                  }, 2000)
                   
                 })
                 
                 }, 2000)
                   
                 })
                 
               }, 2000)
                 
           })
           }, 2000)
          }) 
        }catch(e) {
            throw e;
        }
    }
}
