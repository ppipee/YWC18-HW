import { h } from 'preact'
import { useCallback } from 'preact/hooks'

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

	return (
		<SearchInput
			onChange={onChange}
			placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
		/>
	)
}

export default SearchField
