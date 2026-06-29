<template>
  <main class="min-h-screen bg-white font-cairo" dir="rtl">
    
    <!-- Hero Header -->
    <section class="bg-gray-50 py-24">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-black text-gray-900 relative inline-block pb-4">
          من نحن
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#8B1D1D] rounded-full"></span>
        </h1>
        <p class="text-gray-500 mt-8 text-xl max-w-3xl mx-auto leading-relaxed">
          حكاية جزارة الصديق بدأت من شغفنا بالجودة وخدمة المجتمع، لنصبح اليوم الوجهة الأولى للحوم البلدية الطازجة.
        </p>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div class="relative">
            <div class="absolute -inset-4 bg-[#8B1D1D]/10 rounded-[3rem] -rotate-3"></div>
            <img src="/images/meat-cuts.png" alt="Our Story" class="relative z-10 rounded-[2.5rem] shadow-2xl object-cover h-[500px] w-full" />
            <!-- Experience Badge -->
            <div class="absolute -bottom-10 -right-10 bg-[#8B1D1D] text-white p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block">
              <span class="block text-4xl font-black">30+</span>
              <span class="text-sm font-bold opacity-80 uppercase tracking-widest">عاماً من الخبرة</span>
            </div>
          </div>
          <div class="space-y-8">
            <h2 class="text-3xl md:text-4xl font-black text-gray-900 leading-tight">جزارة الصديق.. <br/> أصالة الماضي وجودة الحاضر</h2>
            <div class="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>تأسست جزارة الصديق في عام 1990، ومنذ ذلك الحين وضعنا نصب أعيننا هدفاً واحداً وهو تقديم أفضل قطعة لحم يمكن أن توضع على مائدة مصرية. نحن لسنا مجرد متجر للحوم، بل نحن شركاؤكم في كل وجبة عائلية.</p>
              <p>نحن نشرف على كل تفصيلة، بدءاً من اختيار الماشية من أفضل المزارع المصرية، مروراً بالذبح اليومي في المجازر الحكومية المعتمدة، وحتى التقطيع اليدوي الاحترافي الذي يحافظ على جودة وطعم اللحم.</p>
            </div>
            <div class="grid grid-cols-2 gap-6 pt-4">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="font-bold text-gray-800">ذبح إسلامي 100%</span>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="font-bold text-gray-800">رقابة بيطرية كاملة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-24 bg-zinc-900 text-white overflow-hidden relative">
      <!-- Decorative circle -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
      
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Mission -->
          <div class="bg-white/5 backdrop-blur-md p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group">
            <div class="w-16 h-16 bg-[#8B1D1D] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-xl shadow-[#8B1D1D]/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-3xl font-black mb-6">رسالتنا</h3>
            <p class="text-gray-400 text-lg leading-relaxed">توفير أجود أنواع اللحوم الطازجة لكل منزل مصري بأعلى معايير السلامة الغذائية، مع الالتزام بالشفافية الكاملة في مصدر وجودة منتجاتنا.</p>
          </div>

          <!-- Vision -->
          <div class="bg-white/5 backdrop-blur-md p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group">
            <div class="w-16 h-16 bg-[#8B1D1D] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-xl shadow-[#8B1D1D]/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-3xl font-black mb-6">رؤيتنا</h3>
            <p class="text-gray-400 text-lg leading-relaxed">أن نصبح الرمز الأول للجودة والمصداقية في عالم الجزارة في مصر، من خلال الابتكار المستمر في طرق التقديم والتوصيل مع الحفاظ على قيمنا الأصيلة.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-black mb-16">قيمنا الجوهرية</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(value, index) in values" :key="index" class="space-y-4 group">
            <div class="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto text-3xl text-[#8B1D1D] group-hover:bg-[#8B1D1D] group-hover:text-white transition-all transform group-hover:rotate-6">
              <i :class="value.icon"></i>
            </div>
            <h4 class="font-bold text-xl text-gray-900">{{ value.title }}</h4>
            <p class="text-sm text-gray-500 leading-relaxed">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
const values = [
  { icon: 'mdi mdi-shield-check', title: 'الأمانة', desc: 'نلتزم بالصدق في الميزان والمصدر والجودة.' },
  { icon: 'mdi mdi-sparkles', title: 'النظافة', desc: 'أعلى معايير التعقيم في التجهيز والتغليف.' },
  { icon: 'mdi mdi-heart', title: 'الشغف', desc: 'نعمل بكل حب لنقدم لك الأفضل دائماً.' },
  { icon: 'mdi mdi-truck-delivery', title: 'الالتزام', desc: 'نصلك في موعدك وبأفضل حالة للمنتج.' }
]

useHead({
  title: 'من نحن - جزارة الصديق',
  meta: [
    { name: 'description', content: 'تعرف على قصة جزارة الصديق، عراقة الجزارة المصرية منذ 1990 وأهدافنا في تقديم أفضل جودة لحوم بلدي.' }
  ]
})
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css');

.font-cairo {
  font-family: 'Cairo', sans-serif;
}
</style>
