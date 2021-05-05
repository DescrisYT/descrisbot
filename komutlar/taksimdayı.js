const Discord = require("discord.js");

exports.run = (client, message) => {

const EmbedDescrisCode = new Discord.MessageEmbed()

      .setAuthor("Taksim Dayı")//Descris
      .setColor(3447003)
      .setTimestamp()
      .setDescription("")
      .setURL("https://cdn.discordapp.com/attachments/757801669839814677/758308330585325619/taksim.gif")
      .setImage(`https://cdn.discordapp.com/attachments/757801669839814677/758308330585325619/taksim.gif`);

return message.channel.send(EmbedDescrisCode);

};
exports.conf = {
  enabled: true,
  guild0nly: false,
  aliases: ["dayı", "taksim"],
  permLevel: 0
};
exports.help = {
  name: "taksimdayı",
  description: "taksim dayı resmi atar",
  usage: "taksimdayı"
};
