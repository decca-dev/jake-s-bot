const Discord = require('discord.js');

module.exports = async (oldMessage, newMessage) => {

    if (oldMessage.embeds.length || newMessage.embeds.length)

    if (oldMessage.author.bot || newMessage.author.bot) return;

    const logChannel = oldMessage.guild.channels.cache.get('799667567521431642');

    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Message Edited')
    .setDescription(`**Old:** ${oldMessage.content}\n**New:** ${newMessage.content}\n**Channel:** ${oldMessage.channel} \`(${oldMessage.channel.id})\`\n**Author:** ${oldMessage.author.tag} \`(${oldMessage.author.id})\``)

    logChannel.send(embed)

}