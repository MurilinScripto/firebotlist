const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args) => {

let user = client.users.cache.get(args[0]) || message.mentions.users.first() ||  message.author;

  
let hamburger = db.fetch(`hamburger_${message.guild.id}_${user.id}`)
    if(hamburger === null) hamburger = 0;


const embed = new Discord.MessageEmbed()
  .setColor('#00ffe4')
  .setTitle(`Inventario De: ${user.username}`)
  .setDescription(`🍔 Hamburgers: **${hamburger}**`)
  message.channel.send(embed)
}