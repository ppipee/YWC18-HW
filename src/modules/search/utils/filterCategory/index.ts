import { CategoryShop, Merchant } from 'common/types/shop'
import { FilterMethod } from 'modules/search/types'

export default function filterCategory(
	merchants: Merchant[] = [],
	filter: Record<FilterMethod, string>,
	categories: CategoryShop[] = [],
) {
	if (!filter.categoryName || filter.categoryName === '' || filter.categoryName === 'ทั้งหมด') return merchants

	const categoryIndex = categories.findIndex(category => category.name === filter.categoryName)
	if (categoryIndex === -1) return []

	const newMerchants = merchants.reduce((merchants, merchant) => {
		if (categories[categoryIndex].subcategories.includes(merchant.subcategoryName)) {
			return [...merchants, merchant]
		}
		return merchants
	}, [])

	return newMerchants
}
