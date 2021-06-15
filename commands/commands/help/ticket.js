const Discord = require('discord.js');

const channelId = '840655376751132733'
const check = '<:Blue_Check:840564507326808084>'
let registered = false

const registerEvent = (client) => {
  if (registered) {
    return
  }

  registered =

    client.on('messageReactionAdd', (reaction, user) => {
      if (user.bot) {
        return
      }

      const { message } = reaction
      if (message.channel.id === channelId) {
        message.delete()
      }
    })
}

module.exports = {
  commands: ['ticket', 'support'],
  minArgs: 1,
  expectedArgs: '<message>',
  callback: (userMessage, arguments, text, client) => {
    const { guild, member } = userMessage

    registerEvent(client)

    const embed = new Discord.MessageEmbed()
    .setColor('#3A747D')
      .addFields({
        name: `Un nouveau ticket a été crée`,
        value: `**Auteur:** <@${member.id}>\n **Ticket:** \n\n` + text + `\n\nAppuyer sur ${check} quand le problème est résolu.`
      })

    const channel = guild.channels.cache.get(channelId)
    channel
      .send(embed)
      .then((ticketMessage) => {
        ticketMessage.react(check)

        userMessage.reply(
          'Votre ticket a été envoyé! Une réponse vous seras apportée dans les plus brefs délais.'
        )
      })
  },
}
