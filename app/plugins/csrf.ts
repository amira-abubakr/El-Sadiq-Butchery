import axios from "axios";

export default defineNuxtPlugin(() => {
  // طلب الـ CSRF Cookie مباشرة من خلال البروكسي عند تشغيل التطبيق
  axios.get("/sanctum/csrf-cookie", {
    withCredentials: true,
  });
});