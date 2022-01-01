import { flushPromises, shallowMount } from '@vue/test-utils'
import AddLesson from '@/components/AddLesson'

describe('AddLesson.vue', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('check if  the title is there', async () => {
    fetch.mockResponseOnce(JSON.stringify([
      { lid: 1, title: 'super', description: 'text', punkte: 35 }
    ]))

    const wrapper = shallowMount(AddLesson)
    await flushPromises()
    const location = wrapper.get('#title')
    expect(location.exists()).toBeTruthy()
  })
  it('check if  the Description is there', async () => {
    fetch.mockResponseOnce(JSON.stringify([
      { lid: 1, title: 'super', description: 'text', punkte: 35 }
    ]))

    const wrapper = shallowMount(AddLesson)
    await flushPromises()
    const location = wrapper.find('#description')
    expect(location.exists()).toBeTruthy()
  })
})
