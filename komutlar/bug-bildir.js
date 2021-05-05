const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.cache.get("821517523400917002")//bug repot kanal id'i
let embed = new Discord.MessageEmbed()
.setTitle("Descris Bug Sistemi")
.setThumbnail("https://cdn.discordapp.com/attachments/823449558423830558/823453530680852520/pp.jpg")
.addField("Bug", bug)
.addField("Report Eden", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("#f49542")
.setImage('https://cdn.discordapp.com/attachments/823449558423830558/823459493730975794/standard_15.gif')

message.channel.send(":white_check_mark:  **| Bug Report Başarı İle İletildi.**")
channel.send(embed).then(i => i.react("❤️"))

  


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'Bug Bildirme Komudu.',
  usage: 'bug-bildir'
}