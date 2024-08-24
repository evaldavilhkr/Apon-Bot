const fs = require("fs");
module.exports = {
  config:{
	name: "@Apon Islam",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "@Apon Islam",
        cooldowns: 0, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf("😒")==0) {
		var msg = {
				body: "আপন বস কে মেনশন করছেন কেন বস বিজি আছে🌺🥀",
				body: "আপন বস কে মেনশন করছেন কেন বস বিজি আছে🌺🥀",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
