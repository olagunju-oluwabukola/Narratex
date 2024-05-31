<template>
   <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/Images/course11.jpg" alt="">
      <img src="https://th.bing.com/th/id/OIP.37MJ2IzGomDodOlS704a8wHaEK?w=269&h=180&c=7&r=0&o=5&pid=1.7" class="d-block w-100" alt="...">
      <div class="text-img">
        <button>Technology</button>
      <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, eius!</h2>
      <p>05.24.2024</p>
      <hr class="hr">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta tempore a aut distinctio amet, cum esse minima magnam corrupti.</p>

      </div>
      
    </div>
   <div class="carousel-item">
      <img src="https://th.bing.com/th?q=Nature+for+Kids&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247" class="d-block w-100" alt="...">
    </div> 
     <div class="carousel-item">
      <img src="https://th.bing.com/th?q=Beauty+in+Nature&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.GzsV89J1xozsHgEFm1eUmgHaE8?w=282&h=188&c=7&r=0&o=5&pid=1.7" class="d-block w-100" alt="...">
    </div> 
   
   
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.carousel-item img{
height: 70vh;
}

.text-img{
 width: 100%;
 margin-top: -450px;
 color: white;
 font-family: monospace;
 font-weight: bolder;
 overflow: hidden;
 background-size: cover;
 background-repeat: no-repeat;
 margin-left: 20px;
 margin-bottom: 100px;
 
}

.text-img button{
background-color: rgb(190, 188, 188);
border: none;
border-radius: 10px;
width: 160px;
height: 50px;
color: #fff;
font-size: 1.5em;
margin-bottom: 50px;
}
.text-img h1, h2, p{
color: #fff;
width: 80vh;
}
.hr{
  width: 200px;
}

@media screen and (max-width:480px) {
  .carousel-item img{
height: 60vh;
}
.faq_head h2{
  margin-top: 1em;
color: black;
font-size: 25px;
}



}

</style>