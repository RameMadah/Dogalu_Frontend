import { flushPromises, shallowMount } from '@vue/test-utils'
import BlogWall from '@/components/BlogWall'

describe('BlogWall.vue', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('renders the Blog description when passed', async () => {
    fetch.mockResponseOnce(JSON.stringify([
      { id: 1, title: 'super', description: 'text', author: 'rame' }
    ]))
    const here = 'rendering Blog description'
    const wrapper = shallowMount(BlogWall, {
      props: { here }
    })
    await flushPromises()
    const location = wrapper.get('.tex')
    expect(location.text()).toMatch('text')
  })
})
