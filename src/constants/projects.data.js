// images
import ColorPalette from '../assets/color-palette.png';
import CrawnClothing from '../assets/crwn-clothing.png';
import NasaMissionControl from '../assets/nasa-mission-control.png';
import ProjectManagement from '../assets/project-management.png';
import Weatherin from '../assets/weatherin.png';
import Diceplay from '../assets/diceplay.png';
import MovieTicketBooking from '../assets/movie-ticket-booking.png'

export const projectsData = [
	{
		id: 1,
		title: 'NASA MISSION CONTROL',
		description1: 'NASA MISSION CONTROL is a Full-Stack Wep Application.',
		description2: `You can schedule a mission launch for interstellar travel to one of the Kepler Exoplanets. You can see the history of mission launches including SpaceX launches starting from the year 2006. You can also see the upcoming missions of SpaceX.`,
		stack: [
			'React',
			'CSS-in-JS',
			'Arwes',
			'Node',
			'Express',
			'SpaceX-API',
			'MongoDB',
			'Mongoose',
			'Jest',
			'Supertest',
		],
		liveLink: 'https://nasamissioncontrolapp.herokuapp.com/',
		sourceLink: 'https://github.com/SumanIslam/NASA-mission-control-project',
		imageSource: NasaMissionControl,
	},
	{
		id: 2,
		title: 'Crwn Clothing',
		description1: 'Crwn Clothing is a Front-end E-commerce Wep Application',
		description2:
			'You can shop different products like jackets, sneakers from this site. You can add your product to cart and checkout by paying the product price. You can signup and signin with your email and password. You can also use your google account for login also.',
		stack: [
			'React',
			'Redux',
			'redux-saga',
			'Styled-Component',
			'Node',
			'Firebase',
			'Stripe',
		],
		liveLink: 'https://crownclothapp.herokuapp.com/',
		sourceLink: 'https://github.com/SumanIslam/crwn-clothing',
		imageSource: CrawnClothing,
	},
	{
		id: 3,
		title: 'Color Palette',
		description1: 'Color Palette is a Front-End Web Application',
		description2:
			'This is a color picker website where you can get a lot of colors. It has 9 different color palette and each color palette has 24 different colors. For each color palette you can change the intensity level [100-900] of color by change the intensity level using level slider. Besides each color has 9 shades.',
		stack: [
			'React',
			'Material UI',
			'CSS-in-JS',
			'chroma.js',
			'react-color',
			'rc-slider',
			'react-transition-group',
			'react-copy-to-clipboard',
		],
		liveLink: 'https://ui-color-palette-react.vercel.app/',
		sourceLink: 'https://github.com/SumanIslam/ui-color-palette-react',
		imageSource: ColorPalette,
	},
	{
		id: 4,
		title: 'Project Management',
		description1: 'Project Management is a Full-Stack Web Application.',
		description2:
			'This is a project management application where you can manage your projects. You can see all of your projects and clients associated with projects. You can also see the project details and can update details if needed. Besides, you can add projects and clients.',
		stack: [
			'React',
			'Bootstrap',
			'Node.js',
			'Express',
			'GraphQL',
			'Apollo Client',
			'mongoDB',
			'mongoose',
			'react-icons',
		],
		liveLink: 'https://projectmngtapp.herokuapp.com/',
		sourceLink: 'https://github.com/SumanIslam/Project-mngt-app',
		imageSource: ProjectManagement,
	},
	{
		id: 5,
		title: 'Weatherin App',
		description1: 'Weatherin is a Front-End Web Application.',
		description2:
			'This is a weather web application where you can get the weather details. You can search for cities or countries to see the weather condition of that place. You can also see whether it is day or night at that moment and whether it is rainy, sunny or cloudy. You can also see the temperature in celsius.',
		stack: ['HTML', 'CSS', 'Bootstrap', 'Vanila JavaScript', 'AccuWeather API'],
		liveLink: 'https://weatherin.vercel.app/',
		sourceLink: 'https://github.com/SumanIslam/Weather-app-1',
		imageSource: Weatherin,
	},
	{
		id: 6,
		title: 'DicePlay App',
		description1: 'DicePlay is a Front-End Web Application.',
		description2:
			'This is a web application where you can play the dice game also known as pig game. It requires two players to play the game. If player1 score 100 points first then player1 will be the winner and same for player2. Perhaps you loose in this game if you are greedy in scoring points. Sometimes, there will be opportunity for scoring but have to take step wisely.',
		stack: ['HTML', 'CSS', 'Vanila JavaScript'],
		liveLink: 'https://diceplay-two.vercel.app/',
		sourceLink: 'https://github.com/SumanIslam/pig-game',
		imageSource: Diceplay,
	},
	{
		id: 7,
		title: 'Movie Ticket Booking App',
		description1: 'Movie Ticket Booking is a Front-End Web Application.',
		description2:
			'This is a web application where you can book the movie ticket. You can book ticket for different movies for different price. You can see the Available and occupied seats. When you select the seat you will see the selected seat in different color that helps you distinguish selected and other seats. Besides, you can also see the number of seats you booked and the total price of those seats.',
		stack: ['React', 'CSS', 'Context API', 'React Hooks'],
		liveLink: 'https://movieticketbooking.vercel.app/',
		sourceLink: 'https://github.com/SumanIslam/movie-ticket-booking',
		imageSource: MovieTicketBooking,
	},
];
