const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Beni sunucuna davet etmek için tıkla.")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bot yapımıcısı:** n1xrain#8129")
  .setFooter('Yapımcı Erdi"n1xrain"Aydındağ ', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .addField("» Linkler", `[TheGameer Resmi Sitesi](https://www.thegameer.com/)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/5cHgZKp)`, false)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=642707308161269780&scope=bot&permissions=805829694')
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};
