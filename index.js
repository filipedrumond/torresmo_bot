const Discord = require('discord.js');
const config = require("./auth.json");
const client = new Discord.Client();
client.login(config.BOT_TOKEN);


const RAs = require("./ras.json");

const prefix = "!";
client.on("message", function(message) { 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    var command = args.shift().toLowerCase();
    command = command.toLocaleLowerCase();

    switch (command) {
        case "ra":
            sendRA(message, RAs);
            break;
    
        default:
            break;
    }
});



function sendRA(message, RAs){
    let replyMessage = "\n";
    RAs.forEach(element => {
        replyMessage += `${element.nome} -- ${element.ra} \n`;
    });

    message.reply(replyMessage);
}