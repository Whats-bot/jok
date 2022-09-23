let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚁𝙴𝙿𝙾𝚁𝚃𝙴*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`
if (text.length < 10) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙳𝙴 𝙼𝙸𝙽𝙸𝙼𝙾 𝟷0 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂!*`
if (text.length > 1000) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙳𝙴 𝙼𝙰𝚇𝙸𝙼𝙾 𝟷000 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂!*`
let teks = `*❒═════[ОТЧЕТ]═════❒*\n*┬*\n*├❧ НОМЕР:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ СООБЩЕНИЕ:* ${text}\n*┴*`
conn.reply('+79010070455@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
m.reply(`*[ ✔️] ОТЧЕТ УСПЕШНО ОТПРАВЛЕН СОЗДАТЕЛЮ БОТА МЫ ПОСТАРАЕМСЯ В СКОРЕМ ВРЕМИНИ ЕГО РАСМОТРЕТЬ*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|отчет|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
