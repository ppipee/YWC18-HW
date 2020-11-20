import { gray, green, white } from 'common/styles/colors'
import { OpenStatus } from 'common/types/shop'
import styled, { css } from 'styled-components'

type BadgeProps = {
	isOpen: OpenStatus
}

function getBackgroundColor({ isOpen }: BadgeProps) {
	let color = gray[500]

	if (isOpen === OpenStatus.Closed) {
		color = gray[500]
	} else if (isOpen === OpenStatus.Open) {
		color = green[500]
	}

	return css`
		background-color: ${color};
	`
}

export const Badge = styled.div`
	padding: 4px 8px;
	color: ${white};
	border-radius: 4px;
	height: 28px;

	${getBackgroundColor}
`
