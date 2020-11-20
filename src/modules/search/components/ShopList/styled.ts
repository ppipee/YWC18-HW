import styled from 'styled-components'

export const List = styled.div`
	display: flex;
	flex-direction: column;

	& > *:not(:last-child) {
		margin-bottom: 8px;
	}
`
