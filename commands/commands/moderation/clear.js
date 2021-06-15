const { Message } = require("discord.js");

module.exports = {
    commands: 'clear',
    expectedArgs: '<quantity>',
    maxArgs: 1,
    callback: async (message, arguments, text, client) => {
        message.delete().then()

        if (!arguments[0]) return message.reply(`Veuillez saisir le nombre de messages que vous souhaitez effacer!`)
        if (isNaN(arguments[0])) return message.reply(`Please enter a valid number!`)

        if (arguments[0] > 100) return message.reply(`Vous ne pouvez pas supprimer plus de 100 messages!`)
        if (arguments[0] < 1) return message.reply(`Vous devez supprimer au moins 1 message!`)

        await message.channel.messages.fetch({ limit: arguments[0]}).then(messages => {
            message.channel.bulkDelete(messages, true)
            .then(deleted => message.channel.send(`J'ai supprimé \`${deleted.size}\` message(s)!`))
            .then(message => message.delete({ timeout: 3000 }))
            .catch(err => message.reply(`Un problème est survenu ${err}`))
        })

    },
    permissions: ['MANAGE_MESSAGES'],
}