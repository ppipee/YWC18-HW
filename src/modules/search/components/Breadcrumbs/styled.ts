import ContentContainer from 'common/components/ContentContainer'
import { navy } from 'common/styles/colors'
import { media } from 'common/styles/utils/viewport'
import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 48px;
	width: 100%;
	background-color: ${navy[500]};
`

export const Container = styled(ContentContainer)`
	display: flex;
	align-items: center;
	max-width: 1280px;
	height: 100%;

	${media.md`
		padding:0 16px;
	`}
`
