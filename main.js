const fetch = require("node-fetch")
const Discord = require("discord.js")
const bot = new Discord.Client()
require("colors")

exports.setVanityURL = async function setVanityURL(client, guild, url) {
    bot.login(client.token).catch(error => {
        if (error !== null) {
            console.log("[discord-vanity] An incorrect token was provided, maybe a user's token.".red)
        }
    })
    const server = bot.guilds.cache.get(guild.id)
    server.members.fetch(bot.id).then(member => {
        if (!member.hasPermission("MANAGE_GUILD")) return console.log("[discord-vanity] This guild member doesn't have the 'MANAGE_GUILD' permission.".red)
    })
    if (!guild.features.includes('VANITY_URL')) {
        return console.log("[discord-vanity] This guild doesn't have vanity URL feature.".red)
    }
    return await fetch(`https://discord.com/api/v9/guilds/${guild.id}/vanity-url`, {
        "credentials": "include",
        "headers": {
            "accept": "*/*",
            "authorization": "Bot " + bot.token,
            "content-type": "application/json",
        },
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": JSON.stringify({
            "code": url
        }),
        "method": "PATCH",
        "mode": "cors"
    }).then(response => {
        if (response.status === 200) {
            return;
        } else {
            return console.log("[discord-vanity] I cannot set this new vanity URL.".red)
        }
    }).catch(console.log("[discord-vanity] There was an error, please open an issue on Github. (github.com/Nyrok/discord-vanity)".red))
}