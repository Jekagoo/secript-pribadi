
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const { spawn, exec, execSync } = require("child_process")
const fs = require('fs')
const hx = require('hxz-api')
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const brainly = require('brainly-scraper')
const axios = require('axios')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const { color, bgcolor } = require('./lib/color')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText, getBase64, kyun, createExif } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const _dhprem = JSON.parse(fs.readFileSync('./database/udahprem.json'))
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { smsg } = require('./lib/simple.js')
const { herodetails } = require('./lib/herodetail.js')
const setting = JSON.parse(fs.readFileSync('./semtings/setting.json'))
//━━━━━━━━━━━━━━━[ APIKEY SETTING.JSON ]━━━━━━━━━━━━━━━\\
const gember = fs.readFileSync("./img/Menunya.jpg"); 
const thumb = fs.readFileSync("./img/thumb.jpg");
//━━━━━━━━━━━━━━━[ APIKEY SETTING.JSON ]━━━━━━━━━━━━━━━\\

AlphaBot = 'Alphabot'
Leyscoders = 'IkyOgiwara'
ZeksKey = 'apivinz'

//━━━━━━━━━━━━━━━[  AUTO RESPON ]━━━━━━━━━━━━━━━\\

autorespon = true
autoread = true
autocomposing = true
autorecording = true
AutoRespon: true
menugif = false

//━━━━━━━━━━━━━━━[  PUBLIC ]━━━━━━━━━━━━━━━\\

publik = true

//━━━━━━━━━━━━━━━[EDIT DI SETTING.JSON]━━━━━━━━━━━━━━━\\

namabot = setting.BotName
namaowner = setting.OwnerName
nomorowner = setting.OwnerNumber
nomorbot = setting.BotNumber
githubown = setting.GithubLu
youtubeown = setting.youtubeLu

//━━━━━━━━━━━━━━━[ Sticker WM ]━━━━━━━━━━━━━━━\\

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif() 

//𓂸𓂸𓂸𓂸𓂺𓂺𓂺[Image]𓂺𓂺𓂺𓂺𓂺𓂺/

//━━━━━━━━━━━━━━━[ AKHIR ]━━━━━━━━━━━━━━━\\
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
       
const getCmd = (id) => {

  let position = null;
  Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return scommand[position].chats;
  }
};  


module.exports = client = async (client, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			//if (mek.key.fromMe) return
			global.blocked
		    m = smsg(client, mek)
			const content = JSON.stringify(mek.message)			
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#' 
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━\\
			mess = {
				daftar: `Maaf kak, kakak belum daftar menjadi user ${namabot}.\n Silahkan daftar dengan mengetik *.daftar*`,
				wait: 'MOHON TUNGGU SEBENTAR',
				banned: 'Haha sorry lu di banned... Kalo mau di lepas banned harap hubungin .owner',
				success: 'SELESAI✓',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌ PENGGUNAAN DALAM GROUP!!! ❌',
					premium: 'Fitur ini Khusus User Premium!!\nKalo Mau Jadi User Premium\nSilahkan ketik .owner!',
					ownerG: '❌ LU BUKAN OWNER GROUP!!! ❌',
					ownerB: '❌ LU BUKAN OWNERKU!!! ❌',
					admin: '❌ LU BUKAN ADMIN GROUP!! ❌',
					Badmin: '❌ BOT BUKAN ADMIN!!! ❌'
				}
			}
//━━━━━━━━━━━━━━━[ Terakhir ]━━━━━━━━━━━━━━━\\
			const botNumber = client.user.jid
			const ownerNumber = [`${nomorowner}`, `6283876159184@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			
//━━━━━━━━━━━━━━━[ HARI HARI ]━━━━━━━━━━━━━━━\\
		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        
        const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
			client.sendMessage(from, teks, text, { thumbnail: gember, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} WIB - ${week}`,body:"乙̻̻̻̻̻̻̻̻̻̼̻̻͖̻̺̻̠̻̰̻͇̻̙̻̓͛ͮͩͦ̎ͦ̑ͅ乇̻̻̻̻̻̮̻̟̻͈̻̣̻̖̻̰̻̩̻̹̻͈̻̾ͨ̑͑刀̻̻̻̻̻̻͉̻̠̻̙̻͉̻̗̻̺̻̋̋̔ͧ̊ﾉ̻̻̻̻̻̞̻̟̻̫̻̺̻ͭ̒ͭͣﾒ̻̻̻̻̻̻̥̻͕̻̮̻̠̻̦̻͉̻̑̉̄̀̚乂̻⁴̻⁰̻⁴̻",previewType:"PHOTO",thumbnail:gember,sourceUrl:`https://wa.me/p/6349482305092740/6285697662826`}}})
		}
		const reply2 = (teks) => {
client.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
	
			   
			   
//━━━━━━━━━━━━━━━[WAKTU]━━━━━━━━━━━━━━━\\
			            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}`; break;
            }
            var ucapanFakereply = "" + waktoonyabro;
           
           //━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━\\
const jmn = moment.tz('Asia/Jakarta').format('HH.mm')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		       
//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━\\

           const fakedoc = {key: {fromMe: false, participant: `${nomorowner}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanFakereply}`, pageCount: 0, fileName: `乙̻̻̻̻̻̻̻̻̻̼̻̻͖̻̺̻̠̻̰̻͇̻̙̻̓͛ͮͩͦ̎ͦ̑ͅ乇̻̻̻̻̻̮̻̟̻͈̻̣̻̖̻̰̻̩̻̹̻͈̻̾ͨ̑͑刀̻̻̻̻̻̻͉̻̠̻̙̻͉̻̗̻̺̻̋̋̔ͧ̊ﾉ̻̻̻̻̻̞̻̟̻̫̻̺̻ͭ̒ͭͣﾒ̻̻̻̻̻̻̥̻͕̻̮̻̠̻̦̻͉̻̑̉̄̀̚乂̻⁴̻⁰̻⁴̻`, jpegThumbnail: fs.readFileSync(`./img/thumb.jpg`)}}}
			const ftoko = { key: { fromMe: false, 
			             participant: `0@s.whatsapp.net`, ...(from ? { 
			             remoteJid: 'status@broadcast' } : {}) }, 
			             message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./img/thumb.jpg') }, 'title': `${namabot}\nRp. 10.000`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
    const ftrol = {key : {fromMe:false, //by Guntur
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `${namabot} \nRp. 999.999.999`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const fhidetag = {key : {fromMe:false, //by 
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `Pesan Dari\n${pushname}`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const ftrolMENU = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: { 
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `by ${namaowner}`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
			const fakeitem = (teks) => {
           client.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false, 
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"0-1604595598@g.us" }: {})
                           },message:{"orderMessage":{
                                  "orderId":"4302154426574187",
                                  "thumbnail":fs.readFileSync("./img/thumb.jpg"),
                                  "itemCount":100,
                                  "status":"INQUIRY",
                                  "surface":"CATALOG",
                                  "message": `${namabot}\nRp. 999.999.999.999`,
                                  "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}


	client.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	client.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                              


    const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await client.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    client.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: ftrol, sendEphemeral: true, contextInfo:{"forwardingScore":999,"isForwarded":true, "externalAdReply":{"title": `${namabot}`, "body": `Simple Bot`, mediaType: 2, "thumbnail": fs.readFileSync('./img/zenix.jpg'),"previewType": ``,"mediaUrl": ``, "sourceUrl": `https://youtu.be/CAYysDB-_sQ`}}})
  }
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  
      
       const sendButVideo = async (id, text1, desc1, gam1, but = [], options = {} ) => {
      kma = gam1;
      mhan = await client.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {quoted: mek})
    };
    
       
        
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               client.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
      
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      client.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
    
    const sendKontak = (from, nomor, nama, org, Ponsel, descBiz = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
        let nano = `Berikut Adalah Nomor Developer Saya, Silahkan Chat/Simpan Nomor Developer Saya.\n\n*NB: Dilarang Chat Yang Tidak Berkepentingan.*`
      client.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek, caption: nano}
      );
    }; 
    
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Gweh'; if (!author) author = `${namaowner}`;	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/stickers/${name}.exif`)) return `./media/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./media/stickers/${name}.exif`, buffer, (err) => {	
					return `./media/stickers/${name}.exif`	
				})	
	          }
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }       
client.updatePresence(from, Presence.composing)
//━━━━━━━━━━━━━━━[ PUBLIC ]━━━━━━━━━━━━━━━\\
if (!publik) {
if (!isOwner && !mek.key.fromMe) return
}
//━━━━━━━━━━━━━━━[ UCAPAN WAKTU ]━━━━━━━━━━━━━━━\\
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night??'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
//━━━━━━━━━━━━━━━[ FAKE MENU BOT ]━━━━━━━━━━━━━━━\\
const froxx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `乙̻̻̻̻̻̻̻̻̻̼̻̻͖̻̺̻̠̻̰̻͇̻̙̻̓͛ͮͩͦ̎ͦ̑ͅ乇̻̻̻̻̻̮̻̟̻͈̻̣̻̖̻̰̻̩̻̹̻͈̻̾ͨ̑͑刀̻̻̻̻̻̻͉̻̠̻̙̻͉̻̗̻̺̻̋̋̔ͧ̊ﾉ̻̻̻̻̻̞̻̟̻̫̻̺̻ͭ̒ͭͣﾒ̻̻̻̻̻̻̥̻͕̻̮̻̠̻̦̻͉̻̑̉̄̀̚乂̻⁴̻⁰̻⁴̻`,
                 "title": `乙̻̻̻̻̻̻̻̻̻̼̻̻͖̻̺̻̠̻̰̻͇̻̙̻̓͛ͮͩͦ̎ͦ̑ͅ乇̻̻̻̻̻̮̻̟̻͈̻̣̻̖̻̰̻̩̻̹̻͈̻̾ͨ̑͑刀̻̻̻̻̻̻͉̻̠̻̙̻͉̻̗̻̺̻̋̋̔ͧ̊ﾉ̻̻̻̻̻̞̻̟̻̫̻̺̻ͭ̒ͭͣﾒ̻̻̻̻̻̻̥̻͕̻̮̻̠̻̦̻͉̻̑̉̄̀̚乂̻⁴̻⁰̻⁴̻`,
                 'jpegThumbnail': fs.readFileSync("./img/zenix.jpg"),
                        }
	                  } 
                     }
