import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
       redirect: '/home'
    },{
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },{
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  //页面切换回到顶部
  scrollBehavior(to,from,savedPosition){
    return {x:0,y:0}
  }
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  console.log(to.name)
  const nextRoute = ['Detail'];
  let isLogin = true;  // 是否登录
  // 未登录状态；当路由到nextRoute指定页时，跳转至login

  if (nextRoute.indexOf(to.name) >= 0) {
    if (!isLogin) {
      console.log('nologin')
      router.push({ name: 'City' })
    }
  }
  // 已登录状态；当路由到login时，跳转至home
  if (to.name === 'login') {
    if (isLogin) {
      router.push({ name: 'Home' });
    }
  }
  next();
});

export default router;
