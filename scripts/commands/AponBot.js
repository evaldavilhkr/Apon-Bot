const fs = require("fs");
module.exports.config = {
  name: "@Aponislam",
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
	if (event.body.indexOf("@Apon Islam")==0 || (event.body.indexOf("@apon islam")==0 || (event.body.indexOf("@Apon islam")==0 || (event.body.indexOf("@Apon Islam")==0)))) {
		var msg = {
				body: "কিগো আপন বস কে মেনশন করো কেন আমার আপন বস এখন বিজি আছে 🤗🥀🌺"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
