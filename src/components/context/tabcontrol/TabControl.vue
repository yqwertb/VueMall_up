<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" 
         class="tab-control-item" v-on:click="itemClick(index)">
      <span :class="{active: index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
  .tab-control {
    position: sticky;
    top: 44px;
    display: flex;
    text-align: center;
    font-weight: bold;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    background: #ffffff;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    border-bottom: 3px solid var(--color-tint);
    color: var(--color-tint);
  }
</style>