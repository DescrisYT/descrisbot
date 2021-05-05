const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
  message.delete(); 
let link = "https://dynamic.brandcrowd.com/asset/logo/f802ad87-f5ae-491f-9a02-89ee701b588f/logo?v=4&text="+isim
  const embed = new Discord.MessageEmbed()
  .setColor(0xF001FA)
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dinamik", "dinamiklogo"],
  kategori: 'logolar',
  permLevel: 0
};
exports.help = {
  name: 'dinamik',
  description: 'Logo Yaparsınız',
  usage: ''
};