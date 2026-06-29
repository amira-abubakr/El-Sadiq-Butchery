<template>
  <main class="min-h-screen bg-gray-50 font-cairo" dir="rtl">
    
    <!-- Hero Header -->
    <section class="bg-white py-20 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-black text-gray-900 relative inline-block pb-4">
          اتصل بنا
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#8B1D1D] rounded-full"></span>
        </h1>
        <p class="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
          نحن هنا للإجابة على استفساراتكم وتلبية طلباتكم. تواصلوا معنا عبر النموذج أدناه أو من خلال معلومات الاتصال الموضحة.
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Contact Form (Col 7) -->
          <div class="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50">
            <h2 class="text-2xl font-bold mb-8 flex items-center gap-3">
              <span class="w-2 h-8 bg-[#8B1D1D] rounded-full"></span>
              أرسل لنا رسالة
            </h2>
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700">الاسم الكامل</label>
                  <input type="text" placeholder="أدخل اسمك هنا" class="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-[#8B1D1D] transition-all" />
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700">رقم الهاتف</label>
                  <input type="tel" placeholder="01x xxxx xxxx" class="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-[#8B1D1D] transition-all" />
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700">البريد الإلكتروني</label>
                <input type="email" placeholder="example@mail.com" class="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-[#8B1D1D] transition-all" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700">نص الرسالة</label>
                <textarea rows="5" placeholder="كيف يمكننا مساعدتك؟" class="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-[#8B1D1D] transition-all resize-none"></textarea>
              </div>
              <button class="w-full bg-[#8B1D1D] hover:bg-[#a52222] text-white font-black py-5 rounded-2xl transition-all transform hover:-translate-y-1 shadow-lg shadow-[#8B1D1D]/30 text-lg">
                إرسال الرسالة الآن
              </button>
            </form>
          </div>

          <!-- Contact Info (Col 5) -->
          <div class="lg:col-span-5 space-y-8">
            <!-- Info Cards -->
            <div class="bg-[#8B1D1D] text-white rounded-[2rem] p-10 shadow-2xl relative overflow-hidden group">
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              
              <h2 class="text-2xl font-bold mb-8">معلومات الاتصال</h2>
              <ul class="space-y-8">
                <li class="flex items-start gap-5">
                  <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-white/60 text-sm">اتصل بنا مباشرة</h4>
                    <p class="text-xl font-bold mt-1 text-white leading-relaxed">+20 123 456 7890 <br/> +20 100 200 3000</p>
                  </div>
                </li>
                <li class="flex items-start gap-5">
                  <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-white/60 text-sm">موقعنا</h4>
                    <p class="text-xl font-bold mt-1 text-white leading-relaxed">القاهرة، مدينة نصر، شارع الطيران الرئيسي</p>
                  </div>
                </li>
                <li class="flex items-start gap-5">
                  <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-white/60 text-sm">البريد الإلكتروني</h4>
                    <p class="text-xl font-bold mt-1 text-white">info@elsadiq-butchery.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Social Links Card -->
            <div class="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 flex items-center justify-around">
              <a href="#" class="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl text-gray-700 hover:bg-[#8B1D1D] hover:text-white transition-all transform hover:-rotate-6 shadow-sm">
                <i class="mdi mdi-facebook"></i>
              </a>
              <a href="#" class="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl text-gray-700 hover:bg-[#8B1D1D] hover:text-white transition-all transform hover:-rotate-6 shadow-sm">
                <i class="mdi mdi-instagram"></i>
              </a>
              <a href="#" class="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl text-gray-700 hover:bg-[#8B1D1D] hover:text-white transition-all transform hover:-rotate-6 shadow-sm">
                <i class="mdi mdi-whatsapp"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Map Placeholder -->
    <section class="h-[400px] bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-1000">
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-gray-500 font-bold">Interactive Google Map Placeholder</p>
      </div>
    </section>

  </main>
</template>

<script setup>
useHead({
  title: 'اتصل بنا - جزارة الصديق',
  meta: [
    { name: 'description', content: 'تواصل مع جزارة الصديق لأي استفسارات أو طلبات خاصة. نحن هنا لخدمتكم بأفضل جودة.' }
  ]
})
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css');

input::placeholder, textarea::placeholder {
  color: #9CA3AF;
  font-size: 0.875rem;
}

.font-cairo {
  font-family: 'Cairo', sans-serif;
}
</style>
