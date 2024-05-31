<script>
import StoriesSlotVue from '@/components/StoriesSlot.vue'
import Faq from '../components/Faq.vue'
import HeaderImg from '../components/HeaderImg.vue'
import StoriesSlot from '../components/StoriesSlot.vue'

export default {
  components: { Faq, HeaderImg,StoriesSlot },
  // beforeRouteLeave(to, from, next) {
// if 'next' was not used after pressing cancelAnimationFrame, it will remain on the homepage, the use of 'next' makes navigation to the next page possible
//next should only be used once unless the usage does not overlap
// const reply = window.confirm('You have unsaved changes! Do you want to leave?')

// if (!reply) {
//   next(false)
// }

// // will overlap if user clicks 'Cancel'
// // causing it to be called twice
// next(true)
// }
}

</script>

<template>
 
 <HeaderImg/>
 
 <stories-slot class="slot-card">
  <!-- <template #storyTitle></template>
  <template v-slot:default></template> -->
 </stories-slot>

<faq/>
</template>

<style scoped>


</style>
