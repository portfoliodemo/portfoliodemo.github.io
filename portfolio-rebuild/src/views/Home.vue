<script setup>
// You can import any data, props, or composables here (if needed)
</script>

<template>
  <section class="home">
    
    <!-- <figure class="hero-image">
      <img src="../assets/images/shooting-star.jpg" alt="">
    </figure> -->
      <!-- <img src="../assets/images/space-burst.jpg" alt=""> -->
      <!-- <img src="../assets/images/oak-tree-city-coding.png" alt="AI Image of someone using a laptop leaning up against an oak tree, overlooking a city with a bright sun in the background, digital art"> -->


    <!-- Terminal -->
    <svg width="100%" height="300" xmlns="http://www.w3.org/2000/svg">
    <!-- Terminal Header -->
    <rect x="0" y="0" width="100%" height="30" fill="#333" />
    <!-- Close, Minimize, Maximize Buttons -->
    <circle cx="20" cy="15" r="6" fill="red" />
    <circle cx="40" cy="15" r="6" fill="yellow" />
    <circle cx="60" cy="15" r="6" fill="green" />
  
    <!-- Terminal Body -->
    <rect x="0" y="30" width="100%" height="270" fill="#1e1e1e" />

    <!-- Code Lines -->
    <text x="10" y="60" font-family="Courier New, Courier, monospace" font-size="14" fill="#00ff00">
    $ npm run portfolio-build
    </text>
    <text x="10" y="90" font-family="Courier New, Courier, monospace" font-size="14" fill="#00ff00">
    > Building portfolio...
    </text>
    <text x="10" y="120" font-family="Courier New, Courier, monospace" font-size="14" fill="#00ff00">
    > Success! Portfolio built.
    </text>
    <!-- Blinking Cursor -->
    <text id="cursor" x="240" y="120" font-family="Courier New, Courier, monospace" font-size="14" fill="#00ff00">|</text>
  </svg>

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

#cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

</style>
