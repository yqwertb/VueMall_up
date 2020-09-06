<template>
  <div class="recommend">
    <div class="re-item" v-for="item in recommend">
      <a :href="item.link" class="re-a">
        <img :src="item.image" class="re-img"/>
      </a>
      <div class="re-text">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      },
    }
  },

}
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    margin-top: 8px;
    border-bottom: 8px solid #eee;
  }
  .re-item {
    /* width: 100px;
    height: 100px; */
    flex: 1;
    margin: 5px 7px 0;
  }
  .re-img {
    width: 80px;
    height: 80px;
  }
  .re-text {
    margin-top: 8px;
    margin-bottom: 18px;
    font-size: 14px;
  }
</style>