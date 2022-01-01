import { flushPromises, shallowMount } from '@vue/test-utils'
import Gridcard from '@/components/Gridcard'

describe('Gridcard.vue', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('renders the title when passed', async () => {
    fetch.mockResponseOnce(JSON.stringify([
      { lid: 1, title: 'super', description: 'text', punkte: 35 }
    ]))
    const here = 'title'
    const wrapper = shallowMount(Gridcard, {
      props: { here }
    })
    await flushPromises()
    const location = wrapper.get('#exampleModalLabel')
    expect(location.text()).toMatch('super')
  })
  it('renders the description when passed', async () => {
    fetch.mockResponseOnce(JSON.stringify([
      { lid: 1, title: 'super', description: 'text', punkte: 35 }
    ]))
    const here = 'title'
    const wrapper = shallowMount(Gridcard, {
      props: { here }
    })
    await flushPromises()
    const location = wrapper.get('.modal-body')
    expect(location.text()).toMatch('text')
  })
  it('renders the EXP points when passed', async () => {
    fetch.mockResponseOnce(JSON.stringify([
      { lid: 1, title: 'super', description: 'text', punkte: 35 }
    ]))
    const here = 'title'
    const wrapper = shallowMount(Gridcard, {
      props: { here }
    })
    await flushPromises()
    const location = wrapper.get('.text-muted')
    expect(location.text()).toMatch('35')
  })
})
