import { mount, shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Gridcard from '@/components/Gridcard'

describe('general components of App', () => {
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
