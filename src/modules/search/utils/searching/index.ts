import Fuse from 'fuse.js'

import { Merchant } from 'common/types/shop'

import { FilterMethod } from 'modules/search/types'

export default function searching(merchants: Merchant[], filter: Record<FilterMethod, string>) {
	if (!filter.shopNameTH || filter.shopNameTH === '') return merchants

	const options = {
		includeScore: true,
		keys: ['shopNameTH'],
	}
	const fuse = new Fuse(merchants, options)

	return fuse.search(filter.shopNameTH).map(data => data.item)
}
