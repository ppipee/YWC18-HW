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

const SubcategoryFilter = () => {
	const { shop } = useSearchContext()
	const { location } = history
	const filter: Record<FilterMethod, string> = useQuery()

	const onChange = useCallback(
		(value: string) => {
			const url = buildUrlWithParams(location.pathname, {
				...filter,
				[FilterMethod.Category]: value,
			})
			history.push(url)
		},
		[filter, history.location],
	)

	if (!shop) return null
	const categoryIndex = shop.categories.findIndex(category => category.name === filter.categoryName)

	if (categoryIndex === -1) return null
	const subcategories = shop.categories[categoryIndex]?.subcategories || []
	const subcategoryItems = ['ทั้งหมด', ...subcategories]

	if (subcategories.length === 0) return null

	return (
		<Gap $type="vertical" $size="16px">
			<Text size="16px" weight="bold">
				{`ประเภท${filter.categoryName}`}
			</Text>
			{subcategories.length !== 0 && (
				<RadioGroup onChange={onChange} defaultValue={filter.subcategoryName || 'ทั้งหมด'}>
					{subcategoryItems.map((category, index) => (
						<Radio key={`${category}-${index}`} label={category} value={category} />
					))}
				</RadioGroup>
			)}
		</Gap>
	)
}

export default SubcategoryFilter
