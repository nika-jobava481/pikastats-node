require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js')

const commands = [
    {
    name: "ping",
    description: "ping"
},
{
    name: "fuck",
    description: "fucks",
    options: [{
        name:"who",
        description:"who you want to fuck?",
        type: ApplicationCommandOptionType.String,
        required:true
    }]
}]

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
    console.log("registering")
    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )
        console.log("done!")
    } catch (error) {
        console.log("err:", error)
    }
})();