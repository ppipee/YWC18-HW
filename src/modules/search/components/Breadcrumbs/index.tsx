import { h } from 'preact'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { white } from 'common/styles/colors'

import { Wrapper } from './styled'

const Breadcrumbs = () => {
	return (
		<Wrapper>
			<ContentContainer>
				<Text size="14px" as="div" color={white}>
					<Gap $size="8px" $alignCenter>
						<Text decoration="underline">หน้าแรก</Text>
						<span>/</span>
						<Text weight="bold">ค้นหา</Text>
					</Gap>
				</Text>
			</ContentContainer>
		</Wrapper>
	)
}

export default Breadcrumbs
