const Discord = require('discord.js');
const data = require('wio.db');


exports.run = async (client, message, args) => {
if( message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.discordapp.com/attachments/811514313352544287/811552544731561994/Ekran_Alnts.PNG'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Oyun & Sohbet Tema')
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author} **Sunucunun** kurulmaya başlıyacak onaylıyormusun? 

**Dipnot:** Bazı kanllar silinmemiş gibi görünebilir. Biraz bekleyin hata düzelicektir.`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());


message.guild.roles.create({ data: { name: '・Üye' }, reason: 'ayn' }).then(s => s.setColor('#00ff40'))
message.guild.roles.create({ data: { name: '・Descris#9981' }, reason: 'ayn' }).then(s => s.setColor('#f70c0c'))
message.guild.roles.create({ data: { name: '・Botlar' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: '🎮 | CSGO' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: '🎮 | Zula' }, reason: 'ayn' }).then(s => s.setColor('#29cb79'))
message.guild.roles.create({ data: { name: '🎮 | Apex Legends' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))
message.guild.roles.create({ data: { name: '🎮 | Pubg Mobile' }, reason: 'ayn' }).then(s => s.setColor('#2efec8'))
message.guild.roles.create({ data: { name: '🎮 | League of Legends' }, reason: 'ayn' }).then(s => s.setColor('#3299d8'))
message.guild.roles.create({ data: { name: '🎮 | Mobile Legends' }, reason: 'ayn' }).then(s => s.setColor('#ffbf00'))
message.guild.roles.create({ data: { name: '🎮 | PUBG' }, reason: 'ayn' }).then(s => s.setColor('#81f79f'))
message.guild.roles.create({ data: { name: '🎮 | Fortnite' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: '💔 | Sevgilim var' }, reason: 'ayn' }).then(s => s.setColor('#ff0080'))
message.guild.roles.create({ data: { name: '💔 | Sevgilim yok' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))

message.guild.channels.create('●▬▬๑「Kayıt Alanı」๑▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('・kayıt-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎤 | Teyit ¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('🎤 | Teyit ²', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('🎤 | Teyit ³', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('§▬▬▬「BİLGİLENDİRME」▬▬▬§', {type: 'category'}).then(parent => {
message.guild.channels.create('📃・kurallar', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📢・duyurular', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔔・video-duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('☆▬▬「GENEL」▬▬☆', {type: 'category'}).then(parent => {
message.guild.channels.create('💬・sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📷・foto-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🤖・bot-komut', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('☆▬▬▬▬「🖨」▬▬▬▬☆', {type: 'category'}).then(parent => {
message.guild.channels.create('📥・sayaç', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💾・sunucu-logs', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🚪・giriş-çıkış', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('♢▬▬▬「YÖNETİM」▬▬▬♢', {type: 'category'}).then(parent => {
message.guild.channels.create('📌・şikayet-öneri', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🏆・Yönetici Odası', {type: 'text'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🏆・Toplantı', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('●▬▬▬▬๑「🗣」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('🍺 ・ Sohbet', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('💎 ・ Özel Sohbet', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('🍻 ・ AFK', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(99));
});

message.guild.channels.create('●▬▬▬▬๑「🎵」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('🎵 ・ Music Room', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎤 ・ Konser', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🔓 ・ Takılmaca', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('●▬▬▬▬๑「Eğlence」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('・tuttu-tutmadı', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('・bir-söz-bırak', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('・instagram', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('・sayı-sayma', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('・şarkı-türet', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('●▬▬▬▬๑「🎰」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('👥・pre-arama-odası', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎮・League Of Legends', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・ZULA', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🎮・CSGO', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・PUBG', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・FORTNİTE', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・MİNECRAFT', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🎮・ROBLOX', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・APEX', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
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
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur3'
};