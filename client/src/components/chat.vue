<template>
	<div class="chat">
		<div class="bubble__block">
			<chat-message></chat-message>
			<chat-message></chat-message>
			<chat-message></chat-message>
			<chat-message></chat-message>
		</div>
		<form class="formMsg" action="">
			<legend>聊天输入框</legend>
			<input type="text" class="formMsg__input" placeholder="输入消息">
			<button type="submit" value="发送" class="formMsg__submit">发送</button>
		</form>
	</div>
</template>

<script>
import chatMessage from './chatMessage'
export default {
  name: 'chat',
  components: {chatMessage},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.chat {
	margin-top: 2rem;
	position: relative;
}
.bubble__block{  
    width: 100%; 
    overflow: hidden;
    margin: 0 auto;  
    margin-top: 1rem;
    position: relative;
}  


.formMsg {
    position: fixed;
    display: block;

    bottom: 30px;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 0;
    box-sizing: border-box;
}

.formMsg * {
    box-sizing: inherit;
}

.formMsg legend {
    display: none;
}

.formMsg__input {
    width: 70%;
    padding-left: 5px;
    height: 30px;
}

.formMsg__submit {
    width: 25%;
    height: 30px;
    background-color: rgb(0,140,211);
    border-radius: 3px;
    border:none;
}


</style>
