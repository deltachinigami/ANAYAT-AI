const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0QzclczbThFWWZSS09rc1BOQkNzd0lPUlhUNnBBOVc1MEVqSlAxSW1FND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTFGbHd0YjIwb1REd0xyTE1uMVczNzd4a25yTnNWVEJSbElrbmFleCt6WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDS3dvR0Zlc2hJYVUrelc2cFlpY0xPamN0MElaUElJL1pXQzE2d29LTkVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTeWkrVDAwSnZYSVJPQ3Jnc3BENElrNkR4M3psbTluKzYrYVU1cnB0eGxZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlQTFBvbUszL3dHYjZVTDVRNWxWNzZRUzFuZ05DN1hWUUY1djhwWXlxRXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFsZ3kxRUdlREQ2L3I2ejFIK0UzaWR4WldveHYvQnFqcnAwdG1qcWgzVHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk12YlBXN3ZqdEkzZVlaTVRJbDc0bzVqOHBMU1dKNytuSjRzM09tQlgxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDd3Wm1tSXBwamN2UWVZK2xVL1lxSjBVQlYvWU5lRksyY3lxUmZxK0tXRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIUVZ3bFZXSW44T3ZxVXU5S1h2cnFLdTJTSnJKN2V0VjViNXFvSzVwb2VRZlQvczF6YmVjNitoMGVVS3pMdVdsRFVCalJCK2pVejVoWkRWdk0yb0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTMsImFkdlNlY3JldEtleSI6IlJGSytVM2NtRDA0Y0xva0VkZzRlMUdqdjhsMWZ1NFNaNGJsem1xNk9YS1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM3Njc2MTAzNDA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQTJENzU4NUY2MTVEMDFEOUJBRjU4NDI0N0VFQjlFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjQ4MTkyMDd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY3NjEwMzQwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0EwNTU3MDNCMEExMjc4MEE4MjFCOTFEQTUzN0U5RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY0ODE5MjA3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzc2NzYxMDM0MDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM4MTM0MjZENDcyM0QzRjEyRDhCODlFODlFMzc1NDMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NDgxOTIwN30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM3Njc2MTAzNDA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNTY0MTM3M0Q0RUUzNTc1OTY5NEI3MEE5OEZERTE0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjQ4MTkyMDd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY3NjEwMzQwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzg1QjkzQkMxNzJEMzc2QTVBRTMyQUU1MERGRjhBMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY0ODE5MjA5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzc2NzYxMDM0MDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNFNTNBOEU1REQ5NkIwNTI4RTk4NkE0RTZBQ0FGMkUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NDgxOTIxMH1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZVVBSQURFViIsIm1lIjp7ImlkIjoiMjM3Njc2MTAzNDA2OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMTM0NDM0MzI5NDc3Nzc6MUBsaWQiLCJuYW1lIjoiTiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG00ejhzREVQZUJ4TWtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUzJGNTZlY0dKNDk0WkZONWo2bU1HYlJQdlBrRjBaWHFpS1VSYmNmTWNBUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR2pkeC8xbzVUbjZIdHJBTGxYWVhWT3BDU28wMmoyMEExYk5rbThFYjJzQ3c4NE1nWC9QOE80R0RWczJMTjNpL2ZJMGpMZzc2OGhsc052NlRkU0FUQUE9PSIsImRldmljZVNpZ25hdHVyZSI6Imh4Ukd1clNkNTZnZWk4NWphUjlaZlptUFV2TStsaDNBYUV4NE4zVG1WRWJ1TWhmMUVWYnI0aFlPbUJ2bS9PZ3IyZXEweGtiMzJMVmZSNDZOeENFckJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njc2MTAzNDA2OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXRoZWVubkJpZVBlR1JUZVkrcGpCbTBUN3o1QmRHVjZvaWxFVzNIekhBRSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBZ1MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY0ODE5MjA1LCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdJciJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANAYAT-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Anayat-ai*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Anayat-ai ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
