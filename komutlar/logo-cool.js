const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**") 
  message.delete(); 
let link = "https://dynamic.brandcrowd.com/asset/logo/2fa9614c-e8fd-47be-b522-14aa07bd8f22/logo?v=4&text="+isim
  const embed = new Discord.MessageEmbed()
  .setColor(0xF001FA)
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cool", "coollogo"],
  kategori: 'logolar',
  permLevel: 0
};
exports.help = {
  name: 'cool',
  description: 'Logo Yaparsınız',
  usage: ''
};