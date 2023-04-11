require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client(
    {
        intents: [
            Discord.IntentsBitField.Flags.Guilds,
            Discord.IntentsBitField.Flags.GuildMembers,
            Discord.IntentsBitField.Flags.GuildMessages,
            Discord.IntentsBitField.Flags.MessageContent,
        ],
    }
);

function start() {
    client.on('ready', () => {
        console.log('Puds bot online');
    })

    client.on("messageCreate", (message) => {
        if (message.author.bot) {
            return;
        }

        if (message.content === 'hello') {
            message.reply("Hey I am puds bot.")
        }
    })
}

function interaction() {
    client.on('interactionCreate', (interaction) => {
        if (!interaction.isChatInputCommand()) return;

        if (interaction.commandName === 'hey') {
            interaction.reply("hey!");
        }
        if (interaction.commandName === 'ping') {
            interaction.reply("Pong!");
        }

        console.log(interaction.commandName);
    })
}

start();
interaction()

client.login(process.env.TOKEN);