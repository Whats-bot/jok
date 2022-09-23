let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙳𝙴 𝙻𝙾𝚂 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼*`
if (!global.prems.includes(who.split`@`[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝙳𝙾 𝙽𝙾 𝙴𝚂 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼*'
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `*[❗ИНФО❗] @${who.split`@`[0]} БОЛЬШЕ НЕ ЯВЛЯЕТСЯ ЧАСТЬЮ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЬ *`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['remove <@user>']
handler.tags = ['owner']
handler.command = /^(снять|\+)премиум$/i
handler.group = true
handler.rowner = true
export default handler
