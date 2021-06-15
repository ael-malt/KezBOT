const Discord = require('discord.js');
const firstMessage = require('@util/first-message')
const embedjson = require('@root/embed-reglement.json')

module.exports = client => {
    const channelId = '840178023957135400'

    const getEmoji = emojiName => client.emojis.cache.find(emoji => emoji.name === emojiName)

    const emojis = {
        Blue_Check: '840169165838090270'
    }

    const reactions = []

    let emojiText = 'React to claim a role.\n\n'
    for (const key in emojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)

        const role = emojis[key]
        // emojiText += `${emoji} <a:pinkarrow:839528900862541835> <@&${role}>\n\n`
    }
    
    const embed = new Discord.MessageEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/840163655495581726/840164226102198292/mascotte.vide.png')
    .setColor(embedjson.embeds[0].color)
    .addFields({
        name: embedjson.embeds[0].title,
        value: embedjson.embeds[0].description
        ,
        inline: false,
      })
    
    const embed1 = new Discord.MessageEmbed()
  
    .setColor(embedjson.embeds[1].color)
    .addFields({
        name: embedjson.embeds[1].title,
        value: embedjson.embeds[1].description
        ,
        inline: false,
    })

    const embed2 = new Discord.MessageEmbed()
    .setColor(embedjson.embeds[2].color)
    .addFields({
        name: embedjson.embeds[2].title,
        value: embedjson.embeds[2].description
        ,
        inline: false,
    })
    firstMessage(client,channelId, embed, embed1, embed2, reactions)

    const handleReaction = (reaction, user, add) => {
        if (user.id === '723819104045105172') {
          return
        }
    
        const emoji = reaction._emoji.name
    
        const { guild } = reaction.message
    
        const roleName = emojis[emoji]
        if (!roleName) {
          return
        }
    
        const role = guild.roles.cache.find((role) => role.id === roleName)
        const member = guild.members.cache.find((member) => member.id === user.id)
    
        if (add) {
          member.roles.add(role)
        } else {
          member.roles.remove(role)
        }
      }
    
      client.on('messageReactionAdd', (reaction, user) => {
        if (reaction.message.channel.id === channelId) {
          handleReaction(reaction, user, true)
        }
      })
    
      client.on('messageReactionRemove', (reaction, user) => {
        if (reaction.message.channel.id === channelId) {
          handleReaction(reaction, user, false)
        }
      })
}