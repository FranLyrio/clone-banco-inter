import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from '.'

export default {
	title: 'Button',
	component: Button
} as ComponentMeta<typeof Button>

export const Template: ComponentStory<typeof Button> = (props) => (
	<Button {...props} />
)

Template.args = {
	children: 'Quero ser Inter'
}
