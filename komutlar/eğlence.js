const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedDescrisCode = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**▬[ <a:rengarenkigne:821514216711258142> **Descris Bot Eğlence Sistemi** <a:rengarenkigne:821514216711258142> ]▬**  \n\n> <a:hypesquad1:821515921339318322> **Şuanda kullanılan prefix** `d!`")
.setThumbnail("https://cdn.discordapp.com/attachments/823449558423830558/823453530680852520/pp.jpg")
.setDescription(`

▬▬[ <a:hypesquad1:821515921339318322> **Descris Bot Eğlence Sistemi** <a:hypesquad1:821515921339318322> ]▬▬

> <a:Fire:821514165436284949> **» d!adamasmaca** 
> <a:Fire:821514165436284949> **» d!yazan-kazanır**
> <a:Fire:821514165436284949> **» d!aykutelmas**
> <a:Fire:821514165436284949> **» d!balık-tut**
> <a:Fire:821514165436284949> **» d!beleş-nitro**
> <a:Fire:821514165436284949> **» d!efkarım**
> <a:Fire:821514165436284949> **» d!espri**
> <a:Fire:821514165436284949> **» d!hesapla**
> <a:Fire:821514165436284949> **» d!ilginçbilgi**
> <a:Fire:821514165436284949> **» d!kaç-cm**
> <a:Fire:821514165436284949> **» d!kar-topu**
> <a:Fire:821514165436284949> **» d!napim**
> <a:Fire:821514165436284949> **» d!ömrüm**
> <a:Fire:821514165436284949> **» d!taksimdayı**
> <a:Fire:821514165436284949> **» d!yılbaşı**
> <a:Fire:821514165436284949> **» d!aşkölçer**

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
    name: 'yardım-eğlence', 
    description: 'Eğlence menüsü',
    usage: 'yardım-eğlence'
};