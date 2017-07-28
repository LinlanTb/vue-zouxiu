<template>
  <div id="app">
  	<transition name="slide">
			<router-view></router-view>
  	</transition>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  width:100%;
  height:100%;
}
.slide-enter-active,.slide-leave-active{
  transition:all .3s;
}
.slide-enter{
  transform:translateX(100%);
}
.slide-leave-to{
  transform:translateX(-100%);
}
</style>
