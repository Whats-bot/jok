let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗ИНФО❗] ВВЕДИТЕ @номер ИЛИ НИК УЧАСТНИКА*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*'
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `*[❗ИНФО❗] ПОЛЬЗОВАТЕЛЬ УСПЕШНО ЗАБЛОКИРОВАН*\n*—◉ ПОЛЬЗОВАТЕЛЬ НЕ СМОЖЕТ ПОЛЬЗОВАТЬСЯ БОЛЬШЕ БОТОМ*`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^заблокировать$/i
handler.rowner = true
export default handler
