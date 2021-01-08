const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  var embed = new Discord.MessageEmbed()
  .setTitle("Painel de Comandos!")
  .setThumbnail(message.author.displayAvatarURL())
  .setColor("00ffe4")
  .setDescription(`Olá, ${message.author} \n Meu nome é Fiire! \n Está é minha lista de comandos!`)
  .addField('1️⃣ Outros\n2️⃣Botlist \n3️⃣ Moderação\n4️⃣Rpg\n⬅️ Voltar', '\u200B', false)
  .addField('Chame Na Dm Por ajuda!✰ Star.#9537\nOu\njose_trindade1#4463\nOu Slony#4003')
  .setFooter('Criadores: ✰ Star.#9537\n\njose_trindade1#4463\n\nSlony#4003')
  message.channel.send({embed}).then(msg=> {
    msg.delete({ timeout: 1200000000 })
      msg.react('1️⃣').then(r=>{
      msg.react('2️⃣')
      msg.react('3️⃣') 
      msg.react('4️⃣')
      msg.react('⬅️')
  })

  const utilfilter = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id;
  const funfilter = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === message.author.id;
  const diverfilter = (reaction, user) => reaction.emoji.name === '3️⃣' && user.id === message.author.id;
  const rpgfilter = (reaction, user) => reaction.emoji.name === '4️⃣' && user.id === message.author.id;
  const voltarfilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id;
  const util = msg.createReactionCollector(utilfilter, { time: 120000 });
  const fun = msg.createReactionCollector(funfilter, { time: 120000 });
  const diver = msg.createReactionCollector(diverfilter, { time: 120000 });
  const rpg = msg.createReactionCollector(rpgfilter, { time: 120000 });

  const voltar = msg.createReactionCollector(voltarfilter, { time: 120000 });



  util.on('collect', r1 => { 
   r1.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.displayAvatarURL())
          .setColor("#00ffe4")
          .setDescription("**Outros Comandos**\n`f.say`");
     
      msg.edit(embed);
  })

  fun.on('collect', r2 => { 
   r2.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setColor("#00ffe4")
          .setImage("https://i.imgur.com/fZEFbM3.jpg")
          .setThumbnail(message.author.displayAvatarURL())
          .setDescription("Comandos Botlist!**\n\n `f.addbot` `f.aprovar` `f.reprovar`");
    
      msg.edit(embed);
  })

  diver.on('collect', r3 => { 
   r3.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setColor("#00ffe4")
          .setThumbnail(message.author.displayAvatarURL())
  
          .setDescription("**⚙️ | Moderação!**\n\n`f.setexit` `f.setexitmsg` `f.setwelcome` `f.setwelcomegif` `f.setwelcomemsg`");
      msg.edit(embed);
  })

  rpg.on('collect', r4 => { 
   r4.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setColor("#00ffe4")
          .setThumbnail(message.author.displayAvatarURL())
          .setDescription("**Rpg**\n\n`f.bal` `f.comerhamburger` `f.comprarhamburger` `f.inventario` `f.loja` `f.trabalho` `f.comprarvip` `f.vip`");
      msg.edit(embed);
  })


  voltar.on('collect', r5 => { 
   r5.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
   .setTitle("Painel de Comandos!")
  .setThumbnail(message.author.displayAvatarURL())
  .setColor("00ffe4")
  .setDescription(`Olá, ${message.author} \n Meu nome é Fiire! \n Está é minha lista de comandos!`)
  .addField('1️⃣ Outros\n2️⃣Botlist \n3️⃣ Moderação\n4️⃣Rpg\n⬅️ Voltar', '\u200B', false)
  .addField('Chame Na Dm Por ajuda!✰ Star.#9537\nOu\njose_trindade1#4463\nOu Slony#4003')
  .setFooter('Criadores: ✰ Star.#9537\n\njose_trindade1#4463\n\nSlony#4003')
          
    msg.edit(embed);
  })
})
}
module.exports.help = {
    name: "ajuda",
    aliases: ['help', 'comandos', 'commands']
}