//━━━━━━━━━━━━━━━[ TEKS BUFFER ]━━━━━━━━━━━━━━━\\
const fakeText = (teks) => {
client.sendMessage(from, teks, text, {quoted: froxx})
}

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━\\
client.updateProfileName(ucapanWaktu).catch((_)=>_);

           settingprofile = new Date() * 1;
           
           //konto
           
switch(command) {






case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
    case 'jadibot':
    if (!isPremium) return reply(mess.only.premium)
    if(mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,client,from)
    break
    case 'stopjadibot':
    if (!isPremium) return reply(mess.only.premium)
    if(mek.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    
    
    
 case 'createcatalog':

if (args.length === 0) return reply(`Example : ${prefix + command} Nama Catalog|Isi Catalog|Nomor Pembuat Catalog\n*Awali Nomor Dengan 62*`)

var nnn = body.slice(15)

var namanye = nnn.split("|")[0]

var isinye = nnn.split("|")[1]

var nomernye = nnn.split("|")[2]

namae = `${namanye}`

ownereJid = `${nomernye}@s.whatsapp.net`

nomor = 1

stod = `${sender}`

stst = await client.getStatus(`${sender.split('@')[0]}@c.us`)

stst = stst.status == 401 ? '' : stst.status

menunye = `${isinye}`

anu = client.prepareMessageFromContent(from,{"productMessage": {"product": {"productImage": {"url": "https://mmg.whatsapp.net/d/f/Au9n7y-3XR4R0WUNdcQNNM2_mMcYLdVQQP9NkcG2sI-D.enc","mimetype": "image/jpg","fileSha256": "ebKk5FKDC/fSbQKa4bmQ+EHbDZ/rqi78a+eYm4Z3TfQ=","fileLength": "20040","height": 390,"width": 390,"mediaKey": "+k8is4MAgrumDtQJQYfXtfN/haBmhmr4j4OKpM0Vl04=","fileEncSha256": "yu+xoTWjIR6UHVqdGNPINUyn6s50B+wDeZorjX1DP14=","jpegThumbnail": fs.readFileSync("./img/pronhub.jpg")},"productId": "9999999","title": `${namae}`, "description": `${menunye}`,"productImageCount": 1},"businessOwnerJid": `${ownereJid}`,"contextInfo": {"forwardingScore": 9999,"isForwarded": true}}},{quoted: mek, contextInfo: { mentionedJid: [stod]}})

client.relayWAMessage(anu)

break
          
          
case 'help':
case 'menu':
if (isBanned) return reply(mess.banned)                        
thmb = fs.readFileSync('./img/pronhub.jpg')
dep = "6283876159184@s.whatsapp.net"
wa = "0@s.whatsapp.net"
ply1 =`Hai ${pushname} ${ucapanWaktu}👋

⚠︎ 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕 ⚠︎
➪ ︎𝑷𝒓𝒆𝒇𝒊𝒙 : 𝑴𝒖𝒍𝒕𝒊 𝑷𝒓𝒆𝒇𝒊𝒙
➪ 𝑴𝒐𝒅𝒆 : ${publik? "𝑷𝒖𝒃𝒍𝒊𝒄":"𝑺𝒆𝒍𝒇"}
➪ 𝑷𝒓𝒆𝒎𝒊𝒖𝒎 : ${isPremium? "𝑰𝒚𝒂":"𝑵𝒈𝒈𝒂𝒌"}

𖨆 𝑰𝒏𝒇𝒐 𝑶𝒘𝒏𝒆𝒓 𖨆
➪ 𝑵𝒂𝒎𝒂 𝑶𝒘𝒏𝒆𝒓 : ${namaowner}
➪ 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓 : wa.me/${nomorowner}

☏ 𝑺𝒐𝒔𝒊𝒂𝒍 𝑴𝒆𝒅𝒊𝒂 𝑶𝒘𝒏𝒆𝒓 ☏︎
➪ 𝒀𝒐𝒖𝑻𝒖𝒃𝒆 : ${youtubeown}
➪ 𝑭𝒂𝒄𝒆𝒃𝒐𝒐𝒌 : Ga Ada
➪ 𝑮𝒊𝒕𝒉𝒖𝒃 : ${githubown}`

ply2 =`Powered By MyZenix, ${tanggal} ${bulan} ${tahun}`
but = [
{ buttonId: `${prefix}command`, buttonText: { displayText: '️MENU' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but, {contextInfo: { mentionJid: [sender, dep]}})
          break
  
          
          case 'command':
          if (isBanned) return reply(mess.banned)   
              thmb = fs.readFileSync('./img/pronhub.jpg')
ply1 =`Hai ${pushname} ${ucapanWaktu}👋

⚠︎ 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕 ⚠︎
➪ ︎𝑷𝒓𝒆𝒇𝒊𝒙 : 𝑴𝒖𝒍𝒕𝒊 𝑷𝒓𝒆𝒇𝒊𝒙
➪ 𝑴𝒐𝒅𝒆 : ${publik? "𝑷𝒖𝒃𝒍𝒊𝒄":"𝑺𝒆𝒍𝒇"}
➪ 𝑷𝒓𝒆𝒎𝒊𝒖𝒎 : ${isPremium? "𝑰𝒚𝒂":"𝑵𝒈𝒈𝒂𝒌"}

𖨆 𝑰𝒏𝒇𝒐 𝑶𝒘𝒏𝒆𝒓 𖨆
➪ 𝑵𝒂𝒎𝒂 𝑶𝒘𝒏𝒆𝒓 : ${namaowner}
➪ 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓 : wa.me/6283876159184

*ASUPAN*
🔖 *_${prefix}asupangeayubi_*
🔖 *_${prefix}asupanaura_*
🔖 *_${prefix}asupanbunga_*
🔖 *_${prefix}asupanayu_*
🔖 *_${prefix}asupancaca_*

*Sertifikat Menu*
🔖 *_${prefix}serti1_*
🔖 *_${prefix}serti2_*
🔖 *_${prefix}serti3_*
🔖 *_${prefix}tololserti_*
🔖 *_${prefix}fuckgirlserti_*
🔖 *_${prefix}fuckboyserti_*

*Ocr Menu*
🔖 *_${prefix}namaninja_*
🔖 *_${prefix}pantun_*
🔖 *_${prefix}tongue_*
🔖 *_${prefix}faktaunik_*
🔖 *_${prefix}ssweb_*
🔖 *_${prefix}nickepep_*

*Mode*
🔖 *_${prefix}public_*
🔖 *_${prefix}self_*

*Sticker Maker*
🔖 *_${prefix}sticker_*
🔖 *_${prefix}ttp_*
🔖 *_${prefix}smeme_*
🔖 *_${prefix}amongus_*
🔖 *_${prefix}attp_*

*Logo Make*
🔖 *_${prefix}gura_*
🔖 *_${prefix}kaneki_*
🔖 *_${prefix}logo2_*

*Stalker*
🔖 *_${prefix}ttstalk_*
🔖 *_${prefix}githubstalk_*

*Short Link*
🔖 *_${prefix}tinyurl_*
🔖 *_${prefix}shrtco_*
🔖 *_${prefix}cutt_*

*Ephoto*
🔖 *_${prefix}cemeterygates_*
🔖 *_${prefix}beachsign_*
🔖 *_${prefix}metallogo_*
🔖 *_${prefix}noeltext_*

*Image Editor*
🔖 *_${prefix}circle_*
🔖 *_${prefix}wasted_*
🔖 *_${prefix}fisheye_*
🔖 *_${prefix}sensormozaik_*
🔖 *_${prefix}pencil_*

*Group Menu And Main Menu*
🔖 *_${prefix}lapor_*
🔖 *_${prefix}request_*
🔖 *_${prefix}here_*
🔖 *_${prefix}setgrupname_*
🔖 *_${prefix}setdesc_*
🔖 *_${prefix}setppgrup_*
🔖 *_${prefix}promote_*
🔖 *_${prefix}demote_*
🔖 *_${prefix}welcome_*
🔖 *_${prefix}antilink_*
🔖 *_${prefix}group_*
🔖 *_${prefix}wame_*
🔖 *_${prefix}notif_*

*Download Menu*
🔖 *_${prefix}tiktok {link tiktok}_*
🔖 *_${prefix}play {Judul Lagu}_*
🔖 *_${prefix}lirik {Judul Lagu}_*
🔖 *_${prefix}herolist {Hero}_*
🔖 *_${prefix}herodetail {nama Hero}_*

*Owner Menu*
🔖 *_${prefix}addcmd_*
🔖 *_${prefix}addprem_*
🔖 *_${prefix}delprem_*
🔖 *_${prefix}premiumlist_*
🔖 *_${prefix}ban_*
🔖 *_${prefix}unban_*
🔖 *_${prefix}delcmd_*
🔖 *_${prefix}listcmd_*
🔖 *_${prefix}exif_*
🔖 *_${prefix}bc_*
🔖 *_${prefix}leaveall_*
🔖 *_${prefix}bc2_*

*Wibu Menu*
🔖 *_${prefix}ppcouple_*
🔖 *_${prefix}uniform_*
🔖 *_${prefix}cuckold_*
🔖 *_${prefix}zettairyouiki_*
🔖 *_${prefix}sfwneko_*
🔖 *_${prefix}sao_*
🔖 *_${prefix}cosplay_*
🔖 *_${prefix}milf_*
🔖 *_${prefix}loli_*
🔖 *_${prefix}lovelive_*
🔖 *_${prefix}hsdxd_*
🔖 *_${prefix}husbu_*
🔖 *_${prefix}wallml_*
🔖 *_${prefix}waifu_*

*Hewan Menu*
🔖 *_${prefix}fox_*
🔖 *_${prefix}dog_*
🔖 *_${prefix}cat_*
🔖 *_${prefix}panda_*
🔖 *_${prefix}panda2_*
🔖 *_${prefix}bird_*
🔖 *_${prefix}koala_*

*Image Random*
🔖 *_${prefix}waifu_*
🔖 *_${prefix}wallm_*
🔖 *_${prefix}loli_*
🔖 *_${prefix}cosplay_*
🔖 *_${prefix}milf_*
🔖 *_${prefix}husbu_*

*Search Menu*
🔖 *_${prefix}pinterest_*
🔖 *_${prefix}brainly_*

*Quotes Menu*
🔖 *_${prefix}quotesnime_*
🔖 *_${prefix}quotes_*
🔖 *_${prefix}quotesislami_*
🔖 *_${prefix}quotesimage_*
🔖 *_${prefix}quoemaker1_*
🔖 *_${prefix}quotemaker2_*

*Gtts*
🔖 *_${prefix}tts_*
🔖 *_${prefix}kodenegara_*
🔖 *_${prefix}kodebahasa_*

*Meme*
🔖 *_${prefix}mememaker_*
🔖 *_${prefix}mememaker2_*
🔖 *_${prefix}mememaker3_*
🔖 *_${prefix}memeindo_*
🔖 *_${prefix}drakjokes_*

*Mager Nulis*
🔖 *_${prefix}magernulis_*
🔖 *_${prefix}magernulis2_*

*Cecan Menu*
🔖 *_${prefix}cecan_*
🔖 *_${prefix}cogan_*
🔖 *_${prefix}cecan2_*
🔖 *_${prefix}cogan2_*
🔖 *_${prefix}jeni_*
🔖 *_${prefix}jiso_*
🔖 *_${prefix}justina_*
🔖 *_${prefix}lisa_*
🔖 *_${prefix}rose_*
🔖 *_${prefix}ryujin_*
🔖 *_${prefix}indonesia_*
🔖 *_${prefix}vietnam_*
🔖 *_${prefix}thailand_*
🔖 *_${prefix}korea_*
🔖 *_${prefix}china_*
🔖 *_${prefix}japan_*
🔖 *_${prefix}malaysia_*

*Informasi*
🔖 *_${prefix}infogempa_*
🔖 *_${prefix}jadwaltv_* 
🔖 *_${prefix}wiki_*

*Maker Menu*
🔖 *_${prefix}pornhub {teks1}|{teks2}_*
🔖 *_${prefix}blackpink {teks}
🔖 *_${prefix}glitch {teks1}|{teks2}
🔖 *_${prefix}bearlogo {teks}`
ply2 =`Powered By ${namaowner}`
but = [
{ buttonId: `${prefix}scrip`, buttonText: { displayText: '️SCRIPT' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }
]
sendButImage(from, ply1, ply2, thmb, but)
            
break
case 'sc':
case 'scrip':
if (isBanned) return reply(mess.banned)
reply2(`JANGAN LUPA SUBSCRIBE YouTube : MyZenix`)
break
//ppcopl
            case 'ppcouple':
            if (isBanned) return reply(mess.banned)
             anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`)
             cewe = await getBuffer(anu.result.female)
              cowo = await getBuffer(anu.result.male)
              client.sendMessage(from, cowo, image, {quoted: froxx, caption: 'Nih Versi Cowo Nya ^_^' })
              client.sendMessage(from, cewe, image, {quoted: froxx, caption: 'Nih Versi Cewe Nya ^_^' })
              break
                case 'sao':
                if (isBanned) return reply(mess.banned)
				client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 client.sendMessage(from, swordartonline, image, {quoted: froxx, caption: 'swort art online\nMEZ RazoR'})
				 break
				case 'hsdxd':
				if (isBanned) return reply(mess.banned)
				 client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 client.sendMessage(from, highschooldxd, image, {quoted: froxx, caption: 'NIH BANG '})
				break
				 case 'lovelive':
				if (isBanned) return reply(mess.banned)
				 client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 client.sendMessage(from, lovelive, image, {quoted: froxx, caption: 'NIH BANG '})
				break
                    case 'uniform':
					case 'sfwneko':
					case 'cuckold':
					case 'wpnsfwmobile':
					case 'zettairyouiki':
					if (isBanned) return reply(mess.banned)
					qute6 = await getBuffer(`https://api.xteam.xyz/randomimage/${command}?APIKEY=7415bc4287ad5ca8`)
					client.sendMessage(from, qute6, image, { quoted: froxx, caption: ':)' })
					break
					
					case 'emojimix':
					if (!q) return
					emij = await getBuffer(`https://api.lolhuman.xyz/api/emojimix/${q}?apikey=LOLKURR`)
					client.sendMessage(from, emij, sticker, {quoted: mek})
					break
             case 'waifu':
             case 'loli':
            case 'husbu':
            case 'milf':
            case 'cosplay':
            case 'wallml':
            if (isBanned) return reply(mess.banned)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `.waifu`,buttonText:{displayText: `Next`},type:1},{buttonId:`.owner`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Menuju Tak Terbatas', imageMessage: imageMsg,
              contentText:`Creator ${namaowner}`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
//══════════[ APIKEY ALPHA ]════════════════════════════//
case 'pornhub':
case 'ph':
if (!q) return reply('textnya mana njg')
reply(mess.wait)
yhh = arg.split('|')[0]
hyk = arg.split('|')[1]
hha = await getBuffer(`https://api.dapuhy.xyz/api/textpro/pornhub?text1=${yhh}&text2=${hyk}&apikey=noapikey`)
client.sendMessage(from, hha, image, {caption: 'Nih', quoted: mek})
break
case 'blackpink':
if (isBanned) return reply(mess.banned)
if (!q) return reply('textnya mana todd')
juii = await getBuffer(`https://api.dapuhy.xyz/api/textpro/blackpink?text=${q}&apikey=noapikey`)
client.sendMessage(from, juii, image, {caption: 'Nih...', quoted: mek})
break
case 'glitch':
if (!q) return reply('textnya mana njg')
reply(mess.wait)
yhh = arg.split('|')[0]
hyk = arg.split('|')[1]
hha = await getBuffer(`https://api.dapuhy.xyz/api/textpro/glitch?text1=${yhh}&text2=${hyk}&apikey=noapikey`)
client.sendMessage(from, hha, image, {caption: 'Nih', quoted: mek})
break
case 'bearlogo':
if (isBanned) return reply(mess.banned)
if (!q) return reply('textnya mana todd')
juii = await getBuffer(`https://api.dapuhy.xyz/api/textpro/bearlogo?text=${q}&apikey=noapikey`)
client.sendMessage(from, juii, image, {caption: 'Nih...', quoted: mek})
break
//mager nulis
case 'magernulis':
if (isBanned) return reply(mess.banned)
juii = await getBuffer(`https://api.lolhuman.xyz/api/nulis?apikey=LOLKURR&text=${q}`)
client.sendMessage(from, juii, image, {caption: 'Nih...', quoted: mek})
break
case 'magernulis2':
if (isBanned) return reply(mess.banned)
juii = await getBuffer(`https://api.zekais.com/foliokanan?text=${q}&apikey=4iQrkmlk`)
client.sendMessage(from, juii, image, {caption: 'Nih...', quoted: mek})
break
//══════════[ ANIMASI HEWAN ]════════════════════════════//
                   case 'fox':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'dog':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'cat':
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda1':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'bird': 
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'koala':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
              

      //=========[Link Menu]==========//
      
 case 'beachsign':
 if (!q) return reply('textnya mana tod')
 bubu = await getBuffer(`https://api.dapuhy.xyz/api/photofunia/beachsign?text=${q}&apikey=noapikey`)
 client.sendMessage(from, bubu, image, {caption: 'nih syg:v', quoted: mek})
 break
 
  case 'lovelock':
 if (!q) return reply('textnya mana tod')
 bubu = await getBuffer(`https://api.dapuhy.xyz/api/photofunia/lovelock?text=${q}&apikey=noapikey`)
 client.sendMessage(from, bubu, image, {caption: 'nih syg:v', quoted: mek})
 break
 
 case 'cemeterygates':
 if (!q) return reply('textnya mana tod')
 bubu = await getBuffer(`https://api.dapuhy.xyz/api/photofunia/cemeterygates?text=${q}&apikey=noapikey`)
 client.sendMessage(from, bubu, image, {caption: 'nih syg:v', quoted: mek})
 break
 case 'metallogo':
 if (!q) return reply('textnya mana tod')
 bubu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/metallogo?apikey=LOLKURR&text=${q}`)
 client.sendMessage(from, bubu, image, {caption: 'nih syg:v', quoted: mek})
 break
 case 'noeltext':
 if (!q) return reply('textnya mana tod')
 bubu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/noeltext?apikey=LOLKURR&text=${q}`)
 client.sendMessage(from, bubu, image, {caption: 'nih syg:v', quoted: mek})
 break
//══════════[ SELF DAN PUBLIC ]════════════════════════════//
case 'public':
if (isBanned) return reply(mess.banned)
  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
publik = true
fakeText('*Sukses mengubah mode public*')
break
case 'self':
if (isBanned) return reply(mess.banned)
  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
publik = false
fakeText('*Sukses mengubah mode self*')
break
case 'setppajg':
       if (isBanned) return reply(mess.banned)
       if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await client.downloadMediaMessage(encmedia)
              await client.updateProfilePicture(botNumber, media)        
              }
              break
//══════════[ EXIF NYA GAN ]════════════════════════════//
           case 'exif':
                    if (isBanned) return reply(mess.banned)
                      if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				     break
//══════════[ tts Gunakan Kode Bahasa ]════════════════════════════//
                     case 'bahasa':
                     if (isBanned) return reply(mess.banned)
                    client.sendMessage(from, bahasa(), text, { quoted:froxx })
                    break 
                    case 'kodenegara':
                    if (isBanned) return reply(mess.banned)
					client.sendMessage(from, negara(), text)
					break
                    case 'tts':
                    if (isBanned) return reply(mess.banned)
				    if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
//══════════[ PREEMIUM ]════════════════════════════//
				case 'addprem':
  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
prmm = body.slice(9)
prem.push(`${prmm}@s.whatsapp.net`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Add User Premium ✓_`)
break
case 'delprem':
  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
prmm = body.slice(9)
prem.splice(`${prmm}@s.whatsapp.net`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Delete User Premium ✓_`)
break
                case 'premiumlist':
				client.updatePresence(from, Presence.composing) 
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: froxx, contextInfo: {"mentionedJid": prem}})
				break
				//====================[Search Menu]=========//
				 case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			client.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
				case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await client.sendMessage(from,di,image,{quoted: mek})
            break
               case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            client.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
              case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
            //============================[memek]===========//
            case 'mememaker':
 if (!q) return reply('qmtl')
 jsh = arg.split('|')[0]
 jjs = arg.split('|')[1]
 bubu = await getBuffer(`https://api.lolhuman.xyz/api/meme8?apikey=LOLKURR&text1=${jsh}&text2=${jjs}`)
 client.sendMessage(from, bubu, image, {caption: 'nih syg:v', quoted: mek})
 break
 case 'mememaker2':
 if (!q) return reply('textnya mana tod')
 bubu = await getBuffer(`https://api.lolhuman.xyz/api/meme5?apikey=LOLKURR&text=${q}`)
 client.sendMessage(from, bubu, image, {caption: 'nih syg:v', quoted: mek})
 break
 case 'mememaker3':
 if (!q) return reply('textnya mana tod')
 ah = arg.split('|')[0]
 ag = arg.split('|')[1]
 aj = arg.split('|')[2]
 bubu = await getBuffer(`https://api.lolhuman.xyz/api/meme6?apikey=LOLKURR&text1=${ah}&text2=${ag}&text3=${aj}`)
 client.sendMessage(from, bubu, image, {caption: 'nih syg:v', quoted: mek})
 break
 case 'drakjokes':
 bubu = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=LOLKURR`)
 client.sendMessage(from, bubu, image, {caption: 'Wadoh', quoted: mek})
 break
 case 'memeindo':
 bubu = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=LOLKURR`)
 client.sendMessage(from, bubu, image, {caption: 'nih syg:v', quoted: mek})
 break
            //---------------- [quotes]---------------//
            case 'quotes':
            jjh = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=LOLKURR`)
            jjg = (jjh.result)
            api = `${jjg.quote}\n_${jjg.by}_`
            client.sendMessage(from, api, text, {quoted: mek})
            break
            case 'quotesislami':
            jjh = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=LOLKURR`)
            api = `${jjh.result}`
            client.sendMessage(from, api, text, {quoted: mek})
            break
            case 'quotesnime':
            jjh = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=LOLKURR`)
            jjg = (jjh.result)
            api = `${jjg.quote}\n_${jjg.character}_`
            client.sendMessage(from, api, text, {quoted: mek})
            break
            case 'quotesimage':
            buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=LOLKURR`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `Powered By Zenix X ${namaowner}`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'quotemaker1':
