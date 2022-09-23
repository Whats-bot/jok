/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 Бот Пуля 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ Привет ${name} 💙*
*┃*
*┃ 👉🏻 Хочешь снять бота?*
*┃ Пиши моим создателям*
*┃*
*┃👉🏻Или кто хочет*
*┃ купить бота пишите создателям*
*┃*
*┃Wa.me/+79010070455*
*┃Wa.me/+79773452127*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, '', '', null, null, [['ОСНОВНОЕ МЕНЮ', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|аренда|продажа|apoyar$/i
export default handler
