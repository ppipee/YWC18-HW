import { h } from 'preact'

import Gap from 'common/components/Gap'
import useQuery from 'common/hooks/useQuery'

import ShopCard from 'modules/search/components/ShopCard'
import useSearchContext from 'modules/search/hooks/useSearchContext'
import { FilterMethod } from 'modules/search/types'
import filtering from 'modules/search/utils/filtering'
import Text from 'common/components/Text'
import { NotFoundShopContainer, LoadMoreButton, List } from './styled'
import { useCallback, useEffect, useState } from 'preact/hooks'
import { Merchant } from 'common/types/shop'

const ShopList = () => {
	const [merchants, setMerchants] = useState<Merchant[]>([])
	const [maxItemNumber, setMaxItem] = useState(3)

	const { shop, isLoading, isFresh } = useSearchContext()
	const filter: Record<FilterMethod, string> = useQuery()

	const loadMerchant = useCallback(() => {
		setMaxItem(maxItemNumber + 10)
	}, [maxItemNumber])

	useEffect(() => {
		if (!shop) return

		const merchants = filtering(shop, filter)
		setMerchants(merchants)
	}, [shop, filter])

	if (isLoading || isFresh) return <div>loading</div>

	if (merchants.length === 0) {
		return (
			<NotFoundShopContainer>
				<Gap $type="vertical" $size="16px" $justifyCenter>
					<Text size="32px" weight="bold">
						ไม่พบสถานที่ที่คุณกำลังหา
					</Text>
					<Text size="14px">ร้านค้าที่ท่านค้นหาอาจไม่ได้เข้าร่วมโครงการ คนละครึ่ง</Text>
				</Gap>
			</NotFoundShopContainer>
		)
	}
	return (
		<Gap $type="vertical" $size="48px" $alignCenter>
			<List $type="vertical" $size="12px">
				{merchants.map((merchant, index) => {
					if (index >= maxItemNumber) return null
					return <ShopCard merchant={merchant} key={`${merchant.shopNameTH}-${index}`} />
				})}
			</List>
			{maxItemNumber < merchants.length && (
				<LoadMoreButton $justifyContent="center" $alignItems="center" onClick={loadMerchant}>
					<Text>ดูเพิ่มเติม</Text>
				</LoadMoreButton>
			)}
		</Gap>
	)
}

export default ShopList
