import Select, { ControlProps, OptionTypeBase, IndicatorProps, ValueContainerProps } from 'react-select'
import styled from 'styled-components'

import { OptionProps } from 'common/components/Dropdown/types'
import getColorOption from 'common/components/Dropdown/utils/getStyledColor'

import { State } from './types'
import { gray, white, black } from 'common/styles/colors'

export const StyledSelect = styled(Select)`
	outline: none;
	text-align: 'center';
	width: 100%;
`

export const CustomDropDownStyles = {
	control: (provided: ControlProps<OptionTypeBase>) => ({
		...provided,
		color: black,
		borderColor: gray[500],
		boxShadow: 'none',
		'&:hover': {
			boxShadow: 'none',
		},
	}),
	option: (provided: OptionProps<OptionTypeBase>, state: State) => ({
		...provided,
		marginBottom: '8px',
		color: getColorOption(state.isSelected, state.isDisabled),
		background: white,
		'&:hover': {
			color: black,
			background: state.isDisabled ? white : gray[100],
		},
		'&:active': {
			color: black,
			background: gray[100],
		},
	}),
	dropdownIndicator: (provided: IndicatorProps<OptionTypeBase>) => ({
		...provided,
		padding: '1px',
		paddingLeft: '8px',
	}),
	valueContainer: (provided: ValueContainerProps<OptionTypeBase>) => ({
		...provided,
		paddingRight: '1px',
	}),
}
