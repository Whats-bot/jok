let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*[❗ИНФО❗] ЭТОТ ПОЛЬЗОВАТЕЛЬ БЫЛ РАЗБЛОКИРОВАН ТЕПЕРЬ ОН МОЖЕТ ОТПРОВЛЯТЬ БОТУ КОМАНДЫ*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat|удалитьблок$/i
handler.rowner = true
export default handler
