import { ComponentChild, h } from 'preact'

import useFetching from 'common/stores/hooks/useFetching'
import { Shop } from 'common/types/shop'

import SearchContext from 'modules/search/context'

type Props = {
	children: ComponentChild
}

const SearchContextProvider = ({ children }: Props) => {
	const { data, ...fetchProps } = useFetching<Shop>('https://panjs.com/ywc18.json')

	return (
		<SearchContext.Provider
			value={{
				shop: data,
				...fetchProps,
			}}
		>
			{children}
		</SearchContext.Provider>
	)
}

export default SearchContextProvider
