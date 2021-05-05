const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const descris = new Discord.MessageEmbed()
  
.setColor("BLACK")
.setImage("https://cdn.discordapp.com/attachments/814836246357737512/814844848330637332/nitro2.png")
.setTitle("Al kankam nitron");
  message.channel.send(descris);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["beleş-nitro"],
  permLevel: `Yok`
};

exports.help = {
  name: "beleş-nitro",
  description: "beleşş",
  usage: "beleş"
};