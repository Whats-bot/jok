import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] ВВЕДИТЕ ИМЯ ГРУППЫ КОТОРОЕ ХОТИТЕ СОХРАНИТЬ*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*[❗ИНФО❗] НАЗВАНИЕ ГРУППЫ СЛИШКО ДЛИННОЕ МОЖНО НЕ 25 СИМВОЛОВ*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(имягруппы)$/i
handler.group = true
handler.admin = true
export default handler
