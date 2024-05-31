<template>

    <section class="slot-card">
        <div class="card">
         <h2>
        <slot>Legion</slot>
        </h2>
        <slot>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aliquid libero voluptates officia est eligendi 
                eius provident nostrum expedita cupiditate laboriosam.</p>
        </slot>
        <slot name=""><img src="../assets/Images/tm1.jpg" alt=""></slot>
        <slot><button>Read More</button></slot>
        <div>
            <slot><img src="../assets/Images/avatar1.jpg" alt="userImg" width="50px">
        </slot>
        <slot>May 18 2024</slot>
        </div>
    
  </div>
  <div class="card">
         <h2>
        <slot>Legion</slot>
        </h2>
        <slot>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aliquid libero voluptates officia est eligendi 
                eius provident nostrum expedita cupiditate laboriosam.</p>
        </slot>
        <slot name=""><img src="../assets/Images/tm1.jpg" alt=""></slot>
        <slot><button>Read More</button></slot>
        <div>
            <slot><img src="../assets/Images/avatar2.jpg" alt="userImg" width="50px">
        </slot>
        <slot>May 18 2024</slot>
        </div>
    
  </div>

  <div class="card">
         <h2>
        <slot>Legion</slot>
        </h2>
        <slot>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aliquid libero voluptates officia est eligendi 
                eius provident nostrum expedita cupiditate laboriosam.</p>
        </slot>
        <slot name=""><img src="../assets/Images/tm1.jpg" alt=""></slot>
        <slot><button>Read More</button></slot>
        <div>
            <slot><img src="../assets/Images/avatar3.jpg" alt="userImg" width="50px">
        </slot>
        <slot>May 18 2024</slot>
        </div>
    
  </div>
  <div class="card">
         <h2>
        <slot>Legion</slot>
        </h2>
        <slot>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aliquid libero voluptates officia est eligendi 
                eius provident nostrum expedita cupiditate laboriosam.</p>
        </slot>
        <slot name=""><img src="../assets/Images/tm1.jpg" alt=""></slot>
        <slot><button>Read More</button></slot>
        <div>
            <slot><img src="../assets/Images/avatar4.jpg" alt="userImg" width="50px">
        </slot>
        <slot>May 18 2024</slot>
        </div>
    
  </div>
  <div class="card">
         <h2>
        <slot>Legion</slot>
        </h2>
        <slot>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aliquid libero voluptates officia est eligendi 
                eius provident nostrum expedita cupiditate laboriosam.</p>
        </slot>
        <slot name=""><img src="../assets/Images/tm1.jpg" alt=""></slot>
        <slot><button>Read More</button></slot>
        <div>
            <slot><img src="../assets/Images/avatar5.jpg" alt="userImg" width="50px">
        </slot>
        <slot>May 18 2024</slot>
        </div>
    
  </div>
  <div class="card">
         <h2>
        <slot>Legion</slot>
        </h2>
        <slot>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aliquid libero voluptates officia est eligendi 
                eius provident nostrum expedita cupiditate laboriosam.</p>
        </slot>
        <slot name=""><img src="../assets/Images/tm1.jpg" alt=""></slot>
        <slot><button>Read More</button></slot>
        <div>
            <slot><img src="../assets/Images/avatar6.jpg" alt="userImg" width="50px">
        </slot>
        <slot>May 18 2024</slot>
        </div>
    
  </div>
  <div class="card">
         <h2>
        <slot>Legion</slot>
        </h2>
        <slot>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aliquid libero voluptates officia est eligendi 
                eius provident nostrum expedita cupiditate laboriosam.</p>
        </slot>
        <slot name=""><img src="../assets/Images/tm7.jpg" alt=""></slot>
        <slot><button>Read More</button></slot>
        <div>
            <slot><img src="../assets/Images/avatar1.jpg" alt="userImg" width="50px">
        </slot>
        <slot>May 18 2024</slot>
        </div>
    
  </div>
  <div class="card">
         <h2>
        <slot>Legion</slot>
        </h2>
        <slot>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aliquid libero voluptates officia est eligendi 
                eius provident nostrum expedita cupiditate laboriosam.</p>
        </slot>
        <slot name=""><img src="../assets/Images/tm1.jpg" alt=""></slot>
        <slot><button>Read More</button></slot>
        <div>
            <slot><img src="../assets/Images/tm7.jpg" alt="userImg" width="50px">
        </slot>
        <slot>May 18 2024</slot>
        </div>
    
  </div>
    
  
    </section>
  
</template>

<script>
export default {

}
</script>

<style>
.slot-card{
  display: grid;
 grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
 grid-column-gap: 50px;
 grid-row-gap: 40px;
 margin: 3em;
}
</style>