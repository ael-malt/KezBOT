const Discord = require("discord.js");

const config = require('@root/config.json')
const TeemoJS = require('teemojs');
let api = TeemoJS(config.RG_API);

//Import functions

const getRank = require("@util/lol-util/getRank");


module.exports = {
    commands: 'elo',
    callback: async (message, arguments, text, client) => {

        const KezcubMain = 'q9yxsAOY466SaI9OQBoWjsg73F_BalhYXX44a0V7n4r5gT-n'
        const KezcubSmurf1 = 'MaKBdmKd7PhKcacosG1JghnljvBnInErOQok1NkDVOPL5jcI6RPT1r6_Xw'
        const KezcubSmurf2 = 'L5xnjci4x_3wmRR38oy7kAP_vzmRjljPWxL7FMH9--3qLogVQaDbq38Cqg'

        const accounts = [KezcubMain, KezcubSmurf1, KezcubSmurf2]


        var rank = [];
        var userName = [];

        for (var i = 0; i < 3; i++) {
            try {
                rank.push(await api.get('EUW1', 'league.getLeagueEntriesForSummoner', accounts[i]))
                if (rank[i][0].queueType === 'RANKED_SOLO_5x5') {
                    userName[i] = rank[i][0].summonerName
                }
                if (rank[i][1].queueType === 'RANKED_SOLO_5x5') {
                    userName[i] = rank[i][1].summonerName
                }

            } catch (err) {
                if (err) {
                    var userName = await api.get('EUW1', 'summoner.getByAccountId', accounts[i])
                }
            }
            console.log(rank)
        }



        // const embed = new Discord.MessageEmbed()
        //     .setTitle(`Voici le rank de Kezcub sur League of Legends`)
        //     .setColor('#3A747D')
        //     .addFields({
        //         name: `**Main**`,
        //         value: `**Pseudo: [${name}](https://euw.op.gg/summoner/userName=${name})**
        //             **Rank:** ` + playerRank + `\n**Win Rate:** ` + WR + `\n**Promos:** ` + series,
        //         inline: true,
        //     }, )


        // message.channel.send(embed)
    }
}