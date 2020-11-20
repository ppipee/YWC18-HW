import { createContext } from 'preact'

import { FetchStateProps } from 'common/stores/hooks/useFetching/index'
import { Shop } from 'common/types/shop'

export interface SearchContextType extends FetchStateProps {
	shop: Shop
}

const SearchContext = createContext<SearchContextType | null>(null)

export default SearchContext
