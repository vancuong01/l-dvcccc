const fs = require("fs");
module.exports.config = {
name: "hong",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Bot lồn",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hong")==0 || (event.body.indexOf("Xin")==0)) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix/hong.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}