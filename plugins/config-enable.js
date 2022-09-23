let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `СПИСОК КОМАНД`,
rows: [
{title: "✨ | ПРИВЕТСТВИЕ", description: "ВКЛЮЧЕНИЕ И ОТКЛЮЧЕНИЕ ПРИВЕТСТВИЯ В ГРУППЕ", rowId: `${usedPrefix + command} приветствие`},
{title: "🌎 | ПУБЛИЧНЫЙ", description: ",БОТ СТАНОВИТСЯ ПУБЛИЧНЫМ И/ИЛИ ЧАСТНЫМ ИСПОЛЬЗОВАНИЕМ", rowId: `${usedPrefix + command} публичный`},
{title: "🔗 | АНТИССЫЛКА", description: "ВКЛЮЧЕНИЕ ИЛИ ОТКЛЮЧЕНИЕ АНТИССЫЛКА ГРУПП WhatsApp", rowId: `${usedPrefix + command} антиссылка`},   
{title: "🔗 | АНТИССЫЛКА 2", description: "ВКЛЮЧЕНИЕ ИЛИ ОТКЛЮЧЕНИЕ АНТИСЫЛКИ НАЧИНАЮЩИХСЯ С HTTPS", rowId: `${usedPrefix + command} антиссылка2`},    
{title: "🔎 | ОБНАРУЖИВАТЬ", description: "ВКЛЮЧЕНИЕ И ОТКЛЮЧЕНИЕ УВИДОМЛЕНИЙ О НОВЫХ ИЗМЕНЕНИЯХ В ГРУППЕ", rowId: `${usedPrefix + command} обнаруживать`},      
{title: "❗   | ОГРАНИЧИТЬ", description: "ВКЛЮЧЕНИЕ И ОТКЛЮЧЕНИЕ ОГРАНИЧЕНИЙ НА УДАЛЕНИЕ ЛЮДЕЙ ИЗ ГРУПП", rowId: `${usedPrefix + command} ограничить`},    
{title: "☑️ | АВТОЧТЕНИЕ", description: "АВТОМАТИЧЕСКОЕ ПОМЕТКА БЕСЕД КАК ПРОЧИТАННЫХ", rowId: `${usedPrefix + command} авточтение`},
{title: "👾 | АВТОСТИКЕР", description: "ВСЕ ОТПРАВЛЕННЫЕ ИЗОБРАЖЕНИЯ, ВИДЕО ИЛИ ССЫЛКИ СТАНОВЯТСЯ НАКЛЕЙКАМИ", rowId: `${usedPrefix + command} автостикер`},
{title: "💬 | ВЛАДЕЛЕЦ", description: "БОТ БУДЕТ ОТВЕЧАТЬ НА КОМАНДЫ ТОЛЬКО В ТОМ СЛУЧАЕ ЕСЛИ ЭТО ПРИВАТНЫЙ ЧАТ", rowId: `${usedPrefix + command} владелец`},
{title: "🏢 | ТОЛЬКОГРУППА", description: "БОТ БУДЕТ ОТВЕЧАТЬ НА КОМАНДЫ ТОЛЬКО ЕСЛИ ЭТО ГРУППА", rowId: `${usedPrefix + command} толькогруппа`},]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `
▬ ▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬ ▬
║➤ *✨ПРИВЕТ, ${name}!!*
▬ ▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬ ▬
┏━━━━━━━━━━━━━┓
┣❧ *ВЫБЕРИТЕ ОДНУ ИЗ КОМАНД КОТОРАЯ ВАМ НУЖНА, ИЛИ НАЖМИТЕ НА КНОПКУ В ЭТОМ СООБЩЕНИИ*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *общественный*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *общественный*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *обнаружить*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *обнаружить*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *ограничить*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *ограничить*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *владелец*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *владелец*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *толькоgc*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *толькоgc*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *авточтение*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *авточтение*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *автостикер*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *автостикер*_
┗━━━━━━━━━━━━━┛
${author}`,
title: null,
buttonText: "ВЫБЕРИТЕ ЗДЕСЬ",
sections }

let isEnable = /true|включить|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'приветствие':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'обнаруживать':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'удалить':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'антиудаления':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'публичный':
isAll = true
if (!isROwner) {
global.dfail('nyimak', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'антиссылка':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'антиссылка2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable          
break
case 'автостикер':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'аудио':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'ограничить':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'авточтение':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'владелец':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'толькогруппа':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ ВЫБОР: ${type} 
🎚️ КОМАНДА: ${isEnable ? 'ВКЛЮЧИНА' : 'ОТКЛЮЧИНА'}
📣 ДЛЯ: ${isAll ? 'ЭТОТ БОТ' : isUser ? '' : 'ЭТОТ ЧАТ'}`, author, null, [[`${isEnable ? '✖️ ОТКЛЮЧИТЬ ✖️' : '✔️ ВКЛЮЧИТЬ ✔️'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['👾 ГЛАВНОЕ МЕНЮ 👾', '.menu']],m)}

handler.help = ['вкл', 'выкл'].map(v => v + 'ючить <option>')
handler.tags = ['group', 'owner']
handler.command = /^((вкл|выкл)ючить|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
