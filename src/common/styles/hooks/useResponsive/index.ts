import useMatchResolution from 'common/styles/hooks/useMatchResolution'

function useResponsive() {
	const isMobile = useMatchResolution({ max: 'xs' })
	const isDesktop = useMatchResolution({ min: 'lg' })

	return { isMobile, isDesktop }
}

export default useResponsive
