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
let motivo = args.slice(1).join(' ')
if(!motivo) motivo = "Não Especificado"
let info = db.get(`${id}_info`)
message.guild.channels.cache.get('794738602847502396').send(`<@${info.owner}>`, new Discord.MessageEmbed()
.setAuthor(`${message.author.tag}`,message.author.displayAvatarURL())
.setDescription(`O Bot ${bot} Foi Aprovado Por ${message.author}\nMotivo: ${motivo}`))
db.set(`${id}_naverificação`,false)
db.set(`${id}_verificado`,true)
bot.roles.remove('795050659979198474')
bot.roles.add('795050762006036551')
message.author.send('O Bot Foi Verificado Com Sucesso!')
}