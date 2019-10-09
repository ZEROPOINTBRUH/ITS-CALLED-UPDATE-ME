const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, channel) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !unban <user>");
        return;
    }
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !unban <user>");
        return;
    }

    //let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || bot.fetchUser(args[0]));
    // let bUser = message.guild.members.get() || Client.fetchUser();
    //if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.slice(1).join(" ");
    let user: User;
    // if(!bReason) return message.reply("Please give a reason.");
    const yes = bot.emojis.get("561106357131018273");
    const no = bot.emojis.get("561106624757104640");
    
    if (args[0]) {
			// Check if it's a user ID
			if (idRegex.test(args[0])) {
				try { user = await message.client.fetchUser(args[0].match(idRegex)[0]); }
				catch (err) { return message.channel.send(`Could not locate user **${args[0]}** from ID argument.`); }
			}
		} else {
			return message.channel.send(`No users found. Please specify a User ID.`);
		}

let banned: boolean = await message.guild.fetchBans().then(bans => {
				let users = bans.filter(r => r === user);
				if (!users.first()) {
					message.channel.send('User is not banned.');
					message.delete();
					return Promise.resolve(false);
				} else {
					return Promise.resolve(true);
				}
			});

			if (!banned) { return; }


let geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`<@${bUser.id}> has been unbanned!`)
      .setFooter(`Mentioned User ID: ${bUser.id}`);


   // let banEmbed = new Discord.RichEmbed()
   // .setDescription("A user has been banned")
   // .setColor("#ff6a00")
   // .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
   // .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
   // .addField("Banned In", message.channel)
   // .addField("Time", message.createdAt)
   // .addField("Reason", bReason);

    //message.guild.unban(bUser).unban(bReason || "None");
    
    this.client.mod.actions.unban(user, moderator, message.guild, note);
    message.channel.send(geluktEmbed);

    let ModEmbed = new Discord.RichEmbed()
    .setTitle("**Administration Command Used!**")
    .setTimestamp()
    .setColor("BLACK")
    .setDescription([
        `**The administration command** !unban **has been used**`,
        ` `,
        `**Unbanned User:** <@${bUser.id}>`,
        ` `,
        `**Used In:** ${message.channel}`,
        ` `,
        `**Used By:** ${message.author.username}`,
        ` `,
        `**Reason For Unban:** ${bReason || "None"}`
      ].join('\n'))
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});


    let dmembed =  new Discord.RichEmbed()
    .setTitle(`**You have been unbanned from ${message.guild.name}.**`)
    .setColor("#00fff6")
    .addField("Reason:", bReason || "None");

    bUser.send(dmembed);
// this is a test 133
}

 module.exports.help = {
     name: "unban"
 }
