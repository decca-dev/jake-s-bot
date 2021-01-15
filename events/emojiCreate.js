const Discord = require('discord.js');
const client = require('../index')

module.exports = async (emoji) => {

    const logChannel = emoji.guild.channels.cache.get('799667567521431642');

    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Emoji Created')
    .setDescription(emoji)
    .addField('Emoji Name', emoji.name)
    .addField('Emoji ID', emoji.id)
    .addField('Animated?', emoji.animated)

    logChannel.send(embed)
    
}