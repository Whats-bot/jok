let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ฐ ๐ด๐ป @๐๐๐ ๐ณ๐ด ๐ป๐ฐ ๐ฟ๐ด๐๐๐พ๐ฝ๐ฐ ๐๐๐ด ๐ณ๐ด๐๐ด๐ด ๐ด๐ป๐ธ๐ผ๐ธ๐ฝ๐ฐ๐ ๐ณ๐ด ๐ป๐พ๐ ๐๐๐๐ฐ๐๐ธ๐พ๐ ๐ฟ๐๐ด๐ผ๐ธ๐๐ผ*`
if (!global.prems.includes(who.split`@`[0])) throw '*[โ๐๐๐๐โ] ๐ด๐ป ๐๐๐๐ฐ๐๐ธ๐พ ๐ธ๐ฝ๐ถ๐๐ด๐๐ฐ๐ณ๐พ ๐ฝ๐พ ๐ด๐ ๐๐๐๐ฐ๐๐ธ๐พ ๐ฟ๐๐ด๐ผ๐ธ๐๐ผ*'
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `*[โะะะคะโ] @${who.split`@`[0]} ะะะะฌะจะ ะะ ะฏะะะฏะะขะกะฏ ะงะะกะขะฌะฎ ะะ ะะะะฃะ-ะะะะฌะะะะะขะะะฌ *`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['remove <@user>']
handler.tags = ['owner']
handler.command = /^(ัะฝััั|\+)ะฟัะตะผะธัะผ$/i
handler.group = true
handler.rowner = true
export default handler
