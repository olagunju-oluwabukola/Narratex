<template>
    <h2>Technology</h2>
    <p>{{ title }} {{ body }}</p>
</template>

<script>
export default {
  props: ['title'],
  computed: {
    body() {
      return this.$route.query.body
    }
  }
}
</script>