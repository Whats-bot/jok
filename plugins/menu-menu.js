import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/меню.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
*ミПРИВЕТ ${name}, ВОТ ПОЛНОЕ МЕНЮ Бот Пуляᙆ  ᷦ 彡*

*📅 ДАТА: ${week}, ${date}*
*📈 АКТИВНОЕ ВРЕМЯ: ${uptime}*
*📊 ПОЛЬЗОВАТЕЛЕЙ: ${rtotalreg}*

*<ИНФОРМАЦЫЯ О БОТЕ/>*

° ඬ ⃟ 💟 _${usedPrefix}статус_
° ඬ ⃟ 💟 _${usedPrefix}инфобот_
° ඬ ⃟ 💟 _${usedPrefix}всегруппы_
° ඬ ⃟ 💟 _${usedPrefix}создатель_
° ඬ ⃟ 💟 _${usedPrefix}царь бота_
° ඬ ⃟ 💟 _${usedPrefix}аренда_

° ඬ ⃟ 💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)

*<ПРИСОЕДИНЕНИЕ БОТА К ГРУППЕ/>*

° ඬ⃟👽 _${usedPrefix}join *<enlace / link / url>*_

*<ПРОЦЕНТНЫЙ РЕЗУЛЬТАТ>*

° ඬ⃟🎖️ _${usedPrefix}дурак *<@номер>*_
° ඬ⃟🎖️ _${usedPrefix}умный *<@номер>*_
° ඬ⃟🎖️ _${usedPrefix}любит*<@номер>*_
° ඬ⃟🎖️ _${usedPrefix}любит1 *<@номер>*_
° ඬ⃟🎖️ _${usedPrefix}дура *<@номер>*_
° ඬ⃟🎖️ _${usedPrefix}какашка *<@номер>*_
° ඬ⃟🎖️ _${usedPrefix}правда *<@номер>*_
° ඬ⃟🎖️ _${usedPrefix}русский *<@номер>*_
° ඬ⃟🎖️ _${usedPrefix}лучший *<@номер>*_
° ඬ⃟🎖️ _${usedPrefix}якрасивая *<@номер>*_
° ඬ⃟🎖️ _${usedPrefix}хитрый *<@номер>*_

*<ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ>*

° ඬ⃟☑️ _${usedPrefix}включить *приветствие*_
° ඬ⃟☑️ _${usedPrefix}выключить *приветствие*_
° ඬ⃟☑️ _${usedPrefix}включить *толькогруппа*_
° ඬ⃟☑️ _${usedPrefix}выключить *толькогруппа*_
° ඬ⃟☑️ _${usedPrefix}включить *антиссылка*_
° ඬ⃟☑️ _${usedPrefix}выключить *антиссылка*_
° ඬ⃟☑️ _${usedPrefix}включить *антиссылка2*_
° ඬ⃟☑️ _${usedPrefix}выключить *антиссылка2*_
° ඬ⃟☑️ _${usedPrefix}включить *обнаруживать*_
° ඬ⃟☑️ _${usedPrefix}выключить *обнаруживать*_
° ඬ⃟☑️ _${usedPrefix}включить *автостикер*_
° ඬ⃟☑️ _${usedPrefix}выключить *автостикер*_

*<СООБЩЕНИЯ ОБ ОШИБКАХ/>*

° ඬ⃟🔰 _${usedPrefix}отчет *<texto>*_


*<ГРУППЫ/>* 

° ඬ⃟💎 _${usedPrefix}добавить *<номер>*_
° ඬ⃟💎 _${usedPrefix}снести *<@номер>*_
° ඬ⃟💎 _${usedPrefix}группа *<открыть / закрыть>*_
° ඬ⃟💎 _${usedPrefix}имягруппы *<новое название группы>*_
° ඬ⃟💎 _${usedPrefix}снятьадмина *<@номер>*_
° ඬ⃟💎 _${usedPrefix}датьадмина *<@номер>*_
° ඬ⃟💎 _${usedPrefix}инфогруппы_
° ඬ⃟💎 _${usedPrefix}ссылка_
° ඬ⃟💎 _${usedPrefix}личныйпривет *<текст>*_

