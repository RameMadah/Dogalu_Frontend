import { mount } from '@vue/test-utils'
import Gridcard from '@/components/Gridscard'
import PersonCard from '@/components/PersonCard'

describe('Testing GridCardList.vue', () => {
  it('should render a person card for each person', () => {
    // when
    const wrapper = mount(Gridcard, {
      propsData: {
        persons: [
          {
            id: 1,
            title: 'dogalu',
            description: 'text',
            punkte: 35
          },
          {
            id: 2,
            title: 'dogalu2',
            description: 'text2',
            punkte: 45
          }
        ]
      }
    })

    // then
    const personCards = wrapper.findAllComponents(PersonCard)
    expect(personCards.length).toBe(2)
  })
})
