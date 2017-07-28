<template>
  <div id="detbox">
		 <Goodheader :isHaseBack="true" headtitle="商品资料"></Goodheader>
		<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="(item,index) in goodsimg">
	        	<img src="item"/>
	        </div>
	    </div>
	    <div class="swiper-pagination"></div>
	  </div>
		<div class="goodetail">
			<p>{{goodsInfo.goodsName}}</p>
			<p>
				<span class="newprice">￥{{goodsInfo.discount>0?(goodsInfo.discount*goodsInfo.price)/10:goodsInfo.price}}</span>
				<span class="price">￥{{goodsInfo.price}}</span>
			</p>
			<p>购买人数：{{goodsInfo.buynumber}}</p>
		</div>
		<div class="addcart">
			<p>添加到购物车</p>
		</div>
  </div>
</template>

<script>
import $　from "jquery"
import Goodheader from "../mainHeader.vue"
import "../../assets/swiper.css"
import Swiper from "swiper"
export default {
  components:{
  	Goodheader
  },
  data(){
  	return{
  		goodsimg:[],
  		goodsInfo:[]
  	}
  },
  mounted(){
  	var that  = this;
  	var id = window.location.href.split("?")[1].split("=")[1];
  	$.ajax({
  		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
  		data:{
  			goodsID:id
  		},
  		success:function(res){
  			eval(res);
  			function　callback(info){
  				that.goodsInfo = info[0];
  				var imgUrl = JSON.parse(info[0].imgsUrl)
					that.goodsimg = imgUrl
  				console.log(that.goodsInfo)
  			}
  		}
  	})
  	
  	var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
   		effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflow: {
    		rotate: 50,
    		stretch: 0,
    		depth: 100,
    		modifier: 1,
    		slideShadows : true
			}
    });
  }
}
</script>

<style>
#detbox {
  width:100%;
  height:100%;
  background:#f3eff0;
}
.swiper-container{
	width:100%;
	height:3.5rem;
}
.goodetail{
	width:100%;
	box-sizing:border-box;
	padding:0.25rem;
	font-size:0.3rem;
	line-height:0.5rem;
}
.newprice{
	color:#b90a55;
	margin-right:0.3rem;
}
.price{
	text-decoration:line-through;
	color:#888;
}
.addcart{
	position:fixed;
	bottom:0;
	left:0;
	width:100%;
	height:1rem;
	background:#a3a3a3;
}
.addcart p{
	width:4rem;
	height:0.8rem;
	background:#b72120;
	border:0.01rem solid #920300;
	line-height:0.8rem;
	text-align:center;
	font-size:0.3rem;
	color:#fff;
	border-radius:0.1rem;
	margin:auto;
	position:absolute;
	top:0;left:0;
	bottom:0;
	right:0;
}
</style>
