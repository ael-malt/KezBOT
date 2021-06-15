const Discord = require("discord.js");

const config = require('@root/config.json')
const TeemoJS = require('teemojs');
let api = TeemoJS(config.RG_API);

//Import functions

const getPlatform = require("@util/lol-util/getPlatform");
const getRank = require("@util/lol-util/getRank");
const { write } = require("jimp");

module.exports = {
    commands: 'elo',
    callback: async (message, arguments, text, client) => {

        const KezcubMain = 'JpQGDWNbxSm560OE-vhobkxQu_T8hi82ZGn7csomw9tAO20X'
        const KezcubSmurf1 = 'eUe-Ye4JLCAZB1aH3yImhYLuioGlDiFuQT2Ow3csslWhB0t2'
        const KezcubSmurf2 = 'Zh_RBAX8SGRJY7RC44zYzKpXiXHrH5KIIVx3XNbUTFIKZXd2yZ_dBvcGZg'

        //Get rank KezcubMain

        try {
            const rank = await api.get('euw1', 'league.getLeagueEntriesForSummoner', KezcubMain)
            var nameMain = rank[0].summonerName
            if (rank[0].queueType === 'RANKED_SOLO_5x5') {
                var player0Rank = `${getRank(rank[0].tier)}` + ` ${rank[0].rank}`
                var player0LP = rank[0].leaguePoints + ' LP'
                var player0Games = rank[0].wins + rank[0].losses
                var player0WR = Math.floor(rank[0].wins / player0Games * 100)
                var promos0 = rank[0].miniSeries
            } if (rank[1].queueType === 'RANKED_SOLO_5x5') {
                var player0Rank = `${getRank(rank[1].tier)}` + ` ${rank[1].rank}`
                var player0LP = rank[1].leaguePoints + ' LP'
                var player0Games = rank[1].wins + rank[1].losses
                var player0WR = Math.floor(rank[1].wins / player0Games * 100)
                var promos0 = rank[0].miniSeries
            }
        } catch (err) {
            if (err) {
                var KezcubSmurf0Username = await api.get('euw1', 'summoner.getBySummonerId', KezcubSmurf2)
                var nameMain = KezcubSmurf0Username.name
                var player0Lvl = await api.get('euw1', 'summoner.getBySummonerName', KezcubMain)
                var nameMain = player0Lvl.name
                var player0LvL = player0Lvl.summonerLevel
            }
        }
        if (player0Rank === undefined) {
            var player0 = `Level ${player0LvL}`
            var WR0 = `0% 0 Games`
        } else {
            var player0 = (`${player0Rank} (${player0LP})`)
            var WR0 = (`${player0WR}% ${player0Games} Games`)
        }
        if (promos0 === undefined) {
            var series0 = '| **-**'
        } else {
            var series0 = (`| **${promos0.wins}W/ ${promos0.losses}L**`)
        }

        //Get rank KezcubSmurf 11111

        try {
            const rank1 = await api.get('euw1', 'league.getLeagueEntriesForSummoner', KezcubSmurf1)
            var nameSmurf1 = rank1[0].summonerName
            if (rank1[0].queueType === 'RANKED_SOLO_5x5') {
                var player1Rank = `${getRank(rank1[0].tier)}` + ` ${rank1[0].rank}`
                var player1LP = rank1[0].leaguePoints + ' LP'
                var player1Games = rank1[0].wins + rank1[0].losses
                var player1WR = Math.floor(rank1[0].wins / player1Games * 100)
                var promos1 = rank1[0].miniSeries
            } if (rank1[1].queueType === 'RANKED_SOLO_5x5') {
                var player1Rank = `${getRank(rank1[1].tier)}` + ` ${rank1[1].rank}`
                var player1LP = rank1[1].leaguePoints + ' LP'
                var player1Games = rank1[1].wins + rank1[1].losses
                var player1WR = Math.floor(rank[1].wins / player1Games * 100)
                var promos1 = rank1[0].miniSeries
            }
        } catch (err) {
            if (err) {
                var KezcubSmurf1Username = await api.get('euw1', 'summoner.getBySummonerId', KezcubSmurf2)
                var nameSmurf1 = KezcubSmurf1Username.name
                var player1Lvl = await api.get('euw1', 'summoner.getBySummonerName', KezcubSmurf1)
                var nameSmurf1 = player1Lvl.name
                var player1LvL = player1Lvl.summonerLevel
            }
        }
        if (player1Rank === undefined) {
            var player1 = `Level ${player1LvL}`
            var WR1 = `0% 0 Games`
        } else {
            var player1 = (`${player1Rank} (${player1LP})`)
            var WR1 = (`${player1WR}% ${player1Games} Games`)
        }
        if (promos1 === undefined) {
            var series1 = '| **-**'
        } else {
            var series1 = (`| **${promos1.wins}W/ ${promos1.losses}L**`)
        }

        
        //Get rank KezcubSmurf 222222

        try {
            const rank2 = await api.get('euw1', 'league.getLeagueEntriesForSummoner', KezcubSmurf2)
            var nameSmurf2 = rank2[0].summonerName
            if (rank2[0].queueType === 'RANKED_SOLO_5x5') {
                var player2Rank = `${getRank(rank2[0].tier)}` + ` ${rank2[0].rank}`
                var player2LP = rank2[0].leaguePoints + ' LP'
                var player2Games = rank2[0].wins + rank2[0].losses
                var player2WR = Math.floor(rank2[0].wins / player2Games * 100)
                var promos2 = rank2[0].miniSeries
            } if (rank2[1].queueType === 'RANKED_SOLO_5x5') {
                var player2Rank = `${getRank(rank2[1].tier)}` + ` ${rank2[1].rank}`
                var player2LP = rank2[1].leaguePoints + ' LP'
                var player2Games = rank1[1].wins + rank2[1].losses
                var player2WR = Math.floor(rank[1].wins / player2Games * 100)
                var promos2 = rank2[0].miniSeries
            }
        } catch (err) {
            if (err) {
                var KezcubSmurf2Username = await api.get('euw1', 'summoner.getBySummonerId', KezcubSmurf2)
                var nameSmurf2 = KezcubSmurf2Username.name
                var player2Lvl = await api.get('euw1', 'summoner.getBySummonerName', nameSmurf2)
                var player2LvL = player2Lvl.summonerLevel
            }
        }
        if (player2Rank === undefined) {
            var player2 = `Level ${player2LvL}`
            var WR2 = `0% 0 Games`
        } else {
            var player2 = (`${player2Rank} (${player2LP})`)
            var WR2 = (`${player2WR}% ${player2Games} Games`)
        }
        if (promos2 === undefined) {
            var series2 = '| **-**'
        } else {
            var series2 = (`| **${promos2.wins}W/ ${promos2.losses}L**`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(`Voici le rank de Kezcub sur League of Legends`)
            .setColor('#3A747D')
            .addFields(
                {
                    name: `**Main**`,
                    value: `**Pseudo: [${nameMain}](https://euw.op.gg/summoner/userName=${nameMain})**
                    **Rank:** ` + player0 + `\n**Win Rate:** ` + WR0 + `\n**Promos:** ` + series0,
                    inline: true,
                },
                {
                    name: `**Smurf n°1** `,
                    value: `**Pseudo: [${nameSmurf1}](https://euw.op.gg/summoner/userName=${nameSmurf1})**
                    **Rank:** ` + player1 + `\n**Win Rate:** ` + WR1 + `\n**Promos:** ` + series1,
                    inline: true,
                },
                {
                    name: `**Smurf n°2** `,
                    value: `**Pseudo: [${nameSmurf2}](https://euw.op.gg/summoner/userName=${nameSmurf2})**
                    **Rank:** ` + player2 + `\n**Win Rate:** ` + WR2 + `\n**Promos:** ` + series2,
                    inline: true,
                }
                )


        message.channel.send(embed)
    }
}