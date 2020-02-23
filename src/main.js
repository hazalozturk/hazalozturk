import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import VueRouter from 'vue-router';
const aboutPage = () => import('@/components/aboutPage');
const skillsPage = () => import('@/components/skillsPage');
const homePage = () => import('@/components/homePage');


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: homePage },
  { path: '/about', component: aboutPage },
  { path: '/skills', component: skillsPage }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

Sentry.init({
  dsn: 'https://d8b794e1bd8f4157913c89372fcb5ec3@sentry.io/1801469',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
});