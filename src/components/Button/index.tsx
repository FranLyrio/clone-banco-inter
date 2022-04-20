import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	size?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large'
	bgColor?: 'orange' | 'white' | 'green'
	borderRadius?: 'min' | 'medium'
	hasSolidBorder?: boolean
}

const Button = ({
	children,
	size = 'large',
	bgColor = 'orange',
	borderRadius = 'min',
	hasSolidBorder = false,
	...props
}: ButtonProps) => (
	<S.Wrapper
		borderRadius={borderRadius}
		hasSolidBorder={hasSolidBorder}
		bgColor={bgColor}
		size={size}
		{...props}
	>
		{children}
	</S.Wrapper>
)

export default Button
