import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/сука.mp3'
conn.sendFile(m.chat, vn, 'Buenos-dias-2.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /сука|Сука/
handler.command = new RegExp
export default handler