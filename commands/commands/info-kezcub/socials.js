const Discord = require('discord.js');
const { prefix } = require('@root/config.json')
module.exports = {
    commands: 'socials',
    callback: (message, arguments, text, client) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Vous pouvez retrouver Kezcub sur:`)
            .setThumbnail(client.user.avatarURL({ dynamic: true }))
            .setColor('#3A747D')
            .setDescription(
                `
                **<:Twitch:840603449103351870> Twitch: [Kezcub_](https://www.twitch.tv/kezcub_)**
                **<:youtube:840603449615319046> Youtube: [Kezcub](https://www.youtube.com/channel/UC8Qv-ZcfaFvfkkvfCzdexCA/featured)**
                **<:Twitter:840603449473105931> Twitter: [Kezcub_](https://twitter.com/Kezcub_)**
                **<:Site:840665006819377222> Site Web: [KezClub](https://kezclub.fr/)**`
            )

        message.channel.send(embed)
    },
}