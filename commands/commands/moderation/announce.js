const { Message, MessageEmbed } = require("discord.js");

const channelId = '665215882934616065'

module.exports = {
    commands: 'announce',
    expectedArgs: '<announcement>',
    permissionError: '',
    minArgs: 1,
    callback: (message, arguments, client) => {

        message.delete()

        const array = arguments
        const args = array.join(' ')

        const member = message.member
        const channel = member.guild.channels.cache.get(channelId);


        const embed = new MessageEmbed()
            .setAuthor('New announcement!')
            .setFooter(`Announcement created by ${member.user.username}`)
            .setDescription(`${args}`)

        
        channel.send(embed)
        channel.send('||@everyone||')


    },
    permissions: ['ADMINISTRATOR']
}