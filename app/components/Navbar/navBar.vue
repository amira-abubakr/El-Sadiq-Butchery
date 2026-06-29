<template>
  <header class="w-full font-cairo">
    <!-- Top Gradient Accent -->
    <div class="h-[6px] w-full bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]"></div>

    <!-- Main Navigation -->
    <nav class="bg-white border-b border-gray-100 shadow-sm px-4 lg:px-12 py-3" dir="rtl">
      <div class="max-w-[1400px] mx-auto flex items-center justify-between gap-8">
        
        <!-- Right: Navigation Links -->
        <div class="hidden lg:flex items-center gap-8">
          <NuxtLink 
            v-for="link in navigation" 
            :key="link.path" 
            :to="link.path"
            class="text-gray-700 font-bold text-[15px] transition-colors hover:text-[#8B1D1D] relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-[2px] after:bg-[#8B1D1D] after:transition-all hover:after:w-full whitespace-nowrap"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- Center: Search Bar -->
        <div class="flex-1 max-w-lg mx-4">
          <div class="relative group">
            <input 
              type="text" 
              placeholder="ابحث عن اللحوم.." 
              class="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl py-2.5 pr-12 pl-4 text-sm outline-none transition-all focus:border-[#8B1D1D] focus:ring-4 focus:ring-[#8B1D1D]/5 focus:bg-white text-right"
            />
            <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;" class="text-gray-400 group-focus-within:text-[#8B1D1D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Left: Auth & Cart -->
        <div class="flex items-center gap-4">
          <!-- Login Button -->
          <button class="border-2 border-[#8B1D1D] text-[#8B1D1D] px-5 py-1.5 rounded-lg font-bold text-[14px] transition-all hover:bg-[#8B1D1D] hover:text-white active:scale-95 whitespace-nowrap">
            تسجيل الدخول
          </button>

          <!-- Shopping Bag -->
          <div 
            @click="isCartOpen = true"
            class="relative cursor-pointer group flex items-center justify-center shrink-0" 
            style="width: 32px; height: 32px;"
          >
            <div class="absolute -top-1.5 -right-1.5 bg-[#8B1D1D] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm z-10">
              2
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 26px; height: 26px;" class="text-slate-600 transition-colors group-hover:text-[#8B1D1D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Cart Drawer Component -->
        <CartDrawer :is-open="isCartOpen" @close="isCartOpen = false" />

      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isCartOpen = ref(false)

const navigation = [
  { name: 'الرئيسية', path: '/' },
  { name: 'منتجاتنا', path: '/products' },
  { name: 'من نحن', path: '/about' },
  { name: 'اتصل بنا', path: '/contact' },
]
</script>

<style scoped>
.font-cairo {
  font-family: 'Cairo', sans-serif;
}
</style>