const { Message } = require("discord.js");

module.exports = {
    commands: 'kick',
    expectedArgs: '<[@member]>',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        const target = mentions.users.first()
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.kick()
            message.channel.send(`<@${target.id}> s'est fait balayé du serveur!`)
        } else {
            message.channel.send(`${tag} Veuillez specifier une personne a balayer!`)
        }
    },
    permissions: ['KICK_MEMBERS'],
}