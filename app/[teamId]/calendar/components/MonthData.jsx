import { useDateFormat } from '@/utils/useDateFormat'
import { getMonthSchedule } from '@/lib/getMlbData'

export async function getMonthData(teamId, month) {
	const monthData = await getMonthSchedule(teamId, month)

	const dayData = monthData.map((day) => ({
		game: day.games[0],
		gameTwo: day.games[1],
	}))

	const calendarTitle = useDateFormat(dayData[1].game.gameDate).calendarTitle

	const calendarStart = new Date(dayData[0].game.gameDate)
	const calendarEnd = new Date(dayData[dayData.length - 1].game.gameDate)
	const calendarData = []

	for (let d = calendarStart; d <= calendarEnd; d.setDate(d.getDate() + 1)) {
		calendarData.push({ date: useDateFormat(d).calendarDay, info: null })
	}

	dayData.forEach(({ game }) => {
		if (!game || game.rescheduleGameDate) return

		const calendarDay = calendarData.find(
			(day) => day.date === useDateFormat(game.gameDate).calendarDay
		)
		if (calendarDay) {
			calendarDay.info = {
				awayId: game.teams.away.team.id,
				homeId: game.teams.home.team.id,
				venue: game.venue.name,
				time: game.gameDate,
			}
		}
	})

	const firstDay = new Date(dayData[0].game.gameDate).getDay()
	const emptyCells = [...Array(firstDay)].map((_, index) => (
		<div key={`empty-${index}`}></div>
	))

	return { calendarTitle, calendarData, emptyCells }
}