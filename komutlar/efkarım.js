const Discord = require("discord.js");

exports.run = (client, message) => {

const Descris = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**Descris** \n**Efkarınız:** **%${Descris}** **Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "Descris | Efkarınızı ölçer",
  usage: "efkar Ölçer"
};
