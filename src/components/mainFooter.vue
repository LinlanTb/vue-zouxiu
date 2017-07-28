<template>
  <div id="footbox">
		<div class="boxlist">
			<div><router-link :to="'/home'">首页</router-link></div>
			<div><router-link :to="'classify'">分类</router-link></div>
			<div><router-link :to="'shopcart'">购物车</router-link></div>
			<div><router-link :to="'myshow'">我的秀</router-link></div>
			<div><router-link :to="'more'">更多</router-link></div>
		</div>
  </div>
</template>

<script>
	import $ from "jquery"
export default {
	mounted(){
		$(".boxlist").on("click","a",function(){
			$(this).addClass("active").siblings().removeClass("active");
		})
	}
	
}
</script>

<style>
#footbox {
	width:100%;
	height:0.98rem;
}
.boxlist{
	width:100%;
	display:flex;
}
.boxlist div{
	flex:1;
	text-align:center;
}
.boxlist div a{
	display:block;
	text-decoration: none;
	font-size:0.3rem;
	color:#fff;
	line-height:0.98rem;
}
.active{
	color:#A90506;
}
</style>
