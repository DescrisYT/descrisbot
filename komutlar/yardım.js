const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedDescrisCode = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**▬▬[ <a:hypesquad1:821515921339318322> **Descris Bot** <a:hypesquad1:821515921339318322> ]▬▬**  \n\n> <a:hypesquad1:821515921339318322> **Şuanda kullanılan prefix** `d!`")
.setThumbnail("https://cdn.discordapp.com/attachments/823449558423830558/823453530680852520/pp.jpg")
.setDescription(`

▬▬[ <a:hypesquad1:821515921339318322> **Descris Bot** <a:hypesquad1:821515921339318322> ]▬▬

> <a:Fire:821514165436284949> **» d!yardım-moderasyon**
> <a:Fire:821514165436284949> **» d!yardım-moderasyon2**
> <a:Fire:821514165436284949> **» d!yardım-eğlence**
> <a:Fire:821514165436284949> **» d!yardım-logo**
> <a:Fire:821514165436284949> **» d!yardım-sunucu-kur**


> <a:Fire:821514165436284949> **» d!istatistik**
> <a:Fire:821514165436284949> **» d!yapımcım**
> <a:Fire:821514165436284949> **» d!bug-bildir <bug>**


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
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};