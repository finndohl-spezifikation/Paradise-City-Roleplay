const { Client, GatewayIntentBits } = require('discord.js');
  require('dotenv').config();

  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });

  client.once('ready', () => {
    console.log(`Bot eingeloggt als ${client.user.tag}`);
  });

  client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content === '!Hallo') {
      message.reply('Hallo! Willkommen bei Paradise City Roleplay!');
    }
  });

  client.login(process.env.DISCORD_TOKEN);
  