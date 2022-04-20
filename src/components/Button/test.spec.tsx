import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helper'
import theme from '../../styles/theme'

import Button from '.'

describe('<Button />', () => {
	it('should render Button', () => {
		renderWithTheme(<Button>My button</Button>)

		const button = screen.getByRole('button', { name: /my button/i })

		expect(button).toBeInTheDocument()
	})

	it('should render Button with orange background by default', () => {
		renderWithTheme(<Button>My button</Button>)

		const button = screen.getByRole('button', { name: /my button/i })
		expect(button).toHaveStyle({ 'background-color': theme.colors.orange[500] })
	})

	it('should render Button with white background when this property is passed', () => {
		renderWithTheme(<Button bgColor="white">My button</Button>)

		const button = screen.getByRole('button', { name: /my button/i })
		expect(button).toHaveStyle({ 'background-color': theme.colors.white[500] })
	})

	it('should render Button with green background when this property is passed', () => {
		renderWithTheme(<Button bgColor="green">My button</Button>)

		const button = screen.getByRole('button', { name: /my button/i })
		expect(button).toHaveStyle({ 'background-color': theme.colors.green[500] })
	})

	it('should render Button with minimum border radius by default', () => {
		renderWithTheme(<Button>My button</Button>)

		const button = screen.getByRole('button', { name: /my button/i })
		expect(button).toHaveStyle({ 'border-radius': theme.border.radius.min })
	})

	it('should render Button with medium border radius when this property is passed', () => {
		renderWithTheme(<Button borderRadius="medium">My button</Button>)

		const button = screen.getByRole('button', { name: /my button/i })
		expect(button).toHaveStyle({ 'border-radius': theme.border.radius.medium })
	})

	it('should render Button without solid border by default', () => {
		renderWithTheme(<Button>My button</Button>)

		const button = screen.getByRole('button', { name: /my button/i })
		expect(button).not.toHaveStyle({ 'border-width': '0.2rem' })
	})

	it('should render Button with orange solid border when this property is passed', () => {
		renderWithTheme(<Button hasSolidBorder>My button</Button>)

		const button = screen.getByRole('button', { name: /my button/i })
		expect(button).toHaveStyle({
			'border-style': 'solid',
			'border-width': theme.border.width,
			'border-color': theme.colors.orange[500]
		})
	})

	it('should render large Button by default', () => {
		renderWithTheme(<Button>My button</Button>)

		const button = screen.getByRole('button', { name: /my button/i })
		expect(button).toHaveStyle({
			width: theme.buttonSizes.width.large
		})
	})

	it('should render medium Button when this property is passed', () => {
		renderWithTheme(<Button size="medium">My button</Button>)

		const button = screen.getByRole('button', { name: /my button/i })
		expect(button).toHaveStyle({
			width: theme.buttonSizes.width.medium
		})
	})

	it('should render small Button when this property is passed', () => {
		renderWithTheme(<Button size="small">My button</Button>)

		const button = screen.getByRole('button', { name: /my button/i })
		expect(button).toHaveStyle({
			width: theme.buttonSizes.width.small
		})
	})

	it('should render xsmall Button when this property is passed', () => {
		renderWithTheme(<Button size="xsmall">My button</Button>)

		const button = screen.getByRole('button', { name: /my button/i })
		expect(button).toHaveStyle({
			width: theme.buttonSizes.width.xsmall
		})
	})

	it('should render xxsmall Button when this property is passed', () => {
		renderWithTheme(<Button size="xxsmall">My button</Button>)

		const button = screen.getByRole('button', { name: /my button/i })
		expect(button).toHaveStyle({
			width: theme.buttonSizes.width.xxsmall
		})
	})
})
