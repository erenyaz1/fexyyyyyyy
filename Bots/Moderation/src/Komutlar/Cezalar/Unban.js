const { MessageEmbed } = require('discord.js');
const db = require("quick.db")
const serverSettings = new db.table("server") // level: #1
const roleSettings = new db.table("role") // level: #2
const staffSettings = new db.table("staff") // level: #3
const registerSettings = new db.table("register") // level: #4
const cezalıSettings = new db.table("cezalı")
const warnSettings = new db.table("cezalar")
const statSettings = new db.table("stats")
const maveraSettings = new db.table("mavera")

exports.run = async(client, message, args) => {

let yes = message.guild.emojis.cache.find(x => x.name === "mavera_yes")
let no = message.guild.emojis.cache.find(x => x.name === "mavera_no")
let başlangıç = staffSettings.get(`başlangıç`)
let registery = staffSettings.get(`registery`)
let transporter = staffSettings.get(`transporter`)
let muteci = staffSettings.get(`muteci`)
let vmuteci = staffSettings.get(`vmuteci`)
let jailci = staffSettings.get(`jailci`)
let bancı = staffSettings.get(`bancı`)
let kalkmazban = staffSettings.get(`kalkmazBancı`)
let owner = staffSettings.get(`owner`)
let ytalım = staffSettings.get(`ytAlım`)
let erkek1 = registerSettings.get(`erkek1`)
let erkek2 = registerSettings.get(`erkek2`)
let kadın1 = registerSettings.get(`kadın1`)
let kadın2 = registerSettings.get(`kadın2`)
let kayıtsız1 = registerSettings.get(`kayıtsız1`)
let kayıtsız2 = registerSettings.get(`kayıtsız2`)
let serverTag = serverSettings.get(`tag`)
let vip = roleSettings.get(`vip`)
let streamer = roleSettings.get(`streamer`)
let musician = roleSettings.get(`musician`)
let tasarımcı = roleSettings.get(`tasarımcı`)
let sponsor = roleSettings.get(`sponsor`)
let booster = roleSettings.get(`booster`)
let tagMessage = serverSettings.get(`tagMessage`)
let registerTag = registerSettings.get(`kayıtTag`)
let chat = maveraSettings.get(`chat`)
let ageLimit = serverSettings.get(`ageLimit`)

    if (!message.member.roles.cache.get(bancı) && !message.member.roles.cache.get(owner) && !message.member.hasPermission(8)) return message.react(no)

    let user = await client.users.fetch(args[0]);
    if (!args[0]) return message.inlineReply(`Lütfen bir ID belirtiniz. \`.unban @Mavera/ID\` `).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

    let kalkmazBan = warnSettings.fetch(`${user.id}_kalkmazBan`)
    if (kalkmazBan) return message.inlineReply(`Bahsettiğin kullanıcının kalkmaz banı bulunuyor! Bu banı yanlızca \`.kalkmazunban @Mavera/ID\` komutu ile açabilirsiniz!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

    let kalkmaz = warnSettings.fetch(`${user}_kalkmazBan`)
    if (kalkmaz) return message.inlineReply(`Bahsettiğin kullanıcının \`Mavera\` tarafından yasaklanmış açılamayacak bir yasaklaması bulunuyor! Bu yasaklamayı sadece \`Mavera\` kullanabilir.`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

message.guild.members.unban(user.id).catch(err => console.log("[MODERATION]: Unban.js err!"))
message.react(yes);
}

exports.conf = {enabled: true, guildOnly: true, aliases: ['unban', 'un-ban']}
exports.help = {name: 'Un-Ban'}