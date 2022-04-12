import styled, { css } from 'styled-components'
import { tint } from 'polished'

export const Wrapper = styled.button`
	${({ theme }) => css`
		background-color: ${theme.colors.orange[500]};
		color: ${theme.colors.white[500]};
		font-size: ${theme.font.size.medium};
		font-weight: ${theme.font.weight.bold};
		border-radius: ${theme.border.radius.min};
		height: 4.6rem;
		width: ${theme.buttonSizes.width.large};
		padding: ${theme.spacings.xsmall} ${theme.spacings.large};
		transition: ease-in-out 0.2s;

		&:hover {
			background-color: ${tint(0.2, theme.colors.orange[500])};
		}
	`}
`
