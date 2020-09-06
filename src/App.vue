<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from '@/components/context/maintabbar/MainTabBar.vue'
// import con from 'vconsole'
// var vConsole = new con();
export default {
  name: 'App',
  components: {
    mainTabBar,
  },
  created() {
    document.oncontextmenu = function(){
      return false;
    }
  }
}
</script>

<style>
  @import url('assets/css/base.css');
</style>
