import { CookieUtil } from "./myLib/CookieUtil.js"
CookieUtil.set("cartId", "abc123", new Date(2025, 9, 20))
console.log(document.cookie)
console.log(CookieUtil.get("cartId"))
CookieUtil.unset("cartId")
// console.log(document.cookie)
// document.cookie = "theme=dark"
// document.cookie = `theme=light;expires=${new Date(2025, 9, 16)}` -> cookie นี้ยังต้องอยู่ ถึงจะปิด browser ไปแล้วก็ตาม

document.cookie = "username=Pongsatorn; max-age=60"

