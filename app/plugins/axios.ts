import axios from "axios";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const api = axios.create({
    baseURL: process.client ? '/' : config.public.apiBase,
    withCredentials: true,
    xsrfCookieName: 'XSRF-TOKEN', // 👈 اسم الكوكي اللي بيبعتها لارافل
    xsrfHeaderName: 'X-XSRF-TOKEN', // 👈 اسم الهيدر اللي لارافل مستنيه
    headers: {
      Accept: "application/json",
    },
  });

  // ✅ Response Interceptor: لو السيرفر رد بـ 401 (مش مسجل دخول) يحولك لصفحة Login
  api.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error.response?.status === 401) {
        navigateTo("/login");
      }
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      api,
    },
  };
});
