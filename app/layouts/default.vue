<template>
  <div>
    <TheHeader />
    <div class="wrapper">
      <nuxt class="container" />
    </div>  
  </div>
</template>

<script lang="js">
import TheHeader from '~/components/TheHeader.vue'
export default {
  components:{
    TheHeader
  }
}
</script>
