<template>
  <div id="canvas-wrapper">
    <canvas id="canvas"></canvas>
    <div id="toolbar">
				<div class="btn-group dropup">
					<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
						<span class="glyphicon glyphicon-minus"></span>
						宽度<span class="caret"></span>
					</button>
					<ul class="dropdown-menu line-width-ul" role="menu">
						<li data-width='3'><a href="#/game"><span class="line-width line1">&nbsp;&nbsp;</span></a></li>
						<li class="divider"></li>
						<li data-width='8'><a href="#/game"><span class="line-width line2"></span></a></li>
						<li class="divider"></li>
						<li data-width='11'><a href="#/game"><span class="line-width line3"></span></a></li>
						<li class="divider"></li>
						<li data-width='15'><a href="#/game"><span class="line-width line4"></span></a></li>
					</ul>
				</div>
				<div class="btn-group dropup">
					<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
						颜色 <span class="caret"></span>
					</button>
					<ul class="dropdown-menu line-color-ul" role="menu">
						<li data-color='red'><a href="#/game"><span class="line-color color1"></span></a></li>
						<li class="divider"></li>
						<li data-color='#e8c901'><a href="#/game"><span class="line-color color2"></span></a></li>
						<li class="divider"></li>
						<li data-color='blue'><a href="#/game"><span class="line-color color3"></span></a></li>
						<li class="divider"></li>
						<li data-color='green'><a href="#/game"><span class="line-color color4"></span></a></li>
						<li class="divider"></li>
						<li data-color='black'><a href="#/game"><span class="line-color color5"></span></a></li>
					</ul>
				</div>
				<div id="wipeRect" class="btn-group dropup">
					<button type="button" class="btn btn-primary">
						橡皮擦
						
					</button>
				</div>
				<div id="clear" class="btn-group dropup">
					<button type="button" class="btn btn-primary">
						清除<span class="glyphicon glyphicon-trash"></span>
					</button>
				</div>
			</div>
  </div>
</template>
<script src="js/lib/vue.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
	'use strict'
	var CUR_POS_X, CUR_POS_Y
