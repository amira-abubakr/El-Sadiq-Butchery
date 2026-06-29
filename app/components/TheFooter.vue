<template>
  <footer class="bg-zinc-950 text-gray-400 py-16 border-t border-white/5" dir="rtl">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
        
        <!-- Brand Section -->
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-[#8B1D1D] rounded-xl flex items-center justify-center text-white font-black text-2xl italic shadow-lg shadow-[#8B1D1D]/20">S</div>
            <h2 class="text-2xl font-black text-white tracking-tight">جزارة الصديق</h2>
          </div>
          <p class="text-sm leading-relaxed max-w-xs">
            نحن نفخر بتقديم أجود أنواع اللحوم البلدي الطازجة منذ عام 1990. نلتزم بأعلى معايير الجودة والنظافة لنضمن لك تجربة طهي استثنائية.
          </p>
          <!-- Socials -->
          <div class="flex items-center gap-4 pt-2">
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8B1D1D] hover:text-white transition-all">
              <i class="mdi mdi-facebook text-xl"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8B1D1D] hover:text-white transition-all">
              <i class="mdi mdi-instagram text-xl"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8B1D1D] hover:text-white transition-all">
              <i class="mdi mdi-whatsapp text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-bold text-lg mb-8 relative inline-block">
            روابط سريعة
            <span class="absolute bottom-[-8px] right-0 w-8 h-[2px] bg-[#8B1D1D]"></span>
          </h4>
          <ul class="space-y-4 text-sm font-medium">
            <li v-for="link in ['الرئيسية', 'منتجاتنا', 'عروضنا', 'من نحن', 'اتصل بنا']" :key="link">
              <a href="#" class="hover:text-[#ff4d4d] transition-colors flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]/30 group-hover:bg-[#8B1D1D]"></span>
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-white font-bold text-lg mb-8 relative inline-block">
            معلومات التواصل
            <span class="absolute bottom-[-8px] right-0 w-8 h-[2px] bg-[#8B1D1D]"></span>
          </h4>
          <ul class="space-y-6 text-sm">
            <li class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#ff4d4d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p class="leading-relaxed">القاهرة، مدينة نصر، شارع الطيران الرئيسي</p>
            </li>
            <li class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#ff4d4d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p>+20 123 456 7890</p>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-white font-bold text-lg mb-8 relative inline-block">
            اشترك في النشرة البريدية
            <span class="absolute bottom-[-8px] right-0 w-8 h-[2px] bg-[#8B1D1D]"></span>
          </h4>
          <p class="text-xs mb-6 leading-relaxed">احصل على آخر العروض والخصومات الحصرية مباشرة على بريدك.</p>
          <div class="space-y-3">
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني" 
              class="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#8B1D1D] transition-colors"
            />
            <button class="w-full bg-[#8B1D1D] hover:bg-[#a52222] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-[#8B1D1D]/20">
              اشترك الآن
            </button>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-medium tracking-wider">
        <p>© {{ new Date().getFullYear() }} جزارة الصديق. جميع الحقوق محفوظة.</p>
        <div class="flex items-center gap-8">
          <a href="#" class="hover:text-white transition-colors">سياسة الخصوصية</a>
          <a href="#" class="hover:text-white transition-colors">الشروط والأحكام</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
/* Use MDI icons if available or standard SVGs */
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css');
</style>
