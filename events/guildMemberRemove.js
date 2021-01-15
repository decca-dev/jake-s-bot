const Discord = require('discord.js');

module.exports = async (member) => {

    const welcomeCh = member.guild.channels.cache.get('799738561812365343');

    const embed = new Discord.MessageEmbed()
    .setTitle('Bye...')
    .setColor('RED')
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(`**${member.user.tag}** left the server :(`)
    .setFooter('Cunt...')

    welcomeCh.send(embed)

}