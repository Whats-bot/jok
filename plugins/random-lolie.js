let handler = async (m, { conn, text, command }) => {
    let yh = global.loli
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ ʟᴏʟɪ - ɪѕ ᴄᴜᴛᴇ 🥺`.trim(), author, url, [['🔄 ДРУГОЕ 🔄', `/${command}`]], m)
  }
  handler.command = /^(loli)$/i
  handler.tags = ['anime']
  handler.help = ['loli']
  export default handler
  
  global.loli = [
    "https://telochki.org/uploads/posts/2021-10/1633546860_70-telochki-info-p-vozbuzhdayushchie-seksi-devushki-erotika-p-74.jpg",
  ]
