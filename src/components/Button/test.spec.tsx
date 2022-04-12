import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helper'

import Button from '.'

describe('<Button />', () => {
	it('should render Button', () => {
		renderWithTheme(<Button>My button</Button>)

		const button = screen.getByRole('button', { name: /my button/i })

		expect(button).toBeInTheDocument()
	})
})
