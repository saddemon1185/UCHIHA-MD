const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SUBZERO-MD~7qh0RDTJ#cCmnKt4FA2I80MkjuhPxbqf8ZKjVjaqKCJI3kFCUm8U",
// add your Session Id 
PREFIX: process.env.PREFIX || "+",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "✦ Uchiha ✦✦ MD ✦",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "254757959246",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "✦ Reincarnated ✦✦ Uchiha ✦",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ Uchiha ✦✦ MD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://imgur.com/1gllAPq.jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Throughout Heaven and Earth Uchiha-MD alone is the honoured Bot.it is ACTIVE AND ALIVE\n\n\nKEEP USING Uchiha-MD  FROM Reincarnated Uchiha⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Viewed by Uchiha MD 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "true",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
