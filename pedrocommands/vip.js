const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async(client,message,args)=>{

let user = message.author

let vip = db.fetch(`vip_${message.guild.id}_${message.author.id}`)

let money = db.fetch(`money_${message.guild.id}_${user.id}`)

if (vip < 1){
return message.reply('Você Não Comprou Vip!')
}else{
db.subtract(`vip_${message.guild.id}_${message.author.id}`, 1)

message.member.roles.add("796919378041896981")
message.reply(`Eba!Você Virou Vip!`)
db.add(`money_${message.guild.id}_${message.author.id}`, 10)
}};