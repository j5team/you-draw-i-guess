<template>
	<div id="room">
		<div class="player__blocks">
			<player></player>
			<player></player>
			<player></player>
			<player></player>
			<player></player>
			<player></player>
		</div>
		<div class="begin">坐首位的房主可以开始游戏</div>
	</div>
</template>

<script>
import player from './player'
export default {
  name: 'room',
  components: {player},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#room {
  height: 22rem;
  font-size: 1.6rem;
}

.player__blocks {
	display: flex;
	text-align: center;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 1rem auto 0;
}

.begin {
	height: 3rem;
	width: 70%;
	margin: 0 auto;
	margin-top: 3rem;
	background-color: rgb(255,177,24);
	border: 6px solid #fff;
	border-radius: 24px;

	line-height: 3rem;
	text-align: center;

}
</style>
