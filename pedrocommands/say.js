const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {

  


  const sayMessage = args.join(' ');
if(!sayMessage)return message.reply('Você Não Especificou Oque Você Quer Que Eu Fale!')
  message.channel.send(new Discord.MessageEmbed()
	.setAuthor(`${message.author.tag}`,message.author.displayAvatarURL())
	.setDescription(sayMessage)
	.setFooter(`Mensagem Enviada Por ${message.author.tag}`));
};
