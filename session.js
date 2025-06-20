//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkJtT3NhaDBmQlVHVXlybEYvOEtHbS9JaW93dWJ4ODh6bGFpUm1GM2kzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXhUSHkzTkdNc1hTeEdzb3RmWjhlUERjZlhuOHNIcGlhbWxCL0k2NlVoND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRGRzUzh1eGl4UHVuTjZmWmRiTVh6ZStQV0UvN0RUdTh0NmU0TkNVQWw4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDckJwanpTR0xJVUovalhlMkRTSnhMcWsra1lJQlRqUmRTR3JOMWJvYWxzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKbTBUbUhZRkR6NHNZNTlHa2F0NVFwcU1oN2w3VWtCdjRDd1pWTmw3MVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZidTBBNzdXMTNXaFhoTmg0NEwydHBuYWdVRUpyc3VDOVo1WkRGcThNMVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01tUVFFM1dXR1hwNTJpQk96c0NvN3laY1NoMnpIVWNiYyszWmRpVjVFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1dCNkhydzcvakRrenZKZ3oyMEdtQUZsZ2V0R05EVFU3K08zcjB1NWpURT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im54eVREajJySGlDUGMzSExnYW5VNGtsYUt5aW9pQ0MzOGhkL3VFTWxJV3lvMENUUXZUbS9YbS85Zks0aHBmcWlsbUdWOUZsZ1pKRW5OdXZUTE8yM2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODQsImFkdlNlY3JldEtleSI6IlVXNGdNTjhQMVlMM3o4dnhIaVNzdHdTaGN5WUlQM084M0hlbEczNUNJWDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InhvMGlSLWRUUjFtbGV6ZERBNUpfR0EiLCJwaG9uZUlkIjoiY2QxZGYxMzItY2NhOS00YmNlLTlhNzItNGI0NTJjMzBmNmRkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldvZWR5WU15KytDbnZ5UTBJYTJDSEFsMmE0WT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpMUZXRlQwc0Q3NGNLbmVXcDFlTkRSS2YyUE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSktGWTNWOE4iLCJtZSI6eyJpZCI6Ijk0NzQyOTczMjY1OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRpbnVrYSBmaWxtIiwibGlkIjoiMjA1MDI5NTQxNzEyMTA0OjEwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1Nzd3VRRUVLdWQxY0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS1ZGYWttamx6VkkvUWl0cTNXRStpY3pIbzV1RkJQZmwzVmNGQ3V6b1Zqcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicDJtL3RrdHRwcnJZeUJiSHd5Ymd5YnhnSlY3KzIySTNISHJ3N3kzYkpiaEJJUjU2ZkZ3clFIM0V5NE9rT0grVUhDZmNTNm1VeGlXVW5MNmRwVmlxQVE9PSIsImRldmljZVNpZ25hdHVyZSI6Im1yMjd0dkFCSmR0aTBsNnNGMG5ReGM5YjVIV00xN0FmQmdjelBzajNVQVEreVVlOU5QNmhmMzNUV0Jleit1SGFYUWY0QlhBaGJMTGkzTVZ4aGlRYWlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDI5NzMyNjU6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2xSV3BKbzVjMVNQMElyYXQxaFBvbk14Nk9iaFFUMzVkMVhCUXJzNkZZNyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUF3PT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNDIxMTc1LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxvTSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
