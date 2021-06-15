module.exports = (client) => {
  const channelId = "822773099753766965"; // welcome channel
  const guild = "822773099753766962"; //Guild
  client.on("guildMemberAdd", (member) => {
    if (member.guild.id === guild) {
      const message = `Bienvenue <@${member.id}> dans le serveur!`;

      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
    } else return;
  });
};
