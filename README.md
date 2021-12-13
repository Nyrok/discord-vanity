# discord-vanity [![](https://img.shields.io/badge/Made%20with-%F0%9F%92%96-red)](https://www.npmjs.com/package/discord-vanity)
> **A discord.js extension to set a new vanity URL for your guild.**
# Needs
  * **Client** (with Token)
  * **Guild with vanity URL feature** (Boost lvl 3)
# Usage 
### Example Usage with Message Listener :
```js
const { Client, Structures } = require("discord.js");
const client = new Client();
require('discord-vanity')(Structures);

client.on('message', message => {
  if(message.content.startsWith("!vanity")){
    const url = message.content.split(" ").slice(1);
    message.guild.setVanityURL(url);
    message.reply("The vanity url has been changed to " + url)
  }
})

client.login('YOUR_CLIENT_TOKEN');
```
**Test with your client : "`!vanity nyrok`"**
# Install
`npm install discord-vanity`
# Changelog
## * **1.1.0**
    * Adding guild.<functions> extension according with [Discord.js](https://www.npmjs.com/package/discord.js).
    * Optimizing error's management.
# License
Apache-2.0 - [Nyrok](https://github.com/Nyrok)

