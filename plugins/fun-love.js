let handler = async (m, { conn, command, text }) => {
conn.reply(m.chat, `
*❤️❤️ ИЗМЕРИТЕЛЬ ЛЮБВИ ❤️❤️*
*Любовь к тебе ${text}* *${Math.floor(Math.random() * 100)}%* *из 100%*
*Вы должны попросить руки и сержце (её или его)* *стать (вашей девушкой или вашем парнем)*
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(❤️)$/i
export default handler
