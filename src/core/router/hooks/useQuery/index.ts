import { useContext } from 'preact/hooks'

import RouterContext from 'core/router/context'

export default function useQuery() {
	return useContext(RouterContext)
}
