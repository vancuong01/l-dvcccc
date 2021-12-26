/*
* @Scr By Duy Vương Edit By DTH
* @No edit credits
* @Ban user edit credits
*/
module.exports.config = {
    name: "slot",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DTH",
    description: "Game slot có đặt cược",
    commandCategory: "economy",
    usages: "<[táo/kiwi/đào/dưa/nho/dâu] hoặc[🍏/🥝/🍑/🍉/🍇/🍓]> <Số tiền cược (lưu ý phải trên 50$)>",
    cooldowns: 0
  };
  
  module.exports.run = async function({ api, event, args, Currencies, getText, permssion }) {
    try {
      const { threadID, messageID, senderID } = event;
      const { getData, increaseMoney, decreaseMoney } = Currencies;
      const request = require('request');
      const axios = require('axios');
      if (this.config.credits != 'DTH') {
        return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"', event.threadID, event.messageID);
      }
      const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
      const slotItems = ["táo", "kiwi", "đào", "dưa", "nho", "dâu"];
      const money = (await getData(senderID)).money;
      if (isNaN(args[1]) == true) return api.sendMessage('𝐒𝐚𝐢 đ𝐢̣𝐧𝐡 𝐝𝐚̣𝐧𝐠 𝐡𝐨𝐚̣̆𝐜 𝐬𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐜𝐮̛𝐨̛̣𝐜', threadID, messageID)
      else {
      var moneyBet = parseInt(args[1]);
      if (isNaN(moneyBet) || moneyBet <= 50) return api.sendMessage('Đ𝐚̣̆𝐭 𝐭𝐢𝐞̂̀𝐧 𝐭𝐫𝐞̂𝐧 50$ 𝐝𝐮̀𝐦 𝐭𝐨̛́ 𝐜𝐚́𝐢', threadID, messageID);
      if (moneyBet > money) return api.sendMessage('𝐓𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 đ𝐮̉ đ𝐞̂̉ 𝐭𝐡𝐮̛̣𝐜 𝐡𝐢𝐞̣̂𝐧 𝐠𝐢𝐚𝐨 𝐝𝐢̣𝐜𝐡 𝐧𝐚̀𝐲', threadID, messageID);
      var number = [], list = [], listimg = [], win = false;
      var baucua1 = slotItems[Math.floor(Math.random() * slotItems.length)];
      var baucua2 = slotItems[Math.floor(Math.random() * slotItems.length)];
      var baucua3 = slotItems[Math.floor(Math.random() * slotItems.length)];
      // ARGS
      let content = args[0];
      var content1;
      if (content == 'táo' || content == '🍏') {
        content1 = 'tao';
      }
      else if (content == 'kiwi' || content == '🥝') {
        content1 = 'kiwi';
      }
      else if (content == 'đào' || content == '🍑') {
        content1 == 'dao';
      }
      else if (content == 'dưa' || content == '🍉') {
        content1 = 'dua';
      }
      else if (content == 'nho' || content == '🍇') {
        content1 = 'nho';
      }
      else if (content == 'dâu' || content == '🍓') {
        content1 = 'dau';
      }
      else {
        return api.sendMessage(`Sai định dạng\n${global.config.PREFIX}${this.config.name} <[táo/kiwi/đào/dưa/nho/dâu] hoặc[🍏/🥝/🍑/🍉/🍇/🍓]> <Số tiền cược (lưu ý phải trên 50$)>`, threadID, messageID);
      }
      // request
      if (!existsSync(__dirname + '/cache/tao.jpg')) {
        request('https://i.imgur.com/A7DRhxE.jpeg').pipe(createWriteStream(__dirname + '/cache/tao.jpg'));
      }
      if (!existsSync(__dirname + '/cache/kiwi.jpg')) {
        request('https://i.imgur.com/ZbjT1j9.jpeg').pipe(createWriteStream(__dirname + '/cache/kiwi.jpg'));
      }
      if (!existsSync(__dirname + '/cache/dao.jpg')) {
        request('https://i.imgur.com/noVKOGQ.jpeg').pipe(createWriteStream(__dirname + '/cache/dao.jpg'));
      }
      if (!existsSync(__dirname + '/cache/dua.jpg')) {
        request('https://i.imgur.com/3CdpFCy.jpeg').pipe(createWriteStream(__dirname + '/cache/dua.jpg'));
      }
      if (!existsSync(__dirname + '/cache/nho.jpg')) {
        request('https://i.imgur.com/OawlLun.jpeg').pipe(createWriteStream(__dirname + '/cache/nho.jpg'));
      }
      if (!existsSync(__dirname + '/cache/dau.jpg')) {
        request('https://i.imgur.com/RrS2WYw.jpeg').pipe(createWriteStream(__dirname + '/cache/dau.jpg'));
      }
      if (!existsSync(__dirname + '/cache/slot.gif')) {
        request('https://i.imgur.com/6dfrfBP.gif').pipe(createWriteStream(__dirname + '/cache/slot.gif'));
      }
      // baucua 1
      if (baucua1 == 'táo') {
        var bau1 = 'tao';
        var bau_1 = __dirname + '/cache/tao.jpg';
      }
      else if (baucua1 == 'kiwi') {
        var bau1 = 'kiwi';
        var bau_1 = __dirname + '/cache/kiwi.jpg';
      }
      else if (baucua1 == 'đào') {
        var bau1 = 'dao';
        var bau_1 = __dirname + '/cache/dao.jpg';
      }
      else if (baucua1 == 'dưa') {
        var bau1 = 'dua';
        var bau_1 = __dirname + '/cache/dua.jpg';
      }
      else if (baucua1 == 'nho') {
        var bau1 = 'nho';
        var bau_1 = __dirname + '/cache/nho.jpg';
      }
      else if (baucua1 == 'dâu') {
        var bau1 = 'dau';
        var bau_1 = __dirname + '/cache/dau.jpg';
      }
      // baucua 2
      if (baucua2 == 'táo') {
        var bau2 = 'tao';
        var bau_2 = __dirname + '/cache/tao.jpg';
      }
      else if (baucua2 == 'kiwi') {
        var bau2 = 'kiwi';
        var bau_2 = __dirname + '/cache/kiwi.jpg';
      }
      else if (baucua2 == 'đào') {
        var bau2 = 'dao';
        var bau_2 = __dirname + '/cache/dao.jpg';
      }
      else if (baucua2 == 'dưa') {
        var bau2 = 'dua';
        var bau_2 = __dirname + '/cache/dua.jpg';
      }
      else if (baucua2 == 'nho') {
        var bau2 = 'nho';
        var bau_2 = __dirname + '/cache/nho.jpg';
      }
      else if (baucua2 == 'dâu') {
        var bau2 = 'dau';
        var bau_2 = __dirname + '/cache/dau.jpg';
      }
      // baucua 3
      if (baucua3 == 'táo') {
        var bau3 = 'tao';
        var bau_3 = __dirname + '/cache/tao.jpg';
      }
      else if (baucua3 == 'kiwi') {
        var bau3 = 'kiwi';
        var bau_3 = __dirname + '/cache/kiwi.jpg';
      }
      else if (baucua3 == 'đào') {
        var bau3 = 'dao';
        var bau_3 = __dirname + '/cache/dua.jpg';
      }
      else if (baucua3 == 'dưa') {
        var bau3 = 'dua';
        var bau_3 = __dirname + '/cache/dua.jpg';
      }
      else if (baucua3 == 'nho') {
        var bau3 = 'nho';
        var bau_3 = __dirname + '/cache/nho.jpg';
      }
      else if (baucua3 == 'dâu') {
        var bau3 = 'dau';
        var bau_3 = __dirname + '/cache/dau.jpg';
      }
      // array baucua
      list.push(bau1);
      list.push(bau2);
      list.push(bau3);
      // array img
      listimg.push(createReadStream(__dirname + '/cache/' + bau1 + '.jpg'))
      listimg.push(createReadStream(__dirname + '/cache/' + bau2 + '.jpg'))
      listimg.push(createReadStream(__dirname + '/cache/' + bau3 + '.jpg'))
      // ICON
      // icon 1
      if (bau1 == 'tao') {
        var icon1 = '🍏';
      }
      else if (bau1 == 'kiwi') {
        var icon1 = '🥝'
      }
      else if (bau1 == 'dao') {
        var icon1 = '🍑';
      }
      else if (bau1 == 'dua') {
        var icon1 = '🍉';
      }
      else if (bau1 == 'nho') {
        var icon1 = '🍇';
      }
      else if (bau1 == 'dau') {
        var icon1 = '🍓';
      }
      // icon 2
      if (bau2 == 'tao') {
        var icon2 = '🍏';
      }
      else if (bau2 == 'kiwi') {
        var icon2 = '🥝'
      }
      else if (bau2 == 'dao') {
        var icon2 = '🍑';
      }
      else if (bau2 == 'dua') {
        var icon2 = '🍉';
      }
      else if (bau2 == 'nho') {
        var icon2 = '🍇';
      }
      else if (bau2 == 'dau') {
        var icon2 = '🍓';
      }
      // icon 3
      if (bau3 == 'tao') {
        var icon3 = '🍏';
      }
      else if (bau3 == 'kiwi') {
        var icon3 = '🥝'
      }
      else if (bau3 == 'dao') {
        var icon3 = '🍑';
      }
      else if (bau3 == 'dua') {
        var icon3 = '🍉';
      }
      else if (bau3 == 'nho') {
        var icon3 = '🍇';
      }
      else if (bau3 == 'dau') {
        var icon3 = '🍓';
      }
      // sendMessage
      api.sendMessage({
        body: '🍏 | 🥝 | 🍑 | 🍉 | 🍇 |🍓...',
        attachment: createReadStream(__dirname + '/cache/slot.gif')
      }, threadID, (err, info) => {
        if (err) return api.sendMessage(err, threadID, messageID);
        setTimeout(() => {
          api.unsendMessage(info.messageID);
          var check = list.findIndex(i => i.toString() == content1);
          var check2 = list.includes(content1);
          //console.log(check);
          //console.log(icon1 + icon2 + icon3);
          if (check >= 0 || check2 == true) {
            return api.sendMessage({
              body: `🎇》𝐊𝐞̂́𝐭 𝐪𝐮𝐚̉ : ${icon1} | ${icon2} | ${icon3}\n➡𝐁𝐚̣𝐧 đ𝐚̃ 𝐭𝐡𝐚̆́𝐧𝐠 𝐯𝐚̀ 𝐧𝐡𝐚̣̂𝐧 đ𝐮̛𝐨̛̣𝐜 ${moneyBet * 3}$`,
              attachment: listimg
            }, threadID, () => Currencies.increaseMoney(senderID, moneyBet * 3), messageID);
          }
          else if (check < 0 || check2 == false) {
            return api.sendMessage({
              body: `🎇》𝐊𝐞̂́𝐭 𝐪𝐮𝐚̉ : ${icon1} | ${icon2} | ${icon3}\n➡ 𝐁𝐚̣𝐧 đ𝐚̃ 𝐭𝐡𝐮𝐚 𝐯𝐚̀ đ𝐚̃ 𝐦𝐚̂́𝐭 ${moneyBet}$`,
              attachment: listimg
            }, threadID, () => Currencies.decreaseMoney(senderID, moneyBet), messageID);
          }
          else {
            return api.sendMessage('𝐗𝐚̉𝐲 𝐫𝐚 𝐥𝐨̂̃𝐢 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐭𝐡𝐮̛̉ 𝐥𝐚̣𝐢', threadID, messageID);
          }
        }, 3000);
      }, messageID);
    }
  }
    catch (err) {
      console.error(err);
      return api.sendMessage(err, event.threadID, event.messageID);
    }
  }