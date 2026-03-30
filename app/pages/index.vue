<template>
  <div class="min-h-screen bg-bone py-12 px-6">
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <!-- شعار أو أيقونة بسيطة -->
      <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
        <span class="text-3xl text-primary font-bold italic">S</span>
      </div>
      
      <h1 class="text-5xl font-extrabold text-secondary tracking-tight">
        مرحباً بكم في <span class="text-primary">جزارة الصديق</span> الفاخرة
      </h1>
      
      <p class="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
        نقدم لك أجود أنواع اللحوم البلدي الطازجة المذبوحة يومياً، بلمسة من العراقة والجودة التي تستحقها.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4">
        <button class="px-8 py-3 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105">
          تصفح المنتجات
        </button>
        <button class="px-8 py-3 bg-white text-primary border-2 border-primary font-bold rounded-lg hover:bg-primary/5 transition-all">
          من نحن
        </button>
      </div>

      <!-- عرض للألوان الجديدة -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-zinc-200">
        <div class="p-4 rounded-xl bg-primary text-white">Primary Red</div>
        <div class="p-4 rounded-xl bg-secondary text-white">Secondary Slate</div>
        <div class="p-4 rounded-xl bg-accent text-secondary">Gold Accent</div>
        <div class="p-4 rounded-xl bg-meat text-white">Meat Red</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// هنا تبدأ رحلة بناء موقعك الفخم
</script>
