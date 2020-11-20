import { useState, useCallback } from 'preact/hooks'

function useToggle(defaultValue = false) {
	const [isOpen, setIsOpen] = useState(defaultValue)
	const toggle = useCallback(() => setIsOpen(!isOpen), [setIsOpen, isOpen])

	return { isOpen, toggle }
}

export default useToggle
