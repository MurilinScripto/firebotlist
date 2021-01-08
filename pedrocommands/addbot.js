const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async(client, message, args) => {
if(message.channel.id != "794741422057062400") return message.reply("Você só pode usar este comando em <#794741422057062400>.");
if(!args[0]){
if(message.guild.channels.cache.find(r => r.name == `addbot-${message.author.id}`)){
let canalAtivo = message.guild.channels.cache.find(r => r.name == `addbot-${message.author.id}`);
message.reply("Você já tem um canal de addbot! (<#"+canalAtivo.id+">)")
return;
};
let categoria = message.guild.channels.cache.get("794734901152186411")
let canalAddBot = await message.guild.channels.create(`addbot-${message.author.id}`, {
type: "text", 
parent: categoria.id, 
permissionOverwrites: [
{allow: "VIEW_CHANNEL", id: message.author.id}, 
{deny: "VIEW_CHANNEL", id: [message.guild.id, "794746045559996466"]}
]})

let id = "";
let prefix = "";
let help = "";
let linguagem = "";
let descriçao = "";

const filter = m => m.author.id === message.author.id;

canalAddBot.send(`${message.author}, Qual o ID do seu bot?`)
const collector = canalAddBot.createMessageCollector(filter, {time: 1800000});
collector.on("collect", m => {
if(m.content.length != 18){
canalAddBot.send("Este ID está incorreto. Tente enviar um ID válido por favor.");
}else{
id = m.content
collector.stop()
}});
collector.on("end", () => {
canalAddBot.send("Qual o prefix do seu bot?");

const collector2 = canalAddBot.createMessageCollector(filter, {time: 1800000})
collector2.on("collect", m => {
prefix = m.content;
collector2.stop();
});
collector2.on("end", () => {
canalAddBot.send("Qual o comando que mostra todos os comandos do seu bot? (Comandos tais como `help` ou `ajuda`)")

const collector3 = canalAddBot.createMessageCollector(filter, {time: 1800000})
collector3.on("collect", m => {
help = m.content;
collector3.stop();
});
collector3.on("end", () => {
canalAddBot.send("Qual a linguagem do seu bot?");

const collector4 = canalAddBot.createMessageCollector(filter, {time: 1800000})
collector4.on("collect", m => {
linguagem = m.content;
collector4.stop();
});
collector4.on("end", () => {
canalAddBot.send("Deseja adicionar uma descrição ao seu bot?")

const collector5 = canalAddBot.createMessageCollector(filter, {time: 1800000})
collector5.on("collect", m => {
descriçao = m.content;
collector5.stop();
});

collector5.on("end" , async () => {
canalAddBot.delete();
if(db.get(`${id}_verificado`)) return message.reply("Este bot já foi verificado!");
if(db.get(`${id}_naverificação`)) return message.reply("Este bot já está na verificação!");
db.set(`${id}_info`, {});
db.push(`${id}_info.owner`, message.author.id);
db.push(`${id}_info.descriçao`, descriçao);
db.push(`${id}_info.prefix`, prefix);
db.push(`${id}_info.help` ,help);
db.push(`${id}_info.linguagem`, linguagem);
db.push(`${id}_info.votos`, 0);
db.push(`${id}_info.id`, id);
db.set(`${id}_naverificação`, true);

let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${message.author.tag}`,message.author.displayAvatarURL())
.setTitle("Novo Bot Enviado!")
.setDescription(`O Usuario ${message.author} Mandou Um Novo Bot!`)
.addField("Id:", id)
.addField("Prefix:", prefix)
.addField("Help Ou Ajuda",help)
.addField("Descrição",descriçao)
.addField("Linguagem",linguagem)
.addField("invite", `[Clique Aqui](https://discord.com/oauth2/authorize?client_id=${id}&scope=bot)`)

message.guild.channels.cache.get("794734945871986718").send("<@&794746117770051634>", embed);

message.reply("O seu bot foi enviado à verificação.");
})})})})})}else{
if(!args[0]) return message.reply("Você precisa específicar o ID do seu bot!")
if(!args[1]) return message.reply("Você precisa específicar o prefixo do seu bot!")
if(!args[2]) return message.reply("Você precisa específicar o comando que lista os comandos (vulgo ajuda/help) do seu bot!")
if(!args[3]) linguagem = "Não especificado"
else linguagem = args[3];

if(args[4]) descBot = args.slice(4).join(" ")
else descBot = "Não específicado.";

if(db.get(`${id}_verificado`)) return message.reply("Este bot já foi verificado!")
if(db.get(`${id}_naverificação`)) return message.reply("Este bot já está na verificação!")

db.set(`${id}_info`, {});
db.push(`${id}_info.owner`, message.author.id);
db.push(`${id}_info.descriçao`, descrição);
db.push(`${id}_info.prefix`, prefix);
db.push(`${id}_info.help`, help);
db.push(`${id}_info.linguagem`, linguagem);
db.push(`${id}_info.votos`, 0);
db.push(`${id}_info.id`, id);
db.set(`${id}_naverificação`, true);

let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${message.author.tag}`,message.author.displayAvatarURL())
.setTitle("Novo Bot Enviado!")
.setDescription(`O Usuario ${message.author} Mandou Um Novo Bot!`)
.addField("Id:", id)
.addField("Prefix:", prefix)
.addField("Help Ou Ajuda",help)
.addField("Descrição",descrição)
.addField("Linguagem",linguagem)
.addField("invite", `[Clique Aqui](https://discord.com/oauth2/authorize?client_id=${id}&scope=bot)`)
message.guild.channels.cache.get("794734945871986718").send("<@&794746117770051634>", embed)
message.reply("O seu bot foi enviado para à verificação.")
}};