import { VNode, JSX } from 'preact'
import { ReactText } from 'react'

import { OptionTypeBase, PropsWithStyles, CommonProps, InnerRef, OptionsType } from 'react-select'

export interface InnerProps {
	id: string
	key: string
	onClick: JSX.GenericEventHandler<HTMLDivElement>
	onMouseMove: JSX.GenericEventHandler<HTMLDivElement>
	onMouseOver: JSX.GenericEventHandler<HTMLDivElement>
	tabIndex: number
}

export interface State {
	isDisabled: boolean
	isFocused: boolean
	isSelected: boolean
}

export interface SelectedItem {
	label: VNode | ReactText
	value: ReactText
}

export type OptionProps<OptionType extends OptionTypeBase> = PropsWithStyles &
	CommonProps<OptionType> &
	State & {
		/** The children to be rendered. */
		children: VNode
		/** Inner ref to DOM Node */
		innerRef: InnerRef
		/** props passed to the wrapping element for the group. */
		innerProps: InnerProps
		/* Text to be displayed representing the option. */
		label: string
		/* Type is used by the menu to determine whether this is an option or a group.
    In the case of option this is always `option`. */
		type: 'option'
		/* The data of the selected option. */
		data: SelectedItem
	}

export interface DropdownProps {
	items: OptionsType<OptionTypeBase>
	onItemSelect: (value: any) => void
	placeHolder: string
	maxHeight: number
	searchable?: boolean
	disabled?: boolean
	defaultValue?: { label: any; value: any }
}