*<ЭФЕКТЫ>*

° ඬ⃟🧧 _${usedPrefix}преобразовать *<ответить на стикер>*_
° ඬ⃟🧧 _${usedPrefix}норни *<@немер>*_
° ඬ⃟🧧 _${usedPrefix}скрин *<текст>*_
° ඬ⃟🧧 _${usedPrefix}сим *<@немер>*_
° ඬ⃟🧧 _${usedPrefix}пиксиль *<@немер>*_
° ඬ⃟🧧 _${usedPrefix}радуга *<@немер>*_
° ඬ⃟🧧 _${usedPrefix}аватарка *<@немер>*_
° ඬ⃟🧧 _${usedPrefix}свадьба_

*<СТРОГО 18+/>*

° ඬ⃟ 🔞 _${usedPrefix}эрокартинки_
° ඬ⃟ 🔞 _${usedPrefix}девушка_
° ඬ⃟ 🔞 _${usedPrefix}девушка2_
° ඬ⃟ 🔞 _${usedPrefix}дувушка3_
° ඬ⃟ 🔞 _${usedPrefix}девушка4_
° ඬ⃟ 🔞 _${usedPrefix}девушка5_
° ඬ⃟ 🔞 _${usedPrefix}девушка6_
° ඬ⃟ 🔞 _${usedPrefix}аниме_
° ඬ⃟ 🔞 _${usedPrefix}аниме2_
° ඬ⃟ 🔞 _${usedPrefix}аниме3_
° ඬ⃟ 🔞 _${usedPrefix}аниме4_
° ඬ⃟ 🔞 _${usedPrefix}аниме5_
° ඬ⃟ 🔞 _${usedPrefix}аниме6_
° ඬ⃟ 🔞 _${usedPrefix}аниме7_
° ඬ⃟ 🔞 _${usedPrefix}аниме8_
° ඬ⃟ 🔞 _${usedPrefix}аниме9_
° ඬ⃟ 🔞 _${usedPrefix}жопа_
° ඬ⃟ 🔞 _${usedPrefix}секси_
° ඬ⃟ 🔞 _${usedPrefix}сиськи_
° ඬ⃟ 🔞 _${usedPrefix}лесбиянки_
° ඬ⃟ 🔞 _${usedPrefix}порно_
° ඬ⃟ 🔞 _${usedPrefix}член_
° ඬ⃟ 🔞 _${usedPrefix}парень_

*<ПОИСКОВИКИ/>*

° ඬ⃟🔍 _${usedPrefix}обои *<текст>*_
° ඬ⃟🔍 _${usedPrefix}обои2 *<текст>*_
° ඬ⃟🔍 _${usedPrefix}гугол *<текст>*_
° ඬ⃟🔍 _${usedPrefix}letra *<текст>*_
° ඬ⃟🔍 _${usedPrefix}ютуб *<ссылка>*_
° ඬ⃟🔍 _${usedPrefix}ютуб2 *<ссылка>*_
° ඬ⃟🔍 _${usedPrefix}тикток *<ссылка>*_

*<ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊/>*

° ඬ⃟🛠️ _${usedPrefix}код *<текст>*_
° ඬ⃟🛠️ _${usedPrefix}решить *<например 150+150>*_
° ඬ⃟🛠️ _${usedPrefix}повтор *<текст>*_
° ඬ⃟🛠️ _${usedPrefix}шрифт *<текст>*_

*<СТИКЕР/>*

