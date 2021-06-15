const { Message, MessageEmbed } = require("discord.js");
const { version } = require('@root/package.json')
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'userinfo',
    callback: async (message, arguments, text, client) => {
            const { guild, channel} = message

            const user = message.mentions.users.first() || message.member.user
            const member = guild.members.cache.get(user.id)


            const embed = new MessageEmbed()
            .setAuthor(`Informations sur l'utilisateur ${user.username}`, (user.avatarURL({ dynamic:true })))
            .setColor('#3A747D')
            .setThumbnail(user.avatarURL({ dynamic:true }))
            .addFields ({

                name: 'User tag',
                value: user.tag,
            },
            {
                name:'Bot?',
                value: user.bot,
            },
            {
                name: 'Pseudo sur le serveur',
                value: member.nickname || 'None'
            },
            {
                name: 'A rejoint le serveur',
                value: new Date(member.joinedTimestamp).toLocaleDateString()
            },
            {
                name:'A rejoint Discord',
                value: new Date(user.createdTimestamp).toLocaleDateString()
            },
            {
                name: 'Quantité de roles',
                value: member.roles.cache.size - 1,
            })
            
            
            message.channel.send(embed)
    },

}