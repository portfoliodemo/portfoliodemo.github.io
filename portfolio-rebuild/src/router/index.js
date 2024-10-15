import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
// import Projects from '@/components/Projects.vue';
// import About from '@/components/About.vue';
// import Skills from '@/components/Skills.vue';
// import Resources from '@/components/Resources.vue';
// import Contact from '@/components/Contact.vue';

const routes = [
  { 
    path: '/',
    name: 'Home', 
    component: Home },
//   { path: '/projects', component: Projects },
//   { path: '/about', component: About },
//   { path: '/skills', component: Skills },
//   { path: '/resources', component: Resources },
//   { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
