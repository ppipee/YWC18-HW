import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import { gray, white } from 'common/styles/colors'
import styled from 'styled-components'

export const NotFoundShopContainer = styled.div`
	padding: 72px 0;
	text-align: center;
`

export const LoadMoreButton = styled(Flex)`
	width: 384px;
	height: 50px;
	color: black;
	border-radius: 4px;
	padding: 8px 12px;
	border: 1px solid ${gray[100]};
	margin-bottom: 12px;
	background-color: ${white};

	&:hover {
		border: 1px solid #9bd5f2;
		color: #9bd5f2;
	}
	&:active {
		border: 1px solid #8dcff1;
		color: #8dcff1;
	}
`

export const List = styled(Gap)`
	width: 100%;
`
