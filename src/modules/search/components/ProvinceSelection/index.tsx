import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import history from 'core/router/history'
import buildUrlWithParams from 'core/router/utils/buildUrlWithParams'

import Dropdown from 'common/components/Dropdown'
import useQuery from 'common/hooks/useQuery'

import useSearchContext from 'modules/search/hooks/useSearchContext'
import { FilterMethod } from 'modules/search/types'

import LocationIcon from 'common/icons/LocationIcon'
import MultiLocationIcon from 'common/icons/MultiLocationIcon'
import Gap from 'common/components/Gap'

const DEFAULT_ITEMS = [
	{
		label: (
			<Gap $size="4px" $alignCenter>
				<LocationIcon />
				<span>พื้นที่ใกล้ฉัน</span>
			</Gap>
		),
		value: 'near-me',
	},
	{
		label: (
			<Gap $size="4px" $alignCenter>
				<MultiLocationIcon />
				<span>พื้นที่ทั้งหมด</span>
			</Gap>
		),
		value: 'ทั้งหมด',
	},
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

	return (
		<Dropdown
			defaultValue={DEFAULT_ITEMS[0]}
			items={items}
			searchable
			onItemSelect={onChange}
			maxHeight={400}
			placeHolder="..."
		/>
	)
}

export default ProvinceSelection
