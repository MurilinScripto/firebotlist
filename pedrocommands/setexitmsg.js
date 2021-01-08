const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async(client,message,args)=>{
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Parece que vocé não tem permissões')
let msg = args.join(' ')
if(!msg) return message.reply('Você Quer Mudar Para Qual Mensagem?\nreplaces:[guild.name],[member.name],[member],[members],[member.tag],[member.id]')
db.set(`${message.guild.id}_msg_leave`,msg)
let one = msg.replace('[guild.name]', message.guild.name)
let two = one.replace('[member.name]',message.author.username)
let there = two.replace('[member]',message.author)
let four = there.replace('[members]', message.guild.members.cache.size)
let five = four.replace('[member.tag]',message.author.tag)
let six = five.replace('[member.id]',message.author.id)
msg = six
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle('A mensagem de saida Foi Mudada!')
.setAuthor(`${message.author.tag}`,message.author.displayAvatarURL())
.setDescription('Mensagem de saida mudada para: ' + msg)
message.channel.send(embed)
}