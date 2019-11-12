const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
   const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor(message.author.username, message.author.avatarURL)
   .setThumbnail(message.client.user.avatarURL)
   .setTitle("🛍️The Gameer Özel Mağazaya Hoşgeldin.")
   .setDescription("**TheGameer özel mağaza çok yakında burada!🛒**")
   .addField('💎Sunucunuza Özel Bot Yaptırma', '📌Sunucunuza **özel** bot yaptırmak istiyorsanız TheGameer destek sunucusuna gelip bilgi alabilirsiniz.', true)
   .addField('💎Mağaza Slot 1', '📌BOŞ', true)
   .addField('💎Mağaza Slot 2', '📌BOŞ', true)
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
   name: 'özelmağaza',
   description: 'Özel mağazayı açar.',
   usage: 'özelmağaza'
 };
