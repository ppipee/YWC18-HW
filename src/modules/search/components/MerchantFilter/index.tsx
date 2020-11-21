import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import { route } from 'preact-router'

import useQuery from 'core/router/hooks/useQuery'
import buildUrlWithParams from 'core/router/utils/buildUrlWithParams'

import Gap from 'common/components/Gap'
import Radio from 'common/components/Radio'
import RadioGroup from 'common/components/RadioGroup'
import Text from 'common/components/Text'

import useSearchContext from 'modules/search/hooks/useSearchContext'
import { FilterMethod } from 'modules/search/types'

const MerchantFilter = () => {
	const { shop } = useSearchContext()
	const filter: Record<FilterMethod, string> = useQuery()

	const onChange = useCallback(
		(value: string) => {
			const url = buildUrlWithParams('/', {
				...filter,
				[FilterMethod.Merchant]: value,
			})

			route(url)
		},
		[filter],
	)

	if (!shop) return null

	const categories = [{ name: 'ทั้งหมด' }, ...(shop?.categories || [])]

	return (
		<Gap $type="vertical" $size="12px">
			<Text size="16px" weight="bold">
				ประเภทร้านค้า
			</Text>
			<RadioGroup onChange={onChange} defaultValue={filter.categoryName || 'ทั้งหมด'}>
				{categories.map((category, index) => (
					<Radio key={`${category.name}-${index}`} label={category.name} value={category.name} />
				))}
			</RadioGroup>
		</Gap>
	)
}

export default MerchantFilter
