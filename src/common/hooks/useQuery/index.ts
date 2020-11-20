import history from 'core/router/history'
import qs from 'qs'

export default function useQuery() {
	const { location } = history

	return qs.parse(location.search, { ignoreQueryPrefix: true }) as Record<string, string>
}
