import { h } from 'preact'

import Gap from 'common/components/Gap'
import useQuery from 'common/hooks/useQuery'

import ShopCard from 'modules/search/components/ShopCard'
import useSearchContext from 'modules/search/hooks/useSearchContext'
import { FilterMethod } from 'modules/search/types'
import filtering from 'modules/search/utils/filtering'

const ShopList = () => {
	const { shop, isLoading, isFresh } = useSearchContext()
	const filter: Record<FilterMethod, string> = useQuery()

	if (isLoading || isFresh) return <div>loading</div>

	const merchants = filtering(shop, filter)

	return (
		<Gap $type="vertical" $size="12px">
			{merchants.map((merchant, index) => (
				<ShopCard merchant={merchant} key={`${merchant.shopNameTH}-${index}`} />
			))}
		</Gap>
	)
}

export default ShopList
