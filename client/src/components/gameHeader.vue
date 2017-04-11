<template>
	<header class="header">
		<span class="header__subject">
			<span>题目:</span>
			<span class="header__subject_value">牙刷</span>
		</span>
		<span class="header__image">
			<img src="../assets/logo.png" alt="你画我猜" width=160 height=50 />
		</span>
		<span class="header__time">
			<span class="header__time__value">60s</span>
		</span>
	</header>
</template>
<script>
export default {
  name: 'gameHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
    background-color: rgb(99,227,232);
    width: 100%;
    height: 50px;
}

.header > span {
    display: inline-block;
    position: absolute;
}

.header__subject {
    left: 10px;
    line-height: 50px;
}

.header__image {
    left: 50%;
    width: 160px;
    height: 50px;
    transform: translateX(-50%);
}

.header__time {
    right: 10px;
}

.header__time__value {
    width: 40px;
    height: 40px;
    padding: 6px;
    border-radius: 50%;
    border: 4px solid #dddddd;
    line-height: 50px;
    box-sizing: border-box;
}

</style>
