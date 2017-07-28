<template>
  <div id="loginbox">
      <header>
      	<span @click="toGo">&lt;</span>
      	用户注册
      </header>
      <section>
	      <label>
	      	<span>账户名称：</span>
	      	<input type="text" placeholder="请输入账户"/>
	      </label>
	      <label>
	      	<span>登录密码：</span>
	      	<input type="text" placeholder="请输入密码"/>
	      </label>
	      <label>
	      	<span>确认密码：</span>
	      	<input type="text" placeholder="请输入密码"/>
	      </label>
	      <input type="button" value="确定注册" class="surereg"/>
      </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods:{
  	toGo(){
  		this.$router.go(-1);
  	}
  }
}
</script>

<style>
#loginbox {
  width:100%;
  height:100%;
  display:-webkit-flex;
  flex-direction:column;
  background:#f3eff0;
  text-align: center;
}
header{
  width:100%;
  height:0.8rem;
  line-height:0.8rem;
  text-align:center;
  color:#fff;
  background:#a90506;
  font-size:0.3rem;
  position:relative;
}
header span{
	position:absolute;
	left:0.2rem;
	font-family: cursive;
	font-size:0.5rem;
}
section{
	padding:0.4rem;
	font-size:0.3rem;
}
label{
	display:block;
	margin-bottom:0.3rem;
	width:100%;
	height:0.8rem;
	padding:0 0.15rem;
	line-height:0.8rem;
	border-radius:0.1rem;
	background:#fff;
	box-sizing:border-box;
}
label input{
	border:none;
	outline:none;
}
.surereg{
	width:100%;
	height:0.9rem;
	color:#fff;
	background:#c30706;
	border:0.01rem solid #840000;
	border-radius:0.1rem;
	margin-top:1rem;
	font-size:0.4rem;
}
</style>
