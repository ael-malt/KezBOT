const Discord = require("discord.js");

const config = require('@root/config.json')
const TeemoJS = require('teemojs');
let api = TeemoJS(config.RG_API);

//Import functions

const getPlatform = require("@util/lol-util/getPlatform");
const getRank = require("@util/lol-util/getRank");
const { write } = require("jimp");

module.exports = {
    commands: 'rank',
    expectedArgs: '<server> <username>',
    callback: async (message, arguments, text, client) => {

        const region = getPlatform(arguments[0])

        //Check for server argument
        if (!region) {
            return message.reply('Invalid syntax! Please use !lol <server> <username>')
        }
        let servers = ['br1', 'eun1', 'euw1', 'jp1', 'kr', 'la1', 'la2', 'na1', 'oc1', 'tr1', 'ru']
        if (servers.indexOf(region.toLowerCase()) >= 0) {

        } else {
            return message.channel.send('Veuillez specifier un serveur valide: \n**BR** (Brazil) - **EUN** (EU Nordic & East) - **EUW** (EU West) - **JP** (Japan) -  **KR** (Korea) - **LA1** (Latin America North) - **LA** (Latin America South) - **NA** (North America) - **OC** (Oceania) - **TR** (Turkey) - **RU** (Russia)')
        }

        //Make user name a single argument

        const array = [arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]]
        const args = array.join('')
        //get summoner ID

        try {
            var summonerdata = await api.get(getPlatform(region), 'summoner.getBySummonerName', `${args}`)
            var summonerId = summonerdata.id
            console.log(summonerdata.id)
        } catch (err) {
            if (err) {
                return message.channel.send(`**${args}** Is not a valid username!`)
            }
        }

        //Get rank
        try {
            const rank = await api.get(region, 'league.getLeagueEntriesForSummoner', summonerId)
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
                var player0Lvl = await api.get(region, 'summoner.getBySummonerName', summonerdata.name)
                var player0LvL = player0Lvl.summonerLevel
            }
        }
        if (player0Rank === undefined) {
            var player = `Level ${player0LvL}`
            var WR = `0% 0 Games`
        } else {
            var player = (`${player0Rank} (${player0LP})`)
            var WR = (`${player0WR}% ${player0Games} Games`)
        }
        if (promos0 === undefined) {
            var series = '| **-**'
        } else {
            var series = (`| **${promos0.wins}W/ ${promos0.losses}L**`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(`${summonerdata.name}`)
            .setURL(`https://euw.op.gg/summoner/userName=${summonerdata.name}`)
            .setDescription(`**Rank:** ` + player + `\n**Win Rate:** ` + WR + `\n**Promos:** ` + series)
            .setFooter(`${arguments[0].toUpperCase()}`)
            .setColor('#3A747D')

            
        message.channel.send(embed)
    }
}