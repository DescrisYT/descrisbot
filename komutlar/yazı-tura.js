const Discord = require('discord.js');
var TA = [
    "**Dik Geldi Bu ne aq**", ////evet para dikte gelir xD
    " **Tura** ",
    " **Yazı** ",
    " **Yazı** ",
    " **Dik geldi bu ne aq** ",
    " **Yazı** ",
    " **Tura** ",
    " **Tura** ",
    " **Dik geldi bu ne aq** ",
    " **Tura** ",
    " **Yazı** "
];
module.exports.run = async (bot, message, args) => {
message.channel.send(message.author.toString() + " **Para Atılıyor! Vee Atıldı: ** " + (TA[Math.floor(Math.random() * TA.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı Tura atarsın.',
  usage: 'yazı-tura'
};