import { ComponentChild, h } from 'preact'

type Props = {
	children: ComponentChild
}

const RootPage = ({ children }: Props) => {
	return <div>{children}</div>
}

export default RootPage
