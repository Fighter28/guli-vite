<template>
  <div>
    导航栏 ｜
    <router-link to="/">Justice</router-link> |
    <router-link to="/xxx">Justice2</router-link>
  </div>
  <hr>
  <router-view/>
</template>

<script>

export default {
  name: 'App'
}
</script>
