import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createServer, Model } from 'miragejs'

import VueMask from 'v-mask';
import JwPagination from 'jw-vue-pagination';
Vue.use(VueMask)
Vue.component('jw-pagination', JwPagination);

createServer({
  models: {
    user: Model
  },
  routes() {
    this.namespace = 'api'
    
    this.get('/users', (schema, request) => {
      return schema.users.all()
    } )

    this.post('/users', (schema, request) => {
      let user = JSON.parse(request.requestBody)

      return schema.users.create(user)
    })

    this.get('/users/:id', (schema, request) => {
      let data = JSON.parse(request.requestBody)
      let id = request.params.id
      let user = schema.users.find(id)

      return user.update(data)
    }, { timing: 2000 })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')