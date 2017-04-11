<template>
  <div id="app">
    <game-header></game-header>
    <router-view></router-view>
  </div>
</template>

<script>
import gameHeader from './components/gameHeader'
export default {
  name: 'app',
  components: {
    gameHeader
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
}
</style>
