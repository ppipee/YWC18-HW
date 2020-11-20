import { Fragment, h } from 'preact'

import Flex from 'common/components/Flex'
import FilterImage from 'common/images/filter.png'
import useSwitch from 'common/hooks/useSwitch'
import { Container, Modal, Header, IconWrapper } from './styled'
import ArrowUpIcon from 'common/icons/ArrowUpIcon'
import { white } from 'common/styles/colors'
import Text from 'common/components/Text'
import Gap from 'common/components/Gap'
import MerchantFilter from '../MerchantFilter'
import ProvinceSelection from '../ProvinceSelection'
import PriceSelection from '../PriceSelection'
import SubcategoryFilter from '../SubcategoryFilter'

const FilterMobile = () => {
	const { isOpen, open, close } = useSwitch()

	return (
		<Fragment>
			<Flex $alignItems="center" $justifyContent="center">
				<img src={FilterImage} width="20" onClick={open} />
			</Flex>
			{isOpen && (
				<Modal>
					<Header>
						<IconWrapper onClick={close}>
							<ArrowUpIcon size={20} color={white} />
						</IconWrapper>
						<Text weight="bold" as="div" margin="auto" size="20px" color={white} textAlign="center">
							กรอกผล
						</Text>
					</Header>
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
				</Modal>
			)}
		</Fragment>
	)
}

export default FilterMobile
