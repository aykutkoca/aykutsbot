const Discord = require('discord.js');


exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosyalar Kurulsun mu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
          message.guild.createChannel(`ÖNEMLİ KANALLAR`, 'category');
          message.guild.createChannel(`💎-hoşgeldiniz`, 'text');
          message.guild.createChannel(`💎-genel`, 'text' );
          message.guild.createChannel(`💎-kurallar`, 'text');
          message.guild.createChannel(`💎-duyurular`, 'text');
          message.guild.createChannel(`💎-güncellemeler`, 'text');
          message.guild.createChannel(`Sohbet Kanalları`, 'category');
          message.guild.createChannel(`💎-Sohbet`, 'text');
          message.guild.createChannel(`💎-bot-komut`, 'text');
          message.guild.createChannel(`💎-foto-gif`, 'text');
          message.guild.createChannel(`💎-gelen-giden`, 'text');
          message.guild.createChannel(`mod-log`, 'text');
          message.guild.createChannel(`öneriler`, 'text');
          message.guild.createChannel(`şikayet`, 'text');
          message.guild.createChannel(`Ses Kanalları`, 'category')
          message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ①`, 'voice');
          message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ②`, 'voice');
          message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ③`, 'voice');
          message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ④`, 'voice');
          message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ⑤`, 'voice');
          message.guild.createChannel(`  ♫ Müzik Odası`, 'voice');
          message.guild.createChannel(`╠ ● AFK Odası`, 'voice');


  



        message.channel.send(`Gerekli Kanalları Oluşturdum.`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'hazırsunucukur',
  description: 'Hazır discord sunucusu kurar.',
  usage: 'hazırsunucukur'
};