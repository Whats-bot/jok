import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[βππππβ] π½πΎπΌπ±ππ΄ π³π΄ π»π° π²π°π½π²πΈπΎπ½ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π½πΎπΌπ±ππ΄/ππΈπππ»πΎ πΎ π΄π½π»π°π²π΄ π³π΄ π°π»πΆππ½π° π²π°π½π²πΈπΎπ½ πΎ ππΈπ³π΄πΎ π³π΄ ππΎππππ±π΄\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:\n#play.1 Good Feeling - Flo Rida*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `*_β³ΠΠΆΠΈΠ΄Π°ΠΉΡΠ΅ ΠΈΠ΄Π΅Ρ Π·Π°Π³ΡΡΠ·ΠΊΠ°...β³_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ππ΄πΏππΎπ³ππ²ππΎπ π³π΄ π°ππ³πΈπΎ',
body: 'ΚΚ ΠΠΎΡ ΠΡΠ»Ρα  α·¦',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/IdkJhus`}}})
let res = await fetch("https://my-api-bice.vercel.app/api/ytplay?apikey=nktesla&q="+text)
let json = await res.json()
conn.sendFile(m.chat, json.descarga, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_β³ΠΠΆΠΈΠ΄Π°ΠΉΡΠ΅ ΠΈΠ΄Π΅Ρ Π·Π°Π³ΡΡΠ·ΠΊΠ°...β³_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ππ΄πΏππΎπ³ππ²ππΎπ π³π΄ ππΈπ³π΄πΎ',
body: 'ΚΚ ΠΠΎΡ ΠΡΠ»Ρα  α·¦',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/IdkJhus`}}})
let res = await fetch("https://api.lolhuman.xyz/api/ytplay2?apikey=9b817532fadff8fc7cb86862&query="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_ππ‘π ππ²π¬π­π’π - ππ¨π­_`, m)} 
}catch(e){
m.reply('*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*')
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
