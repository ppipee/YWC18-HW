import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import history from 'core/router/history'
import buildUrlWithParams from 'core/router/utils/buildUrlWithParams'

import Radio from 'common/components/Radio'
import RadioGroup from 'common/components/RadioGroup'
import useQuery from 'common/hooks/useQuery'

import useSearchContext from 'modules/search/hooks/useSearchContext'
import { FilterMethod } from 'modules/search/types'
import Text from 'common/components/Text'
import Gap from 'common/components/Gap'

const MerchantFilter = () => {
	const { shop } = useSearchContext()
	const { location } = history
	const filter: Record<FilterMethod, string> = useQuery()

	const onChange = useCallback(
		(value: string) => {
			const url = buildUrlWithParams(location.pathname, {
				...filter,
				[FilterMethod.Merchant]: value,
			})
			history.push(url)
		},
		[filter, history],
	)

	if (!shop) return null

	return (
		<Gap $type="vertical" $size="12px">
			<Text size="16px" weight="bold">
				ประเภทร้านค้า
			</Text>
			<RadioGroup onChange={onChange} defaultValue={filter.categoryName || ''}>
				{/* <Radio label="ทั้งหมด" value="" /> */}
				{(shop?.categories || []).map((category, index) => (
					<Radio key={`${category.name}-${index}`} label={category.name} value={category.name} />
				))}
			</RadioGroup>
		</Gap>
	)
}

export default MerchantFilter
