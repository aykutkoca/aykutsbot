const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
   const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor(message.author.username, message.author.avatarURL)
   .setThumbnail(message.client.user.avatarURL)
   .setTitle("✔️The Gameer Yardım Bölümüne Hoşgeldin.")
	 .setDescription(stripIndents`
			**📜Burada TheGameer botuna ait komutlara ulaşabilirsin.**
			> Eğlence Komutlarına _görmek için \`!eğlence\`_
      > Genel Komutları _görmek için \`!genel\`_
			> Yetkili Komutlarını _görmek için \`!yetkili\`_
      Özel mağazamıza erişmek için ***!özelmağaza***
			`)
   .setFooter('TheGameer.com', message.client.user.avatarURL)
   .setTimestamp()
   message.channel.send({embed});
 };

 exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'yardım',
   description: 'Komutları gösterir.',
   usage: 'yardım'
 };
