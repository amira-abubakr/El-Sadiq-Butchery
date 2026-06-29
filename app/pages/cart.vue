<template>
  <main class="min-h-screen bg-gray-50 py-16 font-cairo" dir="rtl">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl font-black text-gray-900 flex items-center gap-4">
          سلة التسوق
          <span class="text-lg font-bold text-gray-400 bg-gray-100 px-4 py-1 rounded-full">{{ cartItems.length }} منتجات</span>
        </h1>
      </div>

      <div v-if="cartItems.length > 0" class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Items List (Col 8) -->
        <div class="lg:col-span-8 space-y-6">
          <div v-for="item in cartItems" :key="item.id" class="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 group hover:shadow-xl transition-all duration-500">
            <!-- Product Image -->
            <div class="w-32 h-32 rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
              <img :src="item.image" :alt="item.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            
            <!-- Info -->
            <div class="flex-1 text-right space-y-2">
              <span class="text-[10px] font-black text-[#8B1D1D] uppercase tracking-widest bg-[#8B1D1D]/5 px-2 py-0.5 rounded-md">{{ item.category }}</span>
              <h3 class="text-2xl font-black text-gray-900">{{ item.name }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed">{{ item.description }}</p>
            </div>

            <!-- Price & Quantity -->
            <div class="flex flex-col md:items-end gap-6">
              <div class="text-2xl font-black text-[#8B1D1D]">{{ item.price * item.quantity }} EGP</div>
              
              <div class="flex items-center gap-4">
                <!-- Quantity Selector -->
                <div class="flex items-center gap-4 bg-gray-50 rounded-2xl p-1.5 border border-gray-100">
                  <button @click="item.quantity > 1 && item.quantity--" class="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm hover:bg-gray-100 transition-colors text-gray-600">-</button>
                  <span class="text-lg font-black w-6 text-center">{{ item.quantity }}</span>
                  <button @click="item.quantity++" class="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm hover:bg-gray-100 transition-colors text-gray-600">+</button>
                </div>
                
                <!-- Remove -->
                <button class="w-12 h-12 flex items-center justify-center rounded-2xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Back to shopping -->
          <NuxtLink to="/products" class="inline-flex items-center gap-2 text-gray-500 font-bold hover:text-[#8B1D1D] transition-colors mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            العودة لمواصلة التسوق
          </NuxtLink>
        </div>

        <!-- Summary (Col 4) -->
        <div class="lg:col-span-4 sticky top-24">
          <div class="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-gray-200/50 border border-gray-50 space-y-8">
            <h2 class="text-2xl font-black text-gray-900">ملخص الطلب</h2>
            
            <div class="space-y-4">
              <div class="flex items-center justify-between text-gray-500 font-bold">
                <span>المجموع الفرعي</span>
                <span>{{ subtotal }} EGP</span>
              </div>
              <div class="flex items-center justify-between text-gray-500 font-bold">
                <span>رسوم التوصيل</span>
                <span class="text-green-500">مجاني</span>
              </div>
              <div class="pt-6 border-t border-gray-100 flex items-center justify-between">
                <span class="text-xl font-black text-gray-900">الإجمالي الشامل</span>
                <span class="text-3xl font-black text-[#8B1D1D]">{{ total }} EGP</span>
              </div>
            </div>

            <div class="space-y-4 pt-4">
              <button class="w-full bg-[#8B1D1D] hover:bg-[#a52222] text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-[#8B1D1D]/20 text-xl flex items-center justify-center gap-4">
                إتمام عملية الشراء
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div class="flex items-center justify-center gap-6 pt-4 grayscale opacity-40">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" class="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" class="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" class="h-6" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Empty Cart -->
      <div v-else class="py-32 text-center bg-white rounded-[3rem] shadow-sm border border-gray-50">
        <div class="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        </div>
        <h2 class="text-3xl font-black text-gray-900 mb-4">سلتك فارغة تماماً</h2>
        <p class="text-gray-400 max-w-sm mx-auto mb-10">يبدو أنك لم تضف أي قطعيات مميزة بعد. استكشف منتجاتنا وابدأ في ملء سلتك بأجود أنواع اللحوم.</p>
        <NuxtLink to="/products" class="bg-[#8B1D1D] text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-[#a52222] transition-all shadow-xl shadow-[#8B1D1D]/20">
          ابدأ التسوق الآن
        </NuxtLink>
      </div>

    </div>
  </main>
</template>

<script setup>
const cartItems = ref([
  { id: 1, category: 'لحم بقري', name: 'Beef Filet - عرق فلتو', description: 'أكثر القطع طراوة ونعومة، مثالية لطهي أطباق شيفات فاخرة.', price: 920, quantity: 1, image: '/images/meat-cuts.png' },
  { id: 2, category: 'لحم بقري', name: 'Minced Beef - لحم مفروم', description: 'تحضير منزلي مفروم يومياً، خالي من أي إضافات لتجربة طعم أصلية.', price: 450, quantity: 1, image: '/images/meat-cuts.png' }
])

const subtotal = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + (item.price * item.quantity), 0)
})

const total = computed(() => subtotal.value)

useHead({
  title: 'سلة التسوق - جزارة الصديق'
})
</script>

<style scoped>
.font-cairo {
  font-family: 'Cairo', sans-serif;
}
</style>
