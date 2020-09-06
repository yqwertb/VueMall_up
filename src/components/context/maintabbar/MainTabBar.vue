<template>
    <tab-bar>
      <tab-item  path="/home">
        <img slot="item-img" src="@/assets/img/home.svg" />
        <img slot="item-img-active" src="@/assets/img/home_active.svg" />
        <div slot="item-text">首页</div>
      </tab-item>
      <tab-item  path="/cate">
        <img slot="item-img" src="@/assets/img/category.svg" />
        <img slot="item-img-active" src="@/assets/img/category_active.svg" />
        <div slot="item-text">分类</div>
      </tab-item>
      <tab-item  path="/cart">
        <img slot="item-img" src="@/assets/img/shopcart.svg" />
        <img slot="item-img-active" src="@/assets/img/shopcart_active.svg" />
        <div slot="item-text">购物车</div>
      </tab-item>
      <tab-item  path="/profile">
        <img slot="item-img" src="@/assets/img/profile.svg" />
        <img slot="item-img-active" src="@/assets/img/profile_active.svg" />
        <div slot="item-text">我的</div>
      </tab-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/tabbar.vue' 
import TabItem from '@/components/common/tabbar/tabitem.vue'

export default {
  name:'mainTabBar',
  data(){
   return {

   }
  },
  components: {
    TabBar,
    TabItem
  },
}
</script>

<style scoped>

</style>