° ඬ⃟👽 _${usedPrefix}анимеинфо *<текст>*_
° ඬ⃟👽 _${usedPrefix}стикер *<ответить на изображение или видео>*_
° ඬ⃟👽 _${usedPrefix}с *<ответить на изображение или видео>*_
° ඬ⃟👽 _${usedPrefix}s *<ответить на изображение или видео>*_
° ඬ⃟👽 _${usedPrefix}стикер *<ссылка>*_
° ඬ⃟👽 _${usedPrefix}эмоджимикс *<эмодзи1>&< эмодзи 2>*_
° ඬ⃟👽 _${usedPrefix}эмодзи *<типо> <эмодзи>*_
° ඬ⃟👽 _${usedPrefix}похлопывать *<@номер>*_
° ඬ⃟👽 _${usedPrefix}шлепок *<@номер>_
° ඬ⃟👽 _${usedPrefix}поцелуй *<@номер>*_
° ඬ⃟👽 _${usedPrefix}зарик_
° ඬ⃟👽 _${usedPrefix}переименовать *<имя стикера> <имя покета>*_
° ඬ⃟👽 _${usedPrefix}стикермаркет *<эффект> <ответить на изображение>*_
° ඬ⃟👽 _${usedPrefix}стикерфильтер <эффект> <ответить на изображение>*_

*<КОМАНДЫ СОЗДАТЕЛЯ И АДМИНА/>*

° ඬ⃟👑 _${usedPrefix}вниманиечаты *<текст>*_
° ඬ⃟👑 _${usedPrefix}описание *<текст>*_
° ඬ⃟👑 _${usedPrefix}сейф_
° ඬ⃟👑 _${usedPrefix}включить *ограничить*_
° ඬ⃟👑 _${usedPrefix}выключить *ограничить*_
° ඬ⃟👑 _${usedPrefix}включить *авточтение*_
° ඬ⃟👑 _${usedPrefix}выключить *авточтение*_
° ඬ⃟👑 _${usedPrefix}включить *публичный*_
° ඬ⃟👑 _${usedPrefix}выключить *публичный*_
° ඬ⃟👑 _${usedPrefix}включить *владелец*_
° ඬ⃟👑 _${usedPrefix}выключить *владелец*_
° ඬ⃟👑 _${usedPrefix}включить *толькогруппа*_
° ඬ⃟👑 _${usedPrefix}выключить *толькогруппа*_
° ඬ⃟👑 _${usedPrefix}блокчат_
° ඬ⃟👑 _${usedPrefix}сменаприветствие_
° ඬ⃟👑 _${usedPrefix}удальтьблок_
° ඬ⃟👑 _${usedPrefix}разблокировать *<@tag>*_
° ඬ⃟👑 _${usedPrefix}обьявление *<текст>*_
° ඬ⃟👑 _${usedPrefix}старт_
° ඬ⃟👑 _${usedPrefix}обновить_
° ඬ⃟👑 _${usedPrefix}датьпремиум *<@номер>*_
° ඬ⃟👑 _${usedPrefix}снятьпремиум *<@немер>*_
° ඬ⃟👑 _${usedPrefix}вызов *<текст>*_
° ඬ⃟👑 _${usedPrefix}прощяние *<@немер>*_
° ඬ⃟👑 _${usedPrefix}заблокировать *<@немер>*_

*<ГОЛОСОВЫЕ>*

° ඬ⃟🔊 _${usedPrefix}Здравствуйте_
° ඬ⃟🔊 _${usedPrefix}Правила_
° ඬ⃟🔊 _${usedPrefix}Фу_
° ඬ⃟🔊 _${usedPrefix}Новенький_
° ඬ⃟🔊 _${usedPrefix}Чистка_
° ඬ⃟🔊 _${usedPrefix}Админы_
° ඬ⃟🔊 _${usedPrefix}Иди нахуй_
° ඬ⃟🔊 _${usedPrefix}Спасибо_
° ඬ⃟🔊 _${usedPrefix}Сука_
° ඬ⃟🔊 _${usedPrefix}Пока_
° ඬ⃟🔊 _${usedPrefix}Это я_
° ඬ⃟🔊 _${usedPrefix}Где все_
° ඬ⃟🔊 _${usedPrefix}Здарова_
° ඬ⃟🔊 _${usedPrefix}Выходной_
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, '', '', 'https://api.whatsapp.com/send?phone=79010070455', 'ОПЛАТИТЬ БОТА', [

['🧧 ИНФО БОТ 🧧', '/infobot'],
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.command = /^(меню|menu3|menu|menú3|memu3|memú3|help3|info3|comandos3|allmenu3|ayuda3|commands3|commandos3)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
