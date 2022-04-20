import styled, { css, DefaultTheme } from 'styled-components'
import { tint, darken } from 'polished'
import { ButtonProps } from '.'

const modifiers = {
	size: {
		large: (theme: DefaultTheme) => css`
			width: ${theme.buttonSizes.width.large};
		`,
		medium: (theme: DefaultTheme) => css`
			width: ${theme.buttonSizes.width.medium};
		`,
		small: (theme: DefaultTheme) => css`
			width: ${theme.buttonSizes.width.small};
		`,
		xsmall: (theme: DefaultTheme) => css`
			width: ${theme.buttonSizes.width.xsmall};
		`,
		xxsmall: (theme: DefaultTheme) => css`
			width: ${theme.buttonSizes.width.xxsmall};
		`
	},
	bgColor: {
		orange: (theme: DefaultTheme) => css`
			background-color: ${theme.colors.orange[500]};
			transition: 0.25s ease-in-out;

			&:hover {
				background-color: ${tint(0.2, theme.colors.orange[500])};
			}
		`,
		white: (theme: DefaultTheme) => css`
			background-color: ${theme.colors.white[500]};
			color: ${theme.colors.orange[500]};
		`,
		green: (theme: DefaultTheme) => css`
			background-color: ${theme.colors.green[500]};
			transition: 0.2s ease-in-out;

			&:hover {
				background-color: ${darken(0.05, theme.colors.green[500])};
			}
		`
	},
	border: {
		width: (theme: DefaultTheme) => css`
			border-style: solid;
			border-width: ${theme.border.width};
			border-color: ${theme.colors.orange[500]};
		`,
		radius: {
			min: (theme: DefaultTheme) => css`
				border-radius: ${theme.border.radius.min};
			`,
			medium: (theme: DefaultTheme) => css`
				border-radius: ${theme.border.radius.medium};
			`
		}
	}
}

export const Wrapper = styled.button<ButtonProps>`
	${({ theme, size, bgColor, borderRadius, hasSolidBorder }) => css`
		color: ${theme.colors.white[500]};
		font-size: ${theme.font.size.medium};
		font-weight: ${theme.font.weight.bold};
		height: 4.6rem;
		padding: ${theme.spacings.xsmall} ${theme.spacings.large};
		transition: ease-in-out 0.2s;

		${size && modifiers.size[size](theme)};
		${bgColor && modifiers.bgColor[bgColor](theme)};
		${borderRadius && modifiers.border.radius[borderRadius](theme)};
		${hasSolidBorder && modifiers.border.width(theme)};
	`}
`
