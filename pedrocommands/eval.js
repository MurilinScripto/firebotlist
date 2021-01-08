const Discord = require('discord.js')
const db = require('quick.db')
  module.exports.run = async(client, message, args) => {
  const donos = ['697165280761217045','681532724045283429', '321034358829875200']
        
if(!(await donos.includes(message.author.id))) return message.channel.send('**Só Meu Papi E Meu Melhor Amigo Podem Usar Isso!**');
        let code = args.join(' ')
        if(!code) return message.channel.send('argumento');
if(code.includes('token')) return message.reply('Quer meu token?Vai cagar.'); 
if(code.includes('destroy')) return message.reply('Ta tirando menor?'); 
          if(code.includes("message.channel.send(Object.values(config)[11]);"))  return message.reply('Quer meu token?Vai cagar.');
          if(code.includes("Object.values(config)")) return message.reply('Quer meu token?Vai cagar.');
          if(code.includes("Object.values")) return message.reply('Quer meu token?Vai cagar.');
          if(code.includes("require('../config.json')")) return message.reply('HAHAHAHA você não pode ver o meu config dev');
        try {

           
            let resultado = await eval(code)
                
            var tipo = typeof(resultado)

            let embed = new Discord.MessageEmbed()
             .addField('Código', '```js\n' + `${code}` + '\n```', false)
             .addField('Resultado', '```js\n' + `${resultado}` + '\n```', false)
             .addField('Tipo', '```js\n' + `${tipo}` + '\n```', false)
             .setColor("#383838")
            message.channel.send(embed)
        } catch(err) {
            let embed = new Discord.MessageEmbed()
             .addField('Código', '```js\n' + `${code}` + '\n```', false)
             .addField('Erro', '```js\n' + `${err}` + '\n```', false)
             .setColor("#383838")
            message.channel.send(embed)
   }
  }
