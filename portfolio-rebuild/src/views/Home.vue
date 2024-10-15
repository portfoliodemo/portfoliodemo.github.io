<script setup>
// You can import any data, props, or composables here (if needed)
</script>

<template>
  <section class="home">
    <figure class="hero-image">
      <img src="../assets/images/shooting-star.jpg" alt="">
      <!-- <img src="../assets/images/space-burst.jpg" alt=""> -->
      <!-- <img src="../assets/images/oak-tree-city-coding.png" alt="AI Image of someone using a laptop leaning up against an oak tree, overlooking a city with a bright sun in the background, digital art"> -->
    </figure>
  </section>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  background-color: #f5f5f5;
  text-align: center;
  /* padding: 1rem; */
}

.home h1 {
  font-size: 2.5rem;
  color: #333;
}

.home p {
  font-size: 1.2rem;
  color: black;
}

.hero-image {
  width: 100%;
}

.hero-image img{
  max-width: 100%;
}
</style>
