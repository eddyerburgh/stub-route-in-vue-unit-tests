import Vue from 'vue'
import {mount} from 'avoriaz'
import Component from '@/components/Component'

describe('Component.vue', () => {
  // Vanilla - naive
  it('renders $router.name', () => {
    const $route = {
      name: 'test name - naive'
    }
    Vue.prototype.$route = $route

    const Constructor = Vue.extend(Component)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).to.equal($route.name)
  })

  // Vanilla - enlightened
  it('renders $router.name', () => {
    const scopedVue = Vue.extend()
    const $route = {
      name: 'test name - enlightened'
    }
    scopedVue.prototype.$route = $route

    const Constructor = scopedVue.extend(Component)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).to.equal($route.name)
  })

  // Using avoriaz
  it('renders $router.name', () => {
    const instance = Vue.extend()
    const $route = {
      name: 'test name - avoriaz'
    }
    const wrapper = mount(Component, {
      globals: { $route },
      instance
    })
    expect(wrapper.text()).to.equal($route.name)
  })
})
