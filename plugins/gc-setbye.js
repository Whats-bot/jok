let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*[❗] ПРОЩАЛЬНОЕ СООБЩЕНИЕ ЗАПИСАНО ДЛЯ ЭТОЙ ГРУППЫ НА ПОЛЬЗОВАТЕЛЯ*')
} else throw `*[❗] ВВЕДИТЕ ПРАЩАЛЬНОЕ СООБЩЕНИЯ КОТОРОЕ ВЫ ХОТИТЕ ДАБАВИТЬ. ИСПОЛЬЗУЙТЕ:*\n*- @номер (сообщение)*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['прощяние'] 
handler.admin = true
export default handler
