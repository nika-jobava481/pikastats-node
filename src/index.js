require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on("ready", (client) => {
    console.log(`${client.user.username} is ready for work? ✅`)
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    message.reply(
        {
            content: `Hi ${message.author.username}.\n${message.content}`
        }

    )
    console.log(message);
})

client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    console.log(interaction.commandName)
    switch (interaction.commandName) {
        case 'ping':
            interaction.reply(`🏓pong! ${Math.abs(Date.now() - interaction.createdTimestamp)}ms`);
            break;
        case 'fuck':
            interaction.reply(`${interaction.options.get('who')?.value} was fucked successfully!`);
            break;
        case 'embed':
            const embed = new EmbedBuilder()
                                .setTitle('title')
                                .setDescription("description")
                                .setColor("Random")
            interaction.reply({embeds:[embed]})
            break;

    }

});


client.login(process.env.TOKEN);