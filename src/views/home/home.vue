<template >
  <div id="home">
    <!-- 导航 -->
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banner="banner" class="home-swiper"></home-swiper>
    <!-- 推荐 -->
    <recommend :recommend="recommend" />
    <!-- tab control -->
    <tab-control :titles="tabControlTitle"></tab-control>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
    <li>sad</li>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/context/tabcontrol/TabControl.vue'

import HomeSwiper from './child/HomeSwiper.vue'
import Recommend from './child/Recommend.vue'

import {getHomeMultidata, getHomeGoods} from '@/network/home'

export default {
  name: 'home',
  data(){
   return {
     banner: [],
    //  dKeyword: [],
    //  keyword: [],
     recommend: [],
     tabControlTitle: ['流行', '新款', '精选'],
     goods: {
       'pop': {page: 0, list: []},
       'new': {page: 0, list: []},
       'sell': {page: 0, list: []}
     },
   }
  },
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    Recommend,
  },
  created() {
    this.getMulti();
    this.getGoods('pop');
    this.getGoods('new');
    this.getGoods('sell');
  },
  methods: {
    getMulti() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list
      })
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        const list = res.data.list;
        this.goods[type].list.push(...list);
        this.goods[type].page = this.goods[type].page + 1;
      })
    }
  },
}
</script>

<style scoped>
  /* #home {
  } */
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .home-swiper {
    margin-top: 44px;
  }
</style>
