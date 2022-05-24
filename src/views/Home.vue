<template>
  <div>
    <TopNav/>
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a>Github</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: lightgreen;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background-color: #fff;
      display: inline-block;
      border-radius: 14px;
      height: 28px;
      line-height: 28px;
      padding:0 8px
    }
  }
}
</style>
<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  components: {TopNav}
};
</script>