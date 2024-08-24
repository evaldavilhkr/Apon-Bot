const fs = require("fs");
module.exports.config = {
  name: "apon",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("I love you")==0 || (event.body.indexOf("Apon")==0 || (event.body.indexOf("apon")==0 || (event.body.indexOf("Apon")==0)))) {
		var msg = {
				body: "জ্বী আমায় বলুন আপন বস বিজি আছে পরে কথা বলবে💚💚 <3"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
