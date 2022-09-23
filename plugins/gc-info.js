let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null)|| './src/info_group.jpg'
const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*「 ИНФОРМАЦЫЯ ГРУППЫ 」*\n
*ИДЕНТИФИКАЦЫЯ ГРУППЫ:* 
${groupMetadata.id}

┣➥ *ИМЯ:* 
╠〘 ${groupMetadata.subject} 〙
╠
┣➥ *ОПИСАНИЕ:* 
╠${groupMetadata.desc?.toString() || 'НЕТ ОПИСАНИЯ'}
╠
┣➥ *ВСЕГО УЧАСНИКОВ:*
╠ ${participants.length} Участников
╠
┣➥ *👑СОЗДАТЕЛЬ ГРУППЫ👑:* 
╠—◉ @${owner.split('@')[0]} ◉—
╠ 
┣➥ *🎖️АДМИНИСТРАТОРЫ ГРУПП🎖️:*
 ${listAdmin}

┣➥ *АВТОМАТИЧЕСКИЕ ОПЦИИ:*
┣➥—◉ ПРИВЕТСТВИЕ: ${welcome ? '✅' : '❌'}
┣➥—◉ ОБНАРУЖИТЬ: ${detect ? '✅' : '❌'} 
┣➥—◉ АНТИССЫЛКА: ${antiLink ? '✅' : '❌'} 
┣➥—◉ АНТИССЫЛКА 𝟸: ${antiLink2 ? '✅' : '❌'} 
┣➥—◉ АВТОСТИКЕР: ${autosticker ? '✅' : '❌'} 
┣➥—◉ АУДИО: ${audios ? '✅' : '❌'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(инфогруппы|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
