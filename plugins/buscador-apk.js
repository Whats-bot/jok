/* Created by https://github.com/FahriAdison */
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw `*[β] πΈπ½πΆππ΄π΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ π»π° π°πΏπΊ πππ΄ πππΈπ΄ππ° π±πππ²π°π*`

if (command == 'apkdone') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `*βββγ ${command} γβββ*\n`
for (let x of jsons.result) {
caption += `
*π½πΎπΌπ±ππ΄:* *${x.apps_name}*
*π»πΈπ½πΊ:* ${x.apps_linkdl}
*ππ΄πππΈπΎπ½:* ${x.apps_version}
`}
await conn.reply(m.chat, caption, m)}

if (command == 'apkgoogle') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `*βββγ ${command} γβββ*\n`
for (let x of jsons.result) {
caption += `
*π½πΎπΌπ±ππ΄:* *${x.apps_name}*
*π»πΈπ½πΊ:* ${x.apps_linkdl}
`}
await conn.reply(m.chat, caption, m)}

if (command == 'apkmody') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `*βββγ ${command} γβββ*\n`
for (let x of jsons.result) {
caption += `
*π½πΎπΌπ±ππ΄:* *${x.apps_name}*
*π»πΈπ½πΊ:* ${x.apps_linkdl}
*π³π΄ππ²:* ${x.desc}
`}
await conn.reply(m.chat, caption, m)}

if (command == 'apkshub') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `*βββγ ${command} γβββ*\n`
for (let x of jsons.result) {
caption += `
*π½πΎπΌπ±ππ΄:* *${x.apps_name}*
*π»πΈπ½πΊ:* ${x.apps_linkdl}
`}
await conn.reply(m.chat, caption, m)}

if (command == 'happymod') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/happymod?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `*βββγ ${command} γβββ*\n`
for (let x of jsons.result) {
caption += `
*π½πΎπΌπ±ππ΄:* *${x.apps_name}*
*π»πΈπ½πΊ:* ${x.apps_linkdl}
`}
await conn.reply(m.chat, caption, m)}

if (command == 'hostapk') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `*βββγ ${command} γβββ*\n`
for (let x of jsons.result) {
caption += `
*π½πΎπΌπ±ππ΄:* *${x.apps_name}*
*π»πΈπ½πΊ:* ${x.apps_linkdl}
*π³π΄ππ²:* ${x.apps_desc}
`}
await conn.reply(m.chat, caption, m)}

if (command == 'revdl') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `*βββγ ${command} γβββ*\n`
for (let x of jsons.result) {
caption += `
*π½πΎπΌπ±ππ΄:* *${x.apps_name}*
*π»πΈπ½πΊ:* ${x.apps_linkdl}
`}
await conn.reply(m.chat, caption, m)}

if (command == 'toraccino') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `*βββγ ${command} γβββ*\n`
for (let x of jsons.result) {
caption += `
*π½πΎπΌπ±ππ΄:* *${x.apps_name}*
*π»πΈπ½πΊ:* ${x.apps_linkdl}
*π³π΄ππ²:* ${x.apps_desc}
`}
await conn.reply(m.chat, caption, m)}

if (command == 'ΡΡ') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `*βββγ ${command} γβββ*\n`
for (let x of jsons.result) {
caption += `
*π½πΎπΌπ±ππ΄:* *${x.apps_name}*
*π»πΈπ½πΊ:* ${x.apps_linkdl}
`}
await conn.reply(m.chat, caption, m)}

}
handler.command = ['Π°ΡΠΊ', 'apkgoogle', 'apkmody', 'apkshub', 'happymod', 'hostapk', 'revdl', 'toraccino', 'uapkpro']
export default handler
