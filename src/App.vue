<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
margin-top: 0.7em;
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

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
  
}

nav a.router-link-exact-active {
  color: rgb(71, 219, 12);
  text-decoration: underline;
}

nav a.router-link-exact-active:hover {
  color: rgb(71, 219, 12);
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

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
