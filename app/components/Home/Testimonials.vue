<template>
  <section class="py-20 bg-[#FAFAFA]" dir="rtl">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-black text-gray-900 inline-block relative pb-4">
          ماذا يقول عملاؤنا
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#8B1D1D] rounded-full"></span>
        </h2>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-white p-8 rounded-2xl shadow-sm border-r-4 border-[#8B1D1D] relative group hover:shadow-xl transition-all duration-500"
        >
          <!-- Quote Icon -->
          <div class="absolute top-6 left-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" class="text-[#8B1D1D]">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 6.79086 11.8079 5 14.017 5V2C10.151 2 7.017 5.13401 7.017 9V15C7.017 18.3137 9.70329 21 13.017 21H14.017ZM21.017 21L21.017 18C21.017 16.8954 21.9124 16 23.017 16H26.017C26.5693 16 27.017 15.5523 27.017 15V9C27.017 8.44772 26.5693 8 26.017 8H23.017C22.4647 8 22.017 8.44772 22.017 9V12C22.017 12.5523 21.5693 13 21.017 13H18.017C17.4647 13 17.017 12.5523 17.017 12V9C17.017 6.79086 18.8079 5 21.017 5V2C17.151 2 14.017 5.13401 14.017 9V15C14.017 18.3137 16.7033 21 20.017 21H21.017Z" />
            </svg>
          </div>

          <!-- Text -->
          <p class="text-gray-600 italic leading-relaxed mb-8 relative z-10">
            "{{ testimonial.text }}"
          </p>

          <!-- User Info -->
          <div class="flex items-center justify-between mt-auto">
            <div class="flex items-center gap-4">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full border-2 border-gray-100 object-cover" />
              <div>
                <h4 class="font-bold text-gray-900">{{ testimonial.name }}</h4>
                <!-- Stars -->
                <div class="flex items-center gap-0.5 mt-1">
                  <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'أحمد حسن',
    text: 'أفضل جزارة في المدينة! قطعيات الستيك دائماً مثالية وخدمة التوصيل سريعة جداً. أنصح بها بشدة لمحبي الشواء.',
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  {
    name: 'سارة محمود',
    text: 'النظافة هي أولويتي القصوى، وجزارة الصديق لا تخيب أملي أبداً. اللحم المفروم لديهم قليل الدسم وطازج في كل مرة.',
    avatar: 'https://i.pravatar.cc/150?u=2'
  },
  {
    name: 'محمد علي',
    text: 'طلبت كفتة ومكعبات لحم لعشاء عائلي، الجميع انبهر بالجودة. التغليف كان مرتباً وبارداً عند الاستلام.',
    avatar: 'https://i.pravatar.cc/150?u=3'
  }
]
</script>
