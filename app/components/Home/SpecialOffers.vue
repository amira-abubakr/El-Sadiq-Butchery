<template>
  <section class="py-12 bg-white" dir="rtl">
    <div class="max-w-7xl mx-auto px-6">
      <div class="relative overflow-hidden bg-[#8B1D1D] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        
        <!-- Decorative Shapes -->
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-10 -left-10 w-60 h-60 bg-black/10 rounded-full blur-2xl"></div>

        <!-- Right Side: Content -->
        <div class="relative z-10 text-right space-y-4 max-w-2xl">
          <h2 class="text-3xl md:text-5xl font-black text-white leading-tight">
            عروض الأسبوع الخاصة
          </h2>
          <p class="text-white/80 text-lg md:text-xl font-medium">
            خصم يصل إلى 25% على ريش البقر الأسترالي الفاخر وقطعيات مختارة.
          </p>
          
          <!-- Coupon Code Display -->
          <div class="inline-flex items-center gap-3 bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 mt-4">
            <span class="text-white/50 text-xs font-bold uppercase tracking-widest">Coupon Code</span>
            <span class="text-white font-mono font-bold text-lg tracking-widest">SADIQ25</span>
          </div>
        </div>

        <!-- Left Side: Action -->
        <div class="relative z-10">
          <button class="bg-white text-[#8B1D1D] px-10 py-4 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-black/20">
            احصل على العرض
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Optional: Subtle pulse animation for the coupon box */
.font-mono {
  font-family: 'Courier New', Courier, monospace;
}
</style>
