import { h } from 'preact'

import ShopList from './components/ShopList'
import SearchContextProvider from './context/SearchContextProvider'
import Gap from 'common/components/Gap'
import { LeftSection, RightSection, Container } from './styled'
import DesktopFilter from './components/DesktopFilter'
import NavBar from './components/NavBar'
import useQuery from 'common/hooks/useQuery'
import Text from 'common/components/Text'
import Breadcrumbs from './components/Breadcrumbs'

const Search = () => {
	const { categoryName, subcategoryName } = useQuery()
	return (
		<SearchContextProvider>
			<NavBar />
			<Breadcrumbs />
			<Container>
				<Gap $size="64px" $type="vertical">
					<Text size="20px" weight="bold">{`ผลการค้นหา ${categoryName} ${subcategoryName}`}</Text>
					<Gap $size="40px">
						<LeftSection>
							<DesktopFilter />
						</LeftSection>
						<RightSection>
							<ShopList />
						</RightSection>
					</Gap>
				</Gap>
			</Container>
		</SearchContextProvider>
	)
}

export default Search
