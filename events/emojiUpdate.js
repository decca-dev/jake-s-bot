const client = require('../index.js');
const Discord = require('discord.js');

module.exports = async (oldEmoji, newEmoji) => {

    const logChannel = oldEmoji.guild.channels.cache.get('799667567521431642');

    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setThumbnail(oldEmoji.author.displayAvatarURL())
    .setTitle('Emoji Edited')
    .addField('Old Emoji', `${oldEmoji} (${oldEmoji.id})`)
    .addField('New Emoji', `${newEmoji} (${newEmoji.id})`)
    .addField('Author', `${oldEmoji.author.tag} \`(${oldEmoji.author.id})\``)

    logChannel.send(embed)

}