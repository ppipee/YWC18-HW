import { h } from 'preact'

import { IconProps } from '../types'

const ArrowUpIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg width={size} height={size} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M11.0001 7.49995C10.7442 7.49995 10.4884 7.40225 10.2931 7.20695L6.00009 2.91405L1.70709 7.20705C1.31649 7.59765 0.683688 7.59765 0.292987 7.20705C-0.0977125 6.81645 -0.0976125 6.18365 0.292987 5.79295L5.29299 0.79295C5.68359 0.40235 6.31639 0.40235 6.70709 0.79295L11.7071 5.79295C12.0977 6.18355 12.0977 6.81635 11.7071 7.20705C11.5118 7.40225 11.256 7.49995 11.0001 7.49995Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default ArrowUpIcon