var options = {
  lineWidth: 4,
  lineColor: 'black',
  wipeRectColor: 'white',
  wipeRectWidth: 20,
  wipeRectHeight: 20
}
export default {
  name: 'canvasBlock',
  mounted: function () {
    var cvsWrap = document.getElementById('canvas-wrapper')
    var canvas = document.getElementById('canvas')
    canvas.width = cvsWrap.getBoundingClientRect().width - 2
    canvas.height = cvsWrap.getBoundingClientRect().height - 2
    canvas.addEventListener('touchmove', draw)
    canvas.addEventListener('touchend', function () {
      CUR_POS_X = undefined
      CUR_POS_Y = undefined
    })
    // 给线条、颜色按钮添加点击事件
    var a = document.getElementsByClassName('dropdown-toggle')[0]
    var b = document.getElementsByClassName('dropdown-toggle')[1]
    var aa = document.getElementsByClassName('dropdown-menu')[0]
    var bb = document.getElementsByClassName('dropdown-menu')[1]
    a.addEventListener('click', function () {
      bb.style.display = 'none'
      if (aa.style.display === 'inline-block') {
        aa.style.display = 'none'
      } else {
        aa.style.display = 'inline-block'
      }
    })
    b.addEventListener('click', function () {
      aa.style.display = 'none'
      if (bb.style.display === 'inline-block') {
        bb.style.display = 'none'
      } else {
        bb.style.display = 'inline-block'
      }
    })
    // 给橡皮擦按钮添加橡皮擦函数
    document.getElementById('wipeRect').addEventListener('click', wipe)
    // 给清除按钮添加清除函数
    document.getElementById('clear').addEventListener('click', function () {
      var canvas = document.getElementById('canvas')
      var ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    })
    // 点击其他地方隐藏选项
    document.body.addEventListener('click', function (e) {
      if (e.target.nodeName !== document.getElementsByTagName('a')[0].nodeName && e.target.nodeName !== document.getElementsByClassName('dropdown-toggle')[0].nodeName) {
        document.getElementsByClassName('dropdown-menu')[0].style.display = 'none'
        document.getElementsByClassName('dropdown-menu')[1].style.display = 'none'
      }
    })
    // 点击换颜色
    document.querySelectorAll('.line-color-ul li').forEach(function (ele) {
      ele.addEventListener('click', function (e) {
        options.lineColor = this.dataset.color.toString()
      })
    })
    // 点击换线条粗细
    document.querySelectorAll('.line-width-ul li').forEach(function (ele) {
      ele.addEventListener('click', function (e) {
        // 移除橡皮擦事件句柄，添加画图事件句柄
        document.getElementById('canvas').addEventListener('touchmove', draw)
        document.getElementById('canvas').removeEventListener('touchmove', realWipe)
        options.lineWidth = ele.dataset.width.toString()
      })
    })
    // 画图函数
    function draw (e) {
      e.preventDefault()
      var cvsWrap = document.getElementById('canvas-wrapper')
      var canvas = document.getElementById('canvas')
      var ctx = canvas.getContext('2d')
      ctx.beginPath()
      // 画布的样式
      ctx.lineWidth = options.lineWidth
      ctx.fillStyle = options.lineColor
      ctx.strokeStyle = options.lineColor
      ctx.lineJoin = 'round'
      ctx.moveTo(e.changedTouches[0].clientX - canvas.offsetLeft - cvsWrap.offsetLeft, e.changedTouches[0].clientY - canvas.offsetTop - cvsWrap.offsetTop)
      ctx.lineTo(CUR_POS_X, CUR_POS_Y)
      ctx.closePath()
      CUR_POS_X = e.changedTouches[0].clientX - canvas.offsetLeft - cvsWrap.offsetLeft
      CUR_POS_Y = e.changedTouches[0].clientY - canvas.offsetTop - cvsWrap.offsetTop
      ctx.stroke()
      ctx.fill()
    }
    // 橡皮擦函数
    function wipe (e) {
       // 移除画图句柄，添加橡皮擦事件句柄
      document.getElementById('canvas').removeEventListener('touchmove', draw)
      document.getElementById('canvas').addEventListener('touchmove', realWipe)
    }
    function realWipe (e) {
      e.preventDefault()
      var cvsWrap = document.getElementById('canvas-wrapper')
      var canvas = document.getElementById('canvas')
      var ctx = canvas.getContext('2d')
      ctx.clearRect(e.changedTouches[0].clientX - canvas.offsetLeft - cvsWrap.offsetLeft - options.wipeRectWidth / 2, e.changedTouches[0].clientY - canvas.offsetTop - cvsWrap.offsetTop - (options.wipeRectHeight / 2), options.wipeRectWidth, options.wipeRectHeight)
    }
  },
  methods: {
    draw: function (e) {
      e.preventDefault()
      var cvsWrap = document.getElementById('canvas-wrapper')
      var canvas = document.getElementById('canvas')
      console.log(canvas.width)
      console.log(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
      var ctx = canvas.getContext('2d')
      ctx.beginPath()
      // 画布的样式
      ctx.lineWidth = options.lineWidth
      ctx.fillStyle = options.linecolor
      ctx.lineJoin = 'round'
      ctx.moveTo(e.changedTouches[0].clientX - canvas.offsetLeft - cvsWrap.offsetLeft, e.changedTouches[0].clientY - canvas.offsetTop - cvsWrap.offsetTop)
      ctx.lineTo(CUR_POS_X, CUR_POS_Y)
      ctx.closePath()
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

#canvas-wrapper {
  margin: 0 auto;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  /*border: 1px solid red;*/
}
#canvas{
	background-color: white;
}

#toolbar{
	margin: 0 auto;
	text-align: center;
	width: 100%;
	height: 3rem;
	position: relative;
	/*border: 1px solid red;*/
}
.btn-group{
	width: 20%;
}
.btn{
	width: 100%;
}
.glyphicon{
	
}
.glyphicon:before{
	
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
      touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.btn:hover,
.btn:focus,
.btn.focus {
  color: #333;
  text-decoration: none;
}
.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
.btn-primary:focus,
.btn-primary.focus {
  color: #fff;
  background-color: #286090;
  border-color: #122b40;
}
.btn-primary:hover {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}
.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  float: left;
}
.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover,
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus,
.btn-group > .btn:active,
.btn-group-vertical > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn.active {
  z-index: 2;
}
.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
  margin-left: -1px;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 60%;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}
.dropdown-menu .divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 27px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
  text-decoration: none;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  color: #262626;
  text-decoration: none;
  background-color: #f5f5f5;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  color: #fff;
  text-decoration: none;
  background-color: #337ab7;
  outline: 0;
}
.dropup > .btn > .caret {
    border-top-color: #000 !important;
}
.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  content: "";
  border-top: 0;
  border-bottom: 4px dashed;
  border-bottom: 4px solid;
}
.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 2px;
}
.dropup,
.dropdown {
  position: relative;
}
#eraser img{
	width: 49%;
	height: 50%;
}
.dropdown-menu .line-width{
	display: block;
	width: 2rem;
	height: 2px;
	background-color: black;
}
.dropdown-menu .line1{
	height: 3px;
}
.dropdown-menu .line2{
	height: 8px;
}
.dropdown-menu .line3{
	height: 11px;
}
.dropdown-menu .line4{
	height: 15px;
}
.dropdown-menu .line-color{
	display: block;
	border-radius: 50%;
	width: 1rem;
	height: 1rem;
	background-color: black;
}
.dropdown-menu .color1{
	background-color: red;
}
.dropdown-menu .color2{
	background-color: #e8c901;
}
.dropdown-menu .color3{
	background-color: blue;
}
.dropdown-menu .color4{
	background-color: green;
}
.dropdown-menu .color5{
	background-color: black;
}
</style>
