const Discord = require('discord.js');
const data = require('wio.db');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Youtube Sunucusu')
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


message.guild.roles.create({ data: { name: '👑・Founder' }, reason: 'ayn' }).then(s => s.setColor('#0eed2f'))
message.guild.roles.create({ data: { name: '------------------------' }, reason: 'ayn' }).then(s => s.setColor('#cdcdcd'))
message.guild.roles.create({ data: { name: '🎈・Manager' }, reason: 'ayn' }).then(s => s.setColor('#ffdb23'))
message.guild.roles.create({ data: { name: '🎈・Admin' }, reason: 'ayn' }).then(s => s.setColor('#ffdb23'))
message.guild.roles.create({ data: { name: '🎈・Moderator' }, reason: 'ayn' }).then(s => s.setColor('#ffdb23'))
message.guild.roles.create({ data: { name: '------------------------' }, reason: 'ayn' }).then(s => s.setColor('#cdcdcd'))
message.guild.roles.create({ data: { name: '❇️・Staff' }, reason: 'ayn' }).then(s => s.setColor('#2855b0'))
message.guild.roles.create({ data: { name: '❇️・Trial Staff' }, reason: 'ayn' }).then(s => s.setColor('#2855b0'))
message.guild.roles.create({ data: { name: '------------------------' }, reason: 'ayn' }).then(s => s.setColor('#cdcdcd'))
message.guild.roles.create({ data: { name: '💎・VIP' }, reason: 'ayn' }).then(s => s.setColor('#22c4cb'))
message.guild.roles.create({ data: { name: '🍇・Members' }, reason: 'ayn' }).then(s => s.setColor('#22c4cb'))
message.guild.roles.create({ data: { name: '🍇・Bot'}, reason: 'ayn' }).then(s => s.setColor('#22c4cb'))

message.guild.channels.create('Founder', {type: 'category'}).then(parent => {
message.guild.channels.create('Founder', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
});

message.guild.channels.create('🎈・Information', {type: 'category'}).then(parent => {
message.guild.channels.create('📜・rules', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📢・announcements', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔥・be-staff', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('🚀・Boost', {type: 'category'}).then(parent => {
message.guild.channels.create('🎁・booster-info', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🚀・boosters', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('🍸・Lobby', {type: 'category'}).then(parent => {
message.guild.channels.create('🍭・j4j-fast', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🍬・j4j-advertise', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🍩・s4s-fast', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⛔・bot-report', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('💭・Chatting', {type: 'category'}).then(parent => {
message.guild.channels.create('💭・chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔧・bot-commands', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📷・photo-chat', {type: 'text'}).then(c => c.setParent(parent.id));
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
  aliases: ['sunucu-kur8'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur8'
};