import { mount } from '@vue/test-utils'
import Gridcard from '@/components/Gridcard'

describe('Testing Gridcard.vue', () => {
  it('should render the lesson title', () => {
    // when
    const wrapper = mount(Gridcard, {
      propsData: {
        person: {
          id: 1,
          title: 'dogalu',
          description: 'text',
          punkte: 35
        }
      }
    })

    // then
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('dogalu')
  })
})
