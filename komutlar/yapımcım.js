const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(" **Yapımcım**")
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "",
  usage: ""
};