const Discord = require('discord.js');

module.exports = async (message) => {

    if (message.embeds.length) return;

    if (message.author.bot) return;

    const logChannel = message.guild.channels.cache.get('799667567521431642');

    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setThumbnail(message.author.displayAvatarURL())
    .setTitle('Message Deleted')
    .setDescription(`**Content:** ${message.content}\n**Channel:** ${message.channel} \`(${message.channel.id})\`\n**Author:** ${message.author.tag} \`(${message.author.id})\``)


    logChannel.send(embed)

}