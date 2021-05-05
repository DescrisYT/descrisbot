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


message.guild.roles.create({ data: { name: '◈ | Owner Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#f2f7b3'))
message.guild.roles.create({ data: { name: '◈ | Poine Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#373ece'))
message.guild.roles.create({ data: { name: '-------------------------' }, reason: 'ayn' }).then(s => s.setColor('#ff0000'))
message.guild.roles.create({ data: { name: '◈ | Rhode Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#a46e22'))
message.guild.roles.create({ data: { name: '◈ | Hyaden Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#07080b'))
message.guild.roles.create({ data: { name: '◈ | Alkyone Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#66a67b'))
message.guild.roles.create({ data: { name: '◈ | Sirius Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#00dbe5'))
message.guild.roles.create({ data: { name: '-------------------------' }, reason: 'ayn' }).then(s => s.setColor('#dce816'))
message.guild.roles.create({ data: { name: '◈ | Darchelle Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#000b61'))
message.guild.roles.create({ data: { name: '◈ | Crown Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#5ed7d6'))
message.guild.roles.create({ data: { name: '◈ | Procyon Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#6f65f3'))
message.guild.roles.create({ data: { name: '◈ | Paranor Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#ffa600'))
message.guild.roles.create({ data: { name: '◈ | Dark Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#00ffb0'))
message.guild.roles.create({ data: { name: '◈ | Pollux Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#ff4848'))
message.guild.roles.create({ data: { name: '-------------------------' }, reason: 'ayn' }).then(s => s.setColor('#ff0000'))
message.guild.roles.create({ data: { name: '◈ | Angel Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#664dcf'))
message.guild.roles.create({ data: { name: '◈ | Last Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#0035b2'))
message.guild.roles.create({ data: { name: '◈ | Emperor Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#bcff32'))
message.guild.roles.create({ data: { name: '◈ | Hunter Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#a145df'))
message.guild.roles.create({ data: { name: '◈ | Ability Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#609e8e'))
message.guild.roles.create({ data: { name: '-------------------------' }, reason: 'ayn' }).then(s => s.setColor('#ff0000'))
message.guild.roles.create({ data: { name: '◈ | Etkinlik Yöneticisi' }, reason: 'ayn' }).then(s => s.setColor('#c10000'))
message.guild.roles.create({ data: { name: '◈ | Sponsor Sorumlusu' }, reason: 'ayn' }).then(s => s.setColor('#00ffcc'))
message.guild.roles.create({ data: { name: '◈ | Yetkili Alım Sorumlusu' }, reason: 'ayn' }).then(s => s.setColor('#44df4c'))
message.guild.roles.create({ data: { name: '-------------------------' }, reason: 'ayn' }).then(s => s.setColor('#ff0000'))
message.guild.roles.create({ data: { name: '◈ | Register Hammer' }, reason: 'ayn' }).then(s => s.setColor('#b6b6b6'))
message.guild.roles.create({ data: { name: '◈ | Mute Hammer' }, reason: 'ayn' }).then(s => s.setColor('#b6b6b6'))
message.guild.roles.create({ data: { name: '◈ | Voice Mute Hammer' }, reason: 'ayn' }).then(s => s.setColor('#b6b6b6'))
message.guild.roles.create({ data: { name: '◈ | Ban Hammer' }, reason: 'ayn' }).then(s => s.setColor('#b6b6b6'))
message.guild.roles.create({ data: { name: '-------------------------' }, reason: 'ayn' }).then(s => s.setColor('#fa0000'))
message.guild.roles.create({ data: { name: '◈ | VIP Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#11ffa6'))
message.guild.roles.create({ data: { name: '◈ | Tagges Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#6eba62'))
message.guild.roles.create({ data: { name: '◈ | Lady Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#ff186b'))
message.guild.roles.create({ data: { name: '◈ | Lord Of Descris' }, reason: 'ayn' }).then(s => s.setColor('#120956'))
message.guild.roles.create({ data: { name: '-------------------------' }, reason: 'ayn' }).then(s => s.setColor('#f00000'))
message.guild.roles.create({ data: { name: '◈ | Müzisyen' }, reason: 'ayn' }).then(s => s.setColor('#f00000'))
message.guild.roles.create({ data: { name: '◈ | Vokal' }, reason: 'ayn' }).then(s => s.setColor('#0e88f1'))
message.guild.roles.create({ data: { name: '◈ | YouTuber / Streamer' }, reason: 'ayn' }).then(s => s.setColor('#770af1'))
message.guild.roles.create({ data: { name: '◈ | Instagrammer' }, reason: 'ayn' }).then(s => s.setColor('#e1e60f'))
message.guild.roles.create({ data: { name: '◈ | Gitarist' }, reason: 'ayn' }).then(s => s.setColor('#55ff20'))
message.guild.roles.create({ data: { name: '◈ | Şair' }, reason: 'ayn' }).then(s => s.setColor('#ff00b7'))
message.guild.roles.create({ data: { name: '◈ | Ressam' }, reason: 'ayn' }).then(s => s.setColor('#00ffcd'))
message.guild.roles.create({ data: { name: '◈ | Beatbox' }, reason: 'ayn' }).then(s => s.setColor('#49b7ff'))
message.guild.roles.create({ data: { name: '◈ | Tasarımcı' }, reason: 'ayn' }).then(s => s.setColor('#b00f0f'))
message.guild.roles.create({ data: { name: '-------------------------' }, reason: 'ayn' }).then(s => s.setColor('#e60000'))
message.guild.roles.create({ data: { name: '◈ | Sevgili Yapmıyorum' }, reason: 'ayn' }).then(s => s.setColor('#00ffe3'))
message.guild.roles.create({ data: { name: '◈ | Sevgilim Var' }, reason: 'ayn' }).then(s => s.setColor('#277ecd'))
message.guild.roles.create({ data: { name: '◈ | Sevgilim Yok' }, reason: 'ayn' }).then(s => s.setColor('#da004e'))
message.guild.roles.create({ data: { name: '-------------------------' }, reason: 'ayn' }).then(s => s.setColor('#e60000'))
message.guild.roles.create({ data: { name: '◈ | Zula' }, reason: 'ayn' }).then(s => s.setColor('#00c996'))
message.guild.roles.create({ data: { name: '◈ | Counter-Strike: Global Offensive' }, reason: 'ayn' }).then(s => s.setColor('#befbff'))
message.guild.roles.create({ data: { name: '◈ | League Of Legends' }, reason: 'ayn' }).then(s => s.setColor('#d068ff'))
message.guild.roles.create({ data: { name: '◈ | Among Us' }, reason: 'ayn' }).then(s => s.setColor('#81d5ff'))
message.guild.roles.create({ data: { name: '◈ | Valorant' }, reason: 'ayn' }).then(s => s.setColor('#f6ff70'))
message.guild.roles.create({ data: { name: '◈ | Minecraft' }, reason: 'ayn' }).then(s => s.setColor('#ffc877'))
message.guild.roles.create({ data: { name: '◈ | PUBG' }, reason: 'ayn' }).then(s => s.setColor('#56cbae'))
message.guild.roles.create({ data: { name: '-------------------------' }, reason: 'ayn' }).then(s => s.setColor('#ff0000'))
message.guild.roles.create({ data: { name: '◈ | Galatasaray' }, reason: 'ayn' }).then(s => s.setColor('#ff0000'))
message.guild.roles.create({ data: { name: '◈ | Fenerbahçe' }, reason: 'ayn' }).then(s => s.setColor('#1100ab'))
message.guild.roles.create({ data: { name: '◈ | Beşiktaş' }, reason: 'ayn' }).then(s => s.setColor('#14071b'))
message.guild.roles.create({ data: { name: 'Muted' }, reason: 'ayn' }).then(s => s.setColor('#b8e8ff'))
message.guild.roles.create({ data: { name: 'Susturulmuş' }, reason: 'ayn' }).then(s => s.setColor('##b8e8ff'))
message.guild.roles.create({ data: { name: '◈ | Unregistered' }, reason: 'ayn' }).then(s => s.setColor('#d5a727'))
message.guild.roles.create({ data: { name: 'Descris#9981' }, reason: 'ayn' }).then(s => s.setColor('#e60000'))


message.guild.channels.create('1881-193∞', {type: 'category'}).then(parent => {
message.guild.channels.create('1881-193∞', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('Welcome To Descris', {type: 'category'}).then(parent => {
message.guild.channels.create('◈・register-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・Registrarion¹', {type: 'voice'}).then(c => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('◈・Registrarion²', {type: 'voice'}).then(c => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('◈・Registrarion³', {type: 'voice'}).then(c => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('◈・Registrarion⁴', {type: 'voice'}).then(c => a.setParent(parent.id) && a.setUserLimit(15));
});

message.guild.channels.create('Information', {type: 'category'}).then(parent => {
message.guild.channels.create('◈・rules', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・announcements', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・etkinlik-duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・role-information', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・anket', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('Text Channels', {type: 'category'}).then(parent => {
message.guild.channels.create('◈・descris-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・bot-commands', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・photo-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・spam', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・i̇nstagram', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・dizi-film-öneri', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('Choosing A Role', {type: 'category'}).then(parent => {
message.guild.channels.create('◈・takım-seçimi', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・ilişki-seçimi', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・oyun-seçimi', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('Tag & Boost Info', {type: 'category'}).then(parent => {
message.guild.channels.create('◈・boost-information', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・booster-log', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・tag-information', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・tag-log', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('Staff', {type: 'category'}).then(parent => {
message.guild.channels.create('◈・yetkili-sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・yetkili-duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('Sorun Çözme', {type: 'category'}).then(parent => {
message.guild.channels.create('◈・sorun-çözme', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈ | Sorun Çözme¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(2));
message.guild.channels.create('◈ | Sorun Çözme²', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(3));
message.guild.channels.create('◈ | Sorun Çözme³', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(4));
});

message.guild.channels.create('Voice Channels', {type: 'category'}).then(parent => {
message.guild.channels.create('◈ | Angel Of Descris', {type: 'voice'}).then(a => a.setParent(parent.id));
message.guild.channels.create('◈ | Sirius Of Descris', {type: 'voice'}).then(a => a.setParent(parent.id));
message.guild.channels.create('◈ | Hemera Of Descris', {type: 'voice'}).then(a => a.setParent(parent.id));
message.guild.channels.create('◈ | Ocean Of Descris', {type: 'voice'}).then(a => a.setParent(parent.id));
message.guild.channels.create('◈ | Neptune Of Descris', {type: 'voice'}).then(a => a.setParent(parent.id));
message.guild.channels.create('◈ | Valerian Of Descris', {type: 'voice'}).then(a => a.setParent(parent.id));
message.guild.channels.create('◈ | Viona Of Descris', {type: 'voice'}).then(a => a.setParent(parent.id));
message.guild.channels.create('◈ | Medusa Of Descris', {type: 'voice'}).then(a => a.setParent(parent.id));
});

message.guild.channels.create('VK & DC Channels', {type: 'category'}).then(parent => {
message.guild.channels.create('◈・vk-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・dc-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('Vampir & Köylü', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(20));
message.guild.channels.create('Doğruluk & Cesaretlik', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(20));
});

message.guild.channels.create('Games', {type: 'category'}).then(parent => {
message.guild.channels.create('◈・owo-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・kelime-oyunu', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・tuttu-tutmadı', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・kelime-türetme', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈・sayı-sayma', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('Booster', {type: 'category'}).then(parent => {
message.guild.channels.create('◈・booster-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('◈ | Booster Of Descris', {type: 'voice'}).then(a => a.setParent(parent.id));
message.guild.channels.create('◈ | Booster Of Descris', {type: 'voice'}).then(a => a.setParent(parent.id));
});

message.guild.channels.create('FAMİLY', {type: 'category'}).then(parent => {
message.guild.channels.create('◈ | Tagges Of Descris¹', {type: 'voice'}).then(a => a.setParent(parent.id));
message.guild.channels.create('◈ | Tagges Of Descris²', {type: 'voice'}).then(a => a.setParent(parent.id));
message.guild.channels.create('◈ | Tagges Of Descris³', {type: 'voice'}).then(a => a.setParent(parent.id));
message.guild.channels.create('◈ | Tagges Of Descris⁴', {type: 'voice'}).then(a => a.setParent(parent.id));
message.guild.channels.create('◈ | Tagges Of Descris⁵', {type: 'voice'}).then(a => a.setParent(parent.id));
});

message.guild.channels.create('Alone Rooms', {type: 'category'}).then(parent => {
message.guild.channels.create('◈ | Alone¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(1));
message.guild.channels.create('◈ | Alone²', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(1));
message.guild.channels.create('◈ | Alone³', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(1));
message.guild.channels.create('◈ | Alone⁴', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(1));
message.guild.channels.create('◈ | Alone⁵', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(1));
});

message.guild.channels.create('Music Rooms', {type: 'category'}).then(parent => {
message.guild.channels.create('◈ | Music¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(2));
message.guild.channels.create('◈ | Music²', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(3));
message.guild.channels.create('◈ | Music³', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(4));
message.guild.channels.create('◈ | Music⁴', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('◈ | Music⁵', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('Music Rooms', {type: 'category'}).then(parent => {
message.guild.channels.create('◈ | Secret Room¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(2));
message.guild.channels.create('◈ | Secret Room²', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(2));
message.guild.channels.create('◈ | Secret Room³', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(3));
message.guild.channels.create('◈ | Secret Room⁴', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(3));
message.guild.channels.create('◈ | Secret Room⁵', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(4));
message.guild.channels.create('◈ | Secret Room⁶', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(4));
message.guild.channels.create('◈ | Secret Room⁷', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('◈ | Secret Room⁸', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('◈ | Secret Room⁹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(6));
message.guild.channels.create('◈ | Secret Room¹⁰', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(6));
});

message.guild.channels.create('AFK', {type: 'category'}).then(parent => {
message.guild.channels.create('◈ | AFK', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(99));
});

message.guild.channels.create('Kurucu Özel', {type: 'category'}).then(parent => {
    message.guild.channels.create('kurucu-özel', {type: 'text'}).then(c => c.setParent(parent.id));
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
  aliases: ['sunucu-kur9'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur9'
};