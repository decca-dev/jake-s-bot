require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["CHANNEL", "MESSAGE", "REACTION"]
});
const fs = require('fs')
const { join } = require('path')
client.commands = new Discord.Collection();
client.config = {
    embedColors: {
        misc: "BLURPLE",
        logBad: "RED",
        logGood: "GREEN"
    }
};
const randomRes = require('./random-responses.json');
const randomR = randomRes[Math.floor(Math.random() * randomRes.length)];
const pretty = require('pretty-ms')

const commandFiles = fs.readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

commandFiles.forEach((f) => {
    let props = require(`./commands/${f}`);
    console.log(`✔️ ${f} loaded`);
})

client.on("ready", () => {
    client.user.setActivity("Your messages", { type: "WATCHING" })
    console.log(`Logged in as ${client.user.tag}`)
    const channel = client.channels.cache.get('799758038017245184')

    const got = require('got');

    setInterval(() => {
        got('https://www.reddit.com/r/memes/random/.json').then(res => {

            let content = JSON.parse(res.body)

            channel.send(new Discord.MessageEmbed()

                .setColor('RED')
                .setTitle(content[0].data.children[0].data.title)
                .setImage(content[0].data.children[0].data.url)
                .setURL(content[0].data.children[0].data.url)
                .setFooter(`👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} 🗨️ ${content[0].data.children[0].data.num_comments}`)

            )

        })
    }, 30000)
})

const cooldowns = new Discord.Collection()

client.on("message", async (message) => {

    if (message.author.bot) return;

    if (message.content.includes('<@!589044704708919316>') && message.channel.type != 'dm') {

        message.channel.fetchWebhooks()
        .then(async hooks => {
            if (hooks.size === 0) {

                message.channel.createWebhook('decc00n', {

                avatar: 'https://cdn.discordapp.com/avatars/589044704708919316/4cd1fd243c27ac8f16d1fd00247ef379.png?size=2048'

                }

                )
                .then(webhook => webhook.send(randomR))

            }else {

                const hook = hooks.first()

                await hook.send(randomR)
            }
        })
        .catch(console.error);

    }

    const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const prefix = message.content.toLowerCase().match(prefixMention) ? message.content.toLowerCase().match(prefixMention)[0] : process.env.PREFIX;

    if (message.content === `<@!${client.user.id}>`) message.channel.send(`Hey there, my prefix is \`s!\` or <@!${client.user.id}>`)

    if (message.content.toLowerCase().startsWith(prefix)) {

        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))



        if (!command) return;

        if (!cooldowns.has(commandName)) {
            cooldowns.set(command.name, new Discord.Collection());
        }

        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 3) * 1000;

        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

            if (now < expirationTime) {
                const timeLeft = expirationTime - now;
                const cooldownEmbed = new Discord.MessageEmbed()
                    .setTitle(':watch: Woah, slow down :watch:')
                    .setColor('AQUA')
                    .setDescription(`woah chill, you gotta wait ${pretty(timeLeft)} more second(s) before reusing the \`${command.name}\` command again`)
                return message.channel.send(cooldownEmbed)
            }
        }


        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


        try {
            command.run(client, message, args);

        } catch (error) {
            console.error(error);
        }

    }

})

client.on("guildMemberAdd", async (member) => {
    require('./events/guildMemberAdd')(member)
})

client.on("guildMemberRemove", async (member) => {
    require('./events/guildMemberRemove')(member)
})

client.on("messageDelete", async(message) => {
    require('./events/messageDelete')(message)
})

client.on("messageUpdate", async (oldMessage, newMessage) => {
    require('./events/messageUpdate')(oldMessage, newMessage)
})

client.on("emojiCreate", async (emoji) => {
    require('./events/emojiCreate')(emoji)
})

client.on("emojiDelete", async (emoji) => {
    require('./events/emojiDelete')(emoji)
})

client.on("emojiUpdate", async (oldEmoji, newEmoji) => {
    require('./events/emojiUpdate')(oldEmoji, newEmoji)
})

client.login(process.env.TOKEN)