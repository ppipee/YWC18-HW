import { white } from 'common/styles/colors'
import styled from 'styled-components'

export const Modal = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 100;
`

export const Header = styled.div`
	position: relative;
	width: 100%;
	height: 64px;
	background-color: #2a4365;
	display: flex;
	align-items: center;
`

export const Container = styled.div`
	flex: 1;
	background-color: ${white};
	width: 100%;
	height: 100%;
	overflow: scroll;
	padding: 36px;
`

export const IconWrapper = styled.div`
	position: absolute;
	top: 20px;
	left: 16px;
	transform: rotate(-90deg);
`
