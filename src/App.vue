<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterComp from './components/FooterComp.vue';
</script>

<template>
  <header>
 <div class="wrapper">
  <h1 class="text">NarrateX<span>.</span></h1>
  
        <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/stories">Stories</RouterLink>
        <RouterLink to="/Write">Write</RouterLink>
      </nav>
      
    </div>
  </header>

  <RouterView />

  <footer>
  <footer-comp/>
  </footer>
</template>

<style scoped>
.wrapper{
display: flex;
height: 10vh;
color:rgb(61, 1, 61) ;
background: rgb(230, 182, 230);
}

.text{
font-style: oblique;
margin-top: 0.4em;
margin-left: 1em;
}

.text span{
  color:rgb(61, 1, 61);
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav{
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  text-decoration: underline;
}

nav a.router-link-exact-active:hover {
text-decoration: underline;
}

nav a {
  color:rgb(61, 1, 61) ;
  display: inline-block;
  padding: 0 1rem;
  font-weight: bold;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

 @media (max-width: 910px) {
 
} 
</style>
