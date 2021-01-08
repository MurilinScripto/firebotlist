const db = require('quick.db')
const Discord = require('discord.js')
module.exports.run = async(client,message,args)=>{
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Parece que vocé não tem permissões')
if(!args[0]) return message.reply('Você Precisa Mandar o Link do Gif Que Você Quer Colocar No Welcome!')
let gif = args[0]
if(!gif.includes("https://")) return message.reply('Gif Invalido!')

let embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Gif de Boas Vindas Alterado Com sucesso! \nnovo gif:')
.setImage(gif)
message.channel.send(embed)
db.set(`${message.guild.id}_gif`,`${gif}`)

}
