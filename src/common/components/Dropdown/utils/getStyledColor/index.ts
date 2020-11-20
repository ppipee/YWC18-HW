import { black, gray } from 'common/styles/colors'

function getColorOption(selected: boolean, disabled: boolean, hover?: boolean) {
	if (disabled) return gray[100]
	if (selected) return black
	if (hover) return gray[100]
	else return gray[500]
}

export default getColorOption
