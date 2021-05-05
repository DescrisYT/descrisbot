const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const descris = new Discord.MessageEmbed()
  
.setColor("BLACK")
.setImage("https://cdn.discordapp.com/attachments/802911190459744267/803529901445480508/Ej5ZGPkXkAEC56f.png")
.setTitle("Agam nasıl bu kadar haWli olabiliyorsun anlatsana biraz.");
  message.channel.send(descris);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["napim"],
  permLevel: `Yok`
};

exports.help = {
  name: "napim",
  description: "napim de lafı koy ez",
  usage: "napim"
};