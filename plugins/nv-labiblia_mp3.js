import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/день.mp3'
conn.sendFile(m.chat, vn, 'ora.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /какой сегодня день|Какой сегодня день/
handler.command = new RegExp
export default handler
