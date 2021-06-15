const { Message } = require("discord.js");

module.exports = {
    commands: 'unmute',
    expectedArgs: '<[@member]>',
    permissionError: '',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text, client) => {
        const target = message.mentions.users.first();
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
            let memberTarget = message.guild.members.cache.get(target.id);
            
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`${memberTarget} peut enfin reouvrir son clapet!`)
        }else {
            message.channel.send('Veuillez spécifier un membre valide!')
        }
    },
    permissions: ['ADMINISTRATOR'],
}