let handler = m => {
let msgs = global.db.data.msgs
m.reply(`
*馃敯 小袩袠小袨袣 孝袝袣小孝袨袙蝎啸 小袨袨袘些袝袧袠袡 袣袥挟效袝袙蝎啸 小袥袨袙 馃敯*

*鉁筹笍 小袨袨袘些袝袧袠携 鉁筹笍*
${Object.keys(msgs).map(v => '*馃憠馃徎 ' + v).join('*\n*')}*
`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^lista(vn|msg|video|audio|img|sticker)$/
export default handler