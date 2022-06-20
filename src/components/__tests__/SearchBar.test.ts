import { render, fireEvent } from '@testing-library/vue'
import { test } from 'vitest'
import SearchBar from '../SearchBar.vue'

test('increments value on click', async () => {
  // The render method returns a collection of utilities to query your component.
  const { getByTestId, getByPlaceholderText } = render(SearchBar, {
    props: { activeItem: 'Pizza' },
  })

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  getByTestId('search-input')

  const inputField = getByTestId('search-input')
  getByPlaceholderText('Search restaurant type')
  // Dispatch a native click event to our button element.
  // await fireEvent.update(inputField, 'Pizza')
})
