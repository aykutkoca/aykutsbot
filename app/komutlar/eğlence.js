const Discord = require('discord.js');
const loglar = require('../loglar.json')

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

	const eğlence = new  Discord.RichEmbed()
   .setTitle("✔️The Gameer Eğlence Komutları Bölümüne Hoşgeldin.")
   .setDescription("**📜Burada TheGameer botuna ait eğlence komutlarını bulabilirsin.**")
	.setColor()
.setAuthor(message.author.username, message.author.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.addField(`Eğlence Komutları`, `**🕹️!düello <@kullanıcıadı>** = İstediğiniz bir kişi ile düello atarsınız! \n**🕹️!8ball <soru>** = Sihirli 8ball sorularınızı cevaplar. \n**🕹️!emojiyazı <mesaj>** = Mesajınızı emoji haline getirir. \n**🕹️!ailemiz** = TheGameer botunun bulunduğu sunucuları gösterir. \n**🕹️!beşiktaş** = Avatarına Beşiktaş resmi ekler. \n**🕹️!fenerbahçe** = Avatarına Fenerbahçe resmi ekler. \n**🕹️!galatasaray** = Avatarına Galatasaray resmi ekler.`)
  .addField(`📜Thegameer.com - Oyun Haber Sitemiz`, `**🕹️!mcödül <Yazınız>** = Yazdığınız yazıyı Minecraft başarım resmine dönüştürür.  \n**🕹️!wasted** = Avatarına Wasted resmi ekler.  \n**🕹️!youtube** = Yazdığınız metini Youtube'da aratır.  \n**🕹️!avatar** = Avatarınızı paylaşır.  \n**🕹️!slots** = Slot oynatır.  \n**🕹️!stresçarkı** = Stres çarkı çevirir.  \n**🕹️!boks-makinesi** = Boks makinesine vurur.  \n**🕹️!espri** = Espri paylaşır.  \n**🕹️!fbi** = FBI gifti atar.  \n**🕹️!gifara** = Yazdığınız gifti arar.  \n**🕹️!herkesebendençay** = Gif atar.  \n**🕹️!mesajdöndür** = Yazdığın mesajı ters çevirir.  \n**🕹️!simit** = Gif atar.  \n**🕹️!wwegif** = WWE gifti atar.  \n**🕹️!çayiç** = Gif atar.  \n**🕹️!ortaparmak** = Gif atar.  \n**🕹️!kahkaha** = Gif atar.`)
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
  name: 'eğlence',
  description: 'Eğlence Komutları.',
  usage: 'eğlence'
};