import Flex from 'common/components/Flex'
import { gray } from 'common/styles/colors'
import styled from 'styled-components'

export const NavWrapper = styled(Flex)`
	height: 60px;
	background-color: white;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 0 12px;
	box-sizing: border-box;
`

export const Logo = styled.img`
	height: 40px;
`

export const SearchInput = styled.input`
	border: none;
	outline: none;
	padding: 8px 12px;
	font-size: 16px;
	width: 100;
	flex: 1;
`

export const ProvinceWrapper = styled.div`
	width: 200px;
	.css-1iyop7z-control {
		border: none;
	}
`

export const SearchContainer = styled(Flex)`
	border-radius: 8px;
	flex: 1;
	border: 1px solid ${gray[500]};
`

export const EmptyBox = styled.div`
	height: 60px;
	width: 100%;
`
