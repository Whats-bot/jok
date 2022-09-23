import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 ИНФО О БОТЕ 〙 ═
╠
╠➥ [🤴🏻] СОЗДАТЕЛЬ: *Царь*
╠➥ [🤴🏻] СОЗДАТЕЛЬ: *Комар*
╠➥ [#️⃣] НЕМЕР СОЗДАТЕЛЯ: *+79010070455*
╠➥ [#️⃣] НЕМЕР СОЗДАТЕЛЯ: *+79773452127*
╠➥ [🎳] ПРЕФИКС: *${usedPrefix}* 
╠➥ [🚀] АКТИВНОСТЬ: *${uptime}*
╠➥ [👨‍🦯] СКОРОСТЬ: 
╠  *${speed}* 
╠  *𝚖𝚒𝚕𝚒𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*
╠➥ [☑️] АВТОЧИТАНИЕ: ${autoread ? '*включить*' : '*выключить*'}
╠➥ [❗] ОГРАНИЧИВАТЬ: ${restrict ? '*включить*' : '*выключить*'} 
╠➥ [👑] АРЕНДА БОТА 900 Р. ЗА МЕСЯЦ
╠➥ [👑] ОБРАЩАТЬСЯ К СОЗДАТЕЛЯМ БОТА
╠➥ [👑] СОЗДАТЕЛЬ Wa.me/+79010070455
╠➥ [👑] СОЗДАТЕЛЬ Wa.me/+79773452127
╠ 
╠═〘 Бот Пуляᙆ  ᷦ 〙 ═
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ИНФО О БОТЕ',
body: 'Бот Пуляᙆ  ᷦ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `http://risovach.ru/upload/2013/10/mem/tvoe-vyrazhenie-lica_31598950_orig_.jpeg`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'инфобот', 'инфо']
handler.command = /^(ping|speed|инфобот|infobot|инфо)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
