const Discord = require('discord.js')
const db = require('quick.db')
const express = require('express')
const app = express();

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Sou Tongolinha,Recebi o Ping às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

app.listen(process.env.PORT);


const client = new Discord.Client();
const config = require("./config.json");

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);


    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./pedrocommands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error("Comando não encontrado.");
    
};
})


client.on("ready", () => {
  let activities = [
    `Utilize ${config.prefix}help
       para obter ajuda`,
    `${client.users.cache.size} usuarios`,
    `Continue sendo legal :)`,
    `Minha comida favorita é Pastel Com Caudo De Cana!`,

  ],
    i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
    type: "PLAYING"
  }), 200 * 40);
  client.user
    .setStatus("online")
    .catch(console.error);
  console.log("Estou Tongolinha!")
})



client.on('guildMemberAdd', member =>{
	if(member.bot){
member.roles.remove('794746045559996466')
member.roles.add('795050659979198474')
	}else return
})


client.on('guildMemberAdd', member => {
  let channelID = db.get(`${member.guild.id}_channelID`)
  if (!channelID) return
  let channel = member.guild.channels.cache.get(channelID)
  if (!channel) return
  let msg = db.get(`${member.guild.id}_msg`)
  let img = db.get(`${member.guild.id}_gif`)
  if (!msg) {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
      .setDescription(`Ola ${member} Seja Bem vindo(a) ${member.guild.name} agora temos ${member.guild.members.cache.size} de membros!Seja bem vindo a o ${member.guild.name}!Leia as Regras e Se divirta!`)
    if (img) embed.setImage(img)
    channel.send(embed)
  } else {
    let one = msg.replace('[guild.name]', member.guild.name)
    let two = one.replace('[member.name]', member.user.username)
    let there = two.replace('[member]', member)
    let four = there.replace('[members]', member.guild.members.cache.size)
    let five = four.replace('[member.tag]', member.user.tag)
    let six = five.replace('[member.id]', member.user.id)
    let seven = six.replace('\n', `\n`)
    msg = seven
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
      .setDescription(msg)
    if (img) embed.setImage(img)
    channel.send(embed)
  }
})


client.on('guildMemberRemove', member => {
  let channelID = db.get(`${member.guild.id}_channelID_leave`)
  if (!channelID) return
  let channel = member.guild.channels.cache.get(channelID)
  if (!channel) return
  let msg = db.get(`${member.guild.id}_msg_leave`)
  let img = db.get(`${member.guild.id}_gif_leave`)
  if (!msg) {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
      .setDescription(`O ${member.user.tag}(${member.id}) acaba de sair do servidor... sem ele a gente so tem ${member.guild.members.cache.size}  de membros`)
    if (img) embed.setImage(img)
    channel.send(embed)
  } else {
    let one = msg.replace('[guild.name]', member.guild.name)
    let two = one.replace('[member.name]', member.user.username)
    let there = two.replace('[member]', member)
    let four = there.replace('[members]', member.guild.members.cache.size)
    let five = four.replace('[member.tag]', member.user.tag)
    let six = five.replace('[member.id]', member.user.id)
    let seven = six.replace('\n', `\n`)
    msg = seven
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
      .setDescription(msg)
    if (img) embed.setImage(img)
    channel.send(embed)
  }
})




  client.login(process.env.TOKEN);