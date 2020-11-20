import Flex from 'common/components/Flex'
import { green } from 'common/styles/colors'
import styled from 'styled-components'

export const FacilityWrapper = styled(Flex)`
	border: 1px solid ${green[500]};
	margin: 0 8px 8px 0;
	border-radius: 50%;
	width: 30px;
	height: 30px;
`

export const FacilityImage = styled.img`
	width: 18px;
	height: 18px;
	object-fit: cover;
`
