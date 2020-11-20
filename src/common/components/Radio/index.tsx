import { h, JSX } from 'preact'

import Text from 'common/components/Text'
import { Container } from './styled'

export interface RadioProps extends JSX.HTMLAttributes<HTMLInputElement> {
	label: string
}

const Radio = ({ label, ...props }: RadioProps) => {
	return (
		<Container>
			<input type="radio" {...props} />
			<Text margin="0 0 0 4px">{label}</Text>
		</Container>
	)
}

export default Radio
