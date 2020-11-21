import { ComponentChild, h } from 'preact'

import RouterContext from 'core/router/context'

type Props = {
	query: Record<string, string>
	children: ComponentChild
}

const RouterContextProvider = ({ children, query }: Props) => {
	return <RouterContext.Provider value={query}>{children}</RouterContext.Provider>
}

export default RouterContextProvider
