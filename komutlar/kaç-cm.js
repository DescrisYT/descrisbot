const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Descris | Hemen Diyorum Abi 1 Saniye..").then(message => {

    var Descris = [

      "**Bunada şükür  18CM ** :eggplant: ",
      "**Aga bune aq 11CM ** :eggplant:",
      "**Seninki  32CM  ** :eggplant:",
      "**Seninki  35CM ** :eggplant:",
      "**Bamyadan daha küçük :(  8CM  ** :eggplant:",
      "**Kardeşim git dağa taşa sürt  65CM  ** :eggplant:",
      "**Bişey demiyorum 5CM  ** :eggplant:",
      "**Awesome 31CM  ** :eggplant:",
      "**İdeal  14CM ** :eggplant:",
      "**Kardeşim cinsin ne  1CM ** :eggplant:"

    ];

    var Descris = Descris[Math.floor(Math.random() * Descris.length)];

    message.edit(`${Descris}`);
  
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kaçcm", "cmkaç", "kaçcm", "cm-kaç"],
  permLevel: 0
};

exports.help = {
  name: "kaç-cm",
  description: "Malafatını Söyler.",
  usage: "kaçcm"
};