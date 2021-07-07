# discord-vanity [![](https://img.shields.io/badge/Made%20with-%F0%9F%92%96-red)](https://www.npmjs.com/package/discord-vanity)
> **A discord.js extension to set a new vanity URL for your guild.**
# Usage 
### Example Usage with Message Listener :
```js
const Discord = require("discord.js");
const client = new Discord.Client();
const vanity = require('discord-vanity');

client.on('message', message => {
  if(message.content.startsWith("!vanity")){
    const url = message.content.split(" ").slice(1);
    vanity.setVanityURL(client, message.guild, url);
    message.reply("The vanity url has been changed to " + url)
  }
})

client.login('YOUR_CLIENT_TOKEN');
```
**Test with your client : "`!vanity nyrok`"**
# Install
`npm install discord-reply`
# Changelog
## * **1.0.12**
    * Adding README.md file.
    * Adding discord.js and colors package.
    * Fix of wrong client user.
    * Fix of guild missing permission.
    * Fix of guild member doesn't have permission 'MANAGE_GUILD'
# License
Apache-2.0 - [Nyrok](https://github.com/Nyrok)

