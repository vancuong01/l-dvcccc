﻿module.exports.config = {
	name: "master",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Binee",
	description: "Lien he vs Admin bot",
	commandCategory: "Info", 
	usages: "master [key]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("Bot hiện đang có  1 Admin Bot Sử dụng 2 acc khác nhau",event.threadID, event.messageID);
	}
	if (args[0] == "1") {
		return api.sendMessage("Admin: Hoàng Văn Cường \nFb : https://www.facebook.com/HoangVanCuong.User/", event.threadID, event.messageID);
	}
	else if (args[0] == "2") {
		return api.sendMessage("Admin: Phạm Thanh Thảo\nFb : https://www.facebook.com/profile.php?id=100046556731823/", event.threadID, event.messageID);
	}
}