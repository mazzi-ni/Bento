// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Mazzi',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '04c587d1e08c2b1869e8b65e32b3f164', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '67.28',
	defaultLongitude: '17.70',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/#inbox',
		},
		{
			id: '3',
			name: 'Memorigi',
			icon: 'trello',
			link: 'https://memorigi.app/today',
		},
		{
			id: '4',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '5',
			name: '- UNI -',
			icon: 'graduation-cap',
			link: 'https://elearning.unimib.it/course/index.php?categoryid=8695',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Spoty',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'Route',
			icon: 'maps',
			link: 'https://classic-maps.openrouteservice.org/directions?n1=46.313739&n2=8.261032&n3=11&a=46.313774,8.261029,null,null&b=2&l1=1&c=0&k1=en-US&k2=km',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'coffee',
			id: '1',
			links: [
				{
					name: 'DisneyPlus',
					link: 'https://www.disneyplus.com/it-it/home',
				},
				{
					name: 'Notion',
					link: 'https://notion.so',
				},
				{
					name: 'Spotify',
					link: 'https://open.spotify.com/',
				},
				{
					name: 'Mail - Uni',
					link: 'https://mail.google.com/mail/u/1/#inbox',
				},
			],
		},
		{
			icon: 'map',
			id: '2',
			links: [
				{
					name: 'Maps',
					link: 'https://classic-maps.openrouteservice.org/directions?n1=46.313739&n2=8.261032&n3=11&a=46.313774,8.261029,null,null&b=2&l1=1&c=0&k1=en-US&k2=km',
				},
				{
					name: 'Koomot',
					link: 'https://www.komoot.it/discover',
				},
				{
					name: 'GoogleMaps',
					link: 'https://google.com/maps',
				},
				{
					name: 'TheCrag',
					link: 'https://www.thecrag.com/'
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
