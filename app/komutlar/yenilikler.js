const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents } = require('common-tags');
const ayarlar = require('../ayarlar.json');

const { stripUndents } = require("common-tags")
exports.run = (client, message) => {
                    if (message.guild) {
			var embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor(message.author.username, message.author.avatarURL)
   .setThumbnail(message.client.user.avatarURL)
			.setTitle('Yenilikler')
			.setDescription(stripIndents`
			**Sürüm 1.0.1**
			> 11/11/19 !yenilikler komutu eklendi. (Yeni eklenen komutkar destek sunucusunda paylaşıldı.)
      > !yardım Bölümü değiştirildi.
      Özel mağazamıza erişmek için ***!özelmağaza***
			`)
   .setFooter('TheGameer.com', message.client.user.avatarURL)
   .setTimestamp()
			.setColor('RED');
			return message.channel.send({embed});
		}

		var embed = new Discord.RichEmbed()
		.setTitle('Yenilikler')
		.setDescription(stripIndents`
			**Sürüm 1.0.1**
			
			
			> Sustur komutu eklendi. _kullanmak için \`!sustur\`_
		`)
		.setColor('RED');

		return message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};