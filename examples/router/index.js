import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/test',
      name: 'test',
      component: r => require.ensure([], () => r(require('../docs/test.md')))
    },
    {
      path: '/button',
      name: 'button',
      component: r => require.ensure([], () => r(require('../docs/button.md')))
    },
    {
      path: '/alert',
      name: 'alert',
      component: r => require.ensure([], () => r(require('../docs/alert.md')))
    },
    {
      path: '/card',
      name: 'card',
      component: r => require.ensure([], () => r(require('../docs/card.md')))
    }
  ]
})
