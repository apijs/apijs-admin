/**
 * @file 主入口
 * @author xuexb <fe.xiaowu@gmail.com>
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'normalize.css';
import App from './App.vue';
import routes from './route.config';

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app');