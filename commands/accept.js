const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !accept <user>");
        return;
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !accept <user>");
        return;
    }

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783");  
let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

let acceptchannel = bot.channels.find(x => x.name === 'accepted-applicants');

geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Congratulations!**`)
      .setDescription(`<@${rUser.id}> Your application has been approved! You have taken your first step into the community. The next step is to wait for an interview to be announced/scheduled. We wish you good luck!`)


}

module.exports.help = {
    name: "accept"

}
