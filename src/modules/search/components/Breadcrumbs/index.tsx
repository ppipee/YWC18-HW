import { h } from 'preact'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { white } from 'common/styles/colors'

import { Container, Wrapper } from './styled'
import Flex from 'common/components/Flex'

const Breadcrumbs = () => {
	return (
		<Wrapper>
			<Container>
				<Text size="14px" as="div" color={white} margin="auto 0">
					<Gap $size="8px" $alignCenter>
						<Text decoration="underline">หน้าแรก</Text>
						<span>/</span>
						<Text weight="bold">ค้นหา</Text>
					</Gap>
				</Text>
			</Container>
		</Wrapper>
	)
}

export default Breadcrumbs
