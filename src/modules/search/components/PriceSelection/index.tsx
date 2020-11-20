import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import history from 'core/router/history'
import buildUrlWithParams from 'core/router/utils/buildUrlWithParams'

import Dropdown from 'common/components/Dropdown'
import useQuery from 'common/hooks/useQuery'

import useSearchContext from 'modules/search/hooks/useSearchContext'
import { FilterMethod } from 'modules/search/types'

const PriceSelection = () => {
	const { shop } = useSearchContext()
	const { location } = history
	const filter: Record<FilterMethod, string> = useQuery()

	const onChange = useCallback(
		(value: any) => {
			const url = buildUrlWithParams(location.pathname, {
				...filter,
				[FilterMethod.PriceLevel]: value,
			})
			history.push(url)
		},
		[filter, history],
	)

	const items = (shop?.priceRange || []).map((price, index) => ({ label: price, value: index + 1 }))

	return <Dropdown items={items} searchable onItemSelect={onChange} maxHeight={150} placeHolder="..." />
}

export default PriceSelection
