const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if (!message.guild) return;

    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }

}

module.exports.help = {
    name: "join"
}
