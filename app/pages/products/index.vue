<template>
  <main class="min-h-screen bg-gray-50 font-cairo" dir="rtl">
    
    <!-- Hero Header -->
    <section class="bg-white py-16 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="text-right">
            <h1 class="text-4xl md:text-5xl font-black text-gray-900 relative inline-block pb-4">
              منتجاتنا
              <span class="absolute bottom-0 right-0 w-16 h-1.5 bg-[#8B1D1D] rounded-full"></span>
            </h1>
            <p class="text-gray-500 mt-4 text-lg">استعرض تشكيلتنا المختارة من أفضل أنواع اللحوم البلدية الطازجة.</p>
          </div>
          
          <!-- Search Bar in Header -->
          <div class="w-full md:w-96 relative group">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="ابحث عن منتج معين..." 
              class="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pr-12 pl-4 text-sm focus:outline-none focus:border-[#8B1D1D] focus:bg-white transition-all shadow-sm"
            />
            <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-focus-within:text-[#8B1D1D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter & Products Content -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-6">
        
        <!-- Category Filter -->
        <div class="flex flex-wrap items-center gap-3 mb-12">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-8 py-3 rounded-xl font-bold text-sm transition-all border-2',
              activeCategory === cat.id 
                ? 'bg-[#8B1D1D] border-[#8B1D1D] text-white shadow-lg shadow-[#8B1D1D]/20' 
                : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'
            ]"
          >
            {{ cat.name }}
          </button>
        </div>

        <!-- Products Grid -->
        <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="product in filteredProducts" 
            :key="product.id" 
            class="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
          >
            <!-- Image Container -->
            <div class="relative h-64 overflow-hidden bg-gray-100">
              <img :src="product.image" :alt="product.name" class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <!-- Badges -->
              <div v-if="product.badge" class="absolute top-5 right-5 bg-[#8B1D1D] text-white text-[10px] font-black px-4 py-1.5 rounded-lg uppercase tracking-widest z-10 shadow-lg">
                {{ product.badge }}
              </div>
              <!-- Quick Add Overlay -->
              <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <button class="bg-white text-[#8B1D1D] p-4 rounded-2xl shadow-xl transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-8 text-right flex-1 flex flex-col">
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-black text-[#8B1D1D] uppercase tracking-widest bg-[#8B1D1D]/5 px-2 py-0.5 rounded-md">{{ product.categoryName }}</span>
                <div class="flex items-center gap-0.5 text-yellow-400">
                  <i class="mdi mdi-star text-xs"></i>
                  <span class="text-[10px] font-bold text-gray-400">4.8</span>
                </div>
              </div>
              <h3 class="text-xl font-black text-gray-900 group-hover:text-[#8B1D1D] transition-colors line-clamp-1">{{ product.name }}</h3>
              <p class="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-2 flex-1">
                {{ product.description }}
              </p>
              
              <!-- Price & Action -->
              <div class="mt-8 flex items-center justify-between border-t border-gray-50 pt-6">
                <div class="flex items-center gap-1">
                  <span class="text-xs font-bold text-gray-400">EGP / kg</span>
                  <span class="text-2xl font-black text-[#8B1D1D]">{{ product.price }}</span>
                </div>
                
                <NuxtLink :to="`/products/${product.id}`" class="flex items-center gap-2 text-[#8B1D1D] font-bold text-sm hover:translate-x-[-4px] transition-transform">
                  تفاصيل المنتج
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="py-32 text-center">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900">عذراً، لم نجد نتائج لبحثك</h3>
          <p class="text-gray-500 mt-2">جرب البحث بكلمات أخرى أو اختر قسماً مختلفاً.</p>
          <button @click="resetFilters" class="mt-8 text-[#8B1D1D] font-bold underline">إعادة تعيين الفلاتر</button>
        </div>

      </div>
    </section>

  </main>
</template>

<script setup>
const searchQuery = ref('')
const activeCategory = ref('all')

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'beef', name: 'لحم بقري' },
  { id: 'lamb', name: 'لحم ضاني' },
  { id: 'poultry', name: 'دواجن' },
  { id: 'traditional', name: 'مصنعات' }
]

const products = [
  { id: 1, category: 'beef', categoryName: 'لحم بقري', name: 'Beef Filet - عرق فلتو', description: 'أكثر القطع طراوة ونعومة، مثالية لطهي أطباق شيفات فاخرة.', price: 920, badge: 'PREMIUM', image: '/images/meat-cuts.png' },
  { id: 2, category: 'beef', categoryName: 'لحم بقري', name: 'Minced Beef - لحم مفروم', description: 'تحضير منزلي مفروم يومياً، خالي من أي إضافات لتجربة طعم أصلية.', price: 450, badge: '', image: '/images/meat-cuts.png' },
  { id: 3, category: 'lamb', categoryName: 'لحم ضاني', name: 'Lamb Chops - ريش ضاني', description: 'ريش ضاني طازجة، مختارة من أفضل السلالات البلدية.', price: 720, badge: 'LOCAL', image: '/images/meat-cuts.png' },
  { id: 4, category: 'beef', categoryName: 'لحم بقري', name: 'Ribeye Steak - ريب آي', description: 'أفضل قطعة من الضلوع مشبعة بالدهون الطبيعية لمذاق لا يقاوم.', price: 850, badge: 'SALE', image: '/images/meat-cuts.png' },
  { id: 5, category: 'poultry', categoryName: 'دواجن', name: 'Whole Chicken - دجاجة كاملة', description: 'دواجن طازجة مرباة على الغذاء الطبيعي لضمان أفضل مذاق.', price: 120, badge: 'FRESH', image: '/images/poultry.png' },
  { id: 6, category: 'traditional', categoryName: 'مصنعات', name: 'Beef Kofta - كفتة بقري', description: 'تتبيلة سرية وأصلية جاهزة للشواء مباشرة.', price: 380, badge: 'BESTSELLER', image: '/images/traditional.png' },
  { id: 7, category: 'beef', categoryName: 'لحم بقري', name: 'Beef Cube - مكعبات لحم', description: 'قطع لحم بقري منظفة بعناية ومقطعة مكعبات مثالية للطواجن.', price: 420, badge: '', image: '/images/meat-cuts.png' },
  { id: 8, category: 'lamb', categoryName: 'لحم ضاني', name: 'Lamb Leg - فخذ ضاني', description: 'فخذ ضاني كامل مثالي للعزائم والولائم الكبيرة.', price: 1100, badge: 'LUXURY', image: '/images/meat-cuts.png' }
]

const filteredProducts = computed(() => {
  return products.filter(p => {
    const matchesSearch = p.name.includes(searchQuery.value) || p.description.includes(searchQuery.value)
    const matchesCategory = activeCategory.value === 'all' || p.category === activeCategory.value
    return matchesSearch && matchesCategory
  })
})

const resetFilters = () => {
  searchQuery.value = ''
  activeCategory.value = 'all'
}

useHead({
  title: 'منتجاتنا - جزارة الصديق',
  meta: [
    { name: 'description', content: 'اكتشف تشكيلتنا من اللحوم البلدية، الدواجن، والمصنعات الطازجة بأفضل الأسعار وأعلى جودة.' }
  ]
})
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css');

.font-cairo {
  font-family: 'Cairo', sans-serif;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
