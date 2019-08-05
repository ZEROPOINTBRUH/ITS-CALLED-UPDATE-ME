const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, channel) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !ban <user> <reason>");
        return;
    }
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !ban <user> <reason");
        return;
    }

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || bot.fetchUser(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.slice(1).join(" ");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot ban an Admin.");
    if(!bReason) return message.reply("Please give a reason.");
    const yes = bot.emojis.get("561106357131018273");
    const no = bot.emojis.get("561106624757104640");

let geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`<@${bUser.id}> has been banned!`)
      .setFooter(`Mentioned User ID: ${bUser.id}`);


   // let banEmbed = new Discord.RichEmbed()
   // .setDescription("A user has been banned")
   // .setColor("#ff6a00")
   // .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
   // .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
   // .addField("Banned In", message.channel)
   // .addField("Time", message.createdAt)
   // .addField("Reason", bReason);

    message.guild.member(bUser).ban(bReason);
    message.channel.send(geluktEmbed);

    let ModEmbed = new Discord.RichEmbed()
    .setTitle("**Administration Command Used!**")
    .setTimestamp()
    .setColor("BLACK")
    .setDescription([
        `**The administration command** !ban **has been used**`,
        ` `,
        `**Banned User:** <@${bUser.id}>`,
        ` `,
        `**Used In:** ${message.channel}`,
        ` `,
        `**Used By:** ${message.author.username}`,
        ` `,
        `**Reason For Ban:** ${bReason}`
      ].join('\n'))
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});


    let dmembed =  new Discord.RichEmbed()
    .setTitle(`**You have been banned from ${message.guild.name}.**`)
    .setColor("#00fff6")
    .addField("Reason:", bReason);

    bUser.send(dmembed);

}

 module.exports.help = {
     name: "ban"
 }
