<template>
    <h2>🎯{{ title }} </h2>
    <p>{{ body }}</p>
    <!-- <img :src= image  alt=""> -->
</template>

<script>
export default {
  props: ['title'],
  computed: {
    body() {
      return this.$route.query.body
    },
    image(){
      return this.$route.query.image
    }
  }
}
</script>

<style scoped>
h2{
  text-align: center;
  margin: 20px 0 20px 2em;
}
p{
  margin-left: 2em;
  width: 90vw;
  line-height: 30px;
}

@media (max-width: 910px) {
  h2{
  text-align: center;
  font-size: 16px;
}
}
</style>