const addReactions = (message, reactions) => {
    message.react(reactions[0])
    reactions.shift()
    if (reactions.length > 0) {
        setTimeout(() => addReactions(message, reactions), 750)
    }
}

module.exports = async (client, id, embed, embed1, embed2, reactions = []) => {
    const channel = await client.channels.fetch(id)

    channel.messages.fetch().then((messages) => {
        if (messages.size === 0) {
            // Send a new message
            channel.send(embed)
            channel.send(embed1)
            channel.send(embed2).then((message) => {
                addReactions(message, reactions)
            })
        } else {
            return
        }
    })
}
