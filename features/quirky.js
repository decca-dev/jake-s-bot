const { Message, Client, MessageEmbed } = require('discord.js');

/**
 * @param {Message} message
 * @param {Client} Client
 */

module.exports = async (message) => {

    if (message.channel.id === '722120908260638791' || message.channel.id === '765979297336393815') await message.react('🥵');

    if (message.content === 'quirky') message.channel.send(':hot_face: aha fuck');

    if (message.content.toLowerCase().includes('balls')) message.channel.send('itchy <a:dancing_bruh:799988689450041356>');

    if (message.content.toLowerCase().includes('gn')) await message.react('💤')

    if (message.content.toLowerCase().includes('decca') || message.content.toLowerCase().includes('decc00n') || message.content.toLowerCase().includes('deccoon')) return message.channel.send('https://cdn.discordapp.com/emojis/738578280327938109.gif?v=1')

}