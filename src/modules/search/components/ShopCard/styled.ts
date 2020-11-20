import styled from 'styled-components'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'
import { media } from 'common/styles/utils/viewport'

const IMG_SIZE = '250px'

export const ShopImage = styled.img`
	object-fit: cover;
	height: ${IMG_SIZE};
	width: ${IMG_SIZE};
	padding: 4px;
	border-radius: 8px;

	${media.md`
		width: 100%;
		border-radius: 4px;
		padding: 0;
	`}
`

export const DetailContainer = styled.div`
	flex: 1;
	padding: 16px 8px 16px 12px;
`

export const Card = styled(Gap)`
	border: 1px solid black;
`

export const Title = styled(Text)`
	min-width: 0;
`

export const Line = styled.div`
	margin: 20px 0;
	height: 0.5px;
	background-color: ${gray[100]};
	border-radius: 1px;
	width: 70%;
`

export const DetailList = styled(Flex)`
	& > span:not(:last-child) {
		&::after {
			content: '|';
			font-size: 16px;
			margin: 0 16px;
			color: ${gray[500]};
		}
	}
`
