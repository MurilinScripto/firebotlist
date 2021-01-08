const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()

  .setColor('#00ffe4')
 
  .setTitle('Lojinha!')
  .setDescription(`Olá!Aqui Você Pode Comprar Oque Você Quiser!\n\n🍔 Hamburger:Com 10 Hamburgers Você Pode Trocar Com Um SubDono E Você Podera Ter Um Cargo Só Pra Você!(E Comer Tambem)Para Comprar Utilize f.ComprarHamburger,Um Hamburger Custa **50 Reais**,Utilize **f.comerhamburger** Para Comer Um Hamburger!\n\n👑 Vip:Com Um Vip Você Ganha O Cargo De Vip (Obvio) Utilize o Comando **f.comprarvip** E Para Receber O Vip Utilize **f.vip** o Vip Custa 20 Mil De Dinheiro Aqui No **Fire Bot List** `)
    
  message.channel.send(embed)
}