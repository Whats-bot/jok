import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[βππππβ] π½πΎπΌπ±ππ΄ π³π΄ π»π° π²π°π½π²πΈπΎπ½ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π½πΎπΌπ±ππ΄/ππΈπππ»πΎ π³π΄ ππ½π° π²π°π½π²πΈπΎπ½*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[βππππβ] π»πΎ ππΈπ΄π½ππΎ, π½πΎ πΏππ³π΄ π΄π½π²πΎπ½πππ°π π΄π» π°ππ³πΈπΎ/ππΈπ³π΄πΎ, πΈπ½ππ΄π½ππ΄ π²πΎπ½ πΎπππΎ π½πΎπΌπ±ππ΄/ππΈπππ»πΎ*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
π *ΠΠ‘ΠΠΠΠΠΠ’ΠΠΠ¬/ΠΠΠΠΠΠΠΠ:* ${title}
π *ΠΠΠΠ‘ΠΠΠΠ:* ${description}
π *ΠΠΠ£ΠΠΠΠΠΠΠΠΠ:* ${publishedTime}
β *ΠΠ ΠΠΠΠΠΠΠ’ΠΠΠ¬ΠΠΠ‘Π’Π¬:* ${durationH}
π *ΠΠ ΠΠ‘ΠΠΠ’Π ΠΠΠ:* ${viewH}
`.trim(), author, thumbnail, `${url}`, 'Π‘Π‘Π«ΠΠΠ', null, null, [
['ΠΠΠ‘ΠΠ―', `${usedPrefix}yta ${url}`],
['ΠΠΠΠ', `${usedPrefix}ytv ${url}`],
['ΠΠ‘Π Π ΠΠΠ£ΠΠ¬Π’ΠΠ’Π«', `${usedPrefix}playlist ${text}`]  
], m)
}catch(e){
m.reply('*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*')
console.log(e)
}}
handler.help = ['ΠΏΠ΅ΡΠ½Ρ', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
