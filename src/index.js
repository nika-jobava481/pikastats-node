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

client.on("interactionCreate",(interaction)=>{
    if(!interaction.isChatInputCommand()) return;
    console.log(interaction.commandName)
    switch(interaction.commandName){
        case 'ping':
            interaction.reply(`pong! ${Math.abs(Date.now() - interaction.createdTimestamp)}`);
        case 'fuck':
            interaction.reply(`${interaction.options.get('who').value} was fucked successfully,\ndo you want to fuck their mother too?`)
            // console.log(interaction.options.get('who'))
    }
})


client.login(process.env.TOKEN);