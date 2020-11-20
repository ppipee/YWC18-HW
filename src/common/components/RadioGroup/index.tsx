import { ChangeEvent } from 'react'

import { h, VNode } from 'preact'
import { useState, useCallback } from 'preact/hooks'

import { RadioProps } from 'common/components/Radio'
import Gap from 'common/components/Gap'

interface RadioGroupProps {
	defaultValue?: string
	children: VNode<RadioProps>[]
	onChange: (value: string) => void
}

const RadioGroup = ({ defaultValue, children, onChange }: RadioGroupProps) => {
	const [activeState, setActiveState] = useState(defaultValue || children[0].props.value)

	const checkActiveState = (value?: string) => value === activeState

	const selectRadio = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		const value: string = event.target.value

		setActiveState(value)
		onChange(value)
	}, [])

	return (
		<Gap $type="vertical" $size="8px">
			{children.map(option => ({
				...option,
				props: {
					...option.props,
					checked: checkActiveState(option.props.value as string),
					onChange: selectRadio,
				},
			}))}
		</Gap>
	)
}

export default RadioGroup
