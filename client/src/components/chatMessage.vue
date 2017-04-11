
<template>
	<div class="bubble__item">
		<span class="user__icon"></span>
		<span class="bubble">
			手机
			<span class="bottom__level"></span>
			<span class="top__level"></span>
		</span>
	</div>
</template>

<script>
export default {
  name: 'charMessage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.user__icon{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-left: 1rem;
    background-image: url(../assets/usertest.jpg);
    -webkit-background-size: cover;
    background-size: cover;
    position: relative;
}

.bubble__item{  
    width: 100%;  
}  

.bubble{  
    position: relative;  
    line-height: 1.8rem;  
    padding-left: 10px;  
    padding-top: 3px;  
    padding-bottom: 3px;  
    border-radius: 7px;  
    margin-top: 15px;  
    padding-right: 10px;  
    display: inline-block;  
    margin-left: 1rem; 
    bottom: 9px;
    border: 1px solid #00b6b6;  
    background-color: #f8fdfc;     
} 
.bubble .bottom__level{  
    position: absolute;  
    top: 10px;  
    left: -10px;  
    border-top: 10px solid #00b6b6;  
    border-left: 10px solid transparent;  
}  
.bubble .top__level{  
    position: absolute;  
    top: 11px;  
    left: -8px;  
    border-top: 10px solid #f8fdfc;  
    border-left: 10px solid transparent;  
    z-index: 100;  
} 

</style>
