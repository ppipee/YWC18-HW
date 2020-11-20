import { h } from 'preact'
import { useCallback, useEffect } from 'preact/hooks'

import history from 'core/router/history'
import buildUrlWithParams from 'core/router/utils/buildUrlWithParams'

import useOnChange from 'common/hooks/useOnChange'
import useQuery from 'common/hooks/useQuery'

import { FilterMethod } from 'modules/search/types'

import { SearchInput } from './styled'

const SearchField = () => {
	const filter = useQuery()
	const { location } = history

	const setQuery = useCallback(
		(keyword: string) => {
			const url = buildUrlWithParams(location.pathname, {
				...filter,
				[FilterMethod.Query]: keyword,
			})
			history.push(url)
		},
		[history.location, filter],
	)
	const { onChange } = useOnChange('', [setQuery])

	return <SearchInput onChange={onChange} />
}

export default SearchField
