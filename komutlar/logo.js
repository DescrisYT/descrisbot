const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedDescrisCode = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**▬[ <a:rengarenkigne:821514216711258142> **Descris Bot Logo Sistemi** <a:rengarenkigne:821514216711258142> ]▬**  \n\n> <a:hypesquad1:821515921339318322> **Şuanda kullanılan prefix** `d!`")
.setThumbnail("https://cdn.discordapp.com/attachments/823449558423830558/823453530680852520/pp.jpg")
.setDescription(`

▬▬[ <a:hypesquad1:821515921339318322> **Descris Bot Logo Sistemi** <a:hypesquad1:821515921339318322> ]▬▬

> <a:Fire:821514165436284949> **» d!anime**
> <a:Fire:821514165436284949> **» d!ok**
> <a:Fire:821514165436284949> **» d!mavi**
> <a:Fire:821514165436284949> **» d!booking**
> <a:Fire:821514165436284949> **» d!bubble**
> <a:Fire:821514165436284949> **» d!cool**
> <a:Fire:821514165436284949> **» d!dinamik**
> <a:Fire:821514165436284949> **» d!fire**
> <a:Fire:821514165436284949> **» d!gold**
> <a:Fire:821514165436284949> **» d!green**
> <a:Fire:821514165436284949> **» d!comic**
> <a:Fire:821514165436284949> **» d!müzik**
> <a:Fire:821514165436284949> **» d!renkli**
> <a:Fire:821514165436284949> **» d!skull**

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
    name: 'yardım-logo', 
    description: 'Logo menüsü',
    usage: 'yardım-logo'
};