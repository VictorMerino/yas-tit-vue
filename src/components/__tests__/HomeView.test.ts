// @vitest-environment jsdom
import HomeView from '@/views/HomeView.vue'
import { render } from '@testing-library/vue'
import { createPinia, setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { beforeEach, describe, expect, test, vitest } from 'vitest'

import '@testing-library/jest-dom'

describe('HomeView', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  test('Shows active category on text input coincidence', async () => {
    const { findByText, queryByText } = render(HomeView, {
      global: { plugins: [createTestingPinia({ createSpy: vitest.fn })] },
    })
    // findByText('Graby')
    const burger = queryByText('burger')
    // console.log(burger?.innerHTML)
    expect(burger).toBeInTheDocument()
    expect(burger).toBeVisible()
  })

  test.todo('Shows text on input field when selecting coincident category')
})
