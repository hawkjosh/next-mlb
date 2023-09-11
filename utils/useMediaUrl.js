export function logoUrl(id) {
	const url = 'https://www.mlbstatic.com/team-logos/team-cap-on-light'

	return `${url}/${id}.svg`
}

export function headshotUrl(id) {
	const url =
		'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people'

	return `${url}/${id}/headshot/67/current`
}