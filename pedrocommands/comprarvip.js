const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async(client,message,args)=>{
let vip = db.fetch(`vip_${message.guild.id}_${message.author.id}`)

let user = message.author

let money2 = db.get(`money_${message.guild.id}_${message.author.id}`)
if(!money2){
  money2 = 0
}


if(money2 < 20000){
return message.reply('Você Precisa de 200 Ou Mais De Dinheiro Para Comprar O Vip!')
}else{
db.subtract(`money_${message.guild.id}_${message.author.id}`, 20000)
message.reply(`Eba!Você Comprou O Vip,Utilize **f.vip** Para Ganhar O Vip!`)
db.add(`vip_${message.guild.id}_${message.author.id}`, 1)
}};