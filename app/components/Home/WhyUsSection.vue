<template>
  <section class="py-24 bg-zinc-900 text-white overflow-hidden relative" dir="rtl">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div class="text-right">
          <span class="text-[#ff4d4d] font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
          <h2 class="text-4xl lg:text-5xl font-black mt-4 leading-tight">
            نحن لا نبيع اللحوم فقط، <br/>
            <span class="text-gray-400">بل نقدم لك الثقة والجودة.</span>
          </h2>
          <p class="text-gray-400 mt-6 text-lg leading-relaxed">
            في جزارة الصديق، نؤمن أن الجودة تبدأ من المصدر. لذلك نختار ذبائحنا بعناية فائقة من مزارعنا ونشرف على كل خطوة لضمان وصول أفضل منتج لمائدتكم.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-8">
            <div class="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#ff4d4d]/50 transition-colors group">
              <h4 class="text-4xl font-black text-[#ff4d4d] group-hover:scale-110 transition-transform inline-block">100%</h4>
              <p class="text-gray-500 mt-2 font-bold">بلدي أصلي</p>
            </div>
            <div class="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#ff4d4d]/50 transition-colors group">
              <h4 class="text-4xl font-black text-[#ff4d4d] group-hover:scale-110 transition-transform inline-block">24h</h4>
              <p class="text-gray-500 mt-2 font-bold">ذبح طازج</p>
            </div>
          </div>
        </div>

        <!-- Image Section -->
        <div class="relative group">
          <div class="absolute -inset-4 bg-gradient-to-r from-[#8B1D1D] to-transparent opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
          <img 
            src="/images/meat-cuts.png" 
            alt="Trust" 
            class="rounded-3xl shadow-2xl relative z-10 w-full h-full object-cover transition-all duration-700" 
          />
        </div>
      </div>
    </div>
    
    <!-- Background Accents -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-[#8B1D1D]/5 -skew-x-12 translate-x-1/2"></div>
  </section>
</template>

<script setup>
</script>
