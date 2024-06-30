

<template>

    <section class="slot-card">
        <div class="card">
            
        <slot name=""><img class="big-img" src="../assets/Images/avatar5.jpg" alt=""></slot>
        
        <slot class="title">
            <button >Personal</button>
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
            
            <slot name=""><img src="data:image/jpeg;base64,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" alt=""></slot>
            
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
            
            <slot name=""><img class="big-img" src="https://th.bing.com/th/id/OIP.M7tEkdvbeGdEus3MAYdzDgHaE7?w=215&h=180&c=7&r=0&o=5&pid=1.7" alt=""></slot>
            
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
 grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
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
    width: 120px;
    height: 2em;
    margin: 1em;
    background: rgb(61, 1, 61);
    border: none;
    outline: none;
    border-radius: 5px;
    color:#fff;
}
</style>