if (isBanned) return reply(mess.banned)
if (!q) return reply('🤔')
reply(mess.wait)
getu = await getBuffer(`https://api.lolhuman.xyz/api/quotemaker?apikey=LOLKURR&text=${q}`)
tll = `${sender}`
client.sendMessage(from, getu, image, {caption: `_${q}_`, contextInfo: { mentionedJid: [tll]}})
break
case 'quotemaker2':
if (isBanned) return reply(mess.banned)
if (!q) return reply('🤔')
reply(mess.wait)
bl = arg.split('|')[0]
link = arg.split('|')[1]
getu = await getBuffer(`https://api.lolhuman.xyz/api/quotemaker2?apikey=LOLKURR&text=${bl}&author=${link}`)
tll = `${sender}`
client.sendMessage(from, getu, image, {caption: `_ ${link} _`, contextInfo: { mentionedJid: [tll]}})
break
//══════════[ BAN MENU ]════════════════════════════//
case 'ban':
  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
bnnd = body.slice(5)
ban.push(`${bnnd}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Berhasil Dibanned ✓_`)
break
        case 'unban':
  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
bnnd = body.slice(7)
ban.splice(`${bnnd}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Sukses Diunbanned ✓_`)
break
//=======[SendFile]=============//
case 'sendfile':
            if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)      
            if (!q) return reply(`Example : ${prefix+command} ./lib/simple.js|simple.js`)
            namaf = q.split('|')[0]
            fnama = q.split('|')[1]
            anud = fs.readFileSync(namaf)
            client.sendMessage(from, anud, document, {mimetype:'jpg/application', filename:`${fnama}`})
            break                                 
     case 'savefile':
            if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)                  
            if(!q) return reply(`Nama Filenya Apa Kak?`)
            reply(mess.wait)
            mengsev = await mek.message.documentMessage.text
            fs.writeFileSync(`./${q}`, mengsev)
            reply(`Sukses Save File Dengan Nama ${q}`)
            break
     case 'downloadfile':
            if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)                  
            if (!q) return reply(`Nama Filenya Apa Kak?`)
            reply(mess.wait)
            saveas = await await client.downloadAndSaveMediaMessage(encmedia)()
            fs.writeFileSync(`./${q}`, saveas)
            reply(`Sukses Download File Dengan Nama ${q}`)
            break
     case 'readfile':
            if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)      
            if (!q) return reply(`Masukan Format File!`)
            reply(mess.wait)
            saveas = await await client.downloadAndSaveMediaMessage(encmedia)()
            fs.writeFileSync(`./lib/${q}`, saveas)
            cmyd2 = `cat lib.${q}`
            var itsme2 = `0@s.whatsapp.net`
            var split2 = `${fake}`
            term2 = {
            contextInfo: {
            participant: itsme2,
            quotedMessage: {
            extendedTextMessage: {
            text: split2,}}}}
            exec(cmyd2, (err, stdout) => {
            if (err) return client.sendMessage(from, ` ${err}`, text, { quoted:mek })
            if (stdout) {
            client.sendMessage(from, stdout, text, term2)}})
            break
