import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import { h } from 'preact'
import { FacilityImage, FacilityWrapper } from './styled'

type Props = {
	facilities: string[]
}

const Facilities = ({ facilities }: Props) => {
	const basePath = 'common/images'

	return (
		<Flex $wrap="wrap">
			{facilities.map((facility, index) => (
				<FacilityWrapper key={`facility-${index}`} $alignItems="center" $justifyContent="center">
					<FacilityImage src={`${basePath}/${facility}.png`} />
				</FacilityWrapper>
			))}
		</Flex>
	)
}

export default Facilities
