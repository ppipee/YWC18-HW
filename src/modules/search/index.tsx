import { Helmet } from 'react-helmet'

import { h } from 'preact'

import useQuery from 'core/router/hooks/useQuery'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import Logo from 'common/images/halfhalf-logo-mini.png'

import Breadcrumbs from './components/Breadcrumbs'
import DesktopFilter from './components/DesktopFilter'
import NavBar from './components/NavBar'
import ShopList from './components/ShopList'
import SearchContextProvider from './context/SearchContextProvider'
import { Background, Container, LeftSection, RightSection } from './styled'

const Search = () => {
	const { categoryName, subcategoryName, shopNameTH } = useQuery()

	const searchAllText = `${categoryName && categoryName !== 'ทั้งหมด' ? categoryName : ''} ${
		shopNameTH && categoryName ? ',' : ''
	} ${shopNameTH || ''} ${subcategoryName || 'ทั้งหมด'}`

	return (
		<SearchContextProvider>
			<Helmet>
				<meta charSet="utf-8" />
				<title>คนละครึ่ง</title>
				<link rel="icon" type="image/png" href="common/images/halfhalf-logo-mini.png" sizes="16x16" />
			</Helmet>
			<NavBar />
			<Breadcrumbs />
			<Background>
				<Container>
					<Gap $size="64px" $type="vertical">
						<Text size="20px" weight="bold">{`ผลการค้นหา ${searchAllText}`}</Text>
						<Gap $size="32px">
							<LeftSection>
								<DesktopFilter />
							</LeftSection>
							<RightSection>
								<ShopList />
							</RightSection>
						</Gap>
					</Gap>
				</Container>
			</Background>
		</SearchContextProvider>
	)
}

export default Search
