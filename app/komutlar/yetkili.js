const Discord = require('discord.js');
const loglar = require('../loglar.json')

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

	const eğlence = new  Discord.RichEmbed()
   .setTitle("✔️The Gameer Yetkili Komutları Bölümüne Hoşgeldin.")
   .setDescription("**📜Buradan TheGameer botuna ait yetkili komutlarına bulabilirsin.**")
	.setColor()
.setAuthor(message.author.username, message.author.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.addField(`Yetkili Komutları`, `**🕹️!yazı-kanal-aç** = Yazı kanalı açar.   \n**🕹️!reboot** = Botu kapatıp açar. \n**🕹️!ses-kanal-aç** = Ses kanalı açar. \n**🕹️!reklam-taraması** = Reklam taraması yapar. \n**🕹️!temizle** = 20 Mesaj siler.   \n**🕹️!duyuru** = Duyuru paylaşır.`)
  .addField(`📜Thegameer.com - Oyun Haber Sitemiz`, `**🕹️!küfür-engelle <aç> <kapat>** = Küfür sistemi.    \n**🕹️!link-engelle <aç> <kapat>** = Link sistemi.  \n**🕹️!sayaç-sıfırla** = Sayaçı sıfırlar.  \n**🕹️!davet** = Davet linkini paylaşır.    \n**🕹️!sayaç-ayarla <sayı/sıfırla> <kanal>** = Sayaçı ayarlar.  \n**🕹️!yavaş-mod [1/10]** = Yavaş modu ayarlar. \n**🕹️!hazırsunucukur** = ⚠️Bu komut sunucunuzda Metin ve Ses kanalları oluşturur. Bu komutun amacı yeni açılmış bir sunucuya yazılarak hazır sunucu paket kurulumu yapmaktır.`)
    .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)

    return message.channel.sendEmbed(eğlence);

};



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Yetkili Komutları.',
  usage: 'yetkili'
};