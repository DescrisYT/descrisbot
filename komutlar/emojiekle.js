const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if(!message.member.roles.cache.has("808297886404182016") && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "⛔ Bu komutu kullanabilmek için `Emojileri yönet` yetkisine sahip olmalısınız"
    );
  let lrowslink = args[0];
  let lrowsisim = args[1];
  let guild = message.guild;
  if (!lrowslink)
    return message.channel.send("Emojinin alınacağı linki girmelisin.");
  if (!lrowsisim) return message.channel.send("Emojinin ismini belirlemedin");

  let embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setAuthor("Emoji Eklendi", message.guild.iconURL)
    .setDescription(` <a:Fire:821514165436284949> **${lrowsisim} İsmiyle Yeni Bir Emoji Oluşturuldu.**`)
    .setFooter(`<a:Fire:821514165436284949> Komutu kullanan yetkili : ${message.author.username}`);

  guild
    .emojis.create(`${lrowslink}`, `${lrowsisim}`)
    .then(emoji => message.channel.send(embed));
  message.react("✅").catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["addemoji", "emojioluştur", "ee"],
  permLevel: 0
};
exports.help = {
  name: "emojiekle",
  description: "Sunucuya emoji eklersiniz",
  usage: "emojiekle <link> <isim>"
};