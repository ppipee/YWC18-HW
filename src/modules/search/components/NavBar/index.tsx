import { Fragment, h } from 'preact'

import ContentContainer from 'common/components/ContentContainer'
import HalfHalfLogo from 'common/images/halfhalf-logo.png'
import HalfHalfLogoMini from 'common/images/halfhalf-logo-mini.png'

import ProvinceSelection from '../ProvinceSelection'
import SearchField from '../SearchField'
import { EmptyBox, Logo, NavWrapper, ProvinceWrapper, SearchContainer } from './styled'
import useResponsive from 'common/styles/hooks/useResponsive'
import Gap from 'common/components/Gap'

const NavBar = () => {
	const { isDesktop } = useResponsive()
	return (
		<Fragment>
			<NavWrapper>
				<ContentContainer>
					<Gap $alignCenter $size="12px">
						<Logo src={isDesktop ? HalfHalfLogo : HalfHalfLogoMini} />
						<SearchContainer>
							{isDesktop && (
								<ProvinceWrapper>
									<ProvinceSelection />
								</ProvinceWrapper>
							)}
							<SearchField />
						</SearchContainer>
					</Gap>
				</ContentContainer>
			</NavWrapper>
			<EmptyBox />
		</Fragment>
	)
}

export default NavBar
