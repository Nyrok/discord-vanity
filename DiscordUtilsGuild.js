const fetch = require("node-fetch")
require("colors")

module.exports = function extendDiscordGuild(Guild) {
    class DiscordUtilsGuild extends Guild {
        constructor(client, data) {
            super(client, data);     
            /**
             * Setup a vanity URL.
             * @param {String} url - URL Wanted.
             * @return {Boolean} 
             */

            this.setVanityURL = (url) => {
                return new Promise(async (resolve, reject) => {
                    if (!this.features.includes('VANITY_URL')) {
                        return reject(new Error("[discord-vanity] This guild doesn't have vanity URL feature.".red));
                    }
                    this.members.fetch(client.user.id).then(member => {
                        if (!member.hasPermission("MANAGE_GUILD")) return reject(new Error("[discord-vanity] This guild member doesn't have the 'MANAGE_GUILD' permission.".red));
                    })
                    if (typeof url !== "string" || !url) {
                        return reject(new Error(`[discord-vanity] You didn't set an url for this function or maybe your url is not suitable.`.red));                    
                    }
                    return await fetch(`https://discord.com/api/v9/guilds/${this.id}/vanity-url`, {
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
                        if (response.ok) {
                            return resolve(true);
                        } else {
                            return reject(new Error("[discord-vanity] I cannot set this new vanity URL.".red));
                        }
                    }).catch(reject(new Error("[discord-vanity] There was an error, please open an issue on Github. (github.com/Nyrok/discord-vanity)".red)));
                })
            }
        }
    }
    return DiscordUtilsGuild;
}