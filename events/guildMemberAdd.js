const Discord = require('discord.js');

module.exports = async (member) => {

    const welcomeCh = member.guild.channels.cache.get('799738561812365343');

    const embed = new Discord.MessageEmbed()
    .setTitle('Welcome!')
    .setColor('GREEN')
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(`Welcome to the server ${member}! You are the #${member.guild.memberCount} member, and we are glad to have you here!`)

    welcomeCh.send(embed)

}