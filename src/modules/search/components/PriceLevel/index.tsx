import { h } from 'preact'

import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'

type Props = {
	priceLevel: number
}

const MAX_LEVEL = 4

const PriceLevel = ({ priceLevel }: Props) => {
	return (
		<Text as="span" size="18px">
			<span>{'฿'.repeat(priceLevel)}</span>
			<Text color={gray[300]}>{'฿'.repeat(MAX_LEVEL - priceLevel)}</Text>
		</Text>
	)
}

export default PriceLevel
