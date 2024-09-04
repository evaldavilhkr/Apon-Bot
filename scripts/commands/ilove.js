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
	if (event.body.indexOf("apon")==0 || (event.body.indexOf("Apon")==0 || (event.body.indexOf("apon")==0 || (event.body.indexOf("Apon")==0)))) {
		var msg = {
				body: " Apon Boss Tammi Vabir sathe busy asa😗👉👈 "
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
