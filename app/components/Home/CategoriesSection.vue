<template>
  <section class="py-16 bg-white" dir="rtl">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span class="text-[12px] font-bold tracking-widest text-gray-400 uppercase">Curated Collections</span>
        <h2 class="text-4xl font-black text-gray-900 mt-2">الأقسام المختارة</h2>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
        
        <!-- Small Categories (Left Column in LTR, Right in RTL) -->
        <div class="md:col-span-4 flex flex-col gap-6">
          <!-- Poultry -->
          <div class="relative flex-1 group overflow-hidden rounded-3xl bg-gray-100 cursor-pointer">
            <img src="/images/poultry.png" alt="Poultry" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
              <h3 class="text-2xl font-bold">Poultry</h3>
              <p class="text-gray-300 text-sm mt-1">دواجن طازجة ومنتقاة</p>
            </div>
          </div>
          
          <!-- Traditional Delicacies -->
          <div class="relative flex-1 group overflow-hidden rounded-3xl bg-gray-100 cursor-pointer">
            <img src="/images/traditional.png" alt="Traditional" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
              <h3 class="text-2xl font-bold">Traditional Delicacies</h3>
              <p class="text-gray-300 text-sm mt-1">أصالة المذاق المصري</p>
            </div>
          </div>
        </div>

        <!-- Large Category (Right Column in LTR, Left in RTL) -->
        <div class="md:col-span-8 relative group overflow-hidden rounded-3xl bg-gray-100 cursor-pointer h-[400px] md:h-full">
          <img src="/images/meat-cuts.png" alt="Meat Cuts" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10 text-white">
            <h3 class="text-4xl font-black">Meat Cuts</h3>
            <p class="text-gray-300 text-lg mt-2 font-bold leading-relaxed">قطعية مميزة لكل مناسبة</p>
            <div class="mt-6">
              <button class="border-b-2 border-white pb-1 font-bold text-sm hover:text-gray-300 hover:border-gray-300 transition-colors">Shop Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>
