import { media } from 'common/styles/utils/viewport'
import { BreakPoints } from 'common/styles/utils/viewport/screenSizes'
import styled from 'styled-components'

const DESKTOP_WIDTH = `${BreakPoints.lg}px`
const MOBILE_WIDTH = `${BreakPoints.md}px`

const ContentContainer = styled.div`
	background: transparent;
	max-width: ${DESKTOP_WIDTH};
	margin: auto;

	${media.md`
  	max-width: ${MOBILE_WIDTH};
  `}
`

export default ContentContainer
