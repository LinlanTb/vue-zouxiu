<template>
  <div id="loginbox">
      <header>开心摇摇用户登录</header>
      <section>
				<input type="text" placeholder="请输入账户" class="userinfo"/>
				<input type="password" placeholder="请输入密码" class="userinfo"/>
				<label>
					<input type="checkbox" class="check" />
					<span>显示密码</span>
					<a href="#">忘记密码？</a>
				</label><label>
					<input type="checkbox" class="check" />
					<span>记住密码自动登录</span>
				</label>
				<input type="button" value="登录" class="login"/>
				<input type="button" value="注册" class="reg" @click="toRegister"/>
      </section>
  </div>
</template>

<script>
export default {
  methods:{
  	toRegister(){
  		this.$router.push("/register")
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
}
section{
	padding:0.4rem;
	font-size:0.3rem;
}
.userinfo{
	width:100%;
	height:0.8rem;
	border:none;
	display:block;
	outline:none;
	margin-bottom:0.1rem;
	border-radius:0.1rem;
	padding-left:0.2rem;
}
label{
	display:block;
	margin-top:0.5rem;
	overflow:hidden;
}
.check{
	float:left;
	width:0.4rem;
	height:0.4rem;
	background:#f3eff0;
}
label span{
	float:left;
	margin:0 0.2rem;
}
label a{
	float:left;
	text-decoration:none;
	color:#ff0e52;
	margin-left:0.2rem;
}
.login,.reg{
	display:block;
	width:100%;
	box-sizing:border-box;
	border-radius:0.1rem;
	height:0.9rem;
	font-size:0.4rem;
	color:#fff;
}
.login{
	background:#b40607;
	border:0.01rem solid #840000;
	box-shadow: 0.01rem 0.01rem 0.1rem #c66c9f;
	margin-top:0.5rem;
}
.reg{
	background:#585858;
	border:0.01rem solid #000;
	box-shadow: 0.01rem 0.01rem 0.1rem #c66c9f;
	margin-top:0.1rem;
}
</style>