//══════════[ Sticker Menu ]════════════════════════════//

case 'smeme': 
reply('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("170b85c9c9cdd6f0b2239dcd09a22d2f", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom()
anu1 = await getBuffer(`https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`)
await client.sendMessage(from, anu1, image, {caption: '.sticker', quoted: mek})
} else {
reply('Gunakan foto/stiker!')
}
break
     
case 'fisheye':
var imgbb = require('imgbb-uploader')
   if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await client.downloadAndSaveMediaMessage(encmedia)
              anu = await imgbb("9463d0b48dfd0a5338bbb2edbcf9335a", media)
teks = `${anu.display_url}`
suki = await getBuffer(`https://api.lolhuman.xyz/api/editor/fisheye?apikey=LOLKURR&img=${teks}`)
client.sendMessage(from, suki, image, {caption: 'Dah Nih..', quoted: mek})
} else { 
reply('Gunakan Foto Saja')
}
break
case 'sensormozaik':
var imgbb = require('imgbb-uploader')
   if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await client.downloadAndSaveMediaMessage(encmedia)
              anu = await imgbb("9463d0b48dfd0a5338bbb2edbcf9335a", media)
teks = `${anu.display_url}`
suki = await getBuffer(`https://api.lolhuman.xyz/api/editor/pixelate?apikey=LOLKURR&img=${teks}`)
client.sendMessage(from, suki, image, {caption: 'Dah Nih..', quoted: mek})
} else { 
reply('Gunakan Foto Saja')
}
break
case 'wasted':
var imgbb = require('imgbb-uploader')
   if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await client.downloadAndSaveMediaMessage(encmedia)
              anu = await imgbb("9463d0b48dfd0a5338bbb2edbcf9335a", media)
