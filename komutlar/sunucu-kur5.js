exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu Komudu Kullanmaya İznin Yok! \n <@${message.author.id}>`)
    message.guild.channels.cache.forEach((item, i) => {
      item.delete()
    });
    message.guild.channels.create('Önemli Kanallar', { type: 'category'}).then(önemli => {
      message.guild.channels.create('Metin Kanalları', { type: 'category'}).then(metinkanal => {
        message.guild.channels.create('Ses Kanalları', { type: 'category'}).then(seskanal => {
          message.guild.channels.create('💬╎genel-sohbet', {type: 'text'}).then(genelsohbet => {
            genelsohbet.setParent(metinkanal.id)
          })
          message.guild.channels.create('📷╎görsel-içerik', {type: 'text'}).then(görseliçerik => {
            görseliçerik.setParent(metinkanal.id)
          })
          message.guild.channels.create('📜╎kurallar', {type: 'text'}).then(kurallar => {
            kurallar.setParent(önemli.id)
          })
          message.guild.channels.create('📢╎duyurular', {type: 'text'}).then(duyurular => {
            duyurular.setParent(önemli.id)
          })
          message.guild.channels.create('🚪╎giriş-çıkış', {type: 'text'}).then(girişçıkış => {
            girişçıkış.setParent(önemli.id)
          })
          message.guild.channels.create('❔╎destek', {type: 'text'}).then(destek => {
            destek.setParent(önemli.id)
          })
          message.guild.channels.create('🤖╎bot-komut', {type: 'text'}).then(botkomut => {
            botkomut.setParent(metinkanal.id)
          })
          message.guild.channels.create('🎶╎müzik-komut', {type: 'text'}).then(müzikkomut => {
            müzikkomut.setParent(metinkanal.id)
          })
          message.guild.channels.create('🎧・Sesli Sohbet #1', {type: 'voice'}).then(sesli1 => {
            sesli1.setParent(seskanal.id)
          })
          message.guild.channels.create('🎧・Sesli Sohbet #2', {type: 'voice'}).then(sesli2 => {
            sesli2.setParent(seskanal.id)
          })
          message.guild.channels.create('🎧・Sesli Sohbet #3', {type: 'voice'}).then(sesli3 => {
            sesli3.setParent(seskanal.id)
          })
          message.guild.channels.create('Müzik Kanalları', { type: 'category'}).then(müzikkanal => {
            message.guild.channels.create('🎷╎müzik-sohbet-öneri', {type: 'text'}).then(müziksohbet => {
              müziksohbet.setParent(müzikkanal.id)
          })
          message.guild.channels.create('🎷・Müzik #1', {type: 'voice'}).then(müzik1 => {
            müzik1.setParent(müzikkanal.id)
        })
        message.guild.channels.create('🎷・Müzik #2', {type: 'voice'}).then(müzik2 => {
          müzik2.setParent(müzikkanal.id)
      })
      message.guild.channels.create('🎷・Müzik #3', {type: 'voice'}).then(müzik3 => {
        müzik3.setParent(müzikkanal.id)
    })
    message.guild.channels.create('Oyun Kanalları', { type: 'category'}).then(oyunkanal => {
      message.guild.channels.create('🎮╎oyun-sohbet', {type: 'text'}).then(oyunsohbet => {
        oyunsohbet.setParent(oyunkanal.id)
    })
    message.guild.channels.create('🎮╎oyun-öneri-soru', {type: 'text'}).then(oyunöneri => {
      oyunöneri.setParent(oyunkanal.id)
  })
  message.guild.channels.create('🎮╎oyun-davet', {type: 'text'}).then(oyundavet => {
    oyundavet.setParent(oyunkanal.id)
})
message.guild.channels.create('🎮╎Oyun #1', {type: 'voice'}).then(oyun1 => {
  oyun1.setParent(oyunkanal.id)
})
message.guild.channels.create('🎮╎Oyun #2', {type: 'voice'}).then(oyun2 => {
  oyun2.setParent(oyunkanal.id)
})
message.guild.channels.create('🎮╎Oyun #3', {type: 'voice'}).then(oyun3 => {
  oyun3.setParent(oyunkanal.id)
})

        })
      })
    })
  })
})
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucu-kur5'],
    permLevel: 0
}

exports.help = {
    name: 'sunucu-kur5',
    description: "Sunucu Kurarsınız",
    usage: 'sunucu-kur5'
}