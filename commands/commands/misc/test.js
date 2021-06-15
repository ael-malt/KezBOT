const { Message } = require("discord.js");

module.exports = {
    commands: 'test',
    callback: (message, arguments, text, client) => {
        message.delete()
    },
}