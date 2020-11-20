import { useState, useCallback } from 'preact/hooks'

function useSwitch(defaultValue = false) {
	const [isOpen, setIsOpen] = useState(defaultValue)
	const open = useCallback(() => setIsOpen(true), [setIsOpen])
	const close = useCallback(() => setIsOpen(false), [setIsOpen])

	return { isOpen, open, close }
}

export default useSwitch
