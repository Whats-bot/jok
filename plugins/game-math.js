global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
let mat =`
*[βππππβ] πΈπ½πΆππ΄ππ΄ π»π° π³πΈπ΅πΈπ²ππ»ππ°π³πΎ π²πΎπ½ π»π° πππ΄ π³π΄ππ΄π° πΉππΆπ°π*

*π³πΈπ΅πΈπ²ππ»ππ°π³π΄π π³πΈππΏπΎπ½πΈπ±π»π΄π: ${Object.keys(modes).join(' | ')}*
*π΄πΉπ΄πΌπΏπ»πΎ π³π΄ πππΎ: ${usedPrefix}ΡΠΎΠ²Π°ΡΠΈΡΠΈ medium*
`.trim()
if (args.length < 1) return conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['πΌπ°ππ΄π π΄π°ππ', `${usedPrefix + command} easy`], 
['πΌπ°ππ΄π πΌπ΄π³πΈππΌ', `${usedPrefix + command} medium`], 
['πΌπ°ππ΄π π·π°ππ³', `${usedPrefix + command} hard`]], m)
let mode = args[0].toLowerCase()
if (!(mode in modes)) return conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['πΌπ°ππ΄π π΄π°ππ', `${usedPrefix + command} easy`], 
['πΌπ°ππ΄π πΌπ΄π³πΈππΌ', `${usedPrefix + command} medium`], 
['πΌπ°ππ΄π π·π°ππ³', `${usedPrefix + command} hard`]], m)
let id = m.chat
if (id in global.math) return conn.reply(m.chat, '*[βππππβ] ππΎπ³π°ππΈπ° π·π°π πΏππ΄πΆππ½ππ°π ππΈπ½ ππ΄ππΏπΎπ½π³π΄π π΄π½ π΄πππ΄ π²π·π°π!*', global.math[id][0])
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `π²ππ°π½ππΎ π΄π π΄π» ππ΄πππ»ππ°π³πΎ π³π΄ *${math.str}*?\n\n*β³ ππΈπ΄πΌπΏπΎ: ${(math.time / 1000).toFixed(2)} ππππππππ*\n*π πΆπ°π½π° π·π°πππ°: ${math.bonus} ππΏ*`, m),
math, 4,
setTimeout(() => { 
if (global.math[id]) conn.sendButton(m.chat, `*[βππππβ] ππ΄ π°π· π΅πΈπ½π°π»πΈππ°π³πΎ π΄π» ππΈπ΄πΌπΏπΎ πΏπ°ππ° ππ΄ππΏπΎπ½π³π΄π*\n\n*π»π° ππ΄ππΏππ΄πππ° π΄π ${math.result}*`, author, null, [['ππΎπ»ππ΄π π° πΈπ½ππ΄π½ππ°π', `${usedPrefix + command} ${math.mode}`]], global.math[id][0])
delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math|ΡΠΎΠ²Π°ΡΠΈΡΠΈ|matemΓ‘ticas/i
export default handler

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 10],
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 5000]
} 

let operators = {
'+': '+',
'-': '-',
'*': 'Γ',
'/': 'Γ·'
}

function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
