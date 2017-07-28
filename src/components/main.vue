<template>
  <div id="mainbox">
		<MainHeader class="mainhead" headtitle="新品上市" :isHaseBack="false"></MainHeader>
		<MainSection class="mainsec">
			<transition name="fade">
				<router-view></router-view>
			</transition>
		</MainSection>
		<MainFooter class="mainfoot"></MainFooter>
  </div>
</template>

<script>
import MainHeader from "@/components/mainHeader"
import MainSection from "@/components/mainSection"
import MainFooter from "@/components/mainFooter"
export default {
  components:{
  	MainHeader,
  	MainSection,
  	MainFooter
  },
  name:"Main"
}
</script>

<style>
#mainbox {
  width:100%;
  height:100%;
  display: flex;
  flex-direction:column;
}
.mainhead{
	width:100%;
	height:0.8rem;
	background:#A90506;
}
.mainsec{
	width:100%;
	flex:1;
	overflow:auto;
}
.mainfoot{
	width:100%;
	height:0.98rem;
	background:#484850;
}
.fade-enter-active,.fade-leave-active{
	transition: all 0.2s;
}
.fade-enter{
  transform:translateX(100%);
}
.fade-leave-to{
  transform:translateX(-100%);
}
</style>
