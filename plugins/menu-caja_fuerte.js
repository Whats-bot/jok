const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let str = `
*_ミ💖 ПРИВЕТ ${name} 💖彡_*

ㅤㅤ *🗳️<БЕЗОПАСНЫЙ/>🔐*

- ЗДЕСЬ ВЫ МОЖЕТЕ СОХРАНИТЬ СООБЩЕНИЯ, КОТОРЫЕ ВЫ ХОТИТЕ УВИДЕТЬ ПОЗЖЕ

*<ДОБАВИТЬ В СПИСОК/>*

° ඬ⃟🗳️ _${usedPrefix}agregarmsg *<texto/comando/palabra clave>* (responde a un texto)_
° ඬ⃟🗳️ _${usedPrefix}agregarvn *<texto/comando/palabra clave>* (responde a una nota de voz)_
° ඬ⃟🗳️ _${usedPrefix}agregarvideo *<texto/comando/palabra clave>* (responde a un video)_
° ඬ⃟🗳️ _${usedPrefix}agregaraudio *<texto/comando/palabra clave>* (responde a un audio)_
° ඬ⃟🗳️ _${usedPrefix}agregarimg *<texto/comando/palabra clave>* (responde a una imagen)_
° ඬ⃟🗳️ _${usedPrefix}agregarsticker *<texto/comando/palabra clave>* (responde a un sticker)_

*<СПИСОК КОМАНД/>*

° ඬ⃟🗳️ _${usedPrefix}listamsg_
° ඬ⃟🗳️ _${usedPrefix}listavn_
° ඬ⃟🗳️ _${usedPrefix}listavideo_
° ඬ⃟🗳️ _${usedPrefix}listaaudio_
° ඬ⃟🗳️ _${usedPrefix}listaimg_
° ඬ⃟🗳️ _${usedPrefix}listasticker_

*<ПРОСМОТРА ТЕКСТА ИЛИ ФАЙЛА/>*

° ඬ⃟🗳️ _${usedPrefix}vermsg *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _${usedPrefix}vervn *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _${usedPrefix}vervideo *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _${usedPrefix}veraudio *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _${usedPrefix}verimg *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _${usedPrefix}versticker *<texto/comando/palabra clave>*_

*<УСТРАНЯЕТ/>*

° ඬ⃟🗳️ _${usedPrefix}eliminarmsg *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _${usedPrefix}eliminarvn *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _${usedPrefix}eliminarvideo *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _${usedPrefix}eliminaraudio *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _${usedPrefix}eliminarimg *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _${usedPrefix}eliminarsticker *<texto/comando/palabra clave>*_`.trim()

conn.sendHydrated(m.chat, str, wm, pp, '', '', null, null, [
['', '/']
], m)
}}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(сейф)$/i
handler.rowner = true
handler.fail = null
export default handler
