<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <van-button type="primary">
      Large
    </van-button>
    <!-- <cell>23</cell> -->
    <van-icon name="close" />
    <div class="hh">HelloWorld</div>
  </div>
</template>

<script>
import { Button, Icon } from 'vant';


export default {
  name: 'app',
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hh{
  font-size: 24px;
  height: 50px;
  background: blue;
  color: #fff;
}
</style>
