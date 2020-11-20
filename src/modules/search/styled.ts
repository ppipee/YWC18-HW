import ContentContainer from 'common/components/ContentContainer'
import { media } from 'common/styles/utils/viewport'
import styled from 'styled-components'

const LEFT_WIDTH = '350px'

export const LeftSection = styled.div`
	width: ${LEFT_WIDTH};

	${media.md`
		display:none;
	`}
`

export const RightSection = styled.div`
	width: 100%;
	flex: 1;
`

export const Container = styled(ContentContainer)`
	padding: 24px 16px;
	height: 100%;
`

export const Background = styled.div`
	/* position: fixed; */
	background-image: url('../../common/images/result-bg.png');
	min-height: calc(100vh - 108px);
	background-position: center center;
	background-size: cover;
	z-index: -1;
	width: 100%;
`
