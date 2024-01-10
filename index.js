const { Client, GatewayIntentBits, Partials, Collection,  } = require("discord.js");
const {Guilds, GuildMembers, GuildMessages  } = GatewayIntentBits;
const {User, Message, GuildMember, ThreadMember, } = Partials;




const client = new Client({
    intents:[Guilds, GuildMembers, GuildMessages], 
    partials:[User, Message, GuildMember, ThreadMember]
});



client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();
client.subCommands = new Collection();


const { loadEvents } = require("./Handlers/eventHandler");
loadEvents(client);

client.login(client.config.token)


/**
* ?━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* ? Idea and feature list
* ?━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* * Basic welcome room message with a button that gives you the default Member Role
* *     ╰┈➤✎ TODO: A command that makes the bot to send a message with  a welcome message and a button
* *     ╰┈➤✎ in the same channel that the command was sent . 
* *     ╰┈➤✎ the button gives newcommers their new role and removes newcommer
* *     ╰┈➤✎ ( newcommer is the default role when someone joins the server, can't do anything , only sees  #rules | #newcommers | @afk 
* *     ╰┈➤✎ the new role is -> Member 
* ?━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* * Discord invite link filter that filters out any discord invite links
* ! Not needed anymore. Discord built in automod can do this with a simple regex code.
* ! Already done on test server
* ?━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/














  


 
 