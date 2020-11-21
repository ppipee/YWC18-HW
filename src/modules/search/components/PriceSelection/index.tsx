import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import useQuery from 'core/router/hooks/useQuery'
import buildUrlWithParams from 'core/router/utils/buildUrlWithParams'
import { route } from 'preact-router'

import Dropdown from 'common/components/Dropdown'

import useSearchContext from 'modules/search/hooks/useSearchContext'
import { FilterMethod } from 'modules/search/types'

const PriceSelection = () => {
	const { shop } = useSearchContext()
	const filter: Record<FilterMethod, string> = useQuery()

	const onChange = useCallback(
		(value: any) => {
			const url = buildUrlWithParams('/', {
				...filter,
				[FilterMethod.PriceLevel]: value,
			})
			route(url)
		},
		[filter],
	)

	const items = (shop?.priceRange || []).map((price, index) => ({ label: price, value: index + 1 }))

	return <Dropdown items={items} searchable onItemSelect={onChange} maxHeight={500} placeHolder="กรุณาเลือก" />
}

export default PriceSelection
