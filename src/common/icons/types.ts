import { ComponentType, JSX } from 'preact'

export interface IconProps extends JSX.SVGAttributes<SVGSVGElement> {
	size: number
	color: string
}

export type IconComponent = ComponentType<IconProps>
