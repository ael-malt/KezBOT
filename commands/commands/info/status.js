const Discord = require('discord.js');
const { prefix } = require('@root/config.json')
module.exports = {
    commands: 'status',
    expectedArgs: '<status>',
    minArgs: 1,
    callback: (message, arguments, text, client) => {
        const content = message.content.replace(`${prefix}status`, '')
        client.user.setPresence({
            activity: {
                name: content,
                type: 0
            }
        })
    },
    permissions: ['ADMINISTRATOR'],
}