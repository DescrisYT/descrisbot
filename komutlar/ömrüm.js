const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {

message.channel.send("İnceleniyor").then(message => {

    var red = [      //descris
      "30 Yıl sonra ölüceksin",
      "10.9.8.7.6...",
      "80 yıl daha ömrün var",
      "Dünyanın en yaşlı insanı olcaksın",
      "Ömrün Kısa Üzgünüm",
      "Daha ömrün var sakin ol",
    ];
    var red = red[Math.floor(Math.random() * red.length)];  //descris
    message.edit(`${red}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kalan-zaman"],
  permLevel: 0
};

exports.help = {
  name: "ömrüm",
  description: "Ne kadar ömrün var.",
  usage: "ömrüm"
};