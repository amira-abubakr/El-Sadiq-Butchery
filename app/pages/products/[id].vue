<template>
  <main class="min-h-screen bg-white font-cairo" dir="rtl">
    
    <!-- Breadcrumbs -->
    <nav class="bg-gray-50 py-4 px-6 md:px-12">
      <div class="max-w-[1400px] mx-auto flex items-center gap-2 text-sm text-gray-500 font-bold">
        <NuxtLink to="/" class="hover:text-[#8B1D1D]">الرئيسية</NuxtLink>
        <span class="text-gray-300">/</span>
        <NuxtLink to="/products" class="hover:text-[#8B1D1D]">منتجاتنا</NuxtLink>
        <span class="text-gray-300">/</span>
        <span class="text-gray-900">{{ product.name }}</span>
      </div>
    </nav>

    <section class="py-12 md:py-20">
      <div class="max-w-[1400px] mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <!-- Image Gallery -->
          <div class="space-y-6">
            <div class="relative aspect-square rounded-[3rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-xl group">
              <img :src="product.image" :alt="product.name" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <!-- Badge -->
              <div class="absolute top-8 right-8 bg-[#8B1D1D] text-white text-[10px] font-black px-5 py-2 rounded-xl shadow-2xl z-10">
                PREMIUM CUT
              </div>
            </div>
            
            <!-- Thumbnails -->
            <div class="grid grid-cols-4 gap-4">
              <div v-for="i in 4" :key="i" class="aspect-square rounded-2xl overflow-hidden border-2 cursor-pointer transition-all" :class="i === 1 ? 'border-[#8B1D1D]' : 'border-transparent hover:border-gray-200'">
                <img :src="product.image" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <!-- Product Info -->
          <div class="space-y-8">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <span class="bg-red-50 text-[#8B1D1D] text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-widest">{{ product.category }}</span>
                <div class="flex items-center gap-1 text-yellow-400">
                  <i class="mdi mdi-star"></i>
                  <i class="mdi mdi-star"></i>
                  <i class="mdi mdi-star"></i>
                  <i class="mdi mdi-star"></i>
                  <i class="mdi mdi-star"></i>
                  <span class="text-gray-400 text-xs font-bold mr-2">(120 مراجعة)</span>
                </div>
              </div>
              <h1 class="text-4xl md:text-5xl font-black text-gray-900 leading-tight">{{ product.name }}</h1>
              <p class="text-gray-500 text-lg leading-relaxed">{{ product.description }}</p>
            </div>

            <!-- Price & Quantity -->
            <div class="bg-gray-50 rounded-[2.5rem] p-8 space-y-8 border border-gray-100">
              <div class="flex items-end justify-between">
                <div class="space-y-1">
                  <span class="text-sm font-bold text-gray-400">السعر للكيلو</span>
                  <div class="flex items-center gap-2">
                    <span class="text-4xl font-black text-[#8B1D1D]">{{ product.price }}</span>
                    <span class="text-xl font-bold text-gray-900 uppercase">EGP</span>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-[10px] font-black text-green-600 bg-green-50 px-3 py-1 rounded-full">متوفر في المخزون</span>
                </div>
              </div>

              <!-- Weight Selection -->
              <div class="space-y-4">
                <label class="text-sm font-black text-gray-900">اختر الوزن:</label>
                <div class="flex flex-wrap gap-3">
                  <button v-for="w in weights" :key="w" class="px-6 py-3 rounded-xl font-bold text-sm transition-all border-2" :class="selectedWeight === w ? 'bg-[#8B1D1D] border-[#8B1D1D] text-white' : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'">
                    {{ w }} كجم
                  </button>
                </div>
              </div>

              <!-- Add to Cart Action -->
              <div class="flex flex-col sm:flex-row gap-4 pt-4">
                <div class="flex items-center gap-4 bg-white rounded-2xl p-2 border border-gray-100 shadow-sm">
                  <button @click="qty > 1 && qty--" class="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-gray-50 text-gray-600 transition-colors">-</button>
                  <span class="text-xl font-black w-8 text-center">{{ qty }}</span>
                  <button @click="qty++" class="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-gray-50 text-gray-600 transition-colors">+</button>
                </div>
                <button class="flex-1 bg-[#8B1D1D] hover:bg-[#a52222] text-white font-black py-4 px-8 rounded-2xl transition-all shadow-xl shadow-[#8B1D1D]/20 text-lg flex items-center justify-center gap-3 active:scale-95">
                  إضافة للسلة
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Features -->
            <div class="grid grid-cols-3 gap-4">
              <div v-for="f in features" :key="f.title" class="text-center p-4 rounded-2xl bg-white border border-gray-50 shadow-sm space-y-2">
                <div class="text-2xl text-[#8B1D1D]"><i :class="f.icon"></i></div>
                <div class="text-[10px] font-black text-gray-900 uppercase tracking-tighter">{{ f.title }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Detailed Tabs -->
        <div class="mt-24 space-y-12">
          <div class="border-b border-gray-100 flex gap-12">
            <button class="pb-4 text-xl font-black border-b-4 border-[#8B1D1D] text-gray-900">وصف المنتج</button>
            <button class="pb-4 text-xl font-bold text-gray-400 hover:text-gray-600">المعلومات الغذائية</button>
            <button class="pb-4 text-xl font-bold text-gray-400 hover:text-gray-600">المراجعات</button>
          </div>
          
          <div class="max-w-4xl text-gray-600 text-lg leading-relaxed space-y-6">
            <p>يعد عرق الفلتو (Beef Filet) أطرى قطعة لحم في الذبيحة على الإطلاق، حيث يتميز بنسيج ناعم جداً وقليل الدهون، مما يجعله الخيار الأول لعشاق الستيك الفاخر والمناسبات الخاصة.</p>
            <ul class="list-disc list-inside space-y-3 mr-4">
              <li>مصدره: ماشية بلدية تغذت على أعلاف طبيعية 100%.</li>
              <li>الذبح: ذبح يومي في المجازر المعتمدة تحت إشراف بيطري كامل.</li>
              <li>الاستخدام: مثالي للشيّ السريع، الطهي في الفرن كقطعة كاملة، أو تحضير أطباق البيف ستروجانوف.</li>
              <li>الجودة: يتم تنظيفه يدوياً من الأنسجة الزائدة (Silver Skin) لضمان حصولك على صافي اللحم.</li>
            </ul>
          </div>
        </div>

        <!-- Related Products -->
        <div class="mt-32 space-y-12">
          <h2 class="text-3xl font-black text-gray-900">منتجات قد تعجبك</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Reusing product card style -->
            <div v-for="i in 4" :key="i" class="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
               <div class="relative h-64 overflow-hidden bg-gray-100">
                  <img src="/images/meat-cuts.png" class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
               </div>
               <div class="p-8 text-right">
                  <h3 class="text-xl font-black text-gray-900 group-hover:text-[#8B1D1D] transition-colors">كفتة بقري بلدي</h3>
                  <div class="mt-6 flex items-center justify-between border-t border-gray-50 pt-6">
                    <span class="text-2xl font-black text-[#8B1D1D]">380 EGP</span>
                    <button class="text-[#8B1D1D] font-bold text-sm">التفاصيل</button>
                  </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </main>
</template>

<script setup>
const qty = ref(1)
const selectedWeight = ref(1)
const weights = [0.5, 1, 2, 5]

const product = {
  id: 1,
  name: 'Beef Filet - عرق فلتو بلدي',
  category: 'لحم بقري',
  price: 920,
  description: 'أرقى وأطرى قطعيات اللحم البقري المصري، يتميز بنعومة فائقة وطعم أصيل، مثالي للستيك والمناسبات الفاخرة.',
  image: '/images/meat-cuts.png'
}

const features = [
  { icon: 'mdi mdi-check-decagram', title: 'جودة مضمونة' },
  { icon: 'mdi mdi-truck-fast', title: 'توصيل سريع' },
  { icon: 'mdi mdi-knife-military', title: 'تقطيع احترافي' }
]

useHead({
  title: `${product.name} - جزارة الصديق`,
  meta: [
    { name: 'description', content: product.description }
  ]
})
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css');

.font-cairo {
  font-family: 'Cairo', sans-serif;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
</style>
