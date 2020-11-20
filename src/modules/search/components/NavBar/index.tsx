import { Fragment, h } from 'preact'

import Gap from 'common/components/Gap'
import SearchIcon from 'common/icons/SearchIcon'
import HalfHalfLogoMini from 'common/images/halfhalf-logo-mini.png'
import HalfHalfLogo from 'common/images/halfhalf-logo.png'
import useResponsive from 'common/styles/hooks/useResponsive'

import FilterMobile from '../FilterMobile'
import ProvinceSelection from '../ProvinceSelection'
import SearchField from '../SearchField'
import { Container, EmptyBox, Logo, NavWrapper, ProvinceWrapper, SearchContainer, SearchIconWrapper } from './styled'

const NavBar = () => {
	const { isDesktop } = useResponsive()
	const space = isDesktop ? '32px' : '16px'

	return (
		<Fragment>
			<NavWrapper>
				<Container>
					<Gap $alignCenter $size={space}>
						<Logo src={isDesktop ? HalfHalfLogo : HalfHalfLogoMini} />
						<SearchContainer $alignItems="center">
							{isDesktop && (
								<ProvinceWrapper>
									<ProvinceSelection />
								</ProvinceWrapper>
							)}
							<SearchField />
							<SearchIconWrapper $alignItems="center" $justifyContent="center">
								<SearchIcon />
							</SearchIconWrapper>
						</SearchContainer>
						{!isDesktop && <FilterMobile />}
					</Gap>
				</Container>
			</NavWrapper>
			<EmptyBox />
		</Fragment>
	)
}

export default NavBar
