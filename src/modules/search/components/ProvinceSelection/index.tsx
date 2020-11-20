import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import history from 'core/router/history'
import buildUrlWithParams from 'core/router/utils/buildUrlWithParams'

import Dropdown from 'common/components/Dropdown'
import useQuery from 'common/hooks/useQuery'

import useSearchContext from 'modules/search/hooks/useSearchContext'
import { FilterMethod } from 'modules/search/types'

const DEFAULT_ITEMS = [
	{ label: 'พื้นที่ใกล้ฉัน', value: 'near' },
	{ label: 'พื้นที่ทั้งหมด', value: '' },
]

const ProvinceSelection = () => {
	const { shop } = useSearchContext()
	const { location } = history
	const filter: Record<FilterMethod, string> = useQuery()

	const onChange = useCallback(
		(value: any) => {
			const url = buildUrlWithParams(location.pathname, {
				...filter,
				[FilterMethod.Province]: value,
			})
			history.push(url)
		},
		[filter, history],
	)

	const items = [...DEFAULT_ITEMS, ...(shop?.provinces || []).map(province => ({ label: province, value: province }))]

	return <Dropdown items={items} searchable onItemSelect={onChange} maxHeight={150} placeHolder="..." />
}

export default ProvinceSelection
