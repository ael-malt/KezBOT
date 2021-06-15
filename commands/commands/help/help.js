const Discord = require('discord.js');
const { prefix } = require('@root/config.json')
module.exports = {
    commands: 'help',
    callback: (message, arguments, text, client) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Mon préfixe est "${prefix}" et voici mes commandes:`)
            .setColor('#3A747D')
            .setThumbnail(client.user.avatarURL({ dynamic: true }))
            .setFooter(`Bot crée par thenono1#6455`)
            .addFields({
                name: '<:IconPin:840623741377708053> __Aide__',
                value:
                    `**${prefix}help** - Affiches le menu d'aide
                **${prefix}ticket** - Crées un ticket si tu as besoin d'aide
                    ㅤ`,
                inline: false,
            },
                {
                    name: '<:IconRole:840623763879886908> __Information__',
                    value:
                        `**${prefix}botinfo** - Affiches de l'information sur KezBOT
                    **${prefix}serverinfo** - Affiches de l'information sur ce serveur
                    **${prefix}userinfo <@membre>** - Affiches de l'information sur un membre
                    **${prefix}membercount** - Affiches combien de membres ce serveur contient
                    **${prefix}ping** - Pong! Affiches les latences du Bot et de l'API
                    ㅤ`,
                    inline: false,
                },
                {
                    name: '<:IconRole:840623763879886908> __Informations sur Kezcub__',
                    value:
                        `**${prefix}socials** - Affiches les reseaux sociaux de Kezcub
                    **${prefix}elo** - Information sur le rank de Kezcub sur League of Legends
                    ㅤ`,
                    inline: false,
                },
                {
                    name: '<:IconActivity:840623786545643531> __Jeux__',
                    value:
                        `**${prefix}rank <server> <username>** - Informations sur votre rank League of Legends
                        ㅤ`,
                    inline: false,
                },
                {
                    name: '<:IconStoreChannel:840623774684020737> __Divers__',
                    value:
                        `**${prefix}poll** - Crées un sondage sur le dernier message envoyé
                        **${prefix}rolldice** - Roules un dé!
                        **${prefix}randomcolor/rc** - Généres une couleur aléatoire!
                        ㅤ`,
                    inline: false,
                },
                {
                    name: '<a:ItemModBan:840626477635731457> __Moderation__',
                    value:
                        `**${prefix}kick <@membre>**
                    **${prefix}ban <@membre>**
                    **${prefix}clear <quantité>**
                    **${prefix}mute <@membre> <mute time>**
                    **${prefix}unmute <@membre>**
                    ㅤ`,
                    inline: true,
                },
                {
                    name: '<:fx:840635607264657428> __Maths__',
                    value:
                        `**${prefix}add/sub\n<num1> <num2>**
                    **${prefix}multiply/divide\n<num1> <num2>**`,
                    inline: true,
                },


                // {
                //     name:'',
                //     value:
                // `**${prefix}**`,
                //     inline:false,
                // },

            )

        message.channel.send(embed)
    },
}