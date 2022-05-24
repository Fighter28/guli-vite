<template>
  <div>
    <div class="topNav">
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
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
.topNav {
  display: flex;
  background: pink;
  padding: 16px;
  > .logo{
    max-width: 6em;
    margin-right: auto;
  }
  > .menu{
    display: flex;
    flex-wrap:nowrap;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    > li{
      margin:0 1em;
    }
  }
}
</style>