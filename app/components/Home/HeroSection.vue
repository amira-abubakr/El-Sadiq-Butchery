<template>
  <section class="relative h-[700px] w-full overflow-hidden flex items-center justify-start px-6 lg:px-24">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/images/hero-bg.png" 
        alt="Fresh Meat Background" 
        class="h-full w-full object-cover"
      />
      <!-- Adjust gradient for RTL (Right to Left) -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
    </div>

    <!-- Content Container (RTL) -->
    <div class="relative z-10 max-w-2xl text-right text-white space-y-8 px-4" dir="rtl">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-bold text-[#ff4d4d] animate-fade-in-down">
        <span class="w-2 h-2 rounded-full bg-[#8B1D1D] shadow-[0_0_10px_#8B1D1D] animate-pulse"></span>
        أجود أنواع اللحوم البلدي في مصر
      </div>

      <h1 class="text-5xl lg:text-7xl font-black leading-[1.1] animate-fade-in-up">
        لحوم طازجة وفاخرة <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#8B1D1D] drop-shadow-sm">تصلك حتى باب منزلك</span>
      </h1>

      <p class="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-lg mr-0 ml-auto opacity-90 animate-fade-in-up delay-200">
        استمتع بفن الجزارة الأصيلة. مصدرنا محلي بلدي 100% ومقطعة يدوياً يومياً لتجربة طهي لا مثيل لها تليق بمائدتكم.
      </p>

      <div class="flex flex-wrap items-center justify-start gap-6 pt-6 animate-fade-in-up delay-500">
        <button class="group relative bg-[#8B1D1D] text-white px-12 py-4 rounded-2xl font-bold text-xl transition-all hover:bg-[#a52222] hover:-translate-y-1 active:scale-95 shadow-2xl shadow-[#8B1D1D]/40">
          تسوق الآن
          <span class="absolute inset-0 rounded-2xl bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </button>
        
        <button class="bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-4 rounded-2xl font-bold text-xl transition-all hover:-translate-y-1 active:scale-95">
          عرض المنتجات
        </button>
      </div>

      <!-- Features Checklist -->
      <div class="flex items-center gap-10 pt-10 text-base font-bold text-gray-100 animate-fade-in delay-700">
        <div class="flex items-center gap-3 group">
          <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 group-hover:bg-green-500 group-hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 18px; height: 18px;" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          طازجة يومياً 100%
        </div>
        <div class="flex items-center gap-3 group">
          <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 group-hover:bg-green-500 group-hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 18px; height: 18px;" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          توصيل سريع بنفس اليوم
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Optional: Adding a subtle parallax or animation */
h1 {
  text-shadow: 0 4px 12px rgba(0,0,0,0.5);
}
</style>
