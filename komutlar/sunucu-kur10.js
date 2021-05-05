const Discord = require('discord.js');
const data = require('wio.db');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Gif Share Sunucusu')
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author} **Sunucunun kurulmasını onaylıyor musun?** 😇

**Dipnot:** Bazı kanllar silinmemiş gibi görünebilir. Discord dan çıkıp girin düzelir.`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());


message.guild.roles.create({ data: { name: 'Owner' }, reason: 'ayn' }).then(s => s.setColor('#f2f3f3'))
message.guild.roles.create({ data: { name: 'Founder' }, reason: 'ayn' }).then(s => s.setColor('#0d2943'))
message.guild.roles.create({ data: { name: 'Gif Manager 🌾 🍁' }, reason: 'ayn' }).then(s => s.setColor('#da004e'))
message.guild.roles.create({ data: { name: 'Gif Moderator 🍃' }, reason: 'ayn' }).then(s => s.setColor('#ae6800'))
message.guild.roles.create({ data: { name: 'Gif Assistant' }, reason: 'ayn' }).then(s => s.setColor('#843da4'))
message.guild.roles.create({ data: { name: 'Gif Designer 🔮' }, reason: 'ayn' }).then(s => s.setColor('#ea172d'))
message.guild.roles.create({ data: { name: 'Gif Supervisor 🍁' }, reason: 'ayn' }).then(s => s.setColor('#cafa24'))
message.guild.roles.create({ data: { name: 'Gif Supporter' }, reason: 'ayn' }).then(s => s.setColor('#cb15d0'))


message.guild.channels.create('J4J', {type: 'category'}).then(parent => {
message.guild.channels.create('💎gif-j4j-tr', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💎gif-j4j-fast', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💎gif-report', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('GIF BASE INFORMATİON', {type: 'category'}).then(parent => {
message.guild.channels.create('💗gif-announcement', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📋gif-rules', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📋gif-roles', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📋gif-level-roles', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💎gif-booster', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💎gif-booster-info', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎁gif-giveaway', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎁gif-proof', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('GİF PLUS GENERAL', {type: 'category'}).then(parent => {
message.guild.channels.create('🎀gif-chat-tr', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎀gif-chat-eu', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎀gif-chat-global', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎀gif-photo-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔨gif-command', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('MUSTAFA KEMAL ATATÜRK', {type: 'category'}).then(parent => {
message.guild.channels.create('mka-gif👑', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('mka-pp👑', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('WOMAN GİF', {type: 'category'}).then(parent => {
message.guild.channels.create('woman-gif🌸', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('woman-pp🌸', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('MAN GİF', {type: 'category'}).then(parent => {
message.guild.channels.create('man-gif⚡', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('man-pp⚡', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('COUPLE GİF', {type: 'category'}).then(parent => {
message.guild.channels.create('couple-gif💖', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('couple-pp💖', {type: 'text'}).then(c => c.setParent(parent.id));
});


message.guild.channels.create('BFF GİF', {type: 'category'}).then(parent => {
message.guild.channels.create('bff-gif💫', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('bff-pp💫', {type: 'text'}).then(c => c.setParent(parent.id));
});
});

no.on('collect', async reaction => {
resulter.delete();
});

})


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucu-kur10'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur10'
};