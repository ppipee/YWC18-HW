import { h } from 'preact'

import { OpenStatus } from 'common/types/shop'

import { Badge } from './styled'
import Text from 'common/components/Text'

type Props = {
	isOpen: OpenStatus
}

const STATUS_MAPPER: Record<OpenStatus, string> = {
	Y: 'เปิดอยู่',
	N: 'ปิดแล้ว',
	'N/A': '',
}

const OpenStatusBadge = ({ isOpen }: Props) => {
	return (
		<Badge isOpen={isOpen}>
			<Text weight="bold" size="14px">
				{STATUS_MAPPER[isOpen]}
			</Text>
		</Badge>
	)
}

export default OpenStatusBadge
