const { prefix } = require('@root/config.json');
const channelId = '840141139508330507' //#twitch-kezcub //NOTIFS

module.exports = (client) => {
    client.on('message', (message) => {
        const { guild, content } = message

        const arguments = content.split(/[ ]+/)
        arguments.shift()

        const array = arguments
        const args = array.join(' ')

        if(content.startsWith(`${prefix}t-w-i-t-c-h`)) {
            if(!channelId)
            return;
        
            const targetGuild = client.guilds.cache.get('822773099753766962'); //KezClub
            if (!guild) return console.log("Couldn't get the guild.");
    
            const targetChannel = targetGuild.channels.cache.get('829780267283513384'); //#info-live
    
            targetChannel.send(args);
            return
        }else return
      })
}