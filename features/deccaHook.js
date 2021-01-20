const { Message, Client, MessageEmbed } = require('discord.js');
const randomRes = require('../random-responses.json');
const randomness = Math.floor(Math.random () * 5)
/**
 * @param {Message} message
 * @param {Client} client
*/

module.exports = async (message) => {

    if (message.content.toLowerCase().includes(`<${message.guild.members.cache.get('589044704708919316')}>`) && message.channel.type != 'dm') {

        message.channel.fetchWebhooks()
        .then(async hooks => {
            if (hooks.size === 0) {

                message.channel.createWebhook('decc00n', {

                avatar: 'https://cdn.discordapp.com/avatars/589044704708919316/4cd1fd243c27ac8f16d1fd00247ef379.png?size=2048'

                }

                )
                .then(webhook => webhook.send(randomRes[randomness]))

            }else {

                const hook = hooks.first()

                await hook.send(randomRes[randomness])
            }
        })
        .catch(console.error);

    }

}