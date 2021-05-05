const Discord = require('discord.js');
exports.run = async (client , message, args ) => {
const descris = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor('Descris Bot')
.setDescription(` <a:hypesquad1:821515921339318322> [Beni Davet Et!](https://discord.com/api/oauth2/authorize?client_id=820354400568606770&permissions=8&scope=bot) <a:Fire:821514165436284949>
<a:hypesquad1:821515921339318322> [Destek sunucum](https://discord.gg/pjThHRAhQv) <a:Fire:821514165436284949>`)
message.channel.send(descris)
};
exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: 0
}
exports.help = {
name: 'davet'
};