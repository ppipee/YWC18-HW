import { h } from 'preact'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'

import MerchantFilter from '../MerchantFilter'
import PriceSelection from '../PriceSelection'
import ProvinceSelection from '../ProvinceSelection'
import SubcategoryFilter from '../SubcategoryFilter'
import { Container } from './styled'

const DesktopFilter = () => {
	return (
		<Container>
			<Gap $type="vertical" $size="32px">
				<MerchantFilter />
				<Gap $type="vertical" $size="8px">
					<Text weight="bold" size="16px">
						จังหวัด/ใกล้ฉัน
					</Text>
					<ProvinceSelection />
				</Gap>
				<Gap $type="vertical" $size="8px">
					<Text weight="bold" size="16px">
						ราคา
					</Text>
					<PriceSelection />
				</Gap>
				<SubcategoryFilter />
			</Gap>
		</Container>
	)
}

export default DesktopFilter
