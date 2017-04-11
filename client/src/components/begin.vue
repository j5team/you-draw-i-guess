<template>
	<div>
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
export default {
  name: 'player',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.player {
	width: 33%;
	margin-top: 1rem;
}

.player .player__item {
	padding-top: calc(100%-18vw);
	
}
.player .player__item .user{
	background-color: red;
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	border: 6px solid #fff;
	margin: auto;
	background-image: url(../usertest.jpg);
	-webkit-background-size: cover;
		background-size: cover;	
	color: #000;
	line-height: 3rem;
	text-align: center;
}

</style>