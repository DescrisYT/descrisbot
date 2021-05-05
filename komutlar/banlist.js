const Discord = require("discord.js");
const talkedRecently = new Set();
exports.run = async (client, message, args) => {
const bans = new Map();
        message.guild.fetchBans().then(g => {
            bans[g.id] = g;
            let banlist = (`${bans[g.id].map(ge => `\n (${ge.user.tag}) (${ge.user.id})`).join('\n')}`)
                    try {     
            let pancoembed = new Discord.MessageEmbed()
.setColor("BLACK")
            .setDescription(`There is no banned member.`)
            .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : "https://images-ext-2.discord.net/external/hHow2gpD0uyL8WnA8ynAHuPbzm_lE1lNAaxkLqDT0Fs/https/images-ext-1.discord.net/external/rBk_abKMsqAKoATjXbtyqKJt2bTXI_shMEemVpbNtFw/http/www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png")
        
            if(banlist.length === 0) return message.channel.send(pancoembed)
            const embed = new Discord.MessageEmbed()
                .setDescription(banlist)
                .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : "https://images-ext-2.discord.net/external/hHow2gpD0uyL8WnA8ynAHuPbzm_lE1lNAaxkLqDT0Fs/https/images-ext-1.discord.net/external/rBk_abKMsqAKoATjXbtyqKJt2bTXI_shMEemVpbNtFw/http/www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png")
            .setColor("BLACK")
            message.channel.send(embed)
                  } catch (err) {
    const embed = new Discord.MessageEmbed()
        .addField(`The users were banned from server.`,'I cant show the ban list, because of the discord api.')
        .setColor('RED')
    
        .setTimestamp()
    message.channel.send(embed)
                  }

    });


}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'banlist'
}; 