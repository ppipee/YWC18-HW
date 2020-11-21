import { h } from 'preact'
import { Route, Router, RouterOnChangeArgs } from 'preact-router'

import Search from 'modules/search'
import NotFoundPage from 'modules/notfound'
import RootPage from 'modules/root'
import { useState } from 'preact/hooks'
import RouterContextProvider from 'core/router/context/RouterContextProvider'

const App = () => {
	const [query, setQuery] = useState<Record<string, string>>({})

	const handleRoute = (e: RouterOnChangeArgs) => {
		const router = e.current.props as any

		setQuery(router.matches)
	}

	return (
		<div id="app">
			<RootPage>
				<RouterContextProvider query={query}>
					<Router onChange={handleRoute}>
						<Route path="/" component={Search} />
						<NotFoundPage default />
					</Router>
				</RouterContextProvider>
			</RootPage>
		</div>
	)
}

export default App
