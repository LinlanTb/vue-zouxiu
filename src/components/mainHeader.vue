<template>
  <div id="headbox">
  	<span class="goback" v-if="isHaseBack" @click="back">&lt;</span>
		{{headtitle}}
		<span class="cart"></span>
  </div>
</template>

<script>

export default {
	props:["headtitle","isHaseBack"],
	methods:{
		back(){
			this.$router.go(-1);
		}
	}
}
</script>

<style>
#headbox {
  width:100%;
  height:0.8rem;
  color:#fff;
  font-size:0.4rem;
  line-height:0.8rem;
  text-align:center;
  position:relative;
  background:#A90506;
}
.goback{
	display:block;
	position:absolute;
	left:0.3rem;
	font-size:0.5rem;
	font-family:cursive;
}
.cart{
	display:block;
	width:1rem;
	height:0.6rem;
	background:#be0c0a url(../assets/cart.png) no-repeat center;
	background-size:60% auto;
	position:absolute;
	right:0.3rem;
	top:0.1rem;
	border-radius:0.1rem;
	border:0.01rem solid #a02c2c;
}
</style>
