<!-- NOTES → All stat groups -->

URL: https://statsapi.mlb.com/api/v1/statGroups
[
{ "displayName": "hitting" },
{ "displayName": "pitching" },
{ "displayName": "fielding" },
{ "displayName": "catching" },
{ "displayName": "running" },
{ "displayName": "game" },
{ "displayName": "team" },
{ "displayName": "streak" }
]

<!-- NOTES → All stat types -->

URL: https://statsapi.mlb.com/api/v1/statTypes
[
{ "displayName": "projected" },
{ "displayName": "projectedRos" },
{ "displayName": "yearByYear" },
{ "displayName": "yearByYearAdvanced" },
{ "displayName": "yearByYearPlayoffs" },
{ "displayName": "season" },
{ "displayName": "standard" },
{ "displayName": "advanced" },
{ "displayName": "career" },
{ "displayName": "careerRegularSeason" },
{ "displayName": "careerAdvanced" },
{ "displayName": "seasonAdvanced" },
{ "displayName": "careerStatSplits" },
{ "displayName": "careerPlayoffs" },
{ "displayName": "gameLog" },
{ "displayName": "playLog" },
{ "displayName": "pitchLog" },
{ "displayName": "metricLog" },
{ "displayName": "metricAverages" },
{ "displayName": "pitchArsenal" },
{ "displayName": "outsAboveAverage" },
{ "displayName": "expectedStatistics" },
{ "displayName": "sabermetrics" },
{ "displayName": "sprayChart" },
{ "displayName": "tracking" },
{ "displayName": "vsPlayer" },
{ "displayName": "vsPlayerTotal" },
{ "displayName": "vsPlayer5Y" },
{ "displayName": "vsTeam" },
{ "displayName": "vsTeam5Y" },
{ "displayName": "vsTeamTotal" },
{ "displayName": "lastXGames" },
{ "displayName": "byDateRange" },
{ "displayName": "byDateRangeAdvanced" },
{ "displayName": "byMonth" },
{ "displayName": "byMonthPlayoffs" },
{ "displayName": "byDayOfWeek" },
{ "displayName": "byDayOfWeekPlayoffs" },
{ "displayName": "homeAndAway" },
{ "displayName": "homeAndAwayPlayoffs" },
{ "displayName": "winLoss" },
{ "displayName": "winLossPlayoffs" },
{ "displayName": "rankings" },
{ "displayName": "rankingsByYear" },
{ "displayName": "statsSingleSeason" },
{ "displayName": "statsSingleSeasonAdvanced" },
{ "displayName": "hotColdZones" },
{ "displayName": "availableStats" },
{ "displayName": "opponentsFaced" },
{ "displayName": "gameTypeStats" },
{ "displayName": "firstYearStats" },
{ "displayName": "lastYearStats" },
{ "displayName": "statSplits" },
{ "displayName": "statSplitsAdvanced" },
{ "displayName": "atGameStart" },
{ "displayName": "vsOpponents" },
{ "displayName": "sabermetricsMultiTeam" }
]

<!-- NOTES → All situation codes -->

