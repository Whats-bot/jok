/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 Бот Джокер 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ Привет ${name} 💙*
*┃*
*┃ 👉🏻 Хочешь снять бота?*
*┃ Пиши моиму создателю*
*┃*
*┃👉🏻Или кто хочет*
*┃ купить бота пишите создателям*
*┃*
*┃Wa.me/+79524197466*
*┃
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, '', '', null, null, [['ОСНОВНОЕ МЕНЮ', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|аренда|продажа|apoyar$/i
export default handler
