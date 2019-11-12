const Discord = require('discord.js');
const loglar = require('../loglar.json')

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

	const eğlence = new  Discord.RichEmbed()
   .setTitle("✔️The Gameer Genel Komutlar Bölümüne Hoşgeldin.")
   .setDescription("**📜Burada TheGameer botuna ait genel komutları bulabilirsin.**")
	.setColor()
.setAuthor(message.author.username, message.author.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.addField(`Genel Komutlar`, `**🕹️!öneri <mesaj>** = Bot hakkındaki önerilerinizi bot sahiplerine ulaştırır. \n**🕹️!özelmağaza** = Özel mağazayı açar. \n**🕹️!alıntıla <Mesaj ID>** = Mesajı alıntılar. \n**🕹️!canlıdestek** = Destek sunucusunda ki kanala destek bildirisi gönderir. \n**🕹️!hastebin <Cümle/Kod>** = Hastebin linki oluşturur.   \n**🕹️!havadurumu <şehir>** = Havadurumu gösterir. \n**🕹️!servericon** = Server resmini paylaşır.  `)
  .addField(`📜Thegameer.com - Oyun Haber Sitemiz`, `**🕹️!istatistik** = TheGameer botunun istatistiklerini paylaşır.    \n**🕹️!rastgeleşifre** = Rastgele şifre oluşturur.  \n**🕹️!spotify** = Etiketlediğiniz kişinin dinlediği şarkı ile ilgili bilgi verir.  \n**🕹️!davet** = Davet linkini paylaşır.    \n**🕹️!davet-kur** = Davet linki oluşturur.  \n**🕹️!kullanıcıbilgim** = Kullanıcı bilgilerini paylaşır.  \n**🕹️!rolbilgi <rolismi>** = Rol hakkında bilgi verir.  \n**🕹️!top10** = Top10 sunucuları gösterir.  \n**🕹️!yetkilerim** = Yetkilerini gösterir.  \n**🕹️!çeviri** = Çeviri yapar.  \n**🕹️!sunucubilgi** = Sunucu hakkında bilgi verir.  \n**🕹️!speedtest** = Hız testi yapar.`)
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
  name: 'genel',
  description: 'Genel Komutlar.',
  usage: 'genel'
};