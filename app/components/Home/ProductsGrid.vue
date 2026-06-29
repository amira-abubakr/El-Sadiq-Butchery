<template>
  <section class="py-16 bg-[#FDFDFD]" dir="rtl">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Product Card 1 -->
        <div v-for="product in products" :key="product.id" class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
          <!-- Image Container -->
          <div class="relative h-64 overflow-hidden bg-gray-100">
            <img :src="product.image" :alt="product.name" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <!-- Badges -->
            <div v-if="product.badge" class="absolute top-4 right-4 bg-[#8B1D1D] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-widest">
              {{ product.badge }}
            </div>
          </div>
          
          <!-- Content -->
          <div class="p-6 text-right">
            <NuxtLink :to="`/products/${product.id}`" class="block group-hover:text-[#8B1D1D] transition-colors">
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-[#8B1D1D] transition-colors">{{ product.name }}</h3>
            </NuxtLink>
            <p class="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2">
              {{ product.description }}
            </p>
            
            <!-- Price & Action -->
            <div class="mt-6 flex items-center justify-between">
              <div class="flex items-center gap-1">
                <span class="text-lg font-black text-gray-900">EGP / kg</span>
                <span class="text-2xl font-black text-[#8B1D1D]">{{ product.price }}</span>
              </div>
              
              <button class="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#8B1D1D] transition-all transform hover:rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Beef Filet - عرق فلتو',
    description: 'أكثر القطع طراوة ونعومة، مثالية لطهي أطباق شيفات فاخرة.',
    price: 920,
    badge: 'PREMIUM',
    image: '/images/meat-cuts.png' // Reusing for now
  },
  {
    id: 2,
    name: 'Minced Beef - لحم مفروم',
    description: 'تحضير منزلي مفروم يومياً، خالي من أي إضافات لتجربة طعم أصلية.',
    price: 450,
    badge: '',
    image: '/images/meat-cuts.png'
  },
  {
    id: 3,
    name: 'Lamb Chops - ريش ضاني',
    description: 'ريش ضاني طازجة، مختارة من أفضل السلالات البلدية.',
    price: 720,
    badge: 'LOCAL',
    image: '/images/meat-cuts.png'
  },
  {
    id: 4,
    name: 'Ribeye Steak - ريب آي',
    description: 'أفضل قطعة من الضلوع مشبعة بالدهون الطبيعية لمذاق لا يقاوم.',
    price: 850,
    badge: 'SALE',
    image: '/images/meat-cuts.png'
  }
]
</script>
