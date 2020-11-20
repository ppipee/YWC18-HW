import { h } from 'preact'

import { IconProps } from '../types'

const ArrowDownIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg fill="none" height={size} viewBox="0 0 12 8" width={size} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="m5.99995 7.50009c-.2559 0-.5117-.0977-.707-.293l-5-5c-.3906-.3906-.3906-1.0234 0-1.414103.3906-.3907 1.0234-.3906 1.4141 0l4.2929 4.293003 4.29295-4.293003c.3906-.3906 1.0234-.3906 1.4142 0 .3907.390603.3906 1.023403 0 1.414103l-5.00005 5c-.1954.1953-.4512.293-.7071.293z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default ArrowDownIcon
