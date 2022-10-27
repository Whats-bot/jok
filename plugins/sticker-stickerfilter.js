import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['greyscale', 'invert', 'brightness', 'threshold', 'sepia', 'red', 'green', 'blue', 'blurple', 'pixelate', 'blur']

let handler = async (m, { conn, usedPrefix, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
*_✳️ПРАВИЛЬНОЕ ИСПОЛЬЗОВАНИЕ КОМАНДЫ ✳️_*
*👉 Использовать:* ${usedPrefix}стикерфильтр (эффект) 
- И ответ на картинку
*✅ Пример:* ${usedPrefix}стикерфильтр оттенки серого
*Список Эффектов:*
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*_🔰 No se encontro la imagen_*\n\n*_✅ Ответить на изображение_*'
if (!/image\/(jpe?g|png)/.test(mime)) throw `*_⚠️ Формат не поддерживается_*\n\n*_👉🏻 Ответить на картинку_*`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply('*_⚠️ Произошла ошибка при преобразовании в sticker_*\n\n*_✳️ Отправка изображения вместо..._*')
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickfilter (caption|reply media)']
handler.tags = ['General']
handler.command = /^(стикерфильтр|stikerfilter|cs2)$/i
export default handler
