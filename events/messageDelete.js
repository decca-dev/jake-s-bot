const Discord = require('discord.js');
const client = require('../index')

module.exports = async (message) => {

    if (message.author.bot) return;

    const logChannel = message.guild.channels.cache.get('799667567521431642');

    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setThumbnail(message.author.displayAvatarURL())
    .setTitle('Message Deleted')
    .addField('Channel', `${message.channel} \`(${message.channel.id})\``)
    .addField('Message Content', message.content)
    .addField('Author', `${message.author.tag} \`(${message.author.id})\``)

    logChannel.send(embed)

}