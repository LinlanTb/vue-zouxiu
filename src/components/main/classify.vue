<template>
  <div id="app">
			<ul class="goodlist">
				<li v-for="item in goodslist">
					<router-link :to="'goodetail?id='+item.goodsID">
						<img :src="item.goodsListImg" />
						<p>{{item.goodsName}}</p>
						<p><span>￥{{item.discount>0?(item.price*item.discount)/10:item.price}}</span><i>￥{{item.price}}</i></p>
					</router-link>
				</li>
			</ul>
  </div>
</template>

<script>
import Classlist from "@/components/main/classlist"
import $ from "jquery"
export default {
  data(){
  	return{
  		goodslist:[]
  	}
  },
  mounted(){
  	var that = this;
  	$.ajax({
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			success:function(res){
				eval(res)
				function callback(info){
					console.log(info)
					that.goodslist = info;
				}
			}
  	})
  }
}
</script>

<style>
#app {
  width:100%;
  height:100%;
}
.listbox{
	height:0.6rem;
}
.goodlist{
	width:100%;
	overflow:auto;
}
.goodlist li{
	width:50%;
	box-sizing: border-box;
	padding:0.3rem;
	float:left;
}
.goodlist a{
	display:block;
	text-decoration:none;
}
.goodlist img{
	width:2.45rem;
	height:2.45rem;
}
.goodlist p{
	font-size:0.26rem;
	width:100%;
	height:0.4rem;
	line-height:0.4rem;
	text-align: center;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
	color:#393b3a;
}
.goodlist p span{
	float:left;
	color:#d41011;
	font-size:0.32rem;
}
.goodlist p i{
	float:right;
	color:#868686;
	text-decoration: line-through;
	margin-right:0.1rem;
}
</style>
