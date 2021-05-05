const Discord = require('discord.js');
const prefix = require("../ayarlar.json")

const cevaplar = [                  'Ben ne bileyim.',
                                    'Hayır.',
                                    'Evet.',
                                    'Evet, Kesinlikle.',
                                    'Buna güvenebilirsin.',
                                    'Gördüğüm kadarıyla, Evet.',
                                    'Büyük olasılıkla.',
                                    'Napim.',
                                    'çok ilginç bi soru düşünmem lazım dostum...',
                                    'Napim.',
                                    'Anlayamadım, tekrar edin.',
                                    'Daha sonra sor.',
                                    'Napim.',
                                    'Tahmin edemiyorum...',
                                    'Konsantre ol ve tekrar sor.',
                                    'Buna güvenme.',
                                    'Cevabım, hayır.',
                                    'Kaynaklarım hayır diyor.',
                                    'Olabilir.',
                                    'Çok şüpheli.',
                                    'Şüpheli.',
                                    'Büyük olasılıkla, hayır.',
                                    'Nasipte varsa.',
                                    'Kararsız kaldım, bidaha sormaya ne dersin?'               
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply("Bana bir soru sormalısın! **Örnek**: d!sor <soru>") 
    else message.channel.send(cevap)

}; 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["8ball","acaba"],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'güncel sor',
  usage: 'sor <soru>'
};