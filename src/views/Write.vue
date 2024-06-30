<template>
  <section>
    <form @submit.prevent="setPost">
      <div>
        <!-- <label for="userId">UserID:</label> -->
        <input type="text" id="userId" placeholder="Your Name:" v-model="postData.userId">
      </div>
      <div>
        <!-- <label for="title">Title: </label> -->
        <input type="text" id="title" placeholder="What do you want to write on?" v-model="postData.title">
      </div>
      <div>
        <!-- <label for="body">Your Story: </label> -->
        <textarea id="body" rows="10" cols="50" v-model="postData.body" placeholder="write here..."></textarea>
      </div>
      <button>Create Post</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      postData: {
        userId: '',
        title:  '',
        body:   ''
      }
    }
  },
  methods: {
    setPost() {
      fetch('http://localhost:3000/blog1',{
        method:  'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: this.userId,
          title:  this.title,
          body:   this.body
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))
    }
  }
}
</script>

<style scoped>

textarea{
  width: 90vw;
  border: none;
  outline: none;
  height: 50vh;
}

input{
  border: none;
  outline: none;
  margin: 20px 20px 0 20px;
  width: 50vw;
  margin-left: 20px;
}
textarea::placeholder{
  padding-left: 20px;
  padding-top: 1em;
}
button{
    width: 120px;
    height: 2em;
    background: rgb(61, 1, 61);
    border: none;
    outline: none;
    border-radius: 5px;
    color:#fff;
    margin-left: 2em;
}


</style>