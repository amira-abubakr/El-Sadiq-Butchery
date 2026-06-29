<template>
  <main class="min-h-screen bg-gray-50 py-16 px-4 md:px-12">
    <div class="max-w-[1400px] mx-auto">
      
      <!-- Stepper / Header -->
      <div class="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <h1 class="text-4xl md:text-5xl font-black text-gray-900">إتمام الطلب</h1>
        <div class="flex items-center gap-4 text-xs md:text-sm font-bold">
          <div class="flex items-center gap-2 text-green-500">
            <span class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[10px]">✓</span>
            <span>السلة</span>
          </div>
          <div class="w-8 md:w-12 h-[2px] bg-gray-200"></div>
          <div class="flex items-center gap-2 text-[#8B1D1D]">
            <span class="w-6 h-6 rounded-full bg-[#8B1D1D] text-white flex items-center justify-center text-[10px]">2</span>
            <span>التفاصيل</span>
          </div>
          <div class="w-8 md:w-12 h-[2px] bg-gray-200"></div>
          <div class="flex items-center gap-2 text-gray-300">
            <span class="w-6 h-6 rounded-full bg-gray-200 text-white flex items-center justify-center text-[10px]">3</span>
            <span>التأكيد</span>
          </div>
        </div>
      </div>

      <!-- Main Layout Grid -->
      <div class="flex flex-col lg:flex-row gap-12 items-start w-full">
        
        <!-- Left Side: Forms (Order 2 in RTL, but we'll use order classes if needed) -->
        <div class="w-full lg:w-2/3 space-y-8 order-2 lg:order-1">
          
          <!-- Shipping Address -->
          <div class="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100">
            <h2 class="text-2xl font-black mb-8 flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-[#8B1D1D]/10 text-[#8B1D1D] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <span>عنوان الشحن</span>
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2 text-right">
                <label class="text-sm font-bold text-gray-600 block px-2">الاسم بالكامل</label>
                <input type="text" placeholder="أدخل اسمك بالكامل" class="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#8B1D1D] transition-all text-right" />
              </div>
              <div class="space-y-2 text-right">
                <label class="text-sm font-bold text-gray-600 block px-2">رقم الهاتف</label>
                <input type="tel" placeholder="01x xxxx xxxx" class="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#8B1D1D] transition-all text-right" />
              </div>
              <div class="md:col-span-2 space-y-2 text-right">
                <label class="text-sm font-bold text-gray-600 block px-2">العنوان بالتفصيل</label>
                <input type="text" placeholder="رقم العقار، اسم الشارع، المنطقة" class="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#8B1D1D] transition-all text-right" />
              </div>
              <div class="space-y-2 text-right">
                <label class="text-sm font-bold text-gray-600 block px-2">المحافظة</label>
                <div class="relative">
                  <select class="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#8B1D1D] transition-all appearance-none text-right pr-6 pl-10">
                    <option>القاهرة</option>
                    <option>الجيزة</option>
                    <option>الإسكندرية</option>
                  </select>
                  <div class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="space-y-2 text-right">
                <label class="text-sm font-bold text-gray-600 block px-2">ملاحظات (اختياري)</label>
                <input type="text" placeholder="مثلاً: الدور الثاني، علامة مميزة" class="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#8B1D1D] transition-all text-right" />
              </div>
            </div>
          </div>

          <!-- Payment Methods -->
          <div class="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100">
            <h2 class="text-2xl font-black mb-8 flex items-center gap-4 text-right">
              <div class="w-10 h-10 rounded-xl bg-[#8B1D1D]/10 text-[#8B1D1D] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <span>طريقة الدفع</span>
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label 
                v-for="method in paymentMethods" 
                :key="method.id"
                class="relative flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all"
                :class="[selectedPayment === method.id ? 'border-[#8B1D1D] bg-[#8B1D1D]/5' : 'border-gray-50 bg-gray-50/50 hover:border-gray-200']"
              >
                <input type="radio" name="payment" :value="method.id" v-model="selectedPayment" class="hidden" />
                <div class="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0" :class="[selectedPayment === method.id ? 'border-[#8B1D1D]' : 'border-gray-300']">
                  <div v-if="selectedPayment === method.id" class="w-3 h-3 rounded-full bg-[#8B1D1D]"></div>
                </div>
                <div class="text-right">
                  <h4 class="font-bold text-gray-900">{{ method.title }}</h4>
                  <p class="text-[10px] text-gray-400 mt-0.5">{{ method.desc }}</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        <!-- Right Side: Order Summary (Sticky) -->
        <div class="w-full lg:w-1/3 order-1 lg:order-2 sticky top-24">
          <div class="bg-zinc-950 text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-8 relative overflow-hidden">
            <!-- Glow Effect -->
            <div class="absolute -top-20 -left-20 w-40 h-40 bg-[#8B1D1D] rounded-full blur-[80px] opacity-20"></div>

            <h2 class="text-2xl font-black relative z-10 text-right">ملخص الطلب</h2>
            
            <!-- Items List -->
            <div class="space-y-6 relative z-10 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              <div v-for="item in items" :key="item.id" class="flex items-center gap-4 border-b border-white/5 pb-4 last:border-0">
                <div class="w-14 h-14 rounded-xl overflow-hidden bg-white/5 shrink-0 border border-white/5">
                  <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 text-right">
                  <h4 class="text-xs font-bold line-clamp-1 text-gray-200">{{ item.name }}</h4>
                  <p class="text-[10px] text-gray-500 mt-1">{{ item.quantity }} × {{ item.price }} EGP</p>
                </div>
                <div class="text-sm font-black text-[#ff4d4d]">{{ item.price * item.quantity }}</div>
              </div>
            </div>

            <!-- Price Breakdown -->
            <div class="space-y-4 pt-6 border-t border-white/10 relative z-10">
              <div class="flex items-center justify-between text-gray-400 font-bold text-sm">
                <span>المجموع</span>
                <span>1,370 EGP</span>
              </div>
              <div class="flex items-center justify-between text-gray-400 font-bold text-sm">
                <span>التوصيل</span>
                <span class="text-green-400">مجاني</span>
              </div>
              <div class="pt-6 border-t border-white/20 flex items-center justify-between">
                <span class="text-xl font-black">الإجمالي</span>
                <span class="text-3xl font-black text-[#ff4d4d]">1,370 EGP</span>
              </div>
            </div>

            <!-- Action Button -->
            <div class="pt-4 relative z-10">
              <button class="w-full bg-[#8B1D1D] hover:bg-[#a52222] text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-black/40 text-lg active:scale-95">
                تأكيد الطلب
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
const selectedPayment = ref('cod')

const paymentMethods = [
  { id: 'cod', title: 'الدفع عند الاستلام', desc: 'ادفع نقداً عند استلام طلبك', icon: 'mdi mdi-cash' },
  { id: 'card', title: 'بطاقة بنكية', desc: 'ادفع بأمان عبر الإنترنت', icon: 'mdi mdi-credit-card' }
]

const items = [
  { id: 1, name: 'Beef Filet - عرق فلتو', price: 920, quantity: 1, image: '/images/meat-cuts.png' },
  { id: 2, name: 'Minced Beef - لحم مفروم', price: 450, quantity: 1, image: '/images/meat-cuts.png' }
]

useHead({
  title: 'إتمام الطلب - جزارة الصديق'
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.02);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
</style>
