// images
import CrawnClothing from "../../assets/crwn-clothing.png";
import NasaMissionControl from '../../assets/nasa-mission-control.png';
import colorPalette from '../../assets/color-palette.png';


export const projectsData = [
  {
    id: 1,
    title: "NASA MISSION CONTROL",
    description1: "NASA MISSION CONTROL is a Full-Stack Wep Application",
    description2: `Front-end built with React with help of arwes library.Arwes is a Futuristic Sci-Fi UI Web Framework. The backend is served by Node, Launches are handled by SpaceX API, Login with OAuth and email. This site is styled with CSS in JS. Test are done by jest.`,
    stack: ["React","CSS-in-JS","Arwes","Node","Express", "SpaceX-Api", "MongoDB", "mongoose"],
    liveLink:"https://crwn-live-preview.herokuapp.com/",
    sourceLink: "https://github.com/SumanIslam/NASA-mission-control-project",
    imageSource: NasaMissionControl,
  },
  {
    id: 2,
    title: "Crwn Clothing",
    description1: "Crwn Clothing is a Full-Stack E-commerce Wep Application",
    description2: "It's built with React and Redux. The backend is served by Firebase, payments are handled by Stripe API, Login with OAuth and email. This is fully responsive site styled with styled-component. Also used little bit Node for handling payment.",
    stack: ["React","Redux","Styled-Component","Node","Firebase", "Stripe"],
    liveLink:"https://crwn-live-preview.herokuapp.com/",
    sourceLink: "https://github.com/SumanIslam/crwn-clothing",
    imageSource: CrawnClothing,
  },
  {
    id: 3,
    title: "Color Palette",
    description1: "Color Palette is Front-End Web Application",
    description2: "It's built with React. The color shade is served by Chroma js, Plenty of library used such as emoji-mart, React color for color-picker, react-copy-to-clipboard for copy on click, react-material-ui-form-validator, react-transition-group for animation. Styling was done by Material-UI and CSS-in-JS",
    stack: [
      "React","Material UI","CSS-in-JS","chroma","react-color","react-transition-group"
    ],
    liveLink:"https://ui-color-palette-react.vercel.app/",
    sourceLink: "https://github.com/SumanIslam/ui-color-palette-react",
    imageSource: colorPalette,
  },
];