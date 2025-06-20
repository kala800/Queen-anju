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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FmSlRRMThRUUVlU2dsclM0MjRJK1JSdHBlTk5rRlhSZk0rRDhibXIxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTlTOHg1R1NBa1hFbUZURmdGNnBOMTVycGliM21uWjc3TFhKdlFQMVNFbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTDZuQmhUeVV2U3dKc0VJMFJSV1dIQXkvZGs5cGRNSGp4czF6RFUwS0dJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRUtjMU1QK2g1RUp5WGNoK2lXUEVjdlZteGxXaXR5WGhOd2Nac3RkeFJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktJUVVkcHhVbEdsd1VLS0x5SGZIcGkyM0FXdDJDbzVsT0pLWWFXZ0VUbVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYwaUg3MVBkUi9jbmMvSENHNmFEMnp6QzBjdTc1WVQwYjIzbmNYNjU5MlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk4rd21JeWRiZW9DanpTT01qRTkzV08xK1YyaUVaR01kallyMGlpQTZtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2JoWklKRGphS1NEL2FVQlJkNEdYUVd6a3RwbDhSUVpZRlZIck96WG94dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx2aUZ0RytxMEs3QUtZU0dxZUxBTUtVWk1aU2RDL1Q0SDlZaDZ3R1FZZXdxTG9WOHlWQnV3REdoWEVVOGptdVNNOFlEVlFoeGdqU2trTU1yQlZydUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ0LCJhZHZTZWNyZXRLZXkiOiJacTdETFBYWG5zU3ZMMVBDbmxlVkFPK1pjZDBBSkcxcTM0ZjlzZUl2RTl3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2QTBkWTBNZ1IyU1BfbzZQVEZJaGJ3IiwicGhvbmVJZCI6ImYyOTBmZTNhLTM5M2QtNGE3My1iNWEwLTljMTY2NDA5ZmM0NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMNHorL2d6Ynh1UngxZVhTNzdUbmtwWm5PUVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDNOMGloaTJUZC9BbEVCVWFMWVZmUTRibnVvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQ4U0VDU0xCIiwibWUiOnsiaWQiOiI5NDc0Mjk3MzI2NTo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRpbnVrYSBmaWxtIiwibGlkIjoiMjA1MDI5NTQxNzEyMTA0OjlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPT3N3dVFFRUo2WTFjSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLVkZha21qbHpWSS9RaXRxM1dFK2ljekhvNXVGQlBmbDNWY0ZDdXpvVmpzPSIsImFjY291bnRTaWduYXR1cmUiOiJJZXlnN2ZZRC9ub3VSRlF2aW9EdllsRlNFcnJWYUxYU2x6Q0xQZU5nZ2g5dDdDeVY0eTJwT0dUT0ZPTzlwbjFTZldCLzYvM0J1bDZISy8rbHdMdVdCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMG43Q2U4dDgrZ1JZangxTFM3VWJ0bUZRLzIweEsvK1JVYnBTWmVxQzAramRFVVBPSkZPQXQ5eHZjak1OYjVMRUw5d2F6ek1OTmxYakhFWloyVHh3Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0Mjk3MzI2NTo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNsUldwSm81YzFTUDBJcmF0MWhQb25NeDZPYmhRVDM1ZDFYQlFyczZGWTcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBc0lBdz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDQyMDUyMywibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMb00ifQ==",
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
