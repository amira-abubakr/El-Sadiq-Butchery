<template>
  <main>
    <!-- Hero Section -->
    <HomeHeroSection />

    <!-- Categories masonry Section -->
    <HomeCategoriesSection />

    <!-- Special Offers Banner -->
    <HomeSpecialOffers />

    <!-- Products Highlights Grid -->
    <HomeProductsGrid />

    <!-- Customer Testimonials -->
    <HomeTestimonials />

    <!-- Why Us Section -->
    <HomeWhyUsSection />
  </main>
</template>

<script setup>
</script>

<style>
/* Smooth global transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