URL: https://statsapi.mlb.com/api/v1/situationCodes
[
{
"code": "h",
"sortOrder": 1,
"navigationMenu": "Game",
"description": "Home Games",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "a",
"sortOrder": 2,
"navigationMenu": "Game",
"description": "Away Games",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "d",
"sortOrder": 3,
"navigationMenu": "Game",
"description": "Day Games",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "n",
"sortOrder": 4,
"navigationMenu": "Game",
"description": "Night Games",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "g",
"sortOrder": 5,
"navigationMenu": "Game",
"description": "On Grass",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "t",
"sortOrder": 6,
"navigationMenu": "Game",
"description": "On Turf",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "2",
"sortOrder": 20,
"navigationMenu": "Month",
"description": "February",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "3",
"sortOrder": 21,
"navigationMenu": "Month",
"description": "March",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "4",
"sortOrder": 22,
"navigationMenu": "Month",
"description": "April",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "5",
"sortOrder": 23,
"navigationMenu": "Month",
"description": "May",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "6",
"sortOrder": 24,
"navigationMenu": "Month",
"description": "June",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "7",
"sortOrder": 25,
"navigationMenu": "Month",
"description": "July",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "8",
"sortOrder": 26,
"navigationMenu": "Month",
"description": "August",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "9",
"sortOrder": 27,
"navigationMenu": "Month",
"description": "September",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "10",
"sortOrder": 28,
"navigationMenu": "Month",
"description": "October",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "11",
"sortOrder": 29,
"navigationMenu": "Month",
"description": "November",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "12",
"sortOrder": 30,
"navigationMenu": "Month",
"description": "December",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "1",
"sortOrder": 31,
"navigationMenu": "Month",
"description": "January",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "h0",
"sortOrder": 41,
"navigationMenu": "Timeframe",
"description": "Season To Date",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "h1",
"sortOrder": 42,
"navigationMenu": "Timeframe",
"description": "First Half",
"team": true,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "h2",
"sortOrder": 43,
"navigationMenu": "Timeframe",
"description": "Second Half",
"team": true,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "preas",
"sortOrder": 44,
"navigationMenu": "Timeframe",
"description": "Pre All-Star",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "posas",
"sortOrder": 45,
"navigationMenu": "Timeframe",
"description": "Post All-Star",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "d1",
"sortOrder": 46,
"navigationMenu": "Timeframe",
"description": "Yesterday",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "d7",
"sortOrder": 47,
"navigationMenu": "Timeframe",
"description": "Last 7 Days",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "d30",
"sortOrder": 48,
"navigationMenu": "Timeframe",
"description": "Last 30 Days",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "dmo",
"sortOrder": 51,
"navigationMenu": "Day",
"description": "On Mondays",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "dtu",
"sortOrder": 52,
"navigationMenu": "Day",
"description": "On Tuesdays",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "dwe",
"sortOrder": 53,
"navigationMenu": "Day",
"description": "On Wednesdays",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "dth",
"sortOrder": 54,
"navigationMenu": "Day",
"description": "On Thursdays",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "dfr",
"sortOrder": 55,
"navigationMenu": "Day",
"description": "On Fridays",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "dsa",
"sortOrder": 56,
"navigationMenu": "Day",
"description": "On Saturdays",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "dsu",
"sortOrder": 57,
"navigationMenu": "Day",
"description": "On Sundays",
"team": true,
"batting": true,
"fielding": true,
"pitching": true
},
{
"code": "vlg",
"sortOrder": 61,
"navigationMenu": "Opponent",
"description": "vs. League",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vdv",
"sortOrder": 62,
"navigationMenu": "Opponent",
"description": "vs. Division",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vt",
"sortOrder": 63,
"navigationMenu": "Opponent",
"description": "vs. Team",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "val",
"sortOrder": 64,
"navigationMenu": "Opponent",
"description": "vs. AL",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "vnl",
"sortOrder": 65,
"navigationMenu": "Opponent",
"description": "vs. NL",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "int",
"sortOrder": 66,
"navigationMenu": "Opponent",
"description": "Interleague",
"team": true,
"batting": false,
"fielding": true,
"pitching": false
},
{
"code": "ven",
"sortOrder": 67,
"navigationMenu": "Venue",
"description": "By Venue",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "l",
"sortOrder": 71,
"navigationMenu": "At-Bat",
"description": "Batting Left",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "r",
"sortOrder": 72,
"navigationMenu": "At-Bat",
"description": "Batting Right",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "vl",
"sortOrder": 73,
"navigationMenu": "At-Bat",
"description": "vs Left",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "vr",
"sortOrder": 74,
"navigationMenu": "At-Bat",
"description": "vs Right",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "vls",
"sortOrder": 75,
"navigationMenu": "At-Bat",
"description": "vs Left Handed Starter",
"team": true,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vrs",
"sortOrder": 76,
"navigationMenu": "At-Bat",
"description": "vs Right Handed Starter",
"team": true,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vgo",
"sortOrder": 81,
"navigationMenu": "At-Bat",
"description": "vs. Ground Ball Pitcher",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vao",
"sortOrder": 82,
"navigationMenu": "At-Bat",
"description": "vs. Fly Ball Pitcher",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vb",
"sortOrder": 83,
"navigationMenu": "At-Bat",
"description": "vs. Batter",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "vp",
"sortOrder": 84,
"navigationMenu": "At-Bat",
"description": "vs. Pitcher",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "1r",
"sortOrder": 91,
"navigationMenu": "Score",
"description": "One Run",
"team": true,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "sah",
"sortOrder": 92,
"navigationMenu": "Score",
"description": "Team is ahead",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "sbh",
"sortOrder": 93,
"navigationMenu": "Score",
"description": "Team is behind",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "sti",
"sortOrder": 94,
"navigationMenu": "Score",
"description": "Score is tied",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "ex",
"sortOrder": 95,
"navigationMenu": "Inning",
"description": "Extra Innnings",
"team": true,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "l10",
"sortOrder": 96,
"navigationMenu": "Timeframe",
"description": "Last 10",
"team": true,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "twn",
"sortOrder": 101,
"navigationMenu": "Result",
"description": "In games won by team",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "tls",
"sortOrder": 102,
"navigationMenu": "Result",
"description": "In games lost by team",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "tti",
"sortOrder": 103,
"navigationMenu": "Result",
"description": "In tie games",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "taw",
"sortOrder": 104,
"navigationMenu": "Result",
"description": "In games following a win",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "tal",
"sortOrder": 105,
"navigationMenu": "Result",
"description": "In games following a loss",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "tat",
"sortOrder": 106,
"navigationMenu": "Result",
"description": "In games following a tie",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "b1",
"sortOrder": 111,
"navigationMenu": "Order",
"description": "Batting First",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "b2",
"sortOrder": 112,
"navigationMenu": "Order",
"description": "Batting Second",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "b3",
"sortOrder": 113,
"navigationMenu": "Order",
"description": "Batting Third",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "b4",
"sortOrder": 114,
"navigationMenu": "Order",
"description": "Batting Fourth",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "b5",
"sortOrder": 115,
"navigationMenu": "Order",
"description": "Batting Fifth",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "b6",
"sortOrder": 116,
"navigationMenu": "Order",
"description": "Batting Sixth",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "b7",
"sortOrder": 117,
"navigationMenu": "Order",
"description": "Batting Seventh",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "b8",
"sortOrder": 118,
"navigationMenu": "Order",
"description": "Batting Eighth",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "b9",
"sortOrder": 119,
"navigationMenu": "Order",
"description": "Batting Ninth",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "lo",
"sortOrder": 120,
"navigationMenu": "Runners",
"description": "Leading Off",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "p1",
"sortOrder": 121,
"navigationMenu": "Position",
"description": "Pitcher",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "p2",
"sortOrder": 122,
"navigationMenu": "Position",
"description": "Catcher",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "p3",
"sortOrder": 123,
"navigationMenu": "Position",
"description": "First Base",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "p4",
"sortOrder": 124,
"navigationMenu": "Position",
"description": "Second Base",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "p5",
"sortOrder": 125,
"navigationMenu": "Position",
"description": "Third Base",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "p6",
"sortOrder": 126,
"navigationMenu": "Position",
"description": "Shortstop",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "p7",
"sortOrder": 127,
"navigationMenu": "Position",
"description": "Left Field",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "p8",
"sortOrder": 128,
"navigationMenu": "Position",
"description": "Center Field",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "p9",
"sortOrder": 129,
"navigationMenu": "Position",
"description": "Right Field",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "pO",
"sortOrder": 130,
"navigationMenu": "Position",
"description": "Outfield",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "sp",
"sortOrder": 131,
"navigationMenu": "Pitching",
"description": "Starter",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "rp",
"sortOrder": 132,
"navigationMenu": "Pitching",
"description": "Reliever",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "pD",
"sortOrder": 133,
"navigationMenu": "Position",
"description": "Designated Hitter",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "pH",
"sortOrder": 134,
"navigationMenu": "Position",
"description": "Pinch Hitter",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "pR",
"sortOrder": 135,
"navigationMenu": "Position",
"description": "Pinch Runner",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "pX",
"sortOrder": 136,
"navigationMenu": "Position",
"description": "Undefined (e.g. PH bats twice in an inning)",
"team": true,
"batting": true,
"fielding": false,
"pitching": false
},
{
"code": "dr1",
"sortOrder": 141,
"navigationMenu": "Pitching",
"description": "One Day of Rest",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "dr2",
"sortOrder": 142,
"navigationMenu": "Pitching",
"description": "Two Days of Rest",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "dr3",
"sortOrder": 143,
"navigationMenu": "Pitching",
"description": "Three Days of Rest",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "dr4",
"sortOrder": 144,
"navigationMenu": "Pitching",
"description": "Four Days of Rest",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "dr5",
"sortOrder": 145,
"navigationMenu": "Pitching",
"description": "Five Plus Days of Rest",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "fip",
"sortOrder": 146,
"navigationMenu": "Pitching",
"description": "First Inning Pitched",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "fba",
"sortOrder": 147,
"navigationMenu": "Pitching",
"description": "First Batter (RP Only)",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "i01",
"sortOrder": 151,
"navigationMenu": "Inning",
"description": "First Inning",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "i02",
"sortOrder": 152,
"navigationMenu": "Inning",
"description": "Second Inning",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "i03",
"sortOrder": 153,
"navigationMenu": "Inning",
"description": "Third Inning",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "i04",
"sortOrder": 154,
"navigationMenu": "Inning",
"description": "Fourth Inning",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "i05",
"sortOrder": 155,
"navigationMenu": "Inning",
"description": "Fifth Inning",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "i06",
"sortOrder": 156,
"navigationMenu": "Inning",
"description": "Sixth Inning",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "i07",
"sortOrder": 157,
"navigationMenu": "Inning",
"description": "Seventh Inning",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "i08",
"sortOrder": 158,
"navigationMenu": "Inning",
"description": "Eighth Inning",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "i09",
"sortOrder": 159,
"navigationMenu": "Inning",
"description": "Ninth Inning",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "ix",
"sortOrder": 160,
"navigationMenu": "Inning",
"description": "Extra Innings",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "ig01",
"sortOrder": 161,
"navigationMenu": "Inning",
"description": "Innings One to Six",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "ig07",
"sortOrder": 162,
"navigationMenu": "Inning",
"description": "Seventh or Later",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "ig08",
"sortOrder": 163,
"navigationMenu": "Inning",
"description": "Eighth or Later",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "ig09",
"sortOrder": 164,
"navigationMenu": "Inning",
"description": "Ninth or Later",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "pi000",
"sortOrder": 171,
"navigationMenu": "Pitch Count",
"description": "First 75 Pitches",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "pi760",
"sortOrder": 172,
"navigationMenu": "Pitch Count",
"description": "Pitches 76 and Later",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "pi100",
"sortOrder": 173,
"navigationMenu": "Pitch Count",
"description": "First 100 Pitches",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "pi101",
"sortOrder": 174,
"navigationMenu": "Pitch Count",
"description": "Pitches 101 and Later",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "pi001",
"sortOrder": 175,
"navigationMenu": "Pitch Count",
"description": "Pitches 1-15",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "pi016",
"sortOrder": 176,
"navigationMenu": "Pitch Count",
"description": "Pitches 16-30",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "pi031",
"sortOrder": 177,
"navigationMenu": "Pitch Count",
"description": "Pitches 31-45",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "pi046",
"sortOrder": 178,
"navigationMenu": "Pitch Count",
"description": "Pitches 46-60",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "pi061",
"sortOrder": 179,
"navigationMenu": "Pitch Count",
"description": "Pitches 61-75",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "pi076",
"sortOrder": 180,
"navigationMenu": "Pitch Count",
"description": "Pitches 76-90",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "pi091",
"sortOrder": 181,
"navigationMenu": "Pitch Count",
"description": "Pitches 91-105",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "pi106",
"sortOrder": 182,
"navigationMenu": "Pitch Count",
"description": "Pitches 106-120",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "pi121",
"sortOrder": 183,
"navigationMenu": "Pitch Count",
"description": "Pitches 121 or Later",
"team": true,
"batting": false,
"fielding": false,
"pitching": true
},
{
"code": "e",
"sortOrder": 192,
"navigationMenu": "Runners",
"description": "Empty (Not Leadoff)",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "r0",
"sortOrder": 193,
"navigationMenu": "Runners",
"description": "Bases Empty",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "r123",
"sortOrder": 194,
"navigationMenu": "Runners",
"description": "Bases Loaded",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "r1",
"sortOrder": 195,
"navigationMenu": "Runners",
"description": "Runner at 1st",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "r12",
"sortOrder": 196,
"navigationMenu": "Runners",
"description": "Runners at 1st & 2nd",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "r13",
"sortOrder": 197,
"navigationMenu": "Runners",
"description": "Runners at 1st & 3rd",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "r2",
"sortOrder": 198,
"navigationMenu": "Runners",
"description": "Runner at 2nd",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "r23",
"sortOrder": 199,
"navigationMenu": "Runners",
"description": "Runners at 2nd & 3rd",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "r3",
"sortOrder": 200,
"navigationMenu": "Runners",
"description": "Runner at 3rd",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "ron",
"sortOrder": 201,
"navigationMenu": "Runners",
"description": "Runners On",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "ron2",
"sortOrder": 202,
"navigationMenu": "Runners",
"description": "Runners On - 2 Outs",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "risp",
"sortOrder": 203,
"navigationMenu": "Runners",
"description": "Scoring Position",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "risp2",
"sortOrder": 204,
"navigationMenu": "Runners",
"description": "Scoring Position - 2 Outs",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "r3l2",
"sortOrder": 205,
"navigationMenu": "Runners",
"description": "3rd, Less than 2 Outs",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "o0",
"sortOrder": 211,
"navigationMenu": "Outs",
"description": "No Outs",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "o1",
"sortOrder": 212,
"navigationMenu": "Outs",
"description": "One Out",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "o2",
"sortOrder": 213,
"navigationMenu": "Outs",
"description": "Two Outs",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "lc",
"sortOrder": 214,
"navigationMenu": "Score",
"description": "Late / Close",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "fp",
"sortOrder": 221,
"navigationMenu": "Count",
"description": "First Pitch",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "ac",
"sortOrder": 222,
"navigationMenu": "Count",
"description": "Ahead in Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "bc",
"sortOrder": 223,
"navigationMenu": "Count",
"description": "Behind in Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "ec",
"sortOrder": 224,
"navigationMenu": "Count",
"description": "Even Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "2s",
"sortOrder": 225,
"navigationMenu": "Count",
"description": "Two Strikes",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "fc",
"sortOrder": 226,
"navigationMenu": "Count",
"description": "Full Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "uc",
"sortOrder": 227,
"navigationMenu": "Count",
"description": "Unknown or no Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "c00",
"sortOrder": 228,
"navigationMenu": "Count",
"description": "0-0 Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "c01",
"sortOrder": 229,
"navigationMenu": "Count",
"description": "0-1 Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "c02",
"sortOrder": 230,
"navigationMenu": "Count",
"description": "0-2 Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "c10",
"sortOrder": 231,
"navigationMenu": "Count",
"description": "1-0 Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "c11",
"sortOrder": 232,
"navigationMenu": "Count",
"description": "1-1 Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "c12",
"sortOrder": 233,
"navigationMenu": "Count",
"description": "1-2 Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "c20",
"sortOrder": 234,
"navigationMenu": "Count",
"description": "2-0 Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "c21",
"sortOrder": 235,
"navigationMenu": "Count",
"description": "2-1 Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "c22",
"sortOrder": 236,
"navigationMenu": "Count",
"description": "2-2 Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "c30",
"sortOrder": 237,
"navigationMenu": "Count",
"description": "3-0 Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "c31",
"sortOrder": 238,
"navigationMenu": "Count",
"description": "3-1 Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "c32",
"sortOrder": 239,
"navigationMenu": "Count",
"description": "3-2 Count",
"team": true,
"batting": true,
"fielding": false,
"pitching": true
},
{
"code": "hh1",
"sortOrder": 301,
"description": "Home Games - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ah1",
"sortOrder": 302,
"description": "Away Games - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "dh1",
"sortOrder": 303,
"description": "Day Games - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "nh1",
"sortOrder": 304,
"description": "Night Games - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "gh1",
"sortOrder": 305,
"description": "On Grass - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "th1",
"sortOrder": 306,
"description": "On Turf - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "3h1",
"sortOrder": 311,
"description": "March - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "4h1",
"sortOrder": 312,
"description": "April - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "5h1",
"sortOrder": 313,
"description": "May - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "6h1",
"sortOrder": 314,
"description": "June - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "7h1",
"sortOrder": 315,
"description": "July - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "8h1",
"sortOrder": 316,
"description": "August - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "9h1",
"sortOrder": 317,
"description": "September - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "10h1",
"sortOrder": 318,
"description": "October - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "11h1",
"sortOrder": 319,
"description": "November - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "12h1",
"sortOrder": 320,
"description": "December - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "1h1",
"sortOrder": 321,
"description": "January - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "2h1",
"sortOrder": 322,
"description": "February - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vlgh1",
"sortOrder": 331,
"description": "vs. League - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vdvh1",
"sortOrder": 332,
"description": "vs. Division - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vth1",
"sortOrder": 333,
"description": "vs. Team - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "1rh1",
"sortOrder": 341,
"description": "One Run - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "exh1",
"sortOrder": 351,
"description": "Extra Innnings - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "l10h1",
"sortOrder": 352,
"description": "Last 10 - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vlsh1",
"sortOrder": 353,
"description": "vs Left Handed Starter - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vrsh1",
"sortOrder": 354,
"description": "vs Right Handed Starter - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "twnh1",
"sortOrder": 361,
"description": "In games won by team - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "tlsh1",
"sortOrder": 362,
"description": "In games lost by team - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ttih1",
"sortOrder": 363,
"description": "In tie games - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "tawh1",
"sortOrder": 364,
"description": "In games following a win - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "talh1",
"sortOrder": 365,
"description": "In games following a loss - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "tath1",
"sortOrder": 366,
"description": "In games following a tie - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "hh2",
"sortOrder": 401,
"description": "Home Games - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ah2",
"sortOrder": 402,
"description": "Away Games - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "dh2",
"sortOrder": 403,
"description": "Day Games - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "nh2",
"sortOrder": 404,
"description": "Night Games - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "gh2",
"sortOrder": 405,
"description": "On Grass - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "th2",
"sortOrder": 406,
"description": "On Turf - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "3h2",
"sortOrder": 411,
"description": "March - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "4h2",
"sortOrder": 412,
"description": "April - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "5h2",
"sortOrder": 413,
"description": "May - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "6h2",
"sortOrder": 414,
"description": "June - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "7h2",
"sortOrder": 415,
"description": "July - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "8h2",
"sortOrder": 416,
"description": "August - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "9h2",
"sortOrder": 417,
"description": "September - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "10h2",
"sortOrder": 418,
"description": "October - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "11h2",
"sortOrder": 419,
"description": "November - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "12h2",
"sortOrder": 420,
"description": "December - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "1h2",
"sortOrder": 421,
"description": "January - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "2h2",
"sortOrder": 422,
"description": "February - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vlgh2",
"sortOrder": 431,
"description": "vs. League - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vdvh2",
"sortOrder": 432,
"description": "vs. Division - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vth2",
"sortOrder": 433,
"description": "vs. Team - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "1rh2",
"sortOrder": 441,
"description": "One Run - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "exh2",
"sortOrder": 442,
"description": "Extra Innnings - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "l10h2",
"sortOrder": 443,
"description": "Last 10 - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vlsh2",
"sortOrder": 444,
"description": "vs Left Handed Starter - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vrsh2",
"sortOrder": 445,
"description": "vs Right Handed Starter - first half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "twnh2",
"sortOrder": 451,
"description": "In games won by team - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "tlsh2",
"sortOrder": 452,
"description": "In games lost by team - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ttih2",
"sortOrder": 453,
"description": "In tie games - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "tawh2",
"sortOrder": 454,
"description": "In games following a win - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "talh2",
"sortOrder": 455,
"description": "In games following a loss - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "tath2",
"sortOrder": 456,
"description": "In games following a tie - second half",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfa",
"sortOrder": 501,
"navigationMenu": "Pitch Type",
"description": "Fastball",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pff",
"sortOrder": 502,
"navigationMenu": "Pitch Type",
"description": "Four-seam FB",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pft",
"sortOrder": 503,
"navigationMenu": "Pitch Type",
"description": "Two-seam FB",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfc",
"sortOrder": 504,
"navigationMenu": "Pitch Type",
"description": "Cutter",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psi",
"sortOrder": 505,
"navigationMenu": "Pitch Type",
"description": "Sinker",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfs",
"sortOrder": 506,
"navigationMenu": "Pitch Type",
"description": "Splitter",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfo",
"sortOrder": 507,
"navigationMenu": "Pitch Type",
"description": "Forkball",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psl",
"sortOrder": 508,
"navigationMenu": "Pitch Type",
"description": "Slider",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pcu",
"sortOrder": 509,
"navigationMenu": "Pitch Type",
"description": "Curveball",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkc",
"sortOrder": 510,
"navigationMenu": "Pitch Type",
"description": "Knuckle Curve",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psc",
"sortOrder": 511,
"navigationMenu": "Pitch Type",
"description": "Screwball",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pgy",
"sortOrder": 512,
"navigationMenu": "Pitch Type",
"description": "Gyroball",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pch",
"sortOrder": 513,
"navigationMenu": "Pitch Type",
"description": "Changeup",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkn",
"sortOrder": 514,
"navigationMenu": "Pitch Type",
"description": "Knuckleball",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pep",
"sortOrder": 515,
"navigationMenu": "Pitch Type",
"description": "Eephus Pitch",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "zn01",
"sortOrder": 521,
"description": "Pitches in Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "zn02",
"sortOrder": 522,
"description": "Pitches in Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "zn03",
"sortOrder": 523,
"description": "Pitches in Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "zn04",
"sortOrder": 524,
"description": "Pitches in Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "zn05",
"sortOrder": 525,
"description": "Pitches in Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "zn06",
"sortOrder": 526,
"description": "Pitches in Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "zn07",
"sortOrder": 527,
"description": "Pitches in Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "zn08",
"sortOrder": 528,
"description": "Pitches in Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "zn09",
"sortOrder": 529,
"description": "Pitches in Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "zn11",
"sortOrder": 531,
"description": "Pitches in Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "zn12",
"sortOrder": 532,
"description": "Pitches in Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "zn13",
"sortOrder": 533,
"description": "Pitches in Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "zn14",
"sortOrder": 534,
"description": "Pitches in Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfa01",
"sortOrder": 601,
"description": "Fastball Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfa02",
"sortOrder": 602,
"description": "Fastball Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfa03",
"sortOrder": 603,
"description": "Fastball Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfa04",
"sortOrder": 604,
"description": "Fastball Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfa05",
"sortOrder": 605,
"description": "Fastball Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfa06",
"sortOrder": 606,
"description": "Fastball Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfa07",
"sortOrder": 607,
"description": "Fastball Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfa08",
"sortOrder": 608,
"description": "Fastball Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfa09",
"sortOrder": 609,
"description": "Fastball Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfa11",
"sortOrder": 611,
"description": "Fastball Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfa12",
"sortOrder": 612,
"description": "Fastball Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfa13",
"sortOrder": 613,
"description": "Fastball Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfa14",
"sortOrder": 614,
"description": "Fastball Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pft01",
"sortOrder": 621,
"description": "Two-seam FB Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pft02",
"sortOrder": 622,
"description": "Two-seam FB Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pft03",
"sortOrder": 623,
"description": "Two-seam FB Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pft04",
"sortOrder": 624,
"description": "Two-seam FB Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pft05",
"sortOrder": 625,
"description": "Two-seam FB Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pft06",
"sortOrder": 626,
"description": "Two-seam FB Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pft07",
"sortOrder": 627,
"description": "Two-seam FB Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pft08",
"sortOrder": 628,
"description": "Two-seam FB Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pft09",
"sortOrder": 629,
"description": "Two-seam FB Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pft11",
"sortOrder": 631,
"description": "Two-seam FB Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pft12",
"sortOrder": 632,
"description": "Two-seam FB Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pft13",
"sortOrder": 633,
"description": "Two-seam FB Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pft14",
"sortOrder": 634,
"description": "Two-seam FB Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pff01",
"sortOrder": 641,
"description": "Four-seam Fastball Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pff02",
"sortOrder": 642,
"description": "Four-seam Fastball Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pff03",
"sortOrder": 643,
"description": "Four-seam Fastball Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pff04",
"sortOrder": 644,
"description": "Four-seam Fastball Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pff05",
"sortOrder": 645,
"description": "Four-seam Fastball Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pff06",
"sortOrder": 646,
"description": "Four-seam Fastball Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pff07",
"sortOrder": 647,
"description": "Four-seam Fastball Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pff08",
"sortOrder": 648,
"description": "Four-seam Fastball Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pff09",
"sortOrder": 649,
"description": "Four-seam Fastball Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pff11",
"sortOrder": 651,
"description": "Four-seam Fastball Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pff12",
"sortOrder": 652,
"description": "Four-seam Fastball Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pff13",
"sortOrder": 653,
"description": "Four-seam Fastball Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pff14",
"sortOrder": 654,
"description": "Four-seam Fastball Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfc01",
"sortOrder": 661,
"description": "Cutter Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfc02",
"sortOrder": 662,
"description": "Cutter Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfc03",
"sortOrder": 663,
"description": "Cutter Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfc04",
"sortOrder": 664,
"description": "Cutter Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfc05",
"sortOrder": 665,
"description": "Cutter Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfc06",
"sortOrder": 666,
"description": "Cutter Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfc07",
"sortOrder": 667,
"description": "Cutter Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfc08",
"sortOrder": 668,
"description": "Cutter Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfc09",
"sortOrder": 669,
"description": "Cutter Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfc11",
"sortOrder": 671,
"description": "Cutter Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfc12",
"sortOrder": 672,
"description": "Cutter Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfc13",
"sortOrder": 673,
"description": "Cutter Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfc14",
"sortOrder": 674,
"description": "Cutter Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfs01",
"sortOrder": 681,
"description": "Splitter Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfs02",
"sortOrder": 682,
"description": "Splitter Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfs03",
"sortOrder": 683,
"description": "Splitter Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfs04",
"sortOrder": 684,
"description": "Splitter Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfs05",
"sortOrder": 685,
"description": "Splitter Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfs06",
"sortOrder": 686,
"description": "Splitter Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfs07",
"sortOrder": 687,
"description": "Splitter Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfs08",
"sortOrder": 688,
"description": "Splitter Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfs09",
"sortOrder": 689,
"description": "Splitter Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfs11",
"sortOrder": 691,
"description": "Splitter Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfs12",
"sortOrder": 692,
"description": "Splitter Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfs13",
"sortOrder": 693,
"description": "Splitter Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfs14",
"sortOrder": 694,
"description": "Splitter Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pgy01",
"sortOrder": 701,
"description": "Gyroball Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pgy02",
"sortOrder": 702,
"description": "Gyroball Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pgy03",
"sortOrder": 703,
"description": "Gyroball Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pgy04",
"sortOrder": 704,
"description": "Gyroball Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pgy05",
"sortOrder": 705,
"description": "Gyroball Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pgy06",
"sortOrder": 706,
"description": "Gyroball Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pgy07",
"sortOrder": 707,
"description": "Gyroball Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pgy08",
"sortOrder": 708,
"description": "Gyroball Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pgy09",
"sortOrder": 709,
"description": "Gyroball Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pgy11",
"sortOrder": 711,
"description": "Gyroball Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pgy12",
"sortOrder": 712,
"description": "Gyroball Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pgy13",
"sortOrder": 713,
"description": "Gyroball Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pgy14",
"sortOrder": 714,
"description": "Gyroball Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pch01",
"sortOrder": 721,
"description": "Changeup Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pch02",
"sortOrder": 722,
"description": "Changeup Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pch03",
"sortOrder": 723,
"description": "Changeup Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pch04",
"sortOrder": 724,
"description": "Changeup Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pch05",
"sortOrder": 725,
"description": "Changeup Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pch06",
"sortOrder": 726,
"description": "Changeup Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pch07",
"sortOrder": 727,
"description": "Changeup Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pch08",
"sortOrder": 728,
"description": "Changeup Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pch09",
"sortOrder": 729,
"description": "Changeup Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pch11",
"sortOrder": 731,
"description": "Changeup Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pch12",
"sortOrder": 732,
"description": "Changeup Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pch13",
"sortOrder": 733,
"description": "Changeup Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pch14",
"sortOrder": 734,
"description": "Changeup Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfo01",
"sortOrder": 741,
"description": "Forkball Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfo02",
"sortOrder": 742,
"description": "Forkball Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfo03",
"sortOrder": 743,
"description": "Forkball Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfo04",
"sortOrder": 744,
"description": "Forkball Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfo05",
"sortOrder": 745,
"description": "Forkball Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfo06",
"sortOrder": 746,
"description": "Forkball Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfo07",
"sortOrder": 747,
"description": "Forkball Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfo08",
"sortOrder": 748,
"description": "Forkball Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfo09",
"sortOrder": 749,
"description": "Forkball Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfo11",
"sortOrder": 751,
"description": "Forkball Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfo12",
"sortOrder": 752,
"description": "Forkball Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfo13",
"sortOrder": 753,
"description": "Forkball Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pfo14",
"sortOrder": 754,
"description": "Forkball Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psi01",
"sortOrder": 761,
"description": "Sinker Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psi02",
"sortOrder": 762,
"description": "Sinker Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psi03",
"sortOrder": 763,
"description": "Sinker Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psi04",
"sortOrder": 764,
"description": "Sinker Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psi05",
"sortOrder": 765,
"description": "Sinker Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psi06",
"sortOrder": 766,
"description": "Sinker Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psi07",
"sortOrder": 767,
"description": "Sinker Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psi08",
"sortOrder": 768,
"description": "Sinker Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psi09",
"sortOrder": 769,
"description": "Sinker Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psi11",
"sortOrder": 771,
"description": "Sinker Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psi12",
"sortOrder": 772,
"description": "Sinker Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psi13",
"sortOrder": 773,
"description": "Sinker Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psi14",
"sortOrder": 774,
"description": "Sinker Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psl01",
"sortOrder": 781,
"description": "Slider Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psl02",
"sortOrder": 782,
"description": "Slider Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psl03",
"sortOrder": 783,
"description": "Slider Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psl04",
"sortOrder": 784,
"description": "Slider Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psl05",
"sortOrder": 785,
"description": "Slider Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psl06",
"sortOrder": 786,
"description": "Slider Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psl07",
"sortOrder": 787,
"description": "Slider Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psl08",
"sortOrder": 788,
"description": "Slider Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psl09",
"sortOrder": 789,
"description": "Slider Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psl11",
"sortOrder": 791,
"description": "Slider Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psl12",
"sortOrder": 792,
"description": "Slider Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psl13",
"sortOrder": 793,
"description": "Slider Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psl14",
"sortOrder": 794,
"description": "Slider Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pcu01",
"sortOrder": 801,
"description": "Curveball Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pcu02",
"sortOrder": 802,
"description": "Curveball Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pcu03",
"sortOrder": 803,
"description": "Curveball Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pcu04",
"sortOrder": 804,
"description": "Curveball Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pcu05",
"sortOrder": 805,
"description": "Curveball Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pcu06",
"sortOrder": 806,
"description": "Curveball Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pcu07",
"sortOrder": 807,
"description": "Curveball Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pcu08",
"sortOrder": 808,
"description": "Curveball Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pcu09",
"sortOrder": 809,
"description": "Curveball Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pcu11",
"sortOrder": 811,
"description": "Curveball Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pcu12",
"sortOrder": 812,
"description": "Curveball Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pcu13",
"sortOrder": 813,
"description": "Curveball Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pcu14",
"sortOrder": 814,
"description": "Curveball Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkc01",
"sortOrder": 821,
"description": "Knuckle Curve Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkc02",
"sortOrder": 822,
"description": "Knuckle Curve Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkc03",
"sortOrder": 823,
"description": "Knuckle Curve Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkc04",
"sortOrder": 824,
"description": "Knuckle Curve Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkc05",
"sortOrder": 825,
"description": "Knuckle Curve Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkc06",
"sortOrder": 826,
"description": "Knuckle Curve Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkc07",
"sortOrder": 827,
"description": "Knuckle Curve Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkc08",
"sortOrder": 828,
"description": "Knuckle Curve Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkc09",
"sortOrder": 829,
"description": "Knuckle Curve Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkc11",
"sortOrder": 831,
"description": "Knuckle Curve Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkc12",
"sortOrder": 832,
"description": "Knuckle Curve Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkc13",
"sortOrder": 833,
"description": "Knuckle Curve Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkc14",
"sortOrder": 834,
"description": "Knuckle Curve Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkn01",
"sortOrder": 841,
"description": "Knuckleball Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkn02",
"sortOrder": 842,
"description": "Knuckleball Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkn03",
"sortOrder": 843,
"description": "Knuckleball Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkn04",
"sortOrder": 844,
"description": "Knuckleball Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkn05",
"sortOrder": 845,
"description": "Knuckleball Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkn06",
"sortOrder": 846,
"description": "Knuckleball Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkn07",
"sortOrder": 847,
"description": "Knuckleball Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkn08",
"sortOrder": 848,
"description": "Knuckleball Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkn09",
"sortOrder": 849,
"description": "Knuckleball Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkn11",
"sortOrder": 851,
"description": "Knuckleball Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkn12",
"sortOrder": 852,
"description": "Knuckleball Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkn13",
"sortOrder": 853,
"description": "Knuckleball Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pkn14",
"sortOrder": 854,
"description": "Knuckleball Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psc01",
"sortOrder": 861,
"description": "Screwball Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psc02",
"sortOrder": 862,
"description": "Screwball Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psc03",
"sortOrder": 863,
"description": "Screwball Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psc04",
"sortOrder": 864,
"description": "Screwball Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psc05",
"sortOrder": 865,
"description": "Screwball Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psc06",
"sortOrder": 866,
"description": "Screwball Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psc07",
"sortOrder": 867,
"description": "Screwball Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psc08",
"sortOrder": 868,
"description": "Screwball Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psc09",
"sortOrder": 869,
"description": "Screwball Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psc11",
"sortOrder": 871,
"description": "Screwball Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psc12",
"sortOrder": 872,
"description": "Screwball Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psc13",
"sortOrder": 873,
"description": "Screwball Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "psc14",
"sortOrder": 874,
"description": "Screwball Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pep01",
"sortOrder": 881,
"description": "Eephus Pitch Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pep02",
"sortOrder": 882,
"description": "Eephus Pitch Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pep03",
"sortOrder": 883,
"description": "Eephus Pitch Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pep04",
"sortOrder": 884,
"description": "Eephus Pitch Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pep05",
"sortOrder": 885,
"description": "Eephus Pitch Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pep06",
"sortOrder": 886,
"description": "Eephus Pitch Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pep07",
"sortOrder": 887,
"description": "Eephus Pitch Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pep08",
"sortOrder": 888,
"description": "Eephus Pitch Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pep09",
"sortOrder": 889,
"description": "Eephus Pitch Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pep11",
"sortOrder": 891,
"description": "Eephus Pitch Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pep12",
"sortOrder": 892,
"description": "Eephus Pitch Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pep13",
"sortOrder": 893,
"description": "Eephus Pitch Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "pep14",
"sortOrder": 894,
"description": "Eephus Pitch Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o001",
"sortOrder": 1001,
"description": "No Outs Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o002",
"sortOrder": 1002,
"description": "No Outs Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o003",
"sortOrder": 1003,
"description": "No Outs Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o004",
"sortOrder": 1004,
"description": "No Outs Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o005",
"sortOrder": 1005,
"description": "No Outs Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o006",
"sortOrder": 1006,
"description": "No Outs Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o007",
"sortOrder": 1007,
"description": "No Outs Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o008",
"sortOrder": 1008,
"description": "No Outs Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o009",
"sortOrder": 1009,
"description": "No Outs Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o011",
"sortOrder": 1011,
"description": "No Outs Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o012",
"sortOrder": 1012,
"description": "No Outs Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o013",
"sortOrder": 1013,
"description": "No Outs Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o014",
"sortOrder": 1014,
"description": "No Outs Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o101",
"sortOrder": 1021,
"description": "One Out Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o102",
"sortOrder": 1022,
"description": "One Out Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o103",
"sortOrder": 1023,
"description": "One Out Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o104",
"sortOrder": 1024,
"description": "One Out Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o105",
"sortOrder": 1025,
"description": "One Out Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o106",
"sortOrder": 1026,
"description": "One Out Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o107",
"sortOrder": 1027,
"description": "One Out Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o108",
"sortOrder": 1028,
"description": "One Out Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o109",
"sortOrder": 1029,
"description": "One Out Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o111",
"sortOrder": 1031,
"description": "One Out Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o112",
"sortOrder": 1032,
"description": "One Out Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o113",
"sortOrder": 1033,
"description": "One Out Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o114",
"sortOrder": 1034,
"description": "One Out Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o201",
"sortOrder": 1041,
"description": "Two Outs Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o202",
"sortOrder": 1042,
"description": "Two Outs Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o203",
"sortOrder": 1043,
"description": "Two Outs Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o204",
"sortOrder": 1044,
"description": "Two Outs Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o205",
"sortOrder": 1045,
"description": "Two Outs Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o206",
"sortOrder": 1046,
"description": "Two Outs Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o207",
"sortOrder": 1047,
"description": "Two Outs Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o208",
"sortOrder": 1048,
"description": "Two Outs Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o209",
"sortOrder": 1049,
"description": "Two Outs Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o211",
"sortOrder": 1051,
"description": "Two Outs Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o212",
"sortOrder": 1052,
"description": "Two Outs Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o213",
"sortOrder": 1053,
"description": "Two Outs Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "o214",
"sortOrder": 1054,
"description": "Two Outs Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ac01",
"sortOrder": 1101,
"description": "Ahead in Count Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ac02",
"sortOrder": 1102,
"description": "Ahead in Count Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ac03",
"sortOrder": 1103,
"description": "Ahead in Count Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ac04",
"sortOrder": 1104,
"description": "Ahead in Count Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ac05",
"sortOrder": 1105,
"description": "Ahead in Count Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ac06",
"sortOrder": 1106,
"description": "Ahead in Count Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ac07",
"sortOrder": 1107,
"description": "Ahead in Count Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ac08",
"sortOrder": 1108,
"description": "Ahead in Count Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ac09",
"sortOrder": 1109,
"description": "Ahead in Count Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ac11",
"sortOrder": 1111,
"description": "Ahead in Count Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ac12",
"sortOrder": 1112,
"description": "Ahead in Count Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ac13",
"sortOrder": 1113,
"description": "Ahead in Count Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ac14",
"sortOrder": 1114,
"description": "Ahead in Count Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "bc01",
"sortOrder": 1121,
"description": "Behind in Count Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "bc02",
"sortOrder": 1122,
"description": "Behind in Count Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "bc03",
"sortOrder": 1123,
"description": "Behind in Count Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "bc04",
"sortOrder": 1124,
"description": "Behind in Count Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "bc05",
"sortOrder": 1125,
"description": "Behind in Count Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "bc06",
"sortOrder": 1126,
"description": "Behind in Count Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "bc07",
"sortOrder": 1127,
"description": "Behind in Count Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "bc08",
"sortOrder": 1128,
"description": "Behind in Count Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "bc09",
"sortOrder": 1129,
"description": "Behind in Count Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "bc11",
"sortOrder": 1131,
"description": "Behind in Count Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "bc12",
"sortOrder": 1132,
"description": "Behind in Count Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "bc13",
"sortOrder": 1133,
"description": "Behind in Count Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "bc14",
"sortOrder": 1134,
"description": "Behind in Count Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ec01",
"sortOrder": 1141,
"description": "Even Count Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ec02",
"sortOrder": 1142,
"description": "Even Count Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ec03",
"sortOrder": 1143,
"description": "Even Count Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ec04",
"sortOrder": 1144,
"description": "Even Count Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ec05",
"sortOrder": 1145,
"description": "Even Count Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ec06",
"sortOrder": 1146,
"description": "Even Count Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ec07",
"sortOrder": 1147,
"description": "Even Count Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ec08",
"sortOrder": 1148,
"description": "Even Count Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ec09",
"sortOrder": 1149,
"description": "Even Count Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ec11",
"sortOrder": 1151,
"description": "Even Count Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ec12",
"sortOrder": 1152,
"description": "Even Count Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ec13",
"sortOrder": 1153,
"description": "Even Count Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ec14",
"sortOrder": 1154,
"description": "Even Count Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "r001",
"sortOrder": 1161,
"description": "Bases Empty Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "r002",
"sortOrder": 1162,
"description": "Bases Empty Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "r003",
"sortOrder": 1163,
"description": "Bases Empty Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "r004",
"sortOrder": 1164,
"description": "Bases Empty Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "r005",
"sortOrder": 1165,
"description": "Bases Empty Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "r006",
"sortOrder": 1166,
"description": "Bases Empty Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "r007",
"sortOrder": 1167,
"description": "Bases Empty Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "r008",
"sortOrder": 1168,
"description": "Bases Empty Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "r009",
"sortOrder": 1169,
"description": "Bases Empty Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "r011",
"sortOrder": 1171,
"description": "Bases Empty Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "r012",
"sortOrder": 1172,
"description": "Bases Empty Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "r013",
"sortOrder": 1173,
"description": "Bases Empty Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "r014",
"sortOrder": 1174,
"description": "Bases Empty Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rbl01",
"sortOrder": 1181,
"description": "Bases Loaded Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rbl02",
"sortOrder": 1182,
"description": "Bases Loaded Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rbl03",
"sortOrder": 1183,
"description": "Bases Loaded Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rbl04",
"sortOrder": 1184,
"description": "Bases Loaded Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rbl05",
"sortOrder": 1185,
"description": "Bases Loaded Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rbl06",
"sortOrder": 1186,
"description": "Bases Loaded Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rbl07",
"sortOrder": 1187,
"description": "Bases Loaded Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rbl08",
"sortOrder": 1188,
"description": "Bases Loaded Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rbl09",
"sortOrder": 1189,
"description": "Bases Loaded Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rbl11",
"sortOrder": 1191,
"description": "Bases Loaded Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rbl12",
"sortOrder": 1192,
"description": "Bases Loaded Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rbl13",
"sortOrder": 1193,
"description": "Bases Loaded Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rbl14",
"sortOrder": 1194,
"description": "Bases Loaded Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ron01",
"sortOrder": 1201,
"description": "Runners On Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ron02",
"sortOrder": 1202,
"description": "Runners On Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ron03",
"sortOrder": 1203,
"description": "Runners On Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ron04",
"sortOrder": 1204,
"description": "Runners On Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ron05",
"sortOrder": 1205,
"description": "Runners On Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ron06",
"sortOrder": 1206,
"description": "Runners On Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ron07",
"sortOrder": 1207,
"description": "Runners On Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ron08",
"sortOrder": 1208,
"description": "Runners On Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ron09",
"sortOrder": 1209,
"description": "Runners On Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ron11",
"sortOrder": 1211,
"description": "Runners On Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ron12",
"sortOrder": 1212,
"description": "Runners On Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ron13",
"sortOrder": 1213,
"description": "Runners On Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "ron14",
"sortOrder": 1214,
"description": "Runners On Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rsp01",
"sortOrder": 1221,
"description": "Scoring Position Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rsp02",
"sortOrder": 1222,
"description": "Scoring Position Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rsp03",
"sortOrder": 1223,
"description": "Scoring Position Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rsp04",
"sortOrder": 1224,
"description": "Scoring Position Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rsp05",
"sortOrder": 1225,
"description": "Scoring Position Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rsp06",
"sortOrder": 1226,
"description": "Scoring Position Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rsp07",
"sortOrder": 1227,
"description": "Scoring Position Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rsp08",
"sortOrder": 1228,
"description": "Scoring Position Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rsp09",
"sortOrder": 1229,
"description": "Scoring Position Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rsp11",
"sortOrder": 1231,
"description": "Scoring Position Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rsp12",
"sortOrder": 1232,
"description": "Scoring Position Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rsp13",
"sortOrder": 1233,
"description": "Scoring Position Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "rsp14",
"sortOrder": 1234,
"description": "Scoring Position Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vl01",
"sortOrder": 1241,
"description": "vs Left Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vl02",
"sortOrder": 1242,
"description": "vs Left Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vl03",
"sortOrder": 1243,
"description": "vs Left Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vl04",
"sortOrder": 1244,
"description": "vs Left Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vl05",
"sortOrder": 1245,
"description": "vs Left Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vl06",
"sortOrder": 1246,
"description": "vs Left Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vl07",
"sortOrder": 1247,
"description": "vs Left Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vl08",
"sortOrder": 1248,
"description": "vs Left Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vl09",
"sortOrder": 1249,
"description": "vs Left Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vl11",
"sortOrder": 1251,
"description": "vs Left Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vl12",
"sortOrder": 1252,
"description": "vs Left Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vl13",
"sortOrder": 1253,
"description": "vs Left Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vl14",
"sortOrder": 1254,
"description": "vs Left Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vr01",
"sortOrder": 1261,
"description": "vs Right Zone 1",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vr02",
"sortOrder": 1262,
"description": "vs Right Zone 2",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vr03",
"sortOrder": 1263,
"description": "vs Right Zone 3",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vr04",
"sortOrder": 1264,
"description": "vs Right Zone 4",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vr05",
"sortOrder": 1265,
"description": "vs Right Zone 5",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vr06",
"sortOrder": 1266,
"description": "vs Right Zone 6",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vr07",
"sortOrder": 1267,
"description": "vs Right Zone 7",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vr08",
"sortOrder": 1268,
"description": "vs Right Zone 8",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vr09",
"sortOrder": 1269,
"description": "vs Right Zone 9",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vr11",
"sortOrder": 1271,
"description": "vs Right Zone 11",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vr12",
"sortOrder": 1272,
"description": "vs Right Zone 12",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vr13",
"sortOrder": 1273,
"description": "vs Right Zone 13",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
},
{
"code": "vr14",
"sortOrder": 1274,
"description": "vs Right Zone 14",
"team": false,
"batting": false,
"fielding": false,
"pitching": false
}
]