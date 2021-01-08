const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  var pokemon = db.get(`pokemon_${message.author.id}`)
  if (pokemon === 1) return message.channel.send(`Oi! **${message.author.username}**, você já tem um pokemon! (<:charmander:797128176324050975> Charmander)`)
  if (pokemon === 2) return message.channel.send(`Oi! **${message.author.username}**, você já tem um pokemon! (<:Bulbasaur:797128505548472350> Bulbasaur)`)
  if (pokemon === 3) return message.channel.send(`Oi! **${message.author.username}**, você já tem um pokemon! (<:Squirtle:797128006140166205> Squirtle)`)

  let embed = new Discord.MessageEmbed()
  .setDescription("Qual Pokemon Você Quer?\n<:charmander:797128176324050975> Charmander\n<:Bulbasaur:797128505548472350> Bulbasaur\n<:Squirtle:797128006140166205> Squirtle.")
  .setFooter(`Clique em um dos emojis para selecionar seu pokemon`)
  .setColor('#03fc7b')
  
  message.channel.send(embed).then(msg => {

   msg.react('797128176324050975').then(() => msg.react('797128505548472350').then(() =>  msg.react('797128006140166205')))
    const filter = (reaction, user) => {
      return ['797128176324050975', '797128505548472350', '797128006140166205'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']})
      .then(collected => {
        const reaction = collected.first();
    
        if (reaction.emoji.id === '797128176324050975') {
          message.channel.send('Agora Você Tem Um `<:charmander:797128176324050975> Charmander`');
          db.set(`pokemon_${message.author.id}`, 1)
        } 
      
        if (reaction.emoji.id === '797128505548472350') {
          message.channel.send('Agora Você Tem Um `<:Bulbasaur:797128505548472350> Bulbasaur`');
          db.set(`pokemon_${message.author.id}`, 2)
        }
      
      
       if (reaction.emoji.id === '797128006140166205') {
         message.channel.send('Agora Você Tem um `<:Squirtle:797128006140166205> Squirtle`')
         db.set(`pokemon_${message.author.id}`, 3)
       }
      
      })
      .catch(collected => {
        message.reply('devido à sua demora, cancelei o pedido! Tente novamente.');
      });
    })
  }

exports.help = {
  name: 'pokemon',
  aliases: []
}