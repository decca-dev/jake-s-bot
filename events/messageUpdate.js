const Discord = require('discord.js');

module.exports = async (oldMessage, newMessage) => {

    if (oldMessage.author.bot || newMessage.author.bot) return;

    const logChannel = oldMessage.guild.channels.cache.get('799667567521431642');

    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setThumbnail(oldMessage.author.displayAvatarURL())
    .setTitle('Message Edited')
    .setDescription(`**Old:** ${oldMessage.content}\n**New:** ${newMessage.content}`)
    .addField('Channel', `${oldMessage.channel} \`(${oldMessage.channel.id})\``)
    .addField('Author', `${oldMessage.author.tag} \`(${oldMessage.author.id})\``)

    logChannel.send(embed)

}