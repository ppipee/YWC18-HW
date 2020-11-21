import { useState } from 'preact/hooks'

const useOnChange = (defaultValue: string | number = '', functions?: ((value?: any) => void)[]) => {
	const [keyword, setKeyword] = useState(defaultValue)

	const onChange = ({ target }: { target: any }) => {
		const value = target.value as string | number
		setKeyword(value)
		functions && functions.forEach(callbackFunction => callbackFunction(value))
	}

	return { keyword, setKeyword, onChange }
}

export default useOnChange
