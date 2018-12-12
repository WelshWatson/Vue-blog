import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import '../styles.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);

// Routes
// const Home = { template: '<div>home</div>' };
// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };
// const Unicode = { template: '<div>unicode</div>' };

// Router
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     { path: '/', component: Home },
//     { path: '/foo', component: Foo },
//     { path: '/bar', component: Bar },
//     { path: '/é', component: Unicode }
//   ]
// });

new Vue({
  render: h => h(App),
}).$mount('#app');
