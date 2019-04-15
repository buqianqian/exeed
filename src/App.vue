<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html {
  font-size: 13.333vw;
}
html,body {
  background-color: #F2F5F7;
  font-family: 'Arial', 'Helvetica', 'sans-serif';
  -webkit-backface-visibility: hidden;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  height: 100vh;
}
body{
  margin-left: auto;
  margin-right: auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  overflow-y: scroll;
}
.pull-down-header {
  background-color: transparent;
}
@media screen and (max-width: 320px) {
  html{
    font-size: 32px;
  }
  body{
    min-width: 320px;
  }
}
@media screen and (min-width: 800px) {
  html{
    font-size: 80px;
  }
  body{
    max-width: 800px;
  }
}
</style>
