<template>
  <div id="cate">
    <nav-bar class="cate-nav">
      <template v-slot:center>分类</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'

export default {
  name:'cate',
  data(){
   return {

   }
  },
  components: {
    NavBar: NavBar,
  }
}
</script>

<style scoped>
.cate-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
