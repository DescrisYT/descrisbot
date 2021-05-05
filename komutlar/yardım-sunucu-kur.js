const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedDescrisCode = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**▬[ <a:rengarenkigne:821514216711258142> **Sunucu Kur Sistemi** <a:rengarenkigne:821514216711258142> ]▬**  \n\n> <a:hypesquad1:821515921339318322> **Şuanda kullanılan prefix** `d!`")
.setThumbnail("https://cdn.discordapp.com/attachments/823449558423830558/823453530680852520/pp.jpg")
.setDescription(`

▬▬[ <a:hypesquad1:821515921339318322> **Sunucu Kur Sistemi** <a:hypesquad1:821515921339318322> ]▬▬

> <a:Fire:821514165436284949> » Sunuculardan birini Kurduğunuzda Rollerin Permlerini Sizin Ayarlamanız Gerekiyor.

> <a:Fire:821514165436284949> **» d!sunucu-kur1:** Oyun
> <a:Fire:821514165436284949> **» d!sunucu-kur2:** Destek 
> <a:Fire:821514165436284949> **» d!sunucu-kur3:** Emoji Odalı Public Sunucu
> <a:Fire:821514165436284949> **» d!sunucu-kur4:** Botlist 
> <a:Fire:821514165436284949> **» d!sunucu-kur5:** Normal 
> <a:Fire:821514165436284949> **» d!sunucu-kur6:** 2.Normal
> <a:Fire:821514165436284949> **» d!sunucu-kur7:** Youtuber & Streamer
> <a:Fire:821514165436284949> **» d!sunucu-kur8:** J4J 
> <a:Fire:821514165436284949> **» d!sunucu-kur9:** Taglı Büyük Public
> <a:Fire:821514165436284949> **» d!sunucu-kur10:** Gif & J4J

**» Bağlantılar** 
<a:rengarenkigne:821514216711258142>[**Destek Sunucusu**](https://discord.gg/ZewUvATebn) • <a:rengarenkigne:821514216711258142>[**Botun Davet Linki**](https://discord.com/api/oauth2/authorize?client_id=820354400568606770&permissions=8&scope=bot)
`)
 
.setImage('https://cdn.discordapp.com/attachments/823449558423830558/823459493730975794/standard_15.gif')
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedDescrisCode)
.then; //Descris

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım-sunucu-kur', 
    description: 'Sunucu Kur Yardım Menüsü',
    usage: 'sunucu-kur'
};