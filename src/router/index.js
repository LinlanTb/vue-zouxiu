import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/register'
import Main from '@/components/main'
import Home from "@/components/main/home"
import Classify from "@/components/main/classify"
import Myshow from "@/components/main/myshow"
import Showcart from "@/components/main/shopcart"
import More from "@/components/main/more"
import Detail from "@/components/main/goodDetail"
Vue.use(Router)

export default new Router({
  routes: [
  			{
        	path:"/",
        	name:"Main",
        	component:Main,
        	children:[
        		{
        			path:"/home",
        			component:Home
        		},
        		{
        			path:"/classify",
        			component:Classify
        		},
        		{
        			path:"/myshow",
        			component:Myshow
        		},
        		{
        			path:"/shopcart",
        			component:Showcart
        		},
        		{
        			path:"/more",
        			component:More
        		}
        	]
       	},
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        },
        {
          path: '/goodetail',
          name: 'Login',
          component: Detail
        },
        {
        	path:"/home",
        	redirect:"/"
        }
      ]
})