teks = `${anu.display_url}`
suki = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=LOLKURR&img=${teks}`)
client.sendMessage(from, suki, image, {caption: 'Dah Nih..', quoted: mek})
} else { 
reply('Gunakan Foto Saja')
}
break
case 'pencil':
var imgbb = require('imgbb-uploader')
   if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await client.downloadAndSaveMediaMessage(encmedia)
              anu = await imgbb("9463d0b48dfd0a5338bbb2edbcf9335a", media)
teks = `${anu.display_url}`
suki = await getBuffer(`https://api.lolhuman.xyz/api/editor/pencil?apikey=LOLKURR&img=${teks}`)
client.sendMessage(from, suki, image, {caption: 'Dah Nih..', quoted: mek})
} else { 
reply('Gunakan Foto Saja')
}
break
case  'triggered':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
reply(mess.wait)
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
owgi = await  client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9463d0b48dfd0a5338bbb2edbcf9335a", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(rano)
})
} else {
reply('Gunakan foto!')
}
break
           case 'ttp':  
           if (isBanned) return reply(mess.banned)
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp Whatsapp`)
                    anu1 = await getBuffer(`https://api.lolhuman.xyz/api/ttp6?apikey=LOLKURR&text=${c}`)
                    client.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
                       case 'amongus':  
           if (isBanned) return reply(mess.banned)
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp Whatsapp`)
                    anu1 = await getBuffer(`https://api.lolhuman.xyz/api/amongus?apikey=LOLKURR&text=${c}`)
                    client.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
          case 'attp':
          if (isBanned) return reply(mess.banned)
           if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
           buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
           client.sendMessage(from, buffer, sticker, { quoted: mek })
            break          
            case 'toimg':
            if (isBanned) return reply(mess.banned)
				reply(mess.wait)
					if (!isQuotedSticker) return reply(' reply stickernya um ')					
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
                    case 'sticker':
					case 'stiker':
					case 's':
					if (isBanned) return reply(mess.banned)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
				
