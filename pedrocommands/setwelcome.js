const db = require('quick.db')
const Discord = require('discord.js')
module.exports.run = async(client,message,args)=>{
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Você É Fraco,Lhe Falta a Permissão De Administrador!')
if(!args[0]) return message.reply('Você Precisa Falar O Canal Que Você Quer Para Ser O Canal De Boas Vindas')
let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
if(!channel) return message.reply('Você Precisa Falar O Canal Que Você Quer Para Ser O Canal De Boas Vindas!')
let id = channel.id
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${message.author.tag}`,message.author.displayAvatarURL())
.setDescription(`O Novo Canal De Welcome É ${channel}!`)
message.channel.send(embed)
db.set(`${message.guild.id}_channelID`,id)
}
