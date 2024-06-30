<template>
  <footer>
    <section>
        <div class="about">
        <h2>About</h2>
        <p>olagunjuoluwabukola2018@gmail.com</p>
        <p>+234 80 3858 1725</p>
    </div>
    <div links>
        <h2>Quick Links</h2>
        <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/stories">Stories</RouterLink>
        <RouterLink to="/Write">Write</RouterLink>
      </nav>
    </div>

    <div class="socials">
        <h2>socials</h2>
        <a href=""><img src="../assets/Images/formkit_twitter.png" alt="" width="25px"></a>
        <a href=""><img src="../assets/Images/mdi_instagram.png" alt="" width="25px"></a>
    </div>

    </section>
    <div class="copy">
       &copy;Oluwabukola2024
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer{
    background: rgb(230, 182, 230);
}
section{
    display: flex;
    justify-content: space-between;
    margin-left: 2em;
    padding-top: 1.5em;
    margin-right: 2em;
    margin-top: 1em;
    color: rgb(61, 1, 61);
    font-size: 15px;


}

nav{
    display: grid;
    padding-left: 2em;

}

nav a {
    text-decoration: none;
    color: rgb(61, 1, 61);
   
}
.copy{
    font-size: 15px;
    margin-left: 2em;
    font-style: italic;
}

img{
    margin: 5px;
    filter: brightness(0%);
}

.socials{
    margin-right: 2em;
}
@media (max-width: 910px) {
    section{
    display: block;
    justify-content: space-between;
    padding-top: 1.5em;
    margin-top: 1em;
    color: rgb(61, 1, 61);
    font-size: 15px;

}

nav{
    display: grid;
    padding-left: 0;

}
} 
</style>