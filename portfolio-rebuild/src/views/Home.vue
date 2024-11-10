<script setup>
// You can import any data, props, or composables here (if needed)
</script>

<template>
  <section class="home">

    <div class="hero-container">
      <video src="../assets/videos/spiral-galaxy.mp4" autoplay loop muted width="60%">Your browser does not support the video tag.</video>
    </div>
    
    <!-- <figure class="hero-image">
      <img src="../assets/images/shooting-star.jpg" alt="">
    </figure> -->
      <!-- <img src="../assets/images/oak-tree-city-coding.png" alt="AI Image of someone using a laptop leaning up against an oak tree, overlooking a city with a bright sun in the background, digital art"> -->

      <!-- <img src="../assets/images/space-burst.jpg" alt=""> -->

    <div class="developer-introduction">
      <h1>Driven to Build, Learn, and Grow</h1>
      <p>Hello world! My name is Nathan Ryan and I am passionate about crafting efficient and creative web solutions. Skilled in front-end technologies with a focus on responsive design, accessibility, and user experience.</p>
      <p>Constantly learning and expanding my skills, I'm working hard towards becoming a versatile full-stack developer ready to tackle complex challenges and make positive imapact through code!</p>
    </div>

    <div class="avatar-section-break">
      <figure class="ai-avatar">
        <img src="../assets/images/oak-tree-city-coding.png" alt="AI Generated illustration of someone coding against an oak tree while overlooking a city with a unique sun blazing down upon it all.">
      </figure>
    </div>

    <section class="projects-section">
      <h2>Portfolio Highlights</h2>
      <p>Here are a few projects that showcase my journey as a developer so far. Each project reflects my passion for clean design, responsive development, and a dedication to learning new technologies.</p>
    </section>
    <!-- Terminal -->
              <!-- Terminal Header -->
               <!-- Close, Minimize, Maximize Buttons -->
                <!-- Terminal Body -->
                 <!-- Code Lines -->
                  <!-- Blinking Cursor -->

    <!-- <div class="terminal-wrapper">
      <svg width="100%" height="300" xmlns="http://www.w3.org/2000/svg">

        <rect x="0" y="0" width="100%" height="30" fill="#333" />
        
        <circle cx="20" cy="15" r="6" fill="red" />
        <circle cx="40" cy="15" r="6" fill="yellow" />
        <circle cx="60" cy="15" r="6" fill="green" />
      
        
        <rect x="0" y="30" width="100%" height="270" fill="#1e1e1e" />

        
        <text x="10" y="60" font-family="Courier New, Courier, monospace" font-size="14" fill="#00ff00">
        $ npm run portfolio-build
        </text>
        <text x="10" y="90" font-family="Courier New, Courier, monospace" font-size="14" fill="#00ff00">
        > Building portfolio...
        </text>
        <text x="10" y="120" font-family="Courier New, Courier, monospace" font-size="14" fill="#00ff00">
        > Success! Portfolio built.
        </text>
        
        <text id="cursor" x="240" y="120" font-family="Courier New, Courier, monospace" font-size="14" fill="#00ff00">|</text>
      </svg>
    </div> -->

    <!-- End of Terminal  -->

  </section>
</template>

<style scoped>

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  text-align: center;
  /* padding: 1rem; */
  /* height: 100vh; */
}

.home h1 {
  font-size: 2.5rem;
  color: #333;
}

.home p {
  font-size: 1.2rem;
  color: black;
}

.hero-container {
  width: 100%;
  background-color: black;
  /* padding: 0 2rem; */
  /* overflow: hidden; */
  /* background-color: #101010; */
}

.developer-introduction {
  padding: 2rem;
  background-color: #101010;
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 1rem;
}

.developer-introduction h1 {
  color: whitesmoke;
}

.developer-introduction p {
  color: whitesmoke;
  max-width: 60ch;
}

.avatar-section-break {
  width: 100%;
  background-color: #101010;
  display: grid;
  justify-items: center;
  padding: 2rem 0;
}

.ai-avatar {
  width: 20%;
}

.ai-avatar img {
  border-radius: 1rem;
}

.projects-section {
  padding: 2rem;
  background-color: #101010;
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 1rem;
}

.projects-section h2 {
  color: whitesmoke;
}

.projects-section p {
  color: whitesmoke;
  max-width: 60ch;
}

.hero-image {
  width: 100%;
}

.hero-image img{
  display: block;
  width: 100%;
}

/* #cursor {
  animation: blink 1s infinite;
} */

/* @keyframes blink {
  50% {
    opacity: 0;
  }
} */

/* @media (min-width: 768px) {
  .hero-image img {
    max-height: 40vw;
  }
} */

</style>
