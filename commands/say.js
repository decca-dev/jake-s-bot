const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = {
    name: 'say',
    description: 'say',
    usage: 'say <Something>',
    aliases: ['repeat'],
    cooldown: '3',
    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    async run (client, message, args) {

        if (!message.member.hasPermission('MANAGE_MESSAGES')) return ('no');

        const text = args.slice(0).join(' ');

        if (!text) return message.channel.send('What do u want me to say ritar');

        if (text.toLowerCase().includes('@everyone') || text.toLowerCase().includes('@here') || text.toLowerCase().includes(message.mentions.roles)) return message.channel.send('no bich dont mention');

        await message.delete();

        message.channel.send(text)

    }
}