//══════════[ DOWNLOAD MENU ]════════════════════════════//
case 'play':
if (isBanned) return reply(mess.banned)
if (!isPremium) return reply(mess.only.premium)
if (args.length ==0)return reply('Judul Lagunya Apa?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${q}&apikey=Alphabot`)
thmb = await getBuffer(ini.results.thumb)
ply1 =`Judul: ${ini.results.title}\nSize: ${ini.results.size}\nChannel: ${ini.results.channel}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}mp3 ${q}`, buttonText: { displayText: '️ᴍᴜsɪᴋ 🎵' }, type: 1 },
{ buttonId: `${prefix}mp4 ${q}`, buttonText: { displayText: 'ᴠɪᴅᴇᴏ 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'mp4':
if (isBanned) return reply(mess.banned)
    if (!isPremium) return reply(mess.only.premium)
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp4?query=${q}&apikey=Alphabot`)
mp4 = await getBuffer(ini.results.result)
client.sendMessage(from, mp4, video)
break
case 'mp3':
if (isBanned) return reply(mess.banned)
    if (!isPremium) return reply(mess.only.premium)
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${q}&apikey=Alphabot`)
mp3 = await getBuffer(ini.results.result)
client.sendMessage(from, mp3, audio, {quoted: mek})
break
case 'ytmp3':
if (isBanned) return reply(mess.banned)
    if (!isPremium) return reply(mess.only.premium)
reply(mess.wait)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp3?url=${ini_link}&apikey=${ZeksKey}`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thu = await getBuffer(get.thumbnail)
client.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_audio)
client.sendMessage(from, res, audio)
break
case 'ytmp4':
if (isBanned) return reply(mess.banned)
    if (!isPremium) return reply(mess.only.premium)
reply(mess.wait)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp4?url=${ini_link}&apikey=${ZeksKey}`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thu = await getBuffer(get.thumbnail)
client.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_video)
client.sendMessage(from, res, video)
break
case 'tiktok':
if (isBanned) return reply(mess.banned)
    if (!isPremium) return reply(mess.only.premium)
reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/dddtik?url=${q}&apikey=noapikey`)
              result = `Title : ${data.title}`
              juhi = await getBuffer(data.thumb)
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `NO WATERMARK`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'Audio ( 4.5 MB )'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.thumb))
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: juhi})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'buttons3': 
if (isBanned) return reply(mess.banned)
    if (!isPremium) return reply(mess.only.premium)
reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=LOLKURR&url=${q}`)
              ini_video = await getBuffer(data.result.link)
              client.sendMessage(from, ini_video, video, { quoted: froxx })
              break
          case 'buttons4': 
          if (isBanned) return reply(mess.banned)
              if (!isPremium) return reply(mess.only.premium)
           reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=LOLKURR&url=${q}`)              
              client.sendMessage(from, data, audio, { quoted: froxx })
              break
              case 'buttons1':
                  if (!isPremium) return reply(mess.only.premium)
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=${ZeksKey}&q=${q}`)
		     .then(res => {
			  client.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: froxx, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
case 'lirik':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (args.length < 1) return reply('Judulnya?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'herolist':
if (isBanned) return reply(mess.banned)
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (isBanned) return reply(mess.banned)
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*
*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
//===========[informasi]=====================//
case 'infogempa':
jkb = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=LOLKURR`)
jhj = `Waktu : ${jkb.result.waktu}\nMagnitudo : ${jkb.result.magnitude}\nKedalaman : ${jkb.result.kedalaman}\nKoordinat : ${jkb.result.koordinat}\nLokasi : ${jkb.result.lokasi}\nPotensi : ${jkb.result.potensi}`
bab = await getBuffer(jkb.result.map)
client.sendMessage(from, bab, image, {caption:jhj, quoted:mek})
break
case 'wiki':
if (!q) return reply(`Yang Mau Dicari Apaan Blok`)
lolk = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=LOLKURR&query=${q}`)
rt = (`${lolk.result}`)
client.sendMessage(from, rt, text, {quoted: mek})
break
case 'jadwaltv':
if (!q) return reply(`query failed`)
lolk = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${q}?apikey=LOLKURR`)
yaha = lolk.result
rt = `Jadwal TV ${q.toUpperCase()}\n`
for (var x in yaha) {
rt += `${x} - ${yaha[x]}\n`
}
client.sendMessage(from, rt, text, {quoted: mek})
break
//=€=€===€=€=€=€=€=€=€=€=[syalkerr]=============//
case 'ttstalk':
if (!q) return reply('username tidak ada')
kntl = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${q}?apikey=LOLKURR`)
yhh = kntl.result
img = await getBuffer(yhh.user_picture)
txt = `username: ${yhh.username}\nnickname: ${yhh.nickname}\nbio: ${yhh.bio}\nfollowers: ${yhh.followers}\nfollowing: ${yhh.followings}\nlikes: ${yhh.likes}\nvideo: ${yhh.video}`
client.sendMessage(from, img, image, {caption: txt, quoted: mek})
break
case 'githubstalk':
if (!q) return reply(`query failed`)
lolk = await fetchJson(`https://api.lolhuman.xyz/api/github/${q}?apikey=LOLKURR`)
yaha = lolk.result
img = await getBuffer(yaha.avatar)
rt = `${q.toUpperCase()}\n`
for (var x in yaha) {
rt += `${x} - ${yaha[x]}\n`
}
client.sendMessage(from, img, image, {caption: rt, quoted: mek})
break
//══════════[ OWNER MENU ]════════════════════════════//

case 'addcmd': 
case 'setcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `「 𝙻𝚒𝚜𝚝 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚂𝚝𝚒𝚌𝚔𝚎𝚛 」`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*➪𝙸𝙳:* ${i.id}\n*➪𝙲𝚖𝚍:* ${i.chats}`
}
reply(teksnyee)
break
case 'bc': 
                    if (isBanned) return reply(mess.banned)
					  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             client.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`,
			"footerText": `by ${namaowner}`,
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )}
             reply('Suksess broadcast')}
        break
        case 'bc2':
        if (isBanned) return reply(mess.banned)
             if(!isOwner) return reply('Anda Bukan Owner')
             buff10 = await getBuffer (`https://api-xcz.herokuapp.com/api/random/waifu`)
             if (args.length < 1) return reply('teks?')
             anu = await client.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await client.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	client.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             client.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')}
             break
             case 'bc3':
             if (!isOwner) return reply('lu bukan owner')
             if (!q) return reply(':v')
             anu = await client.chats.all()
             uhy = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/steel3d?apikey=LOLKURR&text1=BROADCAST&text2=${q}`)
             bcc = `${q}`
             bcj = `${namaowner}`
             but = [
{ buttonId: `${prefix}command`, buttonText: { displayText: '️MENU' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }
]
    for (let _ of anu) {
             client.sendMessage(_.jid, uhy, image, {caption: `*BROADCAST*\n${q}`, quoted: mek})
             reply('sukses')}
             break
//══════════[ WELCOME MENU ]════════════════════════════//
case 'intro':
var intro = ` *𝐒𝐄𝐋𝐀𝐌𝐀𝐓 𝐃𝐀𝐓𝐀𝐍𝐆 𝐌𝐄𝐌𝐁𝐄𝐑 𝐁𝐀𝐑𝐔︎︎*

┌ 𝐍𝐚𝐦𝐚:
├ 𝐔𝐦𝐮𝐫:
├ 𝐀𝐬𝐚𝐥:
├ 𝐆𝐞𝐧𝐝𝐞𝐫:
└ 𝐉𝐞𝐧𝐢𝐬 𝐤𝐞𝐥𝐚𝐦𝐢𝐧:
`
client.sendMessage(from, intro, text, {quoted: ftrolMENU, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true })
break
//══════════[ SETIFIKAT MENU]════════════════════════════//
case 'serti1':
case 'serti2':
case 'serti3':
if (isBanned) return reply(mess.banned)
if (args.length ==0) return reply('Text Nya Mana Tod?')
txtt = args.join (" ")
reply(mess.wait)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
client.sendMessage(from, buff, image, { quoted: froxx, caption: 'Nih Bro Hasil nya' })
break
case 'tololserti':
if (isBanned) return reply(mess.banned)
if (!q) return reply('namanya sp?')
reply(mess.wait)
getu = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=LOLKURR&name=${q}`)
tll = `${sender}`
client.sendMessage(from, getu, image, {caption: `awoakwok @${tll.split('@')[0]} tolol`, contextInfo: { mentionedJid: [tll]}})
break
case 'fuckboyserti':
if (isBanned) return reply(mess.banned)
if (!q) return reply('namanya sp?')
reply(mess.wait)
getu = await getBuffer(`https://api.lolhuman.xyz/api/fuckboy?apikey=LOLKURR&name=${q}`)
tll = `${sender}`
client.sendMessage(from, getu, image, {caption: `jauhin @${tll.split('@')[0]} dia  pakboy:v`, contextInfo: { mentionedJid: [tll]}})
break
case 'fuckgirlserti':
if (isBanned) return reply(mess.banned)
if (!q) return reply('namanya sp?')
reply(mess.wait)
getu = await getBuffer(`https://api.lolhuman.xyz/api/fuckgirl?apikey=LOLKURR&name=${q}`)
tll = `${sender}`
client.sendMessage(from, getu, image, {caption: `jauhin @${tll.split('@')[0]} dia pakgril:v`, contextInfo: { mentionedJid: [tll]}})
break
//══════════[ BERMAIN MENU ]════════════════════════════//
case 'nickepep':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=zakigansha`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'faktaunik':
ubu = await fetchJson(`https://api.lolhuman.xyz/api/random/faktaunik?apikey=LOLKURR`)
ghj = `${ubu.result}`
client.sendMessage(from, ghj, text, {quoted:mek})
break
case 'tongue':  
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `➻ *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.your_name}\n`
anu1 += `➻ *NINJA* : ${anu.result}\n`
reply(anu1)
break 
case 'ssweb':
case 'ss':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply('Urlnya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}_*`)
buff = await getBuffer(anu.screenshot)
client.sendMessage(from, buff, image, {quoted: froxx, caption : teks})
break
		    
//══════════[ PEMBATASAN]════════════════════════════//
case 'notif':
if (isBanned) return reply(mess.banned)
    if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
client.updatePresence(from, Presence.composing)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await client.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
} 
await client.sendMessage(from, options, text)
break
case 'kaneki':
if (!c) return reply(`Textnya?`)
buffer = await getBuffer(`https://yx-api.herokuapp.com/api/canvas/gfx1?nama=${q}`)
client.sendMessage(from, buffer, image, {caption: `Nih Bwang`, quoted: mek})
break
case 'logo2':
if (!q) return reply(`hmm`)
ha = arg.split('|')[0]
ho = arg.split('|')[1]
buff = await getBuffer(`https://yx-api.herokuapp.com/api/canvas/gfx3?text1=${ha}&text2=${ho}`)
client.sendMessage(from, buff, image, {caption: `Nih Bwangg`, quoted: mek})
break
case 'gura':
if (!c) return reply(`hmm`)
bupp = await getBuffer(`https://yx-api.herokuapp.com/api/canvas/gura?nama=${c}`)
client.sendMessage(from, bupp, image, {caption: 'Nih Bwang', quoted: mek})
breakp

