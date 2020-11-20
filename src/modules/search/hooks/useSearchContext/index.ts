import { useContext } from 'preact/hooks'

import SearchContext from 'modules/search/context'

export default function useSearchContext() {
	return useContext(SearchContext)
}
