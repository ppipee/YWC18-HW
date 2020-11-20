import { Shop } from 'common/types/shop'

import { FilterMethod } from 'modules/search/types'
import filterCategory from '../filterCategory'

import filteringWithMethod from '../filteringWithMethod'
import searching from '../searching'

export default function filtering(shop: Shop, filter: Record<FilterMethod, string>) {
	let data = [...(shop.merchants || [])]

	data = searching(data, filter)
	data = filterCategory(data, filter, shop.categories)
	data = filteringWithMethod(data, filter, FilterMethod.Category)
	data = filteringWithMethod(data, filter, FilterMethod.PriceLevel)
	data = filteringWithMethod(data, filter, FilterMethod.Province)

	return data
}
