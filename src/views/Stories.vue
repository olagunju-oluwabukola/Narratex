<template>
  <div> <h1>stories</h1> </div>

  <div >
    <div v-if="isLoading" class="spinner" >
    <div class="cube1"></div>
    <div class="cube2"></div>
  </div>
  <div v-for="item in post" :key="item.id">

    <router-link
    :to="{
      name: 'Technology',
      params: {title: item.title },
      query: { name: item.title }
    }">
    <h2>{{ item.title }}</h2>
    <p>{{ $route.params.title }}</p>

  </router-link>

<!-- <h2>Title:{{ item.title }}</h2>

<p> -->
  </div>
  <div> 
    </div>
    
  </div>

 
</template>

<script>

// import article from '../assets/db.json'
export default {

  data(){
    return{
      post:{},
      word: '',
      isLoading: false
    }
  },


mounted(){   
  this.isLoading = true,
  fetch('http://localhost:3000/blog1')
    .then(response => response.json())
        .then(data => {
          this.post = data
        this.isLoading = false
        },
       
      )
},
methods:{
//  async fetchPosts(){
//   this.isLoading = true;
//   try{
//     const response = await fetch('http://localhost:3000/Health');
//     const data = await response.json();
//     this.post = data.post
//   }
//   finally{
//     this.isLoading = false
//   }
//  }
}

}
</script>

<style scoped>
.spinner {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
}

.cube1, .cube2 {
  background-color: #333;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
  animation: sk-cubemove 1.8s infinite ease-in-out;
}

.cube2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

@-webkit-keyframes sk-cubemove {
  25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }
  50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }
  75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
  100% { -webkit-transform: rotate(-360deg) }
}

@keyframes sk-cubemove {
  25% { 
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  } 50% { 
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  } 50.1% { 
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  } 75% { 
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  } 100% { 
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}
</style>