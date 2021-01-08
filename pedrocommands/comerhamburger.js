const Discord = require('discord.js')
const db = require('quick.db')


let user = message.author

let hamburger = db.fetch(`hamburger_${message.guild.id}_${message.author.id}`)

let money = db.fetch(`money_${message.guild.id}_${user.id}`)

if (hamburger < 1){
return message.reply('Você Não Tem Nenhum Hamburger!')
}else{
db.subtract(`hamburger_${message.guild.id}_${message.author.id}`, 1)

message.reply(`Você Comeu Um Hamburger E Recebeu 10 De Money,Eba!`)
db.add(`money_${message.guild.id}_${message.author.id}`, 10)
}};