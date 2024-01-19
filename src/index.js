require('dotenv').config();
const { Client, GatewayIntentBits, Message } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on("ready",(client)=>{
    console.log("ready",client.user.username)
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    message.reply(  
        {
            content:`Hi ${message.author.username}.\n ${message.content}`
        }
        
    )
    console.log(message);
})

client.login(process.env.TOKEN);