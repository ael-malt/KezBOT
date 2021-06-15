const { Message } = require("discord.js");

module.exports = {
    commands: 'ban',
    expectedArgs: '<[@member]>',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text, cl) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        const target = mentions.users.first()
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.ban()
            message.channel.send(`CHEH! <@${target.id}> a été banni!`)
        } else {
            message.channel.send(`${tag} Veuillez specifier une personne a bannir!`)
        }
    },
    permissions: ['BAN_MEMBERS'],
}