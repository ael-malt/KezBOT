module.exports = (client) => {
  const channelId = "840013451846090802"; //Membres:
  const guild = "822773099753766962"; //Guild
  const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId);
    channel.setName(`Membres: ${guild.memberCount.toLocaleString()}`);
  };

  client.on("guildMemberAdd", (member) => {
    if (member.guild.id === guild) {
      updateMembers(member.guild);
    } else {
      return;
    }
  });
  client.on("guildMemberRemove", (member) => {
    if (member.guild.id === guild) {
      updateMembers(member.guild);
    } else {
      return;
    }
  });
};
