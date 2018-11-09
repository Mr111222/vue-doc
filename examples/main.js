// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
// import router from './router'
import router from './route.config'
import DemoBlock from './components/demo-block.vue'
import SideNav from './template/side-nav.vue';
import Element from 'element-ui'
import './assets/src/index.scss'

Vue.use(Element)
Vue.use(VueRouter);

Vue.config.productionTip = false
Vue.component("demo-block", DemoBlock);
Vue.component('side-nav', SideNav);



new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
