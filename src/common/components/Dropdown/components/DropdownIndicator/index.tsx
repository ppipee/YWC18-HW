import { h } from 'preact'

import { components, IndicatorProps, OptionTypeBase } from 'react-select'

import ArrowDownIcon from 'common/icons/ArrowDownIcon'
import ArrowUpIcon from 'common/icons/ArrowUpIcon'
import { gray } from 'common/styles/colors'

const ICON_SIZE = 12

const DropdownIndicator = ({ ...props }: IndicatorProps<OptionTypeBase>) => {
	return (
		components.DropdownIndicator && (
			<components.DropdownIndicator {...(props as any)}>
				{props.selectProps.menuIsOpen ? (
					<ArrowUpIcon size={ICON_SIZE} color={gray[500]} />
				) : (
					<ArrowDownIcon size={ICON_SIZE} color={gray[500]} />
				)}
			</components.DropdownIndicator>
		)
	)
}

export default DropdownIndicator
