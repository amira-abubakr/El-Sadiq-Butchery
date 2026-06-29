<template>
  <div v-if="isOpen" class="fixed inset-0 z-[100] font-cairo" dir="rtl">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" @click="$emit('close')"></div>
    
    <!-- Drawer Content -->
    <div class="absolute inset-y-0 left-0 w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-500 ease-out">
      
      <!-- Header -->
      <div class="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
        <div class="flex items-center gap-3">
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#8B1D1D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span class="absolute -top-1 -right-1 bg-[#8B1D1D] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
              {{ cartItems.length }}
            </span>
          </div>
          <h2 class="text-2xl font-black text-gray-900">سلة التسوق</h2>
        </div>
        <button @click="$emit('close')" class="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Cart Items -->
      <div class="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30">
        <div v-if="cartItems.length > 0" class="space-y-4">
          <div v-for="item in cartItems" :key="item.id" class="flex gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            <!-- Product Image -->
            <div class="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
              <img :src="item.image" :alt="item.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <!-- Details -->
            <div class="flex-1 flex flex-col justify-between py-1">
              <div>
                <h4 class="font-bold text-gray-900 leading-snug line-clamp-1">{{ item.name }}</h4>
                <p class="text-xs text-gray-400 mt-1 font-bold">{{ item.price }} EGP / kg</p>
              </div>
              
              <div class="flex items-center justify-between mt-2">
                <!-- Quantity Controls -->
                <div class="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-gray-100">
                  <button class="w-7 h-7 flex items-center justify-center rounded-md bg-white shadow-sm hover:bg-gray-100 transition-colors text-gray-600 disabled:opacity-50" :disabled="item.quantity <= 1">-</button>
                  <span class="text-sm font-black w-4 text-center">{{ item.quantity }}</span>
                  <button class="w-7 h-7 flex items-center justify-center rounded-md bg-white shadow-sm hover:bg-gray-100 transition-colors text-gray-600">+</button>
                </div>
                
                <button class="text-gray-300 hover:text-red-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="h-full flex flex-col items-center justify-center text-center p-10 space-y-4">
          <div class="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900">سلتك فارغة حالياً</h3>
          <p class="text-sm text-gray-400">يبدو أنك لم تضف أي منتجات بعد. ابدأ التسوق الآن واكتشف أفضل العروض.</p>
          <button @click="$emit('close')" class="text-[#8B1D1D] font-black underline pt-4">العودة للتسوق</button>
        </div>
      </div>

      <!-- Footer Summary -->
      <div v-if="cartItems.length > 0" class="p-6 bg-white border-t border-gray-100 space-y-4 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
        <div class="flex items-center justify-between text-gray-500 text-sm">
          <span>المجموع الفرعي</span>
          <span class="font-bold">1,370 EGP</span>
        </div>
        <div class="flex items-center justify-between text-gray-500 text-sm">
          <span>التوصيل</span>
          <span class="text-green-500 font-bold">مجاناً</span>
        </div>
        <div class="flex items-center justify-between text-gray-900 text-xl font-black pt-2">
          <span>الإجمالي</span>
          <span class="text-[#8B1D1D]">1,370 EGP</span>
        </div>
        
        <button class="w-full bg-[#8B1D1D] hover:bg-[#a52222] text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-[#8B1D1D]/20 text-lg flex items-center justify-center gap-3 mt-4">
          إتمام الطلب
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean
})

defineEmits(['close'])

const cartItems = [
  { id: 1, name: 'Beef Filet - عرق فلتو', price: 920, quantity: 1, image: '/images/meat-cuts.png' },
  { id: 2, name: 'Minced Beef - لحم مفروم', price: 450, quantity: 1, image: '/images/meat-cuts.png' }
]
</script>

<style scoped>
.font-cairo {
  font-family: 'Cairo', sans-serif;
}
</style>
