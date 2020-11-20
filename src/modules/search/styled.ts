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
`
