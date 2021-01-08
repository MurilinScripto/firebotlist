const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async(client,message,args)=>{
	  if(!message.member.roles.cache.has("794746117770051634")) return message.reply("Você Só Pode Usar Isso Se For Um Verificador!")
let bot = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!bot) return message.reply('Você Precisa Mencionar Um Bot Para Esse Comando Funcionar!')
if(!bot.user.bot) return message.reply('Você Precisa Mencionar Um **BOT** Para Esse Comando Funcionar!')
let id = bot.id
if(db.get(`${id}_verificado`)) return message.reply('Esse Bot Ja Foi Verificado!')
if(!db.get(`${id}_naverificação`))return message.reply('Esse Bot Não Foi Mandado Para A Verificação Ainda!')
let info = db.get(`${id}_info`)

}