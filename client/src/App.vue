<template>
  <div id="app">
    <game-header></game-header>
    <router-view></router-view>
    <chat></chat>
  </div>
</template>

<script>
import gameHeader from './components/gameHeader'
import chat from './components/chat'
export default {
  name: 'app',
  components: {gameHeader, chat}
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,body {
  width: 100%;
  height: 100%;
  background-color: rgb(72,209,204);
}
</style>
