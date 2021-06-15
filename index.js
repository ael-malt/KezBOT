require('module-alias/register');

//Requiered commands imports

const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

//Required paths

const config = require('@root/config.json');
const loadCommands = require('@root/commands/load-commands');
const loadFeatures = require('@root/features/load-features.js');

const command = require('@util/command');
const firstMessage = require('@util/first-message');
//BOT loader

client.on('ready', () => {
    console.log('KezBOT is ready!');
    const { prefix } = config

    client.user.setActivity(`${prefix}help`, { type: 'WATCHING' });
    
    //Importing addons

    loadCommands(client);
    loadFeatures(client);

    //Please verify message

    // firstMessage(client, '800125498973880342',
    //     `Bienvenue chez Killu! Pour accéder au reste du serveur veuillez vérifier que vous êtes un humain en complétant le captcha envoyé a vos Messages privées `, ['✔']);






})
//Pass token to bot

client.login(config.token);