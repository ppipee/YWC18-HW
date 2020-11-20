import { FunctionalComponent, h } from 'preact'
import { Route, Router } from 'preact-router'

import Search from 'modules/search'
import NotFoundPage from 'modules/notfound'
import RootPage from 'modules/root'
import history from 'core/router/history'

const App: FunctionalComponent = () => {
	return (
		<div id="app">
			<RootPage>
				<Router history={history as any}>
					<Route path="/" component={Search} />
					<NotFoundPage default />
				</Router>
			</RootPage>
		</div>
	)
}

export default App
