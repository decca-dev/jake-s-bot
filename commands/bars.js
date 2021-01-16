const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = {
    name: 'bars',
    description: 'Straight heat',
    usage: 'bars',
    aliases: [],
    cooldown: '5',
    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    async run (client, message, args) {

        message.channel.send(`
    Free tayk, free uncle ron, free peleston
    he be touching lil children but i swear he innocent
    ay, ay, ay ay
    sometimes i like to squirt mustard in my ass
    or switch to the relish when im really sad
    kids in the park be lookin really bad
    just had a threesome with her and her dad
    she kick my dick but  cannot be mad
    that bitch was 8 i put her in the pass
    hit me up if you have cubbies in your class
        `)

    }
}