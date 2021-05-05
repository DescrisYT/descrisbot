const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const payidarzaman = moment

    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()

  .addField("**__Ping__**",` <a:hypesquad1:821515921339318322> **Mesaj Gecikmesi**: ${new Date().getTime() - message.createdTimestamp} ms\n <a:rengarenkigne:821514216711258142> **Bot Gecikmesi**: ${client.ws.ping}ms`, true)
  .addField("**<a:Fire:821514165436284949> __Kullanıcı Sayısı__** ", ` ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("**<a:Fire:821514165436284949> __Sunucu Sayısı__**", ` ${client.guilds.cache.size.toLocaleString()}`, true)
  .addField("**<a:Fire:821514165436284949> __Aktiflik__**", ` ${payidarzaman}`, true)
  .addField("**<a:Fire:821514165436284949> __Discord.JS__**", ` ${Discord.version}`, true)
  .addField("**<a:Fire:821514165436284949> __Bot Sahibi__**",`<@528811673038094356>`, true)
  .addField("**<a:Fire:821514165436284949> __Geliştirici__**", `<@528811673038094356>`, true)
  .setDescription('**Descris Bot İstatistik Sistemi**')
  .setImage('https://cdn.discordapp.com/attachments/823449558423830558/823459493730975794/standard_15.gif')

  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "is",
  usage: "istatistik"
};