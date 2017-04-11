<template>
	<div id="room">
    <canvas-block></canvas-block>
	</div>
</template>

<script>
import canvasBlock from './canvasBlock'
export default {
  name: 'begin',
  components: {canvasBlock}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#room {
  height: 22rem;
  font-size: 1.6rem;
}

</style>
