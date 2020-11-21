import { h } from 'preact'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import FoodPlaceHolder from 'common/images/food-placeholder.png'
import { black, gray } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import { Merchant, OpenStatus } from 'common/types/shop'

import OpenStatusBadge from 'modules/search/components/OpenStatusBadge'
import PriceLevel from 'modules/search/components/PriceLevel'

import Facilities from '../Facilities'
import { Card, DetailContainer, DetailList, Line, ShopImage, Title } from './styled'

type Props = {
	merchant: Merchant
}

const ShopCard = ({ merchant }: Props) => {
	const { isDesktop } = useResponsive()
	const cardDirection = isDesktop ? 'horizontal' : 'vertical'

	return (
		<Card $size="8px" $type={cardDirection}>
			<ShopImage src={merchant?.coverImageId || FoodPlaceHolder} />
			<DetailContainer>
				<Gap $size="4px" $type="vertical">
					<Gap $size="12px">
						<Title ellipsis={2} weight="bold" size="20px">
							{merchant.shopNameTH}
						</Title>
						{merchant.isOpen !== OpenStatus.None && <OpenStatusBadge isOpen={merchant.isOpen} />}
					</Gap>
				</Gap>
				<DetailList $wrap="wrap">
					<Text margin="4px 0 0 0" size="14px" color={gray[500]}>
						{merchant.subcategoryName}
					</Text>
					{merchant.priceLevel && <PriceLevel priceLevel={merchant.priceLevel} />}
					<Text size="14px" color={gray[500]}>
						{merchant.addressDistrictName || ''} {merchant.addressProvinceName || ''}
					</Text>
				</DetailList>
				<Line />
				<Gap $size="16px" $type="vertical">
					<Text size="14px" color={gray[500]}>
						<Gap $size="8px" $type="vertical">
							{merchant.highlightText && (
								<span dangerouslySetInnerHTML={{ __html: merchant.highlightText }} />
							)}
							{merchant.recommendedItems && (
								<span>
									<Text color={black} weight="bold">
										{`เมนูแนะนำ: `}
									</Text>
									{merchant.recommendedItems.join(', ')}
								</span>
							)}
						</Gap>
					</Text>
					<Facilities facilities={merchant.facilities} />
				</Gap>
			</DetailContainer>
		</Card>
	)
}

export default ShopCard
