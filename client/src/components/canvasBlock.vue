<template>
  <div id="canvasWrapper">
    <canvas id="canvas" @touchmove="draw" @touchend="drawEnd"></canvas>
  </div>
</template>

<script>

  let CUR_POS_X, CUR_POS_Y
  export default {
    name: 'canvasBlock',
    mounted: function () {
      var cvsWrap = document.getElementById('canvasWrapper')
      var canvas = document.getElementById('canvas')
      canvas.width = cvsWrap.getBoundingClientRect().width
      canvas.height = cvsWrap.getBoundingClientRect().height
    },
    props: ['name'],
    data: function () {
      return {a: 1}
    },
    methods: {
      draw: function (e) {
        var cvsWrap = document.getElementById('canvasWrapper')
        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext('2d')
        ctx.beginPath()
        /* 画布的样式 */
        ctx.lineWidth = 3
        ctx.fillStyle = 'black'
        ctx.lineJoin = 'round'
        ctx.moveTo(e.changedTouches[0].clientX - canvas.offsetLeft - cvsWrap.offsetLeft, e.changedTouches[0].clientY - canvas.offsetTop - cvsWrap.offsetTop)
        ctx.lineTo(CUR_POS_X, CUR_POS_Y)
        CUR_POS_X = e.changedTouches[0].clientX - canvas.offsetLeft - cvsWrap.offsetLeft
        CUR_POS_Y = e.changedTouches[0].clientY - canvas.offsetTop - cvsWrap.offsetTop

        ctx.stroke()
        ctx.fill()
      },
      drawEnd: function (e) {
        CUR_POS_X = undefined
        CUR_POS_Y = undefined
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#canvasWrapper {
  margin: 0 auto;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  /*border: 1px solid red;*/
}
#canvas{

}


</style>
