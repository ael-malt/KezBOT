const { Message } = require("discord.js");

const rollDice = () => Math.floor(Math.random() * 6) + 1;

module.exports = {
    commands: 'rolldice',
    callback: (message, arguments, text, client) => {
        message.reply(`Votre résultat: ` + rollDice())
    },
}