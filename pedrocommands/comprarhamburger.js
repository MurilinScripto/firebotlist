const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async(client,message,args)=>{
let hamburger = db.fetch(`hamburger_${message.guild.id}_${message.author.id}`)

let user = message.author

let money2 = db.get(`money_${message.guild.id}_${message.author.id}`)
if(!money2){
  money2 = 0
}



if(money2 < 50){
return message.reply('Você Precisa de 50 Ou Mais De Dinheiro Para Comprar Um Hamburger!')
}else{
db.subtract(`money_${message.guild.id}_${message.author.id}`, 50)
message.reply(`Eba!Você Comprou Um Hamburger!`)
db.add(`hamburger_${message.guild.id}_${message.author.id}`, 1)
}};