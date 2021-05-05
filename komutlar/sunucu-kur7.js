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


message.guild.roles.create({ data: { name: '🏆・Kurucu' }, reason: 'ayn' }).then(s => s.setColor('#ff0000'))
message.guild.roles.create({ data: { name: '💾・Bot' }, reason: 'ayn' }).then(s => s.setColor('#ff8100'))
message.guild.roles.create({ data: { name: '🌠・Yönetim' }, reason: 'ayn' }).then(s => s.setColor('#00bdff'))
message.guild.roles.create({ data: { name: '👑・ Discord Yetkili' }, reason: 'ayn' }).then(s => s.setColor('#0011f8'))
message.guild.roles.create({ data: { name: '🔮・Moderator' }, reason: 'ayn' }).then(s => s.setColor('#00ff08'))
message.guild.roles.create({ data: { name: '🎥・Youtuber & Streamer' }, reason: 'ayn' }).then(s => s.setColor('#20d1d3'))
message.guild.roles.create({ data: { name: '👑・Yayın İzleyicileri' }, reason: 'ayn' }).then(s => s.setColor('#070303'))
message.guild.roles.create({ data: { name: '⚙️・Destek Ekibi' }, reason: 'ayn' }).then(s => s.setColor('#36f70c'))
message.guild.roles.create({ data: { name: '💎・Vip' }, reason: 'ayn' }).then(s => s.setColor('#00ffb6'))
message.guild.roles.create({ data: { name: '🍸・Üye' }, reason: 'ayn' }).then(s => s.setColor('#caf7fc'))
message.guild.roles.create({ data: { name: '💎・Çekiliş Katılımcısı' }, reason: 'ayn' }).then(s => s.setColor('#837f7f'))

message.guild.channels.create('●▬▬▬▬๑「📢」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('「📚」kurallar', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('「📢」duyurular', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('「✅」oylama', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('「📢」gelen-giden', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('「📢」komutlar', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('「📢」çekiliş', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('「📢」sunucu-i̇stekleri̇', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('●▬▬▬▬๑「💬」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('「💬」sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('「🔮」bot-komut', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('「📷」galeri', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('「🎮」keli̇me-türetme', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('●▬▬▬▬๑「🎬」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('「🎬」yayın-duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('「🎬」Yayın Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('「🎬」Video Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('「🎬」Yayın Bekleme Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
});

message.guild.channels.create('●▬▬▬▬๑「🔧」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('「🔧」moderatör-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('「🔧」moderatör-başvuru', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('「🔧」Moderatör Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
});

message.guild.channels.create('●▬▬▬▬๑「🔊」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('「🔊」Sohbet', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('「🔊」Sohbet', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('「🔊」Sohbet', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('●▬▬▬▬๑「🎤」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('「🎵」Müzik', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('「🎵」Müzik', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('「🎵」Müzik', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('●▬▬▬▬๑「🌀」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('「🌀」otorol', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('「🌀」öneri', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('「🌀」sayaç', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('●▬▬๑「AMONG US」๑▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('「🎮」Among Us ¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('「🎮」Among Us ²', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('「🎮」Among Us ³', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('●▬▬▬▬๑「CS:GO」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('「🎮」CS:GO 1', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('「🎮」CS:GO 2', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('「🎮」CS:GO 3', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
});

message.guild.channels.create('●▬▬๑「VALORANT」๑▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('「🎮」VALORANT 1', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('「🎮」VALORANT 2', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('「🎮」VALORANT 3', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
});

message.guild.channels.create('●▬▬๑「MOBİLE LEGENDS」๑▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('「🎮」MOBİLE LEGENDS 1', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('「🎮」MOBİLE LEGENDS 2', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('「🎮」MOBİLE LEGENDS 3', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
});

message.guild.channels.create('●▬▬๑「FALL GUYS」๑▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('「🎮」FALL GUYS 1', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(4));
message.guild.channels.create('「🎮」FALL GUYS 2', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(4));
message.guild.channels.create('「🎮」FALL GUYS 3', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(4));
});

message.guild.channels.create('●▬▬๑「FORTNİTE」๑▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('「🎮」FORTNİTE 1', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(4));
message.guild.channels.create('「🎮」FORTNİTE 2', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(4));
message.guild.channels.create('「🎮」FORTNİTE 3', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(4));
});

message.guild.channels.create('●▬▬▬▬๑「💤」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('「💤」AFK', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(99));
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
  aliases: ['sunucu-kur7'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur7'
};