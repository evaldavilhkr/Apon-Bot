/**
* @author Mohammad Nayan
* @warn Do not edit code or edit credits
*/

module.exports.config = {
  name: "love3", 
  version: "1.0.0", 
  permission: 0,
  credits: "Nayan",
  description: "example",
  prefix: true,
  category: "Love", 
  usages: "love3 @", 
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
  }
};

function _0x5b4e(_0x2ced23,_0x5b78fd){const _0x35847d=_0x3584();return _0x5b4e=function(_0x5b4ef0,_0x3f7bfc){_0x5b4ef0=_0x5b4ef0-0x12b;let _0x1ba5d3=_0x35847d[_0x5b4ef0];return _0x1ba5d3;},_0x5b4e(_0x2ced23,_0x5b78fd);}const _0x574134=_0x5b4e;(function(_0x23733f,_0x491126){const _0x1350d1=_0x5b4e,_0x16b7d3=_0x23733f();while(!![]){try{const _0x3b6945=parseInt(_0x1350d1(0x14c))/0x1*(parseInt(_0x1350d1(0x155))/0x2)+parseInt(_0x1350d1(0x152))/0x3*(-parseInt(_0x1350d1(0x13d))/0x4)+-parseInt(_0x1350d1(0x12b))/0x5*(-parseInt(_0x1350d1(0x145))/0x6)+-parseInt(_0x1350d1(0x147))/0x7*(-parseInt(_0x1350d1(0x146))/0x8)+parseInt(_0x1350d1(0x142))/0x9+-parseInt(_0x1350d1(0x14a))/0xa+-parseInt(_0x1350d1(0x156))/0xb;if(_0x3b6945===_0x491126)break;else _0x16b7d3['push'](_0x16b7d3['shift']());}catch(_0x25b82a){_0x16b7d3['push'](_0x16b7d3['shift']());}}}(_0x3584,0x68a78),module[_0x574134(0x131)][_0x574134(0x157)]=async()=>{const _0x2724b9=_0x574134,{resolve:_0x2ed70d}=global[_0x2724b9(0x13c)]['path'],{existsSync:_0x5cd07b,mkdirSync:_0x25bb8e}=global['nodemodule']['fs-extra'],{downloadFile:_0x3c0221}=global[_0x2724b9(0x139)],_0xcaafa9=__dirname+_0x2724b9(0x149),_0x4a98f2=_0x2ed70d(__dirname,_0x2724b9(0x141),'lpwft.png');if(!_0x5cd07b(_0xcaafa9+''))_0x25bb8e(_0xcaafa9,{'recursive':!![]});if(!_0x5cd07b(_0x4a98f2))await _0x3c0221(_0x2724b9(0x14b),_0x4a98f2);});async function makeImage({one:_0x3dbc61,two:_0x538f2b}){const _0x2185ef=_0x574134,_0x31e488=global[_0x2185ef(0x13c)]['fs-extra'],_0x33f0f2=global[_0x2185ef(0x13c)][_0x2185ef(0x14e)],_0x5c9b72=global[_0x2185ef(0x13c)]['axios'],_0x1596b8=global[_0x2185ef(0x13c)]['jimp'],_0x1d54ac=_0x33f0f2[_0x2185ef(0x130)](__dirname,_0x2185ef(0x141));let _0x124bcd=await _0x1596b8[_0x2185ef(0x153)](_0x1d54ac+'/lpwft.png'),_0x5de97d=_0x1d54ac+(_0x2185ef(0x143)+_0x3dbc61+'_'+_0x538f2b+'.png'),_0x56366c=_0x1d54ac+(_0x2185ef(0x136)+_0x3dbc61+'.png'),_0x8063ee=_0x1d54ac+(_0x2185ef(0x136)+_0x538f2b+_0x2185ef(0x140)),_0x573ab6=(await _0x5c9b72[_0x2185ef(0x135)](_0x2185ef(0x154)+_0x3dbc61+_0x2185ef(0x137),{'responseType':'arraybuffer'}))['data'];_0x31e488[_0x2185ef(0x150)](_0x56366c,Buffer[_0x2185ef(0x13f)](_0x573ab6,_0x2185ef(0x13a)));let _0x4f6d3c=(await _0x5c9b72['get'](_0x2185ef(0x154)+_0x538f2b+_0x2185ef(0x137),{'responseType':_0x2185ef(0x144)}))[_0x2185ef(0x151)];_0x31e488[_0x2185ef(0x150)](_0x8063ee,Buffer[_0x2185ef(0x13f)](_0x4f6d3c,_0x2185ef(0x13a)));let _0x19724c=await _0x1596b8[_0x2185ef(0x153)](await circle(_0x56366c)),_0x30f7da=await _0x1596b8[_0x2185ef(0x153)](await circle(_0x8063ee));_0x124bcd[_0x2185ef(0x14d)](0x4fe,0x2d0)[_0x2185ef(0x13b)](_0x19724c[_0x2185ef(0x14d)](0x118,0x118),0xaf,0xdc)[_0x2185ef(0x13b)](_0x30f7da['resize'](0x118,0x118),0x341,0xdc);let _0x3687cd=await _0x124bcd[_0x2185ef(0x12c)](_0x2185ef(0x133));return _0x31e488['writeFileSync'](_0x5de97d,_0x3687cd),_0x31e488['unlinkSync'](_0x56366c),_0x31e488[_0x2185ef(0x148)](_0x8063ee),_0x5de97d;}async function circle(_0x4391b6){const _0x27d695=_0x574134,_0x240579=require(_0x27d695(0x14f));return _0x4391b6=await _0x240579[_0x27d695(0x153)](_0x4391b6),_0x4391b6['circle'](),await _0x4391b6[_0x27d695(0x12c)]('image/png');}function _0x3584(){const _0x2a82cf=['.ðŸ«£','8393tKnkgc','mentions','exports','utils','cache','16735pTTOUR','jimp','writeFileSync','image/png','376qRLQHg','nodemodule','1442750uupYWR','/frtwb_','3246Puefdm','composite','101610oYTUAA','utf-8','1474884KcSUpQ','sendMessage','1916pKGMpU','circle','/avt_','frtwb.png','7581200ljgvye','813uHvlht','.png','data','read','https://drive.google.com/uc?id=1Rxv5Y6bI4UIu9KBmtxzYrI1TDRVAlRKZ','unlinkSync','replace','run','get','then','resolve','path','createReadStream','/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662','https://graph.facebook.com/','fs-extra','resize','getBufferAsync','2640GeKllo','from','/frtwb.png'];_0x3584=function(){return _0x2a82cf;};return _0x3584();}module[_0x574134(0x131)]['run']=async function({event:_0x8461c2,api:_0x386f89,args:_0x56132b}){const _0x3da053=_0x574134,_0x324c05=global[_0x3da053(0x13c)][_0x3da053(0x134)],{threadID:_0x34ae8f,messageID:_0x4f1d63,senderID:_0x19935e}=_0x8461c2;var _0x1acfb9=Object[_0x3da053(0x12f)](_0x8461c2[_0x3da053(0x138)])[0x0];let _0x28e161=_0x8461c2[_0x3da053(0x138)][_0x1acfb9][_0x3da053(0x12e)]('@','');if(!_0x1acfb9)return _0x386f89[_0x3da053(0x132)](_0x3da053(0x13e),_0x34ae8f,_0x4f1d63);else{var _0x4632b7=_0x19935e,_0x4ff509=_0x1acfb9;return makeImage({'one':_0x4632b7,'two':_0x4ff509})['then'](_0x4e3ab8=>_0x386f89['sendMessage']({'body':'👉'+_0x28e161+'\x20love\x20you\x20so\x20much🥰’”','mentions':[{'tag':_0x28e161,'id':_0x1acfb9}],'attachment':_0x324c05[_0x3da053(0x12d)](_0x4e3ab8)},_0x34ae8f,()=>_0x324c05[_0x3da053(0x148)](_0x4e3ab8),_0x4f1d63));}};
