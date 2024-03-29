// dependencies
import { v4 as uuidv4 } from 'uuid';

// images
import DoorToNikah from '../assets/doortonikah.png'
import ColorPalette from '../assets/color-palette.png';
import CrawnClothing from '../assets/crwn-clothing.png';
import NasaMissionControl from '../assets/nasa-mission-control.png';
import ProjectManagement from '../assets/project-management.png';
import Weatherin from '../assets/weatherin.png';
import Diceplay from '../assets/diceplay.png';
import MovieTicketBooking from '../assets/movie-ticket-booking.png';
import LightsOut from '../assets/lightsout.png';
import InfinityScroll from '../assets/infinity.png';
import DadJokes from '../assets/dadjokes.png';
import HangMan from '../assets/hangman.png';
import ToDo from '../assets/todo.png'

export const projectsData = [
	{
		id: uuidv4(),
		title: 'DOOR TO NIKAH',
		description1:
			'DOOR TO NIKAH is a Full-Stack Islamic Matrimony Web Application.',
		description2: `It is an Islamic matrimony web application that will serve the Bangladeshi practicing Muslim community. This application will help Muslims to find the religious life partner. Users can upload their biodata or can see others biodata. User can get the contact details of other users by paying some money`,
		stack: [
			'React',
			'Node.js',
			'Express.js',
			'MongoDB',
			'Bootstrap',
			'MUI',
			'Mongoose',
		],
		liveLink: 'https://doortonikah.vercel.app/',
		frontendCode: 'https://github.com/SumanIslam/DoorToNikah',
		backendCode: 'https://github.com/SumanIslam/DoorToNikahBackend',
		imageSource: DoorToNikah,
		showcase: true,
	},
	{
		id: uuidv4(),
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
			'react-copy-to-clipboard',
		],
		liveLink: 'https://uicolor.vercel.app/',
		sourceLink: 'https://github.com/SumanIslam/ui-color-palette-react',
		imageSource: ColorPalette,
		showcase: true,
	},
	{
		id: uuidv4(),
		title: 'NASA MISSION CONTROL',
		description1: 'NASA MISSION CONTROL is a Full-Stack Web Application.',
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
		],
		liveLink: 'https://nasamissioncontrol.vercel.app/',
		frontendCode: 'https://github.com/SumanIslam/NASA-mission-control-project',
		backendCode:
			'https://github.com/SumanIslam/Nasa-mission-control-app-backend',
		imageSource: NasaMissionControl,
		showcase: true,
	},
	{
		id: uuidv4(),
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
		liveLink: 'https://crwn-clothing-production-dde7.up.railway.app/',
		sourceLink: 'https://github.com/SumanIslam/crwn-clothing',
		imageSource: CrawnClothing,
	},
	// {
	// 	id: uuidv4(),
	// 	title: 'Project Management',
	// 	description1: 'Project Management is a Full-Stack Web Application.',
	// 	description2:
	// 		'This is a project management application where you can manage your projects. You can see all of your projects and clients associated with projects. You can also see the project details and can update details if needed. Besides, you can add projects and clients.',
	// 	stack: [
	// 		'React',
	// 		'Bootstrap',
	// 		'Node.js',
	// 		'Express',
	// 		'GraphQL',
	// 		'Apollo Client',
	// 		'mongoDB',
	// 		'mongoose',
	// 		'react-icons',
	// 	],
	// 	liveLink: 'https://projectmngtapp.herokuapp.com/',
	// 	sourceLink: 'https://github.com/SumanIslam/Project-mngt-app',
	// 	imageSource: ProjectManagement,
	// },
	{
		id: uuidv4(),
		title: 'Weatherin App',
		description1: 'Weatherin is a Front-End Web Application.',
		description2:
			'This is a weather web application where you can get the weather details. You can search for cities or countries to see the weather condition of that place. You can also see whether it is day or night at that moment and whether it is rainy, sunny or cloudy. You can also see the temperature in celsius.',
		stack: [
			'HTML',
			'CSS',
			'Bootstrap',
			'Vanila JavaScript',
			'AccuWeather API',
			'Local Storage',
		],
		liveLink: 'https://weatherin.vercel.app/',
		sourceLink: 'https://github.com/SumanIslam/Weather-app-1',
		imageSource: Weatherin,
	},
	{
		id: uuidv4(),
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
		id: uuidv4(),
		title: 'Movie Ticket Booking App',
		description1: 'Movie Ticket Booking is a Front-End Web Application.',
		description2:
			'This is a web application where you can book the movie ticket. You can book ticket for different movies for different price. You can see the Available and occupied seats. When you select the seat you will see the selected seat in different color that helps you distinguish selected and other seats. Besides, you can also see the number of seats you booked and the total price of those seats.',
		stack: ['React', 'CSS', 'Context API', 'React Hooks', 'Local Storage'],
		liveLink: 'https://movieticketbooking.vercel.app/',
		sourceLink: 'https://github.com/SumanIslam/movie-ticket-booking',
		imageSource: MovieTicketBooking,
	},
	{
		id: uuidv4(),
		title: 'Lights Out Game App',
		description1: 'Lights Out Game is a Front-End Web Game Application.',
		description2:
			'This is a web application where you can play the lights out game. There are total 25 tiles in 5 rows and 5 columns. When you click on one tiles, this tiles and other tiles deactivated tiles adjacent to the clicked tiles become activated and there are activated tiles adjacent to the clicked tiles those become deactivated. You will be consider as winner if you can make all the tiles deactivated.',
		stack: ['React', 'CSS', 'JavaScript'],
		liveLink: 'https://lightsoutgame-theta.vercel.app/',
		sourceLink: 'https://github.com/SumanIslam/lights-out-game-react',
		imageSource: LightsOut,
	},
	{
		id: uuidv4(),
		title: 'Dad Jokes App',
		description1: 'Dad Jokes is a Front-End Web Application.',
		description2:
			"This is a web application where you can see unlimited random jokes. Dad Jokes API has been used to fetch the jokes and display. You can upvote or downvote the jokes. Depending on the vote the jokes will be sorted by ascending. Besides, You will see different smile emoji based on votes. Initially you will see 10 jokes but can see more jokes by clicking on the 'new jokes' button.",
		stack: ['React', 'CSS', 'DadJokes API', 'Local Storage'],
		liveLink: 'https://dadjokes-pi.vercel.app/',
		sourceLink: 'https://github.com/SumanIslam/Dad-jokes-app-react/',
		imageSource: DadJokes,
	},
	{
		id: uuidv4(),
		title: 'Infinity Scroll App',
		description1: 'Infinity Scroll is a Front-End Web Application.',
		description2:
			"This is a web application where you can see unlimited random photos. Unsplash API has been used to fetch the photos and display. You find photos and photos by scrolling. It's a never ending cycle. When you will get to the bottom of screen by scrolling another API call will be made and fetch random photos.",
		stack: ['HTML', 'CSS', 'JavaScript', 'Unsplash API'],
		liveLink: 'https://infinityscroll-sigma.vercel.app/',
		sourceLink: 'https://github.com/SumanIslam/infinity-scroll',
		imageSource: InfinityScroll,
	},
	{
		id: uuidv4(),
		title: 'Hangman App',
		description1: 'Hangman app is a Front-End Web Application.',
		description2:
			'Hangman web application is a word guessing application. There are 5 blank space which denotes the word with different length. You have to guess the word. If you put the wrong character more than 5 times, the game will be over. Then you can play again with another unknown word with different length. If you guess the word within 5 try then you are the winner.',
		stack: ['HTML', 'CSS', 'JavaScript'],
		liveLink: 'https://hangman-lime-xi.vercel.app/',
		sourceLink: 'https://github.com/SumanIslam/Hangman-Excercises',
		imageSource: HangMan,
	},
	{
		id: uuidv4(),
		title: 'TODO-Perform Your Daily Task',
		description1:
			'TODO-Perform Your Daily Task app is a Front-End task manager Web Application.',
		description2:
			'We generally have so many tasks in a day. This app is used to maintain your tasks of the day. You can add your tasks of the day in this application. When you complete the task you can delete the task. You can also edit the task if you want.',
		stack: ['HTML', 'CSS', 'React'],
		liveLink: 'https://todo-dailytask.vercel.app/',
		sourceLink: 'https://github.com/SumanIslam/todo-app-react',
		imageSource: ToDo,
	},
];
