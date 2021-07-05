const fetch = require("node-fetch")

exports.setVanityURL = async function setVanityURL(client, guild, url) {
    return await fetch(`https://discord.com/api/v9/guilds/${guild.id}/vanity-url`, {
        "credentials": "include",
        "headers": {
            "accept": "*/*",
            "authorization": "Bot " + client.token,
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
            return console.log("[discord-vanity] I cannot set this new vanity URL.")
        }
    }).catch(console.log("[discord-vanity] There was an error, please open an issue on Github. (github.com/Nyrok/discord-vanity)"))
}