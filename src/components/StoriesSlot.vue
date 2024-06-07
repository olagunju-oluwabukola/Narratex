<template>

    <section class="slot-card">
        <div class="card">
            
        <slot name=""><img class="big-img" src="../assets/Images/tm1.jpg" alt=""></slot>
        
        <slot class="title">
            <button>Personal</button>
        </slot>
       
        <slot>
            <h3>Oluwabukola; a huge force worth attention. </h3>
        </slot>
        <div class="card-footer">
            <slot>
                <span>
                    <img src="../assets/Images/avatar1.jpg" alt="userImg" width="50px">
                    Author 
                </span>
                    </slot>
        <slot>May.18.2024</slot>
        </div>
    
        </div>
        <div class="card">
            
            <slot name=""> 
                <img 
               src="data:image/jpeg;base64,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"
               alt="..."></slot>
            
            <slot class="title">
                <button>Technology</button>
            </slot>
           
            <slot>
                <h3>The Future of Transportation</h3>
            </slot>
            <div class="card-footer">
                <slot>
                    <span>
                        <img src="../assets/Images/avatar2.jpg" alt="userImg" width="50px">
                        Author 
                    </span>
                        </slot>
            <slot>May.18.2024</slot>
            </div>
        
            </div>
            <div class="card">
            
            <slot name=""><img class="big-img" src="https://th.bing.com/th?id=OIP.juo16l_XxxceL2RQvYo3BQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=""></slot>
            
            <slot class="title">
                <button>Art</button>
            </slot>
           
            <slot>
                <h3>The Evolution of Photography </h3>
            </slot>
            <div class="card-footer">
                <slot>
                    <span>
                        <img src="../assets/Images/tm5.jpg" alt="userImg" width="50px">
                        Author 
                    </span>
                        </slot>
            <slot>May.18.2024</slot>
            </div>
        
            </div>
            <div class="card">
            
            <slot name=""><img class="big-img" src="https://th.bing.com/th/id/OIP.iM9mBVp8796sDaEIR_z5RwHaE8?w=258&h=180&c=7&r=0&o=5&pid=1.7" alt=""></slot>
            
            <slot class="title">
                <button>Health</button>
            </slot>
           
            <slot>
                <h3>Benefits of Plant-Based Diets</h3>
            </slot>
            <div class="card-footer">
                <slot>
                    <span>
                        <img src="../assets/Images/avatar3.jpg" alt="userImg" width="50px">
                        Author 
                    </span>
                        </slot>
            <slot>May.18.2024</slot>
            </div>
        
            </div>
            <div class="card">
            
            <slot name=""><img class="big-img" src="https://th.bing.com/th/id/OIF.nUImAkVnr6YJ1GQs5teRRg?rs=1&pid=ImgDetMain" alt=""></slot>
            
            <slot class="title">
                <button>Lifestyle</button>
            </slot>
           
            <slot>
                <h3>The Art of Mindfuless </h3>
            </slot>
            <div class="card-footer">
                <slot>
                    <span>
                        <img src="../assets/Images/avatar4.jpg" alt="userImg" width="50px">
                        Author 
                    </span>
                        </slot>
            <slot>May.18.2024</slot>
            </div>
        
            </div>
            <div class="card">
            
            <slot name="">
                <img class="big-img" src="https://th.bing.com/th/id/OIP.wAbAbxKUWRpmcX3yn8lu7AHaG-?w=166&h=180&c=7&r=0&o=5&pid=1.7" alt="">
            </slot>
            
            <slot class="title">
                <button>Art</button>
            </slot>
           
            <slot>
                <h3>The Rise of Digital Art </h3>
            </slot>
            <div class="card-footer">
                <slot>
                    <span>
                        <img src="../assets/Images/avatar5.jpg" alt="userImg" width="50px">
                        Author 
                    </span>
                        </slot>
            <slot>May.18.2024</slot>
            </div>
        
            </div>
            <div class="card">
            
            <slot name=""><img class="big-img" src="https://th.bing.com/th/id/OIP.M7tEkdvbeGdEus3MAYdzDgHaE7?w=215&h=180&c=7&r=0&o=5&pid=1.7" alt=""></slot>
            
            <slot class="title">
                <button>Technology</button>
            </slot>
           
            <slot>
                <h3>The Ethics of Artificial Intelligence</h3>
            </slot>
            <div class="card-footer">
                <slot>
                    <span>
                        <img src="../assets/Images/avatar6.jpg" alt="userImg" width="50px">
                        Author 
                    </span>
                        </slot>
            <slot>May.18.2024</slot>
            </div>
        
            </div>
            <div class="card">
            
            <slot name=""><img class="big-img" src="https://th.bing.com/th/id/OIP.N-WinIzs4B-8Yv6iNIwXzwHaE5?w=239&h=180&c=7&r=0&o=5&pid=1.7" alt=""></slot>
            
            <slot class="title">
                <button>Religion</button>
            </slot>
           
            <slot>
                <h3>The Intersection of Religion and Culture</h3>
            </slot>
            <div class="card-footer">
                <slot>
                    <span>
                        <img src="../assets/Images/avatar7.jpg" alt="userImg" width="50px">
                        Author 
                    </span>
                        </slot>
            <slot>May.18.2024</slot>
            </div>
        
            </div>
            

        
  
    </section>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.card{
   background: #ffffff;
   box-shadow: inset 5px 5px 12px #fff,
5px 5px 12px rgba(0, 0, 0,.16);

}
.big-img{
    height: 250px;
    display: flex;
    justify-content: center;  
}

.slot-card{
    display: grid;
 grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
 grid-column-gap: 30px;
 grid-row-gap: 30px;
 margin: 2em;

}

.card-footer{
    font-family: monospace;
    display: flex;
    justify-content: space-between;
    border: none;
    background: transparent;
}
h3{
    font-size: 15px;
    font-weight: 500;
    margin-left: 1em;
}
.card-footer img{
    border-radius: 50%;
    width: 30px;
}
button{
    width: 100px;
    height: 2em;
    margin: 1em;
    background: rgb(61, 1, 61);
    border: none;
    outline: none;
    border-radius: 5px;
    color:#fff;
}
</style>