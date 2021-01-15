const Discord = require('discord.js');
const client = require('../index')

module.exports = async (oldMessage, newMessage) => {

    if (oldMessage.author.bot) return;

    const logChannel = oldMessage.guild.channels.cache.get('799667567521431642');

    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setThumbnail(oldMessage.author.displayAvatarURL())
    .setTitle('Message Edited')
    .addField('Channel', `${oldMessage.channel} \`(${oldMessage.channel.id})\``)
    .addField('Old Content', oldMessage.content)
    .addField('New Content', newMessage.content)
    .addField('Author', `${oldMessage.author.tag} \`(${oldMessage.author.id})\``)

    logChannel.send(embed)

}