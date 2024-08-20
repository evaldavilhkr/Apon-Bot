module.exports.config = {
	name: "uns",
	version: "1.0.5",
	permission: 2,
	credits: "Nayan",
	prefix: true,
	description: "ban or unblock users",
	category: "user",
	usages: " ",
	cooldowns: 0
};


module.exports.languages = {
	"vi": {
		"returnCant": "bất kỳ ai cũng có thể hủy gửi tin nhắn.",
		"missingReply": "Hãy reply tin nhắn cần gỡ."
	},
	"en": {
		"returnCant": "anyone can be unsend message.",
		"missingReply": "Reply to the message you want to unsend."
	}
}

module.exports.run = function({ api, event, getText }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
	if (event.type != "message_reply") return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
	return api.unsendMessage(event.messageReply.messageID);
	}
