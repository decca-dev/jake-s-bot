const { MessageEmbed } = require('discord.js');

module.exports = async (client) => {

    const channel = client.channels.cache.get('799758038017245184')

    const got = require('got')

    const reddits = ['okbuddyretard', 'genzhumor', 'memes'];

    const random = reddits[Math.floor(Math.random() * reddits.length)]

    setInterval(() => {
        got(`https://www.reddit.com/r/${random}/random/.json`).then(res => {

            let content = JSON.parse(res.body)

            channel.send(new MessageEmbed()

                .setColor('RED')
                .setTitle(content[0].data.children[0].data.title)
                .setImage(content[0].data.children[0].data.url)
                .setURL(content[0].data.children[0].data.url)
                .setFooter(`From /r/${random} | 👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} 🗨️ ${content[0].data.children[0].data.num_comments}`)

            )

        })
    }, 600000)

}