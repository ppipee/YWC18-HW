import Fuse from 'fuse.js'

import { Merchant } from 'common/types/shop'

import { FilterMethod } from 'modules/search/types'

export default function filteringWithMethod(
	merchants: Merchant[],
	filter: Record<FilterMethod, string>,
	filterMethod: FilterMethod,
) {
	if (!filter[filterMethod] || filter[filterMethod] === '' || filter[filterMethod] === 'ทั้งหมด') return merchants

	const options = {
		includeScore: true,
		keys: [filterMethod],
	}
	const fuse = new Fuse(merchants, options)
	const data = fuse
		.search(filter[filterMethod] === 'near-me' ? 'กรุงเทพมหานคร' : filter[filterMethod])
		.map(data => data.item)

	return data
}
