let handler = async (m, { conn, usedprefix }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendButton(m.chat, '*🚔🚨 ВАШИ ВЫЕБОНЫ ПРЕНАДЛЕЖАТ ТЮРЬМЕ 🚨🚔*', author, global.API('https://some-random-api.ml', '/canvas/lolice', { 
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), [[]], m)}

handler.help = ['судья']
handler.tags = ['maker']
handler.command = /^(судья)$/i
export default handler
