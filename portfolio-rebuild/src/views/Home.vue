<script setup>
// You can import any data, props, or composables here (if needed)
</script>

<template>
  <section class="home">

    <div class="hero-container">
      <video src="../assets/videos/spiral-galaxy.mp4" autoplay loop muted>Your browser does not support the video tag.</video>
    </div>
    
    <!-- <figure class="hero-image">
      <img src="../assets/images/shooting-star.jpg" alt="">
    </figure> -->
      <!-- <img src="../assets/images/oak-tree-city-coding.png" alt="AI Image of someone using a laptop leaning up against an oak tree, overlooking a city with a bright sun in the background, digital art"> -->

      <!-- <img src="../assets/images/space-burst.jpg" alt=""> -->

    <div class="developer-introduction">
      <h1>Driven to Build, Learn, and Grow</h1>
      <p>Hello world! My name is Nathan Ryan and I am passionate about crafting efficient and creative web solutions. Skilled in front-end technologies with a focus on responsive design and user experience.</p>
      <p>Constantly learning and expanding my skills, I'm working hard towards becoming a versatile full-stack developer ready to tackle complex challenges and make positive impacts through code!</p>
    </div>

    <!-- Terminal -->
      <!-- Terminal Header -->
        <!-- Close, Minimize, Maximize Buttons -->
        <!-- Terminal Body -->
          <!-- Code Lines -->
          <!-- Blinking Cursor -->

    <!-- <div class="terminal-wrapper">
      <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg">

        <rect x="0" y="0" width="100%" height="30" fill="#333" />
        
        <circle cx="20" cy="15" r="6" fill="red" />
        <circle cx="40" cy="15" r="6" fill="yellow" />
        <circle cx="60" cy="15" r="6" fill="green" />
      
        
        <rect x="0" y="30" width="100%" height="150" fill="#1e1e1e" />

        
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

    <!-- <div class="avatar-section-break">
      <figure class="ai-avatar">
        <img src="../assets/images/oak-tree-city-coding.png" alt="AI Generated illustration of someone coding against an oak tree while overlooking a city with a unique sun blazing down upon it all.">
      </figure>
    </div> -->

    <section class="projects-section">
      <h2>Portfolio Highlights</h2>
      <p>Here are a few projects that showcase my journey as a developer so far. Each project reflects my passion for clean design, responsive development, and a dedication to learning new technologies.</p>

      <div class="project-cards">

        <div class="project-card">
          <figure class="project-card-figure">
            <a href="https://www.littlehandsmontessoriacademy.com" target="_blank" title="Little Hands Montessori Academy">
            <img src="../assets/images/lhma-revise-thumbnail.png" alt="Thumbnail screenshot of the homepage of the Little Hands Montessori Academy Ltd Daycare website.">
            </a>
          </figure>
          <h3>Little Hands Montessori Academy</h3>          
          <p>Custom built website for multiple LHMA daycare locations in Calgary and Okotoks. Online tour bookings available 24/7.</p>
          <p><span class="italics">Technologies: HTML, CSS, JavaScript, Bootstrap, Git, GitHub, Linux</span></p>
          <div class="project-links">
            <a href="https://www.littlehandsmontessoriacademy.com" target="_blank" title="Little Hands Montessori Academy">Little Hands Montessori Academy</a>
            <p>|</p>
            <a href="https://github.com/portfoliodemo/lhma" target="_blank" title="GitHub Repository - Little Hands Montessori Academy">GitHub Repository - LHMA</a>
          </div>
        </div>

        <div class="project-card">
          <figure class="project-card-figure">
            <a href="https://www.macleodtrailbarbers.ca" target="_blank" title="Macleod Trail Barbers">
            <img src="../assets/images/mtb-thumbnail.png" alt="Thumbnail screenshot of the homepage of the Macleod Trail Barbers website.">
            </a>
          </figure>
          <h3>Macleod Trail Barbers</h3>          
          <p>Custom built website for Macleod Trail Barbers enabling seamless booking appointments.</p>
          <p><span class="italics">Technologies: HTML, CSS, JavaScript, Git, GitHub, Linux</span></p>
          <div class="project-links">
            <a href="https://www.macleodtrailbarbers.ca" target="_blank" title="Macleod Trail Barbers">Macleod Trail Barbers</a>
            <p>|</p>
            <a href="https://github.com/portfoliodemo/macleod-trail-barbers" target="_blank" title="GitHub Repository - Little Hands Montessori Academy">GitHub Repository - MTB</a>
          </div>
        </div>

        <div class="project-card">
          <figure class="project-card-figure">
            <a href="https://portfoliodemo.github.io/gotham-wealth" target="_blank" title="Guardian Wealth">
            <img src="../assets/images/gw-thumbnail.png" alt="Thumbnail screenshot of the homepage of the Guardian Wealth website.">
            </a>
          </figure>
          <h3>Guardian Wealth</h3>          
          <p>Custom built website for Guardian Wealth, a financial investment and retirement planning firm.</p>
          <p><span class="italics">Technologies: HTML, CSS, JavaScript, Bootstrap, Git, GitHub, Linux</span></p>
          <div class="project-links">
            <a href="https://portfoliodemo.github.io/gotham-wealth" target="_blank" title="Guardian Wealth">Guardian Wealth</a>
            <p>|</p>
            <a href="https://github.com/portfoliodemo/gotham-wealth" target="_blank" title="GitHub Repository - Guardian Wealth">GitHub Repository - GW</a>
          </div>
        </div>

      </div>
    </section>


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

/* .home h1 {
  font-size: 3rem;
  color: #333;
  padding: 2rem 0;
} */

/* .home p {
  font-size: 1.2rem;
  color: black;
  padding: 1rem 0;
} */

.hero-container {
  width: 100%;
  background-color: black;
  /* padding: 0 2rem; */
  /* overflow: hidden; */
  /* background-color: #101010; */
}

.hero-container video {
  width: 60%;
}

.developer-introduction {
  padding: 3rem 2rem;
  background-color: black;
  /* background-color: #101010; */
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 2rem;
}

.developer-introduction h1 {
  color: whitesmoke;
  font-size: 2rem;
}

.developer-introduction p {
  color: whitesmoke;
  max-width: 60ch;
  font-size: 1.25rem;
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
  padding: 3rem 2rem;
  background-color: whitesmoke;
  /* background-color: #101010; */
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 2rem;
}

.projects-section h2 {
  color: black;
  font-size: 2rem;
}

.projects-section p {
  color: black;
  max-width: 60ch;
  font-size: 1.25rem;
}

.project-cards {
  display: grid;
  justify-items: center;
  gap: 2rem;
}

.project-card {
  display: grid;
  gap: 1rem;
  justify-items: center;
  padding: 2rem;
  background-color: azure;
  border-radius: 3rem;
  border-color: gainsboro;
  border-width: 0.5rem;
  border-style: solid;
  width: 50%;
}

.project-card-figure {
  width: 100%;
}

.project-card-figure img {
  border-radius: 3rem;
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.project-card h3 {
  color: black;
  font-size: 1.75rem;
}

.project-card p {
  color: black;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-links a {
  text-decoration: none;
  font-size: 1rem;
}

.italics {
  font-style: italic;
}

/* .hero-image {
  width: 100%;
} */

/* .hero-image img{
  display: block;
  width: 100%;
} */

/* .terminal-wrapper {
  width: 100%;
} */

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
