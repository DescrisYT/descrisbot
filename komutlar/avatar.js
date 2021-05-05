const Discord = require('discord.js');
const db = require("wio.db")
exports.run = async (client, message, args) => {
  try {
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else {
    user = message.author;
  }

  message.channel.send({ embed: {
    author: {
      name: user.tag
    },
    color: "#4B0082",
    description: (`Descris Bot Avatar`),
    image: {
      url: user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 })
    },
    footer: {
      text: "Descris Bot",
      icon_url: client.user.avatarURL({ format: 'png' })
    },
    
    timestamp: Date.now()
  }})
  } catch{}
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["pp"],
  permLevel: 0
};

exports.help = {
  name: 'avatar', 
  description: '',
  usage: ''
};