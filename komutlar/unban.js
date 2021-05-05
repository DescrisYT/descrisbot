const Discord = require('discord.js');

exports.run = async(client, message, args) => {
 var guild = message.guild;
 var banlayan = message.author.tag;
 var kisi = message.mentions.users.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]);
 if(!kisi) return message.reply("Yasağini Kaldırcam Uyenin `ID` BElirtmen Gerekiyor")
 //var gun = args.slice(1).join(' ') ? `${args.slice(1).join(' ')}` :"";
 var neden = args.slice(1).join(' ') 
 let banxx = await message.guild.fetchBans();

if (!banxx.get(kisi.id)) return message.reply(":x: Kişi Yasaklanmamış")

if(neden) {
  try {
  await message.channel.send(`${kisi.tag} adlı kullanıcının banı açıldı <a:rengarenkigne:821514216711258142>`)
  await guild.members.unban(kisi.id, neden);
} catch (error) {
  message.reply("Bir Sorun Oldu Lütfen Botun Geliştiricisi veya Yapımcısıyla İletişime Geçiniz!")
  console.log(error)
}
} else {
  try {
    await message.channel.send(`${kisi.tag} adlı kullanıcının banı açıldı. <a:rengarenkigne:821514216711258142>`)
    await guild.members.unban(kisi.id, neden);
  } catch (error) {
    message.reply("Bir Sorun Oldu Lütfen <@528811673038094356> İletişime Geçiniz!")
    console.log(error)
  }

}




};


exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'Banlı olan kişiyi idsi ile beraber banını kaldırırsınz',
  usage: 'unban'
};