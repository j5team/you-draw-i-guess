<template>
	<header class="header">
		<span class="header__subject">
			<span>题目:</span>
			<span class="header__subject_value">牙刷</span>
		</span>
		<span class="header__image">
			<img src="../assets/logo.png" alt="你画我猜"/>
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
    height: 5rem;
    font-size: 1.6rem;
}

.header > span {
    display: inline-block;
    position: absolute;
}

.header__subject {
    left: 1rem;
    line-height: 5rem;
}

.header__image {
    left: 50%;
    width: 16rem;
    height: 5rem;
    transform: translateX(-50%);
}

.header__image img {
  width: 16rem;
  height: 5rem;
}

.header__time {
    right: 1rem;
}

.header__time__value {
    width: 4rem;
    height: 4rem;
    padding: 6px;
    border-radius: 50%;
    border: 4px solid #dddddd;
    line-height: 5rem;
    box-sizing: border-box;
}

</style>
