const { Message, MessageEmbed } = require("discord.js");
const { version } = require('@root/package.json')
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'botinfo',
    callback: async (message, arguments, text, client) => {
        let totalMembers = 0

        for (const guild of client.guilds.cache) {
            totalMembers += (await guild[1].members.fetch()).size
        }

            const embed = new MessageEmbed()
            .setAuthor(`Informations sur KezBOT`, (client.user.avatarURL({ dynamic:true })))
            .setThumbnail(client.user.avatarURL({ dynamic:true }))
            .setFooter('Bot crée par thenono1#6455')
            .setColor('#3A747D')
            .addFields ({
                name: 'Bot tag',
                value: client.user.tag,
            },
            {
                name:'Version',
                value: version,
            },
            {
                name: "Prefix du serveur",
                value: prefix
            },
            {
                name: 'Uptime',
                value: `${process.uptime().toFixed(2)}s`
            },
            {
                name:'Quatité de serveurs',
                value: client.guilds.cache.size
            },
            {
                name: 'Membres Totaux',
                value: totalMembers,
            })
            
            
            message.channel.send(embed)
    },

}