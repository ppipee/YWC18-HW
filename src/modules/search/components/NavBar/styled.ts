import styled from 'styled-components'

import ContentContainer from 'common/components/ContentContainer'
import Flex from 'common/components/Flex'
import { gray } from 'common/styles/colors'
import { media } from 'common/styles/utils/viewport'

export const NavWrapper = styled(Flex)`
	height: 60px;
	background-color: white;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	box-sizing: border-box;
`

export const Logo = styled.img`
	height: 40px;
`

export const ProvinceWrapper = styled.div`
	width: 200px;
	padding: 1px;
	.css-rlv3vt-control {
		border: none !important;
	}
	border-right: 1px solid ${gray[100]};
`

export const SearchContainer = styled(Flex)`
	padding-left: 4px;
	border-radius: 12px;
	flex: 1;
	border: 1px solid ${gray[100]};
`

export const EmptyBox = styled.div`
	height: 60px;
	width: 100%;
`

export const Container = styled(ContentContainer)`
	display: flex;
	align-items: center;
	max-width: 1280px;
	height: 100%;
	width: 100%;
	& > * {
		width: 100%;
	}

	${media.md`
		padding:0 16px;
	`}
`

export const SearchIconWrapper = styled(Flex)`
	width: 62px;
	height: 40px;
	box-sizing: border-box;
	border-radius: 0 12px 12px 0;
	background-color: #f8f8f8;
`
