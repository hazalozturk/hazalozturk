import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import VueRouter from 'vue-router';

Vue.config.productionTip = false
Vue.use(VueRouter)

const aboutPage = { template: '<aboutPage />' }
const skillsPage = { template: '<skillsPage />' }

const routes = [
  { path: '/about', name: 'about', component: aboutPage },
  { path: '/skills', name: 'skills', component: skillsPage }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

Sentry.init({
  dsn: 'https://d8b794e1bd8f4157913c89372fcb5ec3@sentry.io/1801469',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
});