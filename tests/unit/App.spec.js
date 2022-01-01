import { mount, shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Gridcard from '@/components/Gridcard'
import App from '@/App'

describe('Mounted App', () => {
  const wrapper = mount(App)

  it('should does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('renders the correct markup & check html', () => {
    const wrapper = mount(Gridcard)
    expect(wrapper.html(Gridcard)).toContain('EXP')
  })
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
