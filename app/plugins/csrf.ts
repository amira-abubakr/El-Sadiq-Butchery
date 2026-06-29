import axios from "axios";

export default defineNuxtPlugin(() => {
  if (process.client) {
    // طلب الـ CSRF Cookie مباشرة من خلال البروكسي عند تشغيل التطبيق
    axios.get("/sanctum/csrf-cookie", {
      withCredentials: true,
    });
  }
});