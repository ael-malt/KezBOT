const Discord = require('discord.js');
const { prefix } = require('@root/config.json')
module.exports = {
    commands: 'serverinfo',
    callback: (message, arguments, text) => {
        const { guild } = message

        const { name, region, memberCount, owner, afkTimeout } = guild
        const icon = guild.iconURL()

        const embed = new Discord.MessageEmbed()
            .setTitle(`Server info for "${name}"`)
            .setThumbnail(icon)
            .setColor('#3A747D')
            .addFields(
                {
                    name: 'Region',
                    value: region,
                },
                {
                    name: 'Membres',
                    value: memberCount,
                },
                {
                    name: 'Propriétaire',
                    value: owner.user.tag,
                },
                {
                    name: 'AFK Timeout',
                    value: afkTimeout / 60,
                }
            )
        message.channel.send(embed)

    }
}