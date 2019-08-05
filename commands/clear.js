const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !clear <amount>");
        return;
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !clear <amount>");
        return;
    }
    
//     if (args[0] > 100) {

//         let args100 = args[0] - 100
//     message.channel.bulkDelete(100)
//     message.channel.bulkDelete(args100).then(() => {
//         message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));

//         let ModEmbed = new Discord.RichEmbed()
//         .setTitle("**Moderation Command Used!**")
//         .setTimestamp()
//         .setColor("BLACK")
//         .setDescription([
//             `**The moderation command** !clear **has been used**`,
//             ` `,
//             `**Cleared Amount:** ${args}`,
//             ` `,
//             `**Used In:** ${message.channel}`,
//             ` `,
//             `**Used By:** ${message.author.username}`
//           ].join('\n'))
//         .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
        
//         let warnchannel = message.guild.channels.find(`name`, "modlog");
//         if(!warnchannel) return message.reply("Couldn't find channel");
        
//         warnchannel.send(ModEmbed);

// return;
//     });
// }

    //!clear 15
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to do that.");
    if(!args[0]) return message.channel.send("Specify what amount of messages.");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));

    });

    let ModEmbed = new Discord.RichEmbed()
    .setTitle("**Moderation Command Used!**")
    .setTimestamp()
    .setColor("BLACK")
    .setDescription([
        `**The moderation command** !clear **has been used**`,
        ` `,
        `**Cleared Amount:** ${args}`,
        ` `,
        `**Used In:** ${message.channel}`,
        ` `,
        `**Used By:** ${message.author.username}`
      ].join('\n'))
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

    let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
    modlogchannel.send({embed: ModEmbed});
    
}


module.exports.help = {
    name: "clear"
}
