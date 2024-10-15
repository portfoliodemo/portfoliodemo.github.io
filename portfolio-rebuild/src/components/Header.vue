<script setup>
import { ref } from 'vue';

// State to track whether mobile nav is open
const isNavOpen = ref(false);

// Function to toggle the mobile menu
const toggleMenu = () => {
  isNavOpen.value = !isNavOpen.value;
};

// Function to close the mobile menu when clicking a link
const closeMenu = () => {
  isNavOpen.value = false;
};
</script>


<template>
  <header>
    <div class="header-content">
      <div class="logo">
        <!-- <img src="../assets/images/mountain-city-solid.svg" alt="Mountain and City Icon"> -->
        <router-link to="/">Nathan Ryan</router-link>
      </div>
      
      <!-- Regular Navigation -->
      <nav class="desktop-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/skills">Skills</router-link>
        <router-link to="/resources">Resources</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>

      <!-- Hamburger Menu Icon for Mobile -->
      <div class="mobile-menu-icon" @click="toggleMenu">
        &#9776; <!-- Unicode for Hamburger Icon -->
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <nav v-if="isNavOpen" class="mobile-nav">
      <router-link @click="closeMenu" to="/">Home</router-link>
      <router-link @click="closeMenu" to="/projects">Projects</router-link>
      <router-link @click="closeMenu" to="/about">About</router-link>
      <router-link @click="closeMenu" to="/skills">Skills</router-link>
      <router-link @click="closeMenu" to="/resources">Resources</router-link>
      <router-link @click="closeMenu" to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #333;
  padding: 1rem;
  color: white;
}

.header-content {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.logo {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-evenly;
}

.logo img {
  width: 20%;
}

.logo a {
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
}

.desktop-nav {
  display: flex;
  gap: 1rem;
}

.desktop-nav a {
  color: white;
  text-decoration: none;
}

.desktop-nav a:hover {
  color: #ccc;
}

.mobile-menu-icon {
  display: none;
  cursor: pointer;
  font-size: 2rem;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #333;
  padding: 1rem;
}

.mobile-nav a {
  color: white;
  text-decoration: none;
}

.mobile-nav a:hover {
  color: #ccc;
}

/* Mobile-First CSS: Default is for mobile */
@media (min-width: 768px) {
  /* Hide the mobile nav by default on larger screens */
  .mobile-nav {
    display: none;
  }

  /* Show the desktop nav on larger screens */
  .desktop-nav {
    display: flex;
  }

  /* Hide the hamburger icon on larger screens */
  .mobile-menu-icon {
    display: none;
  }
}

/* On smaller screens */
@media (max-width: 768px) {
  /* Hide the desktop navigation */
  .desktop-nav {
    display: none;
  }

  /* Show the hamburger menu icon */
  .mobile-menu-icon {
    display: block;
  }

  .header-content {
    justify-content: space-evenly;
  }
}
</style>

