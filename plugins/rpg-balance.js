let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`
┌───⊷ БАЛАНС ⊶
▢ *Имя:* ${name}
▢ *Бриллианты:* ${global.db.data.users[who].limit}💎
└──────────────
*ПРИМЕЧАНИЕ:* 
*Вы можете купить бриллианты 💎 с помощью команды*
❏ *${usedPrefix}купить <бриллианты>*
❏ *${usedPrefix}покупка*`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['купить', 'diamantes', 'diamond', 'balance'] 
export default handler
