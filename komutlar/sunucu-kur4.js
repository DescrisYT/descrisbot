const Discord = require('discord.js');
const data = require('wio.db');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Public')
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


message.guild.roles.create({ data: { name: '🔑' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '👑・OWNER' }, reason: 'ayn' }).then(s => s.setColor('#f4fa58'))
message.guild.roles.create({ data: { name: '🔋・Projemiz' }, reason: 'ayn' }).then(s => s.setColor('#00ff2f'))
message.guild.roles.create({ data: { name: '💫・Admin' }, reason: 'ayn' }).then(s => s.setColor('#7cd1bc'))
message.guild.roles.create({ data: { name: '💀・Tester' }, reason: 'ayn' }).then(s => s.setColor('#821919'))
message.guild.roles.create({ data: { name: '👥・Destek Ekibi' }, reason: 'ayn' }).then(s => s.setColor('#000bff'))
message.guild.roles.create({ data: { name: '👽・Kayıt Sorumlusu' }, reason: 'ayn' }).then(s => s.setColor('#33cd27'))
message.guild.roles.create({ data: { name: '🛸・Sertifikalı Geliştirici' }, reason: 'ayn' }).then(s => s.setColor('#d163ff'))
message.guild.roles.create({ data: { name: '🖥️・Onaylı Geliştirici' }, reason: 'ayn' }).then(s => s.setColor('#ff00e4'))
message.guild.roles.create({ data: { name: '💻・Geliştirici' }, reason: 'ayn' }).then(s => s.setColor('#1ff4b1'))
message.guild.roles.create({ data: { name: '✨・Özel Üye' }, reason: 'ayn' }).then(s => s.setColor('#21abd8'))
message.guild.roles.create({ data: { name: '⚡・Üye' }, reason: 'ayn' }).then(s => s.setColor('#09ef28'))
message.guild.roles.create({ data: { name: '🔒・Sertifikalı Bot' }, reason: 'ayn' }).then(s => s.setColor('#33cd27'))
message.guild.roles.create({ data: { name: '📱・Bot' }, reason: 'ayn' }).then(s => s.setColor('#7de312'))
message.guild.roles.create({ data: { name: '👀・Partner Görme' }, reason: 'ayn' }).then(s => s.setColor('#cae801'))
message.guild.roles.create({ data: { name: '🎀・Onaylı Bot' }, reason: 'ayn' }).then(s => s.setColor('#ff00fa'))

message.guild.channels.create('❗・Bilgi Kanallar', {type: 'category'}).then(parent => {
message.guild.channels.create('🚀・boosters', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎉・çekiliş', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🛸・duyurular', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔔・descris-bot-güncelleme', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💀・oylama', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🧩・descris-bot-davet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('✯・invite', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('📓・Önemli Kanallar', {type: 'category'}).then(parent => {
message.guild.channels.create('📓・kurallar', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📛・bilgi', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📋・sunucularınız', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('🔩・Lobi', {type: 'category'}).then(parent => {
message.guild.channels.create('💬・sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🤖・komut', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📷・galeri', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎩・yetkili-alım', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('🔊・Ses Kanalları', {type: 'category'}).then(parent => {
message.guild.channels.create('🔊・ Sohbet ¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🔊・ Sohbet ²', {type: 'voice'}).then(c => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🔊・ Sohbet ³', {type: 'voice'}).then(c => a.setParent(parent.id) && a.setUserLimit(15));
});

message.guild.channels.create('🎶・Müzik Kanalları', {type: 'category'}).then(parent => {
message.guild.channels.create('🎶・disko-komut', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎵・ Disko ¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎵・ Disko ²', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎵・ Disko ³', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('💾・Log Kanalları', {type: 'category'}).then(parent => {
message.guild.channels.create('💾・mod-log', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('🔨・Botlist Odaları', {type: 'category'}).then(parent => {
message.guild.channels.create('🔒・yetkili', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🌈・yetkili-log', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🌟・bot-şartları', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💫・bot-ekle', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🌈・bot-log', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔨・bot-test', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('💤・Klavyeden Uzakta', {type: 'category'}).then(parent => {
message.guild.channels.create('💤 ・Uyuyan Güzel', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('🔑・Yetkili Odaları', {type: 'category'}).then(parent => {
message.guild.channels.create('📢・yetkili-duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💬・yetkili-sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔊・Yetkili Sohbet', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
});

message.guild.channels.create('PARTNER', {type: 'category'}).then(parent => {
message.guild.channels.create('👀・partner-görme', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🚀・partner', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔒・partner-text', {type: 'text'}).then(c => c.setParent(parent.id));
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
  aliases: ['sunucu-kur4'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur4'
};