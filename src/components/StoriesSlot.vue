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
            
            <slot name=""><img class="big-img" src="../assets/Images/tm1.jpg" alt=""></slot>
            
            <slot class="title">
                <button>Technology</button>
            </slot>
           
            <slot>
                <h3>The Future of Transportation</h3>
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
            
            <slot name=""><img class="big-img" src="../assets/Images/tm1.jpg" alt=""></slot>
            
            <slot class="title">
                <button>Art</button>
            </slot>
           
            <slot>
                <h3>The Evolution of Photography </h3>
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
            
            <slot name=""><img class="big-img" src="../assets/Images/tm1.jpg" alt=""></slot>
            
            <slot class="title">
                <button>Health</button>
            </slot>
           
            <slot>
                <h3>Benefits of Plant-Based Diets</h3>
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
            
            <slot name=""><img class="big-img" src="../assets/Images/tm1.jpg" alt=""></slot>
            
            <slot class="title">
                <button>Lifestyle</button>
            </slot>
           
            <slot>
                <h3>The Art of Mindfuless </h3>
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
            
            <slot name=""><img class="big-img" src="../assets/Images/tm1.jpg" alt=""></slot>
            
            <slot class="title">
                <button>Art</button>
            </slot>
           
            <slot>
                <h3>The Rise of Digital Art </h3>
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
            
            <slot name=""><img class="big-img" src="../assets/Images/tm1.jpg" alt=""></slot>
            
            <slot class="title">
                <button>Technology</button>
            </slot>
           
            <slot>
                <h3>The Ethics of Artificial Intelligence</h3>
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
            
            <slot name=""><img class="big-img" src="../assets/Images/tm1.jpg" alt=""></slot>
            
            <slot class="title">
                <button>Religion</button>
            </slot>
           
            <slot>
                <h3>The Intersection of Religion and Culture</h3>
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