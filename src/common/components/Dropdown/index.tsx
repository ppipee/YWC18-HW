import { h } from 'preact'

import DropdownIndicator from 'common/components/Dropdown/components/DropdownIndicator'

import { StyledSelect, CustomDropDownStyles } from './styled'
import { SelectedItem, DropdownProps } from './types'

const Dropdown = ({
	items,
	onItemSelect,
	placeHolder,
	maxHeight,
	searchable = false,
	disabled = false,
}: DropdownProps) => {
	const handleChange = (selectedItem: SelectedItem) => {
		onItemSelect(selectedItem.value)
	}

	return (
		<StyledSelect
			className="highlight"
			isClearable={false}
			isSearchable={searchable}
			styles={CustomDropDownStyles}
			onChange={handleChange}
			options={items}
			placeholder={placeHolder}
			components={{ IndicatorSeparator: null, DropdownIndicator }}
			isDisabled={disabled}
			maxMenuHeight={maxHeight}
		/>
	)
}

export default Dropdown