case 'wa.me':
case 'wame':
if (isBanned) return reply(mess.banned)
client.updatePresence(from, Presence.composing) 
options = {
text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: { mentionedJid: [sender] }
}
client.sendMessage(from, options, text, { quoted: mek } )
break
if (data.error) return reply(data.error)
reply(data.result)
break
               case 'owner':
            case 'developer':   
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${nomorowner}:+${nomorowner}\n`  
            + 'END:VCARD'  
  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
titid = 'Butuh info tentang apa ya?'
           sendButMessage(from, titid, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}menu`, buttonText: { displayText: `𝑴𝑬𝑵𝑼`, }, type: 1, },
]); 
                 break
                 case 'request':
                 if (isBanned) return reply(mess.banned)
					const rq = body.slice(8)
					if (args.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const ress = `*[REQUEST FITUR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${rq}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					client.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Request anda sudah mendarat ke owner, Requests palsu atau main² tidak akan ditanggapi.')
					break
case 'report':
case 'lapor':
if (isBanned) return reply(mess.banned)
					const laporan = body.slice(7)
					if (args.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const lapor = `*[LAPORAN EROR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${laporan}`
							var options = {
							text: lapor,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					client.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Laporan anda sudah mendarat ke owner, Laporan palsu atau main² tidak akan ditanggapi.')
					break
      case 'shutdown':
      if (isBanned) return reply(mess.banned)
               if (!isOwner && !mek.key.fromMe) return   
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
      if (isBanned) return reply(mess.banned)
               if (!isOwner && !mek.key.fromMe) return   
             reply(mess.wait)
             exec(`node start.js`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
      if (isBanned) return reply(mess.banned)
               if (!isOwner && !mek.key.fromMe) return    reply(mess.only.owner)
             let totalgroup = client.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             client.groupLeave(id)
}
             break
        case 'join':
        if (isBanned) return reply(mess.banned)
              if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakeitem('pastikan link sudah benar!')
            var response = await client.acceptInvite(codeInvite)
            fakeitem('SUKSES')
            } catch {
            fakeitem('LINK ERROR!')
            }
        break
        case 'join2': 
        if (isBanned) return reply(mess.banned)
             if (!q) return reply('Linknya?')
               if (!isOwner && !mek.key.fromMe) return   reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = client.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
        case 'ban':
        if (isBanned) return reply(mess.banned)
					  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
	    break
        case 'unban':
        if (isBanned) return reply(mess.banned)
					  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
		break
//GROUP MENU
       case 'online':
       case 'listonline':
       case 'here':                
       if (isBanned) return reply(mess.banned)
 if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
             client.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
       case 'setgrupname':
       if (isBanned) return reply(mess.banned)
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              client.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
       if (isBanned) return reply(mess.banned)
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              client.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
       if (isBanned) return reply(mess.banned)
           if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await client.downloadMediaMessage(encmedia)
              client.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
case 'demoteall':
if (isBanned) return reply(mess.banned)
		if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)

		if (!isGroup) return reply(mess.only.group)

		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               
		 members_id = [ ]
		
		 for (let mem of groupMembers) {
	   
		 	members_id.push(mem.jid)
	  
		 		}
              
		 		  client.groupDemoteAdmin(from, members_id)
              
		 		    break
                
                
                
           
                
		 		    case 'promoteall':
	if (isBanned) return reply(mess.banned)
		 		    	if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)
	
		 		    	if (!isGroup) return reply(mess.only.group)
	
		 		    	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                
		 		    	members_id = [ ]
		
		 		    	for (let mem of groupMembers) {
	  
		 		    	 	members_id.push(mem.jid)
	
		 		    	 	 	}
             
		 		    	 	 	   client.groupMakeAdmin(from, members_id)
             
		 		    	 	 	      break
case 'group':
if (isBanned) return reply(mess.banned)
				apri = 'PILIH MANA MIN?'
        sendButMessage(from, apri, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
case "closegc": 
if (isBanned) return reply(mess.banned)
      if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        client.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
      if (isBanned) return reply(mess.banned)
  if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        client.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
                case 'hidetag':        
   if (isBanned) return reply(mess.banned)                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					//var options = {text: value, contextInfo: { mentionedJid: mem }, quoted: fhidetag}
					client.sendMessage(from, value, text, {quoted: fhidetag, contextInfo: { mentionedJid: mem }})
					break;
									case 'tagall':
									if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
					    if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'promote':
                                if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
					    if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					    if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					    if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					    if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                if (isBanned) return reply(mess.banned)
                 if (!isGroup) return reply(mess.only.group)
                        if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await client.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
               
                case 'leave':
            if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	client.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
case 'welcome':
if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					    if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}welcome 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
   
                case 'antilink':
                if (isBanned) return reply(mess.banned)
                                  	if (!isGroup) return reply(mess.only.group)
					    if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break
        case 'd':
        case 'del':
        case 'delete': 
        if (isBanned) return reply(mess.banned)
     if (!isGroup) return reply(mess.only.group)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'stikernowm': 
				case 'stickernowm':
				case 'snowm':
				if (isBanned) return reply(mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break

//TOLS
				case 'ocr':
				if (isBanned) return reply (mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
					//cecan
					case 'cecan':
case 'cogan':
case 'cecan2':
case 'cogan2':
case 'jeni':
case 'jiso':
case 'justina':
case 'lisa':
case 'rose':
case 'ryujin':
case 'indonesia':
case 'vietnam':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/cecan/${command}?apikey=NisaaCantik`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `Powered By Zenix X ${namaowner}`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
/*===========[shortlink]==*/
case 'tinyurl':
if (!q) return reply(':v linknya?')
ghj = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=LOLKURR&url=${q}`)
txt = `nih : ${ghj.result}`
reply(txt)
break
case 'shrtco':
if (!q) return reply(':v linknya?')
ghj = await fetchJson(`https://api.lolhuman.xyz/api/shortlink2?apikey=LOLKURR&url=${q}`)
txt = `nih : ${ghj.result}`
reply(txt)
break
case 'cutt':
if (!q) return reply(':v linknya?')
ghj = await fetchJson(`https://api.lolhuman.xyz/api/shortlink3?apikey=LOLKURR&url=${q}`)
txt = `nih : ${ghj.result}`
reply(txt)
break
default:
if (budy.includes(`Assalamualaikum`)) {
client.sendMessage(from, 'Waalaikumsalam:)', text, {quoted: mek})
                  }
if (budy.includes(`Bot`)) {
hemlo = fs.readFileSync('./media/sticker/sokasik.webp')
client.sendMessage(from, hemlo, sticker, {quoted: mek})
                  }
                  if (budy.includes(`bot`)) {
hemlo = fs.readFileSync('./media/sticker/sokasik.webp')
client.sendMessage(from, hemlo, sticker, {quoted: mek})
                  }
}
if (budy.startsWith('x')){
try {
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {            
                reply(`*「 GROUP LINK DETECTOR 」*\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                await sleep(3000)
                await sleep(2000)
                await sleep(1000)
                client.groupRemove(from, [sender])
            }
        }
        
        
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'WhatsApp